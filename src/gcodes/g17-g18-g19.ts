const content = `
## G17-G19 - CNC Workspace Planes
### Usage
\`\`\`
G17 ; Plane XY
G18 ; Plane ZX
G19 ; Plane YZ
\`\`\`

### Description
Select workspace plane XY, ZX, or YZ. Allows \`G2/G3\` and \`G5\` to operate in the selected plane when \`CNC_WORKSPACE_PLANES\` is enabled.
`;

export default content;