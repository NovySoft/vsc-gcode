
const content = `# M575 - Serial baud rate
## Change the serial baud rate
### Usage
\`\`\`plaintext
 M575  B<baudrate> [P<flag>]
\`\`\`

- \`B<baudrate>\`: |
- \`[P<flag>]\`: Serial Port index. Omit for all serial ports.

### Description

Change the baud rate of one serial port or all serial ports. This command will interrupt serial communication to the host and may reset the firmware when the host reconnects at the new baud rate.


### Notes
- Only specified baud rates are allowed.
- Shorthand baud rates (shown below in parentheses) were added in 2.0.6.1.

### Examples
Set the baud rate for port 0 to 115.2K
\`\`\`gcode
 M575 P0 B115200
  
\`\`\`
Set the baud rate of all ports to 250K
\`\`\`gcode
 M575 B250000
\`\`\`
`;

export default content;
