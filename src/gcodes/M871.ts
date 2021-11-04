
const content = `# M871 - Probe temperature config
## Configure probe temperature compensation
### Usage
\`\`\`plaintext
 M871  [B<flag>] [E<flag>] [I<flag>] [P<flag>] [R<flag>] [V<µm>]
\`\`\`

- \`[B<flag>]\`: Store the value \`V\` as the Z adjustment at index \`I\` for the Bed.
- \`[E<flag>]\`: Store the value \`V\` as the Z adjustment at index \`I\` for the Extruder.
- \`[I<flag>]\`: Index at which to store the given Z adjustment value.
- \`[P<flag>]\`: Store the value \`V\` as the Z adjustment at index \`I\` for the Probe.
- \`[R<flag>]\`: Reset all Z adjustment values to factory defaults (zero).
- \`[V<µm>]\`: Z adjustment value, in micrometers.

### Description

Read/write probe temperature compensation values. Values for bed and/or probe can be calibrated using the [G76](https://marlinfw.org/docs/gcode/G076.html) command.


### Notes
- Requires \`PROBE_TEMP_COMPENSATION\`.
- Values at index zero are constant (zero).
- Compensation values are stored in µm (micrometers).
- Use [M500](https://marlinfw.org/docs/gcode/M500.html) to save the values to EEPROM.

### Examples
\`\`\`gcode

       M871 ; print current values
       M871 R ; reset all values factory default (zero, effectively disabling compensation)
       M871 P I1 V-5 ; set probe compensation value at index 1 to -5µm
       M871 B I2 V20 ; set bed compensation value at index 2 to 20µm
       M871 E I4 V-13 ; set extruder compensation value at index 4 to -13µm

\`\`\`
`;

export default content;
