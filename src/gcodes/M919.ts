
const content = `# M919 - TMC Chopper Timing
## Set Chopper Timing values for TMC stepper drivers
### Usage
\`\`\`plaintext
 M919  [A] [B] [C] [I<index>] [O<1|2|3|4|5|6|7|8|9|10|11|12|13|14|15>] [P<-3|-2|-1|0|1|2|3|4|5|6|7|8|9|10|11|12>] [S<1|2|3|4|5|6|7|8>] [T<index>] [U] [V] [W] [X] [Y] [Z]
\`\`\`

- \`[A]\`: Apply the given chopper timing to the A stepper. (Requires 4 or more axes.)
- \`[B]\`: Apply the given chopper timing to the B stepper. (Requires 5 or more axes.)
- \`[C]\`: Apply the given chopper timing to the C stepper. (Requires 6 or more axes.)
- \`[I<index>]\`: Index for multiple steppers. (i.e., I1 for X2, Y2, Z2; I2 for Z3; I3 for Z4). If omitted, all steppers for the selected axes.
- \`[O<1|2|3|4|5|6|7|8|9|10|11|12|13|14|15>]\`: Time-Off value (1..15). If omitted, use configured defaults for the axes.
- \`[P<-3|-2|-1|0|1|2|3|4|5|6|7|8|9|10|11|12>]\`: Hysteresis End value (-3..12). If omitted, use configured defaults for the axes.
- \`[S<1|2|3|4|5|6|7|8>]\`: Hysteresis Start value (1..8). If omitted, use configured defaults for the axes.
- \`[T<index>]\`: Index (tool) number for the E axis. If omitted, all extruders.
- \`[U]\`: Apply the given chopper timing to the U stepper. (Requires 7 or more axes.)
- \`[V]\`: Apply the given chopper timing to the V stepper. (Requires 8 or more axes.)
- \`[W]\`: Apply the given chopper timing to the W stepper. (Requires 9 axes.)
- \`[X]\`: Apply the given chopper timing to the X stepper(s).
- \`[Y]\`: Apply the given chopper timing to the Y stepper(s). (Requires 2 or more axes.)
- \`[Z]\`: Apply the given chopper timing to the Z stepper(s). (Requires 3 or more axes.)

### Description

\`M919\`: Set / report the TMC Chopper Timing values for one or more stepper drivers.


### Notes
- Requires one or more TMC stepper drivers supporting stealthChop™ mode.
`;

export default content;
