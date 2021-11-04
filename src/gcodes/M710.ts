
const content = `# M710 - Controller Fan settings
## Set or report controller fan settings
### Usage
\`\`\`plaintext
 M710  [A<bool>] [D<seconds>] [I<speed>] [R<bool>] [S<speed>]
\`\`\`

- \`[A<bool>]\`: Set whether the fan speed is set automatically. When turned off the controller fan speed will remain where it is.
- \`[D<seconds>]\`: Set the extra duration to keep the fan speed high after motors are turned off.
- \`[I<speed>]\`: Set the speed of the controller fan when motors are off.
- \`[R<bool>]\`: Reset all settings to defaults. Other parameters can be included to override.
- \`[S<speed>]\`: Set the speed of the controller fan when motors are active.

### Description

Set one or more Controller Fan options. Without any parameters report the current settings.


### Examples
Set the Controller Fan to full speed now
\`\`\`gcode
 M710 A0 S255
  
\`\`\`
Use full speed when motors are on, half speed when off
\`\`\`gcode
 M710 A1 S255 I128
  
\`\`\`
Reset Controller Fan settings to defaults
\`\`\`gcode
 M710 R
\`\`\`
`;

export default content;
