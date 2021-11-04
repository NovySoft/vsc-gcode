
const content = `# M999 - STOP Restart
## Return the machine to Running state
### Usage
\`\`\`plaintext
 M999  S<bool>
\`\`\`

- \`S<bool>\`: Resume without flushing the command buffer. The default behaviour is to flush the serial buffer and request a resend to the host starting on the last \`N\` line received.

### Description

If a **STOP** occurs you can use [M999](https://marlinfw.org/docs/gcode/M999.html) to restart the "stopped" machine after resolving the issue.

Marlin will call **STOP** if any error occurs that would make continuing the current process problematic. For example, if the probe fails to deploy, it will abort probing and STOP. Note that this disables all heaters.


### Notes

parameters:
-
    tag: S
    optional: false
    description: Resume without flushing the command buffer. The default behaviour is to flush the serial buffer and request a resend to the host starting on the last \`N\` line received.
    values:
-
        type: bool

### Examples
Restart the machine
\`\`\`gcode
 M999
\`\`\`
`;

export default content;
