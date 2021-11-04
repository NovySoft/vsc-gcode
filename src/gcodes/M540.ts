
const content = `# M540 - Endstops Abort SD
## Abort SD printing when an endstop is triggered.
### Usage
\`\`\`plaintext
 M540  S<flag>
\`\`\`

- \`S<flag>\`: Whether (1) or not (0) to abort SD printing on endstop hit.

### Description

Set whether SD printing should abort in the event of any endstop being triggered. This provides a fast way to abort a print in the event of mechanical failure such as loose couplings, lost steps, diverted axes, binding, etc., which lead to axes being very far out of position.


### Notes
- Requires \`SDSUPPORT\` and \`SD_ABORT_ON_ENDSTOP_HIT\`.
- Use \`ENDSTOPS_ALWAYS_ON_DEFAULT\` or [M120](https://marlinfw.org/docs/gcode/M120.html) to ensure that endstops are enabled.

### Examples
`;

export default content;
