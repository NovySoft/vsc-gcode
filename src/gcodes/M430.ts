
const content = `# M430 - Power Monitor
## Read and display current (A), voltage (V), and power (W)
### Usage
\`\`\`plaintext
 M430  [I<bool>] [V<bool>] [W<bool>]
\`\`\`

- \`[I<bool>]\`: display current (A) on LCD
- \`[V<bool>]\`: toggle display voltage (V) on LCD
- \`[W<bool>]\`: display power/watts (W) on LCD

### Description
Enable/disable power monitor on LCD display. Report current/amps (A), voltage (V) and watts (W) if no parameters.



### Notes
- Requires either \`POWER_MONITOR_CURRENT\` or \`POWER_MONITOR_VOLTAGE\`

### Examples
report current LCD display power draw
\`\`\`gcode
 M430
\`\`\`
`;

export default content;
