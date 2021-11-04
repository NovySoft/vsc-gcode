
const content = `# M261 - I2C Request
## Request and echo bytes from the I2C bus.
### Usage
\`\`\`plaintext
 M261  A<addr> B<count> [S<0|1|2|3>]
\`\`\`

- \`A<addr>\`: The bus address to request bytes from
- \`B<count>\`: The number of bytes to request
- \`[S<0|1|2|3>]\`: 
  - \`S0\`: Raw echo
  - \`S1\`: Bytes (hex)
  - \`S2\`: 1 or 2 byte value (decimal)
  - \`S3\`: Bytes (decimal)


### Description

Request bytes from the I2C bus and echo them to the host. To find out how to do more useful things with I2C see the I2C master / slave article.

`;

export default content;
