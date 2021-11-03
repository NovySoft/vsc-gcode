const content = `
## G5 - Bézier cubic spline
### Usage
\`\`\`
G5 [E<pos>] [F<rate>] I<pos> J<pos> P<pos> Q<pos> [S<power>] X<pos> Y<pos>
\`\`\`

- \`[E<pos>]\`: The length of filament to feed into the extruder between the start and end point
- \`[F<rate>]\`: The maximum feedrate of the move between the start and end point (in current units per second). This value applies to all subsequent moves.
- \`[I<pos>]\`: Offset from the X start point to first control point
- \`[J<pos>]\`: Offset from the Y start point to first control point
- \`[P<pos>]\`: Offset from the X end point to second control point
- \`[Q<pos>]\`: Offset from the Y end point to second control point
- \`[S<power>]\`: Set the Laser power for the move. (Requires \`LASER_MOVE_POWER\`)
- \`[X<pos>]\`: A destination coordinate on the X axis
- \`[Y<pos>]\`: A destination coordinate on the Y axis

### Description
\`G5\` creates a cubic B-spline in the XY plane with the \`X\` and \`Y\` axes only. \`P\` and \`Q\` parameters are required. \`I\` and \`J\` are required for the first \`G5\` command in a series. For subsequent \`G5\` commands, either both \`I\` and \`J\` must be specified, or neither. If \`I\` and \`J\` are unspecified, the starting direction of the cubic will automatically match the ending direction of the previous cubic (as if \`I\` and \`J\` are the negation of the previous \`P\` and \`Q\`).

### Notices
- It is an error if an axis other than \`X\` or \`Y\` is specified.
- The first control point is the current position of the head. \`XY\` is the destination (the last control point of the spline).
- The next control-points are the current position plus \`IJ\` and the current position plus \`PQ\`.
- \`I\` and \`J\` can be omitted, which results in these offsets being zero. This produces a 3-point spline. However, \`P\` and \`Q\` are required (otherwise you just get a linear movement).
`;

export default content;