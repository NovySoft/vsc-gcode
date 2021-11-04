
const content = `# G33 - Delta Auto Calibration
## Calibrate various Delta parameters
### Usage
\`\`\`plaintext
 G33  [C<float>] [E<bool>] [F<1|undefined>] [O<bool>] [P<int|0|undefined|1|2|3|undefined|4|undefined>] [R<float>] [T<bool>] [V<int|0|1|2|3|undefined>]
\`\`\`

- \`[C<float>]\`: If omitted iterations stop at best achievable precision. If set iterations will stop at the set precision.
- \`[E<bool>]\`: Engage the probe for each point.
- \`[F<1|undefined>]\`: 
  - \`F1\`: undefined
  - \`Fundefined\`: undefined

- \`[O<bool>]\`: Probe at probe-offset-relative positions instead of the required kinematic points.
- \`[P<int|0|undefined|1|2|3|undefined|4|undefined>]\`: 
  - \`Pundefined\`: undefined
  - \`P0\`: Normalize end
  - \`Pundefined\`: undefined
  - \`P1\`: Probe center and set height only.
  - \`P2\`: Probe center and towers. Set height, endstops, and delta radius.
  - \`P3\`: Probe all positions 
  - \`Pundefined\`: undefined
  - \`P4\`: undefined
  - \`Pundefined\`: Probe all positions with intermediate locations, averaging them.

- \`[R<float>]\`: Temporarily reduce the size of the probe grid by the specified amount.
- \`[T<bool>]\`: Disable tower angle corrections calibration (\`P3\`-\`P7\`)
- \`[V<int|0|1|2|3|undefined>]\`: 
  - \`Vundefined\`: undefined
  - \`V0\`: Dry run, no calibration
  - \`V1\`: Report settings
  - \`V2\`: Report settings and probe results
  - \`V3\`: Report settings, probe results, and calibration results
  - \`Vundefined\`: undefined


### Description

With the \`G33\` command you can:
- Probe a circular grid of points,
- Calibrate Delta Height,
- Calibrate endstops,
- Calibrate Delta Radius, and
- Calibrate Tower Angles.


### Notes

examples:
-
    pre: Default (Verbose 1)
    code: |
      G33

### Examples
Default (Verbose 1)
\`\`\`gcode
 |
      G33
\`\`\`
`;

export default content;
