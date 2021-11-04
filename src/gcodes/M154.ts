
const content = `# M154 - Position Auto-Report
## Periodically auto-report position to serial
### Usage
\`\`\`plaintext
 M154  [S<seconds>]
\`\`\`

- \`[S<seconds>]\`: Interval in seconds between auto-reports. \`S0\` to disable.

### Description

Some host software and serial controllers use \`M114\` to get the current position, but polling with [M114](https://marlinfw.org/docs/gcode/M114.html) is less than optimal, and in older versions of Marlin it would cause print stuttering. With \`M154\` hosts can simply set an interval and Marlin will keep sending reports automatically. This method is preferred over polling with [M114](https://marlinfw.org/docs/gcode/M114.html).


### Notes
- Requires \`AUTO_REPORT_POSITION\`.
- Also enable \`EXTENDED_CAPABILITIES_REPORT\` to notify hosts about this capability.

### Examples
Report current position every 4 seconds
\`\`\`gcode
 M154 S4
  
\`\`\`
Stop reporting position
\`\`\`gcode
 M154 S0
\`\`\`
`;

export default content;
