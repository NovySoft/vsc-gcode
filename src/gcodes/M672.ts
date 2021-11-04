
const content = `# M672 - Test Speed Warning
## Set/clear Duet Smart Effector sensitivity
### Usage
\`\`\`plaintext
 M672  [R<bool>] [S<sensitivity>]
\`\`\`

- \`[R<bool>]\`: "Revert sensitivity to factory settings"
- \`[S<sensitivity>]\`: "Set sensitivity (0-255)"

### Description


### Notes
- The Marlin format for the M672 command is different than shown in the [Duet Smart Effector documentation](https://duet3d.dozuki.com/Wiki/Smart_effector_and_carriage_adapters_for_delta_printer)
- Use only one of the two parameters (S or R)

### Examples
Set sensitivity to 255
\`\`\`gcode
 M672 S255
--
\`\`\`
`;

export default content;
