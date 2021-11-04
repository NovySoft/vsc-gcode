
const content = `# M105 - Report Temperatures
## Send a temperature report to the host.
### Usage
\`\`\`plaintext
 M105  [R<flag>] [T<index>]
\`\`\`

- \`[R<flag>]\`: Include the Redundant temperature sensor (if any)
- \`[T<index>]\`: Hotend index

### Description

Request a temperature report to be sent to the host as soon as possible.


### Notes
- Some hosts may hide the reply from [M105](https://marlinfw.org/docs/gcode/M105.html).
- A better way for hosts to get regular temperature updates is to use [M155](https://marlinfw.org/docs/gcode/M155.html) (requires \`AUTO_REPORT_TEMPERATURES\` and \`EXTENDED_CAPABILITIES_REPORT\`). Hosts then no longer need to run an extra process or use up slots in the command buffer to receive temperatures.

### Examples
Get a temperature report
\`\`\`gcode
 M105
\`\`\`
`;

export default content;
