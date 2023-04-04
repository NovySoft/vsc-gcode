
const content = `# Tx/T? - Request Tool
## Prompts the user to select the tool (or filament) to be used.
### Usage
\`\`\`plaintext
 Tx/T? 
\`\`\`


### Description
\`Tx\` prompts the user for the tool or filament to be used. Depending on implementation this may or may not load the tool and a \`Tc\` command must also be sent.
\`T?\` (deprecated) prompts the user for the tool or filament to be used. This version of the command is deprecated due to compatibility issues with software such as Octoprint 


### Examples
Prompt User for tool
\`\`\`gcode

       Tx
--
\`\`\`

Prompt user for tool, wait for extruder temp, and load.
\`\`\`gcode

       Tx ; Request filament
       M109 S215 ; wait for extruder temp
       Tc ; Load filament

`;

export default content;
