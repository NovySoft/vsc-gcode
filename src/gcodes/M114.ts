
const content = `# M114 - Get Current Position
## Report the current tool position to the host.
### Usage
\`\`\`plaintext
 M114  [D<flag>] [E<flag>] [R<flag>]
\`\`\`

- \`[D<flag>]\`: Detailed information (requires \`M114_DETAIL\`)
- \`[E<flag>]\`: Report E stepper position (requires \`M114_DETAIL\`)
- \`[R<flag>]\`: Real position information (requires \`M114_REALTIME\`)

### Description
Get the "current position" of the active tool. Stepper values are included.

If \`M114_LEGACY\` is enabled the planner will be synchronized before reporting so that the reported position is not be ahead of the actual planner position.

Normally \`M114\` reports the "projected position" which is the last position Marlin was instructed to move to.

With the \`M114_REALTIME\` option you can send \`R\` to get the "real" current position at the moment that the request was processed. This position comes directly from the steppers in the midst of motion, so when the printer is moving you can consider this the "recent position."

For debugging it can be useful to enable \`M114_DETAIL\` which adds \`D\` and \`E\` parameters to get extra details.


### Notes
- Hosts should respond to the output of \`M114\` by updating their current position.
- G-code [M154](https://marlinfw.org/docs/gcode/M154.html) can be used to to auto-report positions to the host, reducing serial traffic.

### Examples
Get the _projected_ current position
\`\`\`gcode
 |
      > M114
      X:0.00 Y:127.00 Z:145.00 E:0.00 Count X: 0 Y:10160 Z:116000
      ok
\`\`\`
`;

export default content;
