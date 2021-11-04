
const content = `# M118 - Serial print
## Send text to serial
### Usage
\`\`\`plaintext
 M118  [A1<flag>] [E1<flag>] [msg<string>] [Pn<0|1|2>]
\`\`\`

- \`[A1<flag>]\`: Prepend \`// \` to denote a comment or action command. Hosts like OctoPrint can interpret such commands to perform special actions. See your host's documentation.
- \`[E1<flag>]\`: Prepend \`echo:\` to the message. Some hosts will display echo messages differently when preceded by \`echo:\`.
- \`[msg<string>]\`: Message string. If omitted, a blank line will be sent.
- \`[Pn<0|1|2>]\`: 
  - \`Pn0\`: Send message to all ports.
  - \`Pn1\`: Send message to main host serial port.
  - \`Pn2\`: Send message to secondary host serial port. Requires \`SERIAL_PORT_2\`.


### Description

Send a message to the connected host for display in the host console or to perform a host action.


### Notes
- The \`E\`, \`A\`, and \`P\` parameters must precede the message.
- Can also send message to serial port.

### Examples
Echo "Yello World!" in the console
\`\`\`gcode
 M118 E1 Yello World!
  
\`\`\`
Tell [OctoPrint](https://docs.octoprint.org/en/master/features/action_commands.html) to cancel the print job
\`\`\`gcode
 M118 A1 action:cancel
\`\`\`
`;

export default content;
