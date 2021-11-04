const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'input');

function convert(input) {
    let output = "";

    //Fix the links
    input = input.
        replaceAll("](/docs/gcode/", "](https://marlinfw.org/docs/gcode/").
        replaceAll("](//", "](https://");

    output += "#"; //Title
    const currentGcodes = input.split("codes: [")[1].split("]")[0].replaceAll(", ", "/");
    output += currentGcodes; //Gcodes
    output += "- " + input.split("title: ")[1].split("\r\n")[0] + "\r\n"; //Title

    // Briefing
    output += "## " + input.split("brief: ")[1].split("\r\n")[0] + "\r\n";

    //Usage
    output += "### Usage\r\n";
    output += "\`\`\`plaintext\r\n";

    //Parse parameters
    let parameters = input.split("parameters:")[1];

    //The next item should be example(s)
    if (parameters != undefined) {
        parameters = parameters.split("\r\n\r\n")[0];
        parameters = parameters.split("\r\n  -");
    } else {
        parameters = [];
    }
    let usageString = currentGcodes;
    const parameterObjects = [];
    for (let i = 1; i < parameters.length; i++) {
        const valuesList = [];
        if (parameters[i].split("values:")[1] != undefined) {
            const valuesString = parameters[i].split("values:")[1].split("-").slice(1);
            for (let item of valuesString) {
                valuesList.push(
                    {
                        tag: item.split("tag: ")[1] == undefined ? undefined : item.split("tag: ")[1].split("\r\n")[0],
                        type: item.split("type: ")[1] == undefined ? undefined : item.split("type: ")[1].split("\r\n")[0],
                        description: item.split("description: ")[1] == undefined ? undefined : item.split("description: ")[1].split("\r\n")[0],
                        unit: item.split("unit: ")[1] == undefined ? undefined : item.split("unit: ")[1].split("\r\n")[0],
                    }
                );
            }
        } else if (parameters[i].split("type: ")[1] != undefined) {
            valuesList.push(
                {
                    tag: undefined,
                    type: parameters[i].split("type: ")[1].split("\r\n")[0],
                    description: undefined,
                    unit: parameters[i].split("unit: ")[1] == undefined ? undefined : item.split("unit: ")[1].split("\r\n")[0],
                }
            );
        }
        parameterObjects.push({
            name: parameters[i].split("tag: ")[1].split("\r\n")[0],
            optional: parameters[i].split("optional: ")[1].split("\r\n")[0] == "true",
            description: parameters[i].split("description: ")[1].split("\r\n")[0],
            values: valuesList,
        });
    }
    parameterObjects.sort((a, b) => {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    for (let paramObject of parameterObjects) {
        let tempString;
        if (paramObject.values.length == 1) {
            tempString = `${paramObject.name}<${paramObject.values[0].tag == undefined ? paramObject.values[0].type : paramObject.values[0].tag}`;
            if(paramObject.values[0].unit != undefined) {
                tempString += ` (${paramObject.values[0].unit})`;
            }
        } else if (paramObject.values.length > 1) {
            tempString = `${paramObject.name}<${paramObject.values[0].tag == undefined ? paramObject.values[0].type : paramObject.values[0].tag}`;
            for (let parameter of paramObject.values.slice(1)) {
                tempString += `|${parameter.tag == undefined ? parameter.type : parameter.tag}`;
            }
        }
        tempString += ">";
        if (paramObject.optional) {
            tempString = "[" + tempString + "]";
        }
        paramObject.key = tempString;
        usageString += " " + tempString;
    }
    output += usageString;
    output += "\r\n\`\`\`\r\n\r\n";

    //Add parameter explanations
    for (let paramObject of parameterObjects) {
        output += `- \`${paramObject.key}\`: `;
        if (paramObject.values.length == 1) {
            output += paramObject.description;
        } else {
            output += "\r\n";
            for (let item of paramObject.values) {
                output += `  - \`${paramObject.name}${item.tag}\`: ${item.description}\r\n`;
            }
        }
        output += "\r\n";
    }

    // Description
    output += "\r\n### Description\r\n";
    const splitbyseperator = input.split("---\r\n");
    output += splitbyseperator[splitbyseperator.length - 1] + "\r\n";

    // Notes
    if (input.split("notes: |\r\n")[1] != undefined || input.split("notes:\r\n")[1] != undefined) {
        output += "\r\n### Notes\r\n";
        if (input.split("notes:\r\n")[1] != undefined) {
            output += input.split("notes:\r\n")[1].split("\r\n\r\n")[0].replaceAll("    -", "-").replaceAll("  -", "-") + "\r\n";
        } else {
            output += input.split("notes: |\r\n")[1].split("\r\n\r\n")[0].replaceAll("    -", "-").replaceAll("  -", "-") + "\r\n";
        }
    }

    // Examples
    if (input.split("\r\nexamples:\r\n")[1] != undefined || input.split("\r\nexample:\r\n")[1] != undefined) {
        output += "\r\n### Examples\r\n";
        let exampleStringList = [];
        if (input.split("\r\nexamples:\r\n").length > 1) {
            //Multiple examples
            exampleStringList = input.split("\r\nexamples:\r\n")[1].split("\r\n\r\n")[0].split("-\r\n").slice(1);
        } else {
            //Single example
            exampleStringList = input.split("\r\nexample:\r\n")[1].split("\r\n\r\n")[0].split("-\r\n").slice(1);
        }
        for (let item of exampleStringList) {
            const itemObject = {
                pre: item.split("pre: ")[1] == undefined ? undefined : item.split("pre: ")[1].split("\r\n")[0],
                post: item.split("post: ")[1] == undefined ? undefined : item.split("post: ")[1].split("\r\n")[0],
                code: item.split("code:")[1] == undefined ? undefined : item.split("code:")[1].split("  -\r\n")[0].split("post: ")[0],
            };
            if (itemObject.code == undefined) {
                //Maybe it is in the next line?
                itemObject.code = item.split("code:\r\n")[1] == undefined ? undefined : item.split("code:\r\n")[1].split("\r\n")[0].split("- ").slice(1);
            }
            if (itemObject.pre != undefined) {
                output += `${itemObject.pre}\r\n`;
            }
            if (itemObject.code != undefined) {
                itemObject.code = itemObject.code.replaceAll(new RegExp(/(?<=\s)([\-])(?=\s)/g), "");
                itemObject.code = itemObject.code.split("---")[0];
                output += `\`\`\`gcode\r\n${itemObject.code}\r\n\`\`\`\r\n`;
            }
            if (itemObject.post != undefined) {
                output += `${itemObject.post}\r\n\r\n`;
            }
        }
    }

    return {
        markdown: output,
        codes: currentGcodes.replaceAll(" ", "").split('/'),
    };
}

fs.readdir(directoryPath, function (err, fileList) {
    const codeToFileList = [];
    fileList.forEach(function (file) {
        // Input folder contains markdown files from: https://github.com/MarlinFirmware/MarlinDocumentation/tree/master/_gcode
        const inputFile = fs.readFileSync(path.join(__dirname, 'input', file)).toString('utf-8');
        const result = convert(inputFile);
        fs.writeFileSync(path.join(__dirname, 'output', file), result.markdown);
        const tsFileName = file.replace(".md", ".ts");
        const jsContent = `
const content = \`${result.markdown.replaceAll("\`", "\\\`").replaceAll("[\\\`", "[").replaceAll("\\\`]", "]")}\`;

export default content;
`;
        fs.writeFileSync(path.join(__dirname, '../src/gcodes', tsFileName), jsContent);
        codeToFileList.push({
            file: tsFileName,
            codes: result.codes,
        });
    });


    // Clear resolve file
    fs.writeFileSync(
        path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
        "",
    );
    fs.writeFileSync(
        path.join(__dirname, 'generated.gcode'),
        "",
    );

    for (const item of codeToFileList) {
        // Add imports
        fs.appendFileSync(
            path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
            `import * as ${item.file.replace("-", "").replace(".ts", "")} from './gcodes/${item.file.replace(".ts", "")}';\r\n`,
        );
    }

    // Add base code
    fs.appendFileSync(
        path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
        `export async function resolveGcodeTooltip(gcode: string): Promise<string | undefined> {
    switch (gcode.toLowerCase()) {\r\n`,
    );

    for (const item of codeToFileList) {
        for (const code of item.codes) {
            fs.appendFileSync(
                path.join(__dirname, 'generated.gcode'),
                `${code}\r\n`,
            );
            fs.appendFileSync(
                path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
                `        case "${code.toLowerCase()}":\r\n`,
            );
        }
        fs.appendFileSync(
            path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
            `            return ${item.file.replace("-", "").replace(".ts", "")}.default;\r\n`,
        );
    }

    fs.appendFileSync(
        path.join(__dirname, '../src/resolveGcodeTooltip.ts'),
        "}\r\n}",
    );
});