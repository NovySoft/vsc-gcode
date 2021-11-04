
const content = `# M851 - XYZ Probe Offset
## Set the Z probe XYZ offset from nozzle
### Usage
\`\`\`plaintext
 M851  [X<float (linear)>] [Y<float (linear)>] [Z<float (linear)>]
\`\`\`

- \`[X<float (linear)>]\`: Z probe X offset
- \`[Y<float (linear)>]\`: Z probe Y offset
- \`[Z<float (linear)>]\`: Z probe Z offset

### Description

Set the XYZ distance from the nozzle to the probe trigger-point.

The easiest way to get the Z offset value is to:
  - Home the Z axis.
  - Raise Z and deploy the probe.
  - Move Z down slowly until the probe triggers.
  - Take the current Z value and negate it. (\`5.2\` => \`-5.2\`)
  - Set with \`M851 Z-5.2\` and \`#define Z_PROBE_OFFSET_FROM_EXTRUDER -5.2\`.

For X and Y you have to measure the distance.


### Notes
- The default (factory) values are set by
- |
- (version 1.x)
  - \`X_PROBE_OFFSET_FROM_EXTRUDER\`
  - \`Y_PROBE_OFFSET_FROM_EXTRUDER\`
  - \`Z_PROBE_OFFSET_FROM_EXTRUDER\`

### Examples
Set a reasonable offset for an inductive probe
\`\`\`gcode
 M851 Z-2.0
  
\`\`\`
A probe that is triggered by the nozzle itself
\`\`\`gcode
 M851 Z1.2
  
\`\`\`
Set the XY distance (probe left front of nozzle)
\`\`\`gcode
 M851 X-1.70 Y-1.30
  
\`\`\`
Set the XY distance (probe right back of nozzle)
\`\`\`gcode
 M851 X0.20 Y.40
\`\`\`
`;

export default content;
