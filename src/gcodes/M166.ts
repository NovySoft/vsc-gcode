
const content = `# M166 - Gradient Mix
## Set a Gradient Mix
### Usage
\`\`\`plaintext
 M166  A<linear> I<index> J<index> [S<enable>] [T<index>] Z<linear>
\`\`\`

- \`A<linear>\`: Starting Z Height. (Use \`Z\` to set the Ending Z Height.)
- \`I<index>\`: Starting Virtual Tool. The Gradient begins with this tool-mix. Below the Starting Z Height the Starting Virtual Tool fully applies.
- \`J<index>\`: Ending Virtual Tool. The Gradient transitions to this tool-mix as Z approaches the Ending Z Height. Above the Ending Z Height the Ending Virtual Tool fully applies.
- \`[S<enable>]\`: Enable / disable the gradient in manual mode. When using the tool index alias, tool-change commands determine whether or not the gradient is enabled.
- \`[T<index>]\`: A tool index to reassign to the gradient. If no index is given, cancel the tool assignment.
- \`Z<linear>\`: Ending Z Height. (Use \`A\` to set the Starting Z Height.)

### Description

Use [M166](https://marlinfw.org/docs/gcode/M166.html) to set a gradient that will be automatically updated as the Z position changes during a print. The gradient smoothly transitions from one virtual tool to another between the given starting and ending Z heights. Below the starting height the starting virtual tool fully applies, and above the ending height the ending virtual tool fully applies.


### Examples
Gradient for a tall vase
\`\`\`gcode
 M166 A0 Z250 I0 J1 S1
  
\`\`\`
In this example no tool index is assigned to the Gradient. So the Gradient is enabled using \`M166 S1\` and disabled with \`M166 S0\`.

Gradient as a Virtual Tool
\`\`\`gcode

       M166 A0 Z250 I0 J1 T3
       T3
  
\`\`\`
In this example the Gradient has been given a tool alias of 3. So the Gradient is selected with \`T3\`, and all other \`Tn\` commands will select a static mix.

To use the static mix stored in T0…
\`\`\`gcode

       M166 T
       T0
\`\`\`
`;

export default content;
