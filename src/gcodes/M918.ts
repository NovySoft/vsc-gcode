
const content = `# M918 - L6474 Speed Warning Test
## Find L6474 speed threshold
### Usage
\`\`\`plaintext
 M918  [E<mm>] [I<current>] [J<0|1|2|3|4|5|6|7>] [K<Kvalue>] [M<microsteps>] [T<current>] [X<mm>] [Y<mm>] [Z<mm>]
\`\`\`

- \`[E<mm>]\`: Monitor E with the given displacement (1 - 255mm) on either side of the current position.
- \`[I<current>]\`: Overcurrent threshold. Report current value from driver if not specified.
- \`[J<0|1|2|3|4|5|6|7>]\`: 
  - \`J0\`: (default) Monitor all drivers on the axis or E0
  - \`J1\`: Monitor only X, Y, Z, E1
  - \`J2\`: Monitor only X2, Y2, Z2, E2
  - \`J3\`: Monitor only Z3, E3
  - \`J4\`: Monitor only Z4, E4
  - \`J5\`: Monitor only Z5, E5
  - \`J6\`: Monitor only Z6, E6
  - \`J7\`: Monitor only Z7, E7

- \`[K<Kvalue>]\`: Value for KVAL_HOLD (0 - 255) (ignored for L6474). Report current value from driver if not specified.
- \`[M<microsteps>]\`: Value for microsteps (1 - 128). Report current value from driver if not specified.
- \`[T<current>]\`: Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. Report current value from driver if not specified.
- \`[X<mm>]\`: Monitor X with the given displacement (1 - 255mm) on either side of the current position.
- \`[Y<mm>]\`: Monitor Y with the given displacement (1 - 255mm) on either side of the current position.
- \`[Z<mm>]\`: Monitor Z with the given displacement (1 - 255mm) on either side of the current position.

### Description

\`M918\`: Increase speed until error or max feedrate achieved.


### Notes
- Requires \`MONITOR_L6470_DRIVER_STATUS\`.
- All tests assume each axis uses matching driver chips.
`;

export default content;
