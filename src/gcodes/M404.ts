
const content = `# M404 - Set Filament Diameter
## Set the nominal diameter for filament width sensor auto-flow
### Usage
\`\`\`plaintext
 M404  [W<linear>]
\`\`\`

- \`[W<linear>]\`: The new nominal width value

### Description

Report or set the nominal filament width, such as 1.75 or 3.00.

This value is used to determine the percentage difference when auto-adjusting flow in response to the measured filament width, and should match the value used for filament width in your slicer settings.


### Examples
Set the diameter to 1.75mm
\`\`\`gcode
 M404 W1.75
  
\`\`\`
Get the current width
\`\`\`gcode

      M404
      '> Filament dia (nominal mm): 1.75'
\`\`\`
`;

export default content;
