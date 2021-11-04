
const content = `# M350 - Set micro-stepping
## Set micro-stepping for drivers that support it
### Usage
\`\`\`plaintext
 M350  [B<1|2|4|8|16>] [E<1|2|4|8|16>] [S<1|2|4|8|16>] [X<1|2|4|8|16>] [Y<1|2|4|8|16>] [Z<1|2|4|8|16>]
\`\`\`

- \`[B<1|2|4|8|16>]\`: 
  - \`B1\`: undefined
  - \`B2\`: undefined
  - \`B4\`: undefined
  - \`B8\`: undefined
  - \`B16\`: undefined

- \`[E<1|2|4|8|16>]\`: 
  - \`E1\`: undefined
  - \`E2\`: undefined
  - \`E4\`: undefined
  - \`E8\`: undefined
  - \`E16\`: undefined

- \`[S<1|2|4|8|16>]\`: 
  - \`S1\`: undefined
  - \`S2\`: undefined
  - \`S4\`: undefined
  - \`S8\`: undefined
  - \`S16\`: undefined

- \`[X<1|2|4|8|16>]\`: 
  - \`X1\`: undefined
  - \`X2\`: undefined
  - \`X4\`: undefined
  - \`X8\`: undefined
  - \`X16\`: undefined

- \`[Y<1|2|4|8|16>]\`: 
  - \`Y1\`: undefined
  - \`Y2\`: undefined
  - \`Y4\`: undefined
  - \`Y8\`: undefined
  - \`Y16\`: undefined

- \`[Z<1|2|4|8|16>]\`: 
  - \`Z1\`: undefined
  - \`Z2\`: undefined
  - \`Z4\`: undefined
  - \`Z8\`: undefined
  - \`Z16\`: undefined


### Description

If your board has digital micro-stepping pins (\`X_MS1\`, \`Y_MS1\`, etc.), use this command to set the micro-steps.

`;

export default content;
