
const content = `# M92 - Set Axis Steps-per-unit
## Set the number of steps-per-mm, per-inch, or per-degree
### Usage
\`\`\`plaintext
 M92  [E<steps>] [T<index>] [X<steps>] [Y<steps>] [Z<steps>]
\`\`\`

- \`[E<steps>]\`: E steps per unit
- \`[T<index>]\`: Target extruder (Requires \`DISTINCT_E_FACTORS\`)
- \`[X<steps>]\`: X steps per unit
- \`[Y<steps>]\`: Y steps per unit
- \`[Z<steps>]\`: Z steps per unit

### Description

Use [M92](https://marlinfw.org/docs/gcode/M092.html) to set the steps-per-unit for one or more axes. This setting affects how many steps will be done for each unit of movement.

Units will usually be set in steps-per-millimeter unless:
- The firmware has \`INCH_MODE_SUPPORT\` enabled and has been set to *Inches Mode* by [G20](https://marlinfw.org/docs/gcode/G020.html) or by having inches as the default unit.
- The machine is a \`SCARA\` in which case the A and B axes are configured in ***steps-per-degree***, not steps-per-distance.


### Notes
-  Get the current steps-per-unit settings using \`M92\` with no parameters or [M503](https://marlinfw.org/docs/gcode/M503.html) on older versions of Marlin.

### Examples
Set E steps for a new extruder
\`\`\`gcode
 M92 E688.4
\`\`\`
`;

export default content;
