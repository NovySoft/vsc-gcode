
const content = `# M603 - Configure Filament Change
## Configure automatic filament change parameters
### Usage
\`\`\`plaintext
 M603  [L<pos>] [T<index>] [U<pos>]
\`\`\`

- \`[L<pos>]\`: Load length, longer for bowden (negative)
- \`[T<index>]\`: Target extruder
- \`[U<pos>]\`: Amount of retraction for unload (negative)

### Description

The [M603](https://marlinfw.org/docs/gcode/M603.html) command configures automatic filament change parameters.


### Notes
- Requires \`ADVANCED_PAUSE_FEATURE\`.

### Examples
Configure load and unload lengths for automatic filament change
\`\`\`gcode
 M603 U120 L125
\`\`\`
`;

export default content;
