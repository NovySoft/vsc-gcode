
const content = `# M569 - Set TMC stepping mode
## Toggle stealthChop
### Usage
\`\`\`plaintext
 M569  [E<flag>] [I<int (index)>] [T<int (index)>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<flag>]\`: Stepping mode for the E0 stepper
- \`[I<int (index)>]\`: Index for dual steppers. Use \`I1\` for X2, Y2, and/or Z2, and \`I2\` for Z3.
- \`[T<int (index)>]\`: Index (tool) number for the E axis. If not specified, the E0 extruder.
- \`[X<flag>]\`: Stepping mode for the X stepper
- \`[Y<flag>]\`: Stepping mode for the Y stepper
- \`[Z<flag>]\`: Stepping mode for the Z stepper

### Description

Toggle between stealthChop and spreadCycle on supporting TMC drivers.


### Notes
- Requires at least one stealthChop capable TMC driver, such as TMC2130, TMC2208, or TMC2209.

### Examples
Enable stealthChop on Z and E
\`\`\`gcode
 M569 S1 Z E
  
\`\`\`
Disable stealthChop (use spreadCycle) on X and Y
\`\`\`gcode
 M569 S0 X Y
  
\`\`\`
Enable stealthChop on X2 and E1
\`\`\`gcode
 M569 S1 I1 X T1 E
  
\`\`\`
Report driver modes
\`\`\`gcode
 M569
\`\`\`
`;

export default content;
