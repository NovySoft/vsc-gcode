
const content = `# M16 - Expected Printer Check
## Prevent G-code usage on the wrong machine
### Usage
\`\`\`plaintext
 M16  undefined>
\`\`\`

- \`undefined>\`: 


### Description

Do a case-sensitive comparison between the string argument and the configured \`MACHINE_NAME\`. If the machine name doesn't match, halt the printer so that a reset is required. This safety feature is meant to prevent G-code sliced for a specific machine from being used on any other machine.


### Notes

parameters:
-
    tag: string
    optional: false
    description: The string to compare to MACHINE_NAME.

### Examples
Halt if the MACHINE_NAME is not "Arthur"
\`\`\`gcode
 M16 Arthur
\`\`\`
`;

export default content;
