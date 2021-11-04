
const content = `# M85 - Inactivity Shutdown
## Set the inactivity timeout.
### Usage
\`\`\`plaintext
 M85  S<seconds>
\`\`\`

- \`S<seconds>\`: Max inactive seconds

### Description

Use this command to set a maximum period of time for the machine to be inactive (with no moves). If the machine is idle for longer than the set period, the firmware will shut everything down and halt the machine.


### Examples
Shut down the machine after 10 minutes with no activity
\`\`\`gcode
 M85 S600
\`\`\`
`;

export default content;
