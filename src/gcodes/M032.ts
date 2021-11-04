
const content = `# M32 - Select and Start
## Begin an SD print from a file.
### Usage
\`\`\`plaintext
 M32  [P<flag>] [S<filepos>]
\`\`\`

- \`[P<flag>]\`: Sub-Program flag
- \`[S<filepos>]\`: Starting file offset

### Description

The [M32](https://marlinfw.org/docs/gcode/M032.html) command exists to allow G-code to load other G-code files and run them as sub-programs. This can be useful to change the start / end gcode for a batch of files without having to edit them all.

For legacy reasons [M32](https://marlinfw.org/docs/gcode/M032.html) uses '\`!\`' (and '\`#\`') to delimit the filepath parameter. The filepath must be the last parameter.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)
- This is a seldom-used beta feature that needs more testing and use-cases.

### Examples
Select and start a file at offset 5022.
\`\`\`gcode
 M32 S5022 !/boats/sailboat.gco
  
\`\`\`
Select and start a file from within G-code.
\`\`\`gcode
 M32 P !/models/lgbust.gco#
    
\`\`\`
The \`#\` suffix is needed when using \`P\` to "stop buffer pre-reading" so no commands after [M32](https://marlinfw.org/docs/gcode/M032.html) will go into the buffer until after it returns.

`;

export default content;
