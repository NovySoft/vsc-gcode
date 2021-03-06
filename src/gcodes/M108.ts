
const content = `# M108 - Break and Continue
## Break out of the current waiting loop
### Usage
\`\`\`plaintext
 M108 
\`\`\`


### Description

The [M108](https://marlinfw.org/docs/gcode/M108.html) command requires \`EMERGENCY_PARSER\` for full effectiveness. (Otherwise a full queue blocks the parser.)

Some G-code commands cause Marlin to go into a closed loop, waiting indefinitely for a certain state or event. For example, [M109](https://marlinfw.org/docs/gcode/M109.html) waits for the target temperature to be reached, and [M0](https://marlinfw.org/docs/gcode/M000-M001.html) waits for an LCD click.

In the case of [M109](https://marlinfw.org/docs/gcode/M109.html), the [M108](https://marlinfw.org/docs/gcode/M108.html) command stops waiting for the target temperature and continues processing G-code. This may result in "cold extrude" messages. For a full stop use [M112](https://marlinfw.org/docs/gcode/M112.html).

In the case of [M0](https://marlinfw.org/docs/gcode/M000-M001.html) the [M108](https://marlinfw.org/docs/gcode/M108.html) command acts like the LCD button, breaking out of [M0](https://marlinfw.org/docs/gcode/M000-M001.html) and continuing to process the G-code queue.


### Notes
- |
    With both \`EMERGENCY_PARSER\` and \`HOST_KEEPALIVE_FEATURE\` enabled, hosts will be able to prompt for continuation or cancellation, confirming with [M108](https://marlinfw.org/docs/gcode/M108.html) and cancelling with [M112](https://marlinfw.org/docs/gcode/M112.html).

### Examples
Use [M108](https://marlinfw.org/docs/gcode/M108.html) as a "Continue" button in your host software.
\`\`\`gcode

       M0 You're up, mate ; in your G-code file
       M108               ; as your "Continue" button
\`\`\`
`;

export default content;
