
const content = `# G33 - Delta Auto Calibration
## Calibrate various Delta parameters
### Usage
\`\`\`plaintext
 G33  [C<float>] [E<bool>] [F<1to30>] [O<bool>] [P<0|1|2|3|4to10>] [R<float>] [T<bool>] [V<0|1|2|3>]
\`\`\`

- \`[C<float>]\`: If omitted iterations stop at best achievable precision. If set iterations will stop at the set precision.
- \`[E<bool>]\`: Engage the probe for each point.
- \`[F<1to30>]\`: Run ("force") this number of iterations and take the best result.
- \`[O<bool>]\`: Probe at probe-offset-relative positions instead of the required kinematic points.
- \`[P<0|1|2|3|4to10>]\`: 
  - \`P0\`: Normalize endstops and tower angle corrections only (no probing).
  - \`P1\`: Probe center and set height only.
  - \`P2\`: Probe center and towers. Set height, endstops, and delta radius.
  - \`P3\`: Probe all positions (center, towers and opposite towers). Set all.
  - \`P4to10\`: Probe all positions with intermediate locations, averaging them.

- \`[R<float>]\`: Temporarily reduce the size of the probe grid by the specified amount.
- \`[T<bool>]\`: Disable tower angle corrections calibration (\`P3\`-\`P7\`)
- \`[V<0|1|2|3>]\`: 
  - \`V0\`: Dry run, no calibration
  - \`V1\`: Report settings
  - \`V2\`: Report settings and probe results
  - \`V3\`: Report settings, probe results, and calibration results


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
