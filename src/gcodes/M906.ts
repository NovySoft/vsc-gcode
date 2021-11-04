
const content = `# M906 - TMC Motor Current
## Set the motor current (in milliamps)
### Usage
\`\`\`plaintext
 M906  [E<int (mA)>] [I<int (index)>] [T<int (index)>] [X<int (mA)>] [Y<int (mA)>] [Z<int (mA)>]
\`\`\`

- \`[E<int (mA)>]\`: Current for the E0 stepper
- \`[I<int (index)>]\`: (>=1.1.9) Index for dual steppers. Use \`I1\` for X2, Y2, and/or Z2.
- \`[T<int (index)>]\`: (>=1.1.9) Index (tool) number for the E axis. If not specified, the E0 extruder.
- \`[X<int (mA)>]\`: Current for the X stepper
- \`[Y<int (mA)>]\`: Current for the Y stepper
- \`[Z<int (mA)>]\`: Current for the Z stepper

### Description

Set the current for a stepper motor in milliamps units.


### Examples
Set the XYZ motor currents to 5mA
\`\`\`gcode
 M906 X5 Y5 Z5
  
\`\`\`
Set the E1 motor current to 10mA
\`\`\`gcode
 M906 T1 E10
  
\`\`\`
Set the X2 motor current to 5mA
\`\`\`gcode
 M906 I1 X5
\`\`\`
`;

export default content;
