
const content = `# M113 - Host Keepalive
## Get or set the host keepalive interval.
### Usage
\`\`\`plaintext
 M113  [S<seconds>]
\`\`\`

- \`[S<seconds>]\`: Keepalive interval (0-60).

### Description

During some lengthy processes, such as [G29](https://marlinfw.org/docs/gcode/G029.html), Marlin may appear to the host to have "gone away." The "host keepalive" feature will send messages to the host when Marlin is busy or waiting for user response so the host won't try to reconnect.

Send \`M113\` with no \`S\` parameter to get the current setting.


### Examples
Set the keepalive interval to 5 seconds
\`\`\`gcode
 M113 S5
\`\`\`
`;

export default content;
