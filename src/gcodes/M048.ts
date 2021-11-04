
const content = `# M48 - Probe Accuracy Test
## Measure Z Probe repeatability.
### Usage
\`\`\`plaintext
 M48  [E<engage>] [L<legs>] [P<count>] [S<0|1>] [V<level>] [X<pos>] [Y<pos>]
\`\`\`

- \`[E<engage>]\`: Engage for each probe
- \`[L<legs>]\`: Number of legs to probe
- \`[P<count>]\`: Number of probes to do
- \`[S<0|1>]\`: 
  - \`S0\`: Circular pattern
  - \`S1\`: Star like pattern

- \`[V<level>]\`: Verbose Level
- \`[X<pos>]\`: X Position
- \`[Y<pos>]\`: Y Position

### Description

Probes come in many flavors and as such have varying levels of accuracy, reliability, and repeatability, depending on several factors. This command tests the probe for accuracy and produces a standard deviation based on two or more probes of the same XY position.


### Notes
- Requires \`Z_MIN_PROBE_REPEATABILITY_TEST\`.
`;

export default content;
