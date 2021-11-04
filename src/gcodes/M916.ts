
const content = `# M916 - L6474 Thermal Warning Test
## Find L6474 drive level (KVAL_HOLD) threshold
### Usage
\`\`\`plaintext
 M916  [D<second>] [E<mm>] [F<feedrate>] [J<0|1|2|3|4|5|6|7>] [K<Kvalue>] [T<current>] [X<mm>] [Y<mm>] [Z<mm>]
\`\`\`

- \`[D<second>]\`: Time (in seconds) to run each setting of KVAL_HOLD/TVAL. (Default zero, to run each setting once.)
- \`[E<mm>]\`: Monitor E with the given displacement (1 - 255mm) on either side of the current position.
- \`[F<feedrate>]\`: Feedrate for the moves. (Default max feedrate if unspecified.)
- \`[J<0|1|2|3|4|5|6|7>]\`: 
  - \`J0\`: (default) Monitor all drivers on the axis
  - \`J1\`: Monitor only X, Y, Z, E1
  - \`J2\`: Monitor only X2, Y2, Z2, E2
  - \`J3\`: Monitor only Z3, E3
  - \`J4\`: Monitor only Z4, E4
  - \`J5\`: Monitor only Z5, E5
  - \`J6\`: Monitor only Z6, E6
  - \`J7\`: Monitor only Z7, E7

- \`[K<Kvalue>]\`: Value for KVAL_HOLD (0 - 255) (ignored for L6474). If unspecified, report current value from driver.
- \`[T<current>]\`: Current (mA) setting for TVAL (0 - 4A in 31.25mA increments, rounds down) - L6474 only. If unspecified, report current value from driver.
- \`[X<mm>]\`: Monitor X with the given displacement (1 - 255mm) on either side of the current position.
- \`[Y<mm>]\`: Monitor Y with the given displacement (1 - 255mm) on either side of the current position.
- \`[Z<mm>]\`: Monitor Z with the given displacement (1 - 255mm) on either side of the current position.

### Description

\`M916\`: increase KVAL_HOLD until thermal warning.
This routine is also useful for determining the approximate KVAL_HOLD where the stepper stops losing steps. The sound will get noticeably quieter as it stops losing steps.


### Notes
- Requires \`MONITOR_L6470_DRIVER_STATUS\`.
- All tests assume each axis uses matching driver chips.
- On the L6474 the TVAL is used instead of KVAL.
`;

export default content;
