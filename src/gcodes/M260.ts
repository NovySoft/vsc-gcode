
const content = `# M260 - I2C Send
## Send data to the I2C bus.
### Usage
\`\`\`plaintext
 M260  [A<addr>] [B<byte>] [R<flag>] [S<flag>]
\`\`\`

- \`[A<addr>]\`: The bus address to send to
- \`[B<byte>]\`: The byte to add to the buffer
- \`[R<flag>]\`: Reset and rewind the I2C buffer
- \`[S<flag>]\`: Send flag. Flush the buffer to the bus.

### Description

Utility to send data over the I2C bus.


### Examples
Send "Marlin" to the slave device with address 0x63 (99)
\`\`\`gcode
 |
      M260 A99  ; Target slave address
      M260 B77  ; M
      M260 B97  ; a
      M260 B114 ; r
      M260 B108 ; l
      M260 B105 ; i
      M260 B110 ; n
      M260 S1   ; Send the current buffer
  
\`\`\`
Request 6 bytes from slave device with address 0x63 (99)
\`\`\`gcode
 M261 A99 B5
  
\`\`\`
\`\`\`gcode
 'i2c-reply: from:99 bytes:5 data:hello'
\`\`\`
`;

export default content;
