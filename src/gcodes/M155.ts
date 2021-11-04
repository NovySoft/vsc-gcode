
const content = `# M155 - Temperature Auto-Report
## Auto-report temperatures to host periodically.
### Usage
\`\`\`plaintext
 M155  [S<seconds>]
\`\`\`

- \`[S<seconds>]\`: Interval in seconds between auto-reports. \`S0\` to disable.

### Description

It can be useful for host software to track temperatures, display and graph them over time, but polling with [M105](https://marlinfw.org/docs/gcode/M105.html) is less than optimal. With [M155](https://marlinfw.org/docs/gcode/M155.html) hosts simply set an interval and Marlin will keep sending data automatically. This method is preferred over polling with [M105](https://marlinfw.org/docs/gcode/M105.html).


### Notes
- Requires \`AUTO_REPORT_TEMPERATURES\`.
- Also enable \`EXTENDED_CAPABILITIES_REPORT\` to notify hosts about this capability.

### Examples
Report temperatures every 4 seconds
\`\`\`gcode
 M155 S4
  
\`\`\`
Stop reporting temperatures
\`\`\`gcode
 M155 S0
\`\`\`
`;

export default content;
