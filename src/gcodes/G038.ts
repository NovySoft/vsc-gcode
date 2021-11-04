
const content = `# G38.2/G38.3/G38.4/G38.5 - Probe target
## Probe towards (or away from) a workpiece
### Usage
\`\`\`plaintext
 G38.2/G38.3/G38.4/G38.5  [F<rate|undefined|undefined|undefined>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[F<rate|undefined|undefined|undefined>]\`: 
  - \`Frate\`: undefined
  - \`Fundefined\`: undefined
  - \`Fundefined\`: undefined
  - \`Fundefined\`: undefined

- \`[X<pos>]\`: Target X
- \`[Y<pos>]\`: Target Y
- \`[Z<pos>]\`: Target Z

### Description

The Probe Target commands are used to probe towards (or away from) a workpiece to determine its precise position. You might, for example, use a grounded metal workpiece, with a metal probe spliced into the bed probe circuit.

- \`G38.2\` probes towards a target and stops on contact, signaling an error if it reaches the target position without triggering the probe.
- \`G38.3\` probes towards a target and stops on contact. No error is given if it fails to trigger the probe.
- \`G38.4\` probes away from a target and stops on contact break. An error is signaled if the target position is reached without triggering the probe.
- \`G38.5\` probes away from a target and stops on contact break. No error is given if it fails to trigger the probe.

These commands use the current homing feedrate, by default.


### Notes
- These commands require \`G38_PROBE_TARGET\` and a defined probe.
- '\`G38.4\` and \`G38.5\` are only available with the \`G38_PROBE_AWAY\` option.'
`;

export default content;
