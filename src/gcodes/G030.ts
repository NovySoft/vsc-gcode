
const content = `# G30 - Single Z-Probe
## Probe bed at current XY location
### Usage
\`\`\`plaintext
 G30  [E<bool>] [X<pos>] [Y<pos>]
\`\`\`

- \`[E<bool>]\`: Engage the probe for each point
- \`[X<pos>]\`: X probe position
- \`[Y<pos>]\`: Y probe position

### Description

Do a single Z probe at a specified position. By default probe in the current position.


### Notes
- Use \`SERIAL_FLOAT_PRECISION\` to set the number of decimal places in the output.
`;

export default content;
