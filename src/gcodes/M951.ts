
const content = `# M951 - Magnetic Parking Extruder
## Set / report Magnetic Parking Extruder settings
### Usage
\`\`\`plaintext
 M951  [C<float>] [D<float (linear)>] [H<float (linear)>] [I<float (linear)>] [J<float (linear)>] [L<float (linear)>] [R<float (linear)>]
\`\`\`

- \`[C<float>]\`: Set compensation factor. (Default \`MPE_COMPENSATION\`)
- \`[D<float (linear)>]\`: Set travel feedrate. (Default \`MPE_TRAVEL_DISTANCE\`)
- \`[H<float (linear)>]\`: Set fast feedrate. (Default \`MPE_FAST_SPEED\`)
- \`[I<float (linear)>]\`: Set grab distance. (Default \`PARKING_EXTRUDER_GRAB_DISTANCE\`)
- \`[J<float (linear)>]\`: Set slow feedrate. (Default \`MPE_SLOW_SPEED\`)
- \`[L<float (linear)>]\`: Set X[0] position. (Default \`PARKING_EXTRUDER_PARKING_X\`)
- \`[R<float (linear)>]\`: Set X[1] position. (Default \`PARKING_EXTRUDER_PARKING_X\`)

### Description

Set \`MAGNETIC_PARKING_EXTRUDER\` settings. With no parameters, report the current settings.


### Notes
- Requires \`MAGNETIC_PARKING_EXTRUDER\`.
`;

export default content;
