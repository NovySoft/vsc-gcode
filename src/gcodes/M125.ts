
const content = `# M125 - Park Head
## Save current position and move to filament change position.
### Usage
\`\`\`plaintext
 M125  [L<linear>] [P<bool>] [X<linear>] [Y<linear>] [Z<linear>]
\`\`\`

- \`[L<linear>]\`: Retract length (otherwise \`FILAMENT_CHANGE_RETRACT_LENGTH\`)
- \`[P<bool>]\`: Always show a prompt and await a response (With an LCD menu)
- \`[X<linear>]\`: X position to park at (otherwise \`FILAMENT_CHANGE_X_POS\`)
- \`[Y<linear>]\`: Y position to park at (otherwise \`FILAMENT_CHANGE_Y_POS\`)
- \`[Z<linear>]\`: Z raise before park (otherwise \`FILAMENT_CHANGE_Z_ADD\`)

### Description

Save the current nozzle position and move to the configured park position.


### Examples
Retract 2cm of filament and park the nozzle
\`\`\`gcode
 M125 L20 ; park and retract
\`\`\`
`;

export default content;
