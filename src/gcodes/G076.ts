
const content = `# G76 - Probe temperature calibration
## Calibrate probe temperature compensation
### Usage
\`\`\`plaintext
 G76  [B<flag>] [P<flag>]
\`\`\`

- \`[B<flag>]\`: Calibrate bed only
- \`[P<flag>]\`: Calibrate probe only

### Description

Calibrate temperature compensation offsets for bed and/or probe temperatures. Temperature compensation values are added to probe measurements when running [G29](https://marlinfw.org/docs/gcode/G029.html) mesh bed leveling. Currently, calibration only heats up the bed, not the hotend. The probe is heated up by bringing it close to the heated bed and cooled down by moving it away.

See [Probe Temperature Compensation](/docs/features/probe_temp_compensation.html) for a more detailed explanation of the process.


### Notes
- Requires \`PROBE_TEMP_COMPENSATION\`.
- This process can take a very long time. The timeout is currently set to 15min to allow the parts to fully heat up and cool down.
- Use [M500](https://marlinfw.org/docs/gcode/M500.html) to save the result to EEPROM.

### Examples
\`\`\`gcode

       G76 ; calibrate bed, then probe
       G76 B ; calibrate bed only
       G76 P ; calibrate probe only

\`\`\`
`;

export default content;
