const content = `
## G2/G3 - Arc or Circle Move
### Usage

\`\`\`
G2 [E<pos>] [F<rate>] I<offset> J<offset> [P<count>] R<radius> [S<power>] [X<pos>] [Y<pos>] [Z<pos>]
G3 [E<pos>] [F<rate>] I<offset> J<offset> [P<count>] R<radius> [S<power>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[E<pos>]\`: The amount to extrude between the start point and end point
- \`[F<rate>]\`: The maximum rate of the move between the start and end point
- \`[I<offset>]\`: An offset from the current X position to use as the arc center
- \`[J<offset>]\`: An offset from the current Y position to use as the arc center
- \`[P<count>]\`: Specify complete circles. (Requires \`ARC_P_CIRCLES\`)
- \`[R<radius>]\`: A radius from the current XY position to use as the arc center
- \`[S<power>]\`: Set the Laser power for the move.
- \`[X<pos>]\`: A coordinate on the X axis
- \`[Y<pos>]\`: A coordinate on the Y axis
- \`[Z<pos>]\`: A coordinate on the Z axis

### Description

\`G2\` adds a clockwise arc move to the planner; \`G3\` adds a counter-clockwise arc. An arc move starts at the current position and ends at the given XYZ, pivoting around a center-point offset given by \`I\` and \`J\` or \`R\`.

\`CNC_WORKSPACE_PLANES\` allows \`G2/G3\` to operate in the selected XY, ZX, or YZ workspace plane.

This command has two forms:
#### I J Form

 - \`I\` specifies an X offset. \`J\` specifies a Y offset.
 - At least one of the \`I\` \`J\` parameters is required.
 - \`X\` and \`Y\` can be omitted to do a complete circle.
 - The given \`X\` \`Y\` is not error-checked.
   The arc ends based on the angle of the destination.
 - Mixing \`I\` or \`J\` with \`R\` will throw an error.

#### R Form
 - \`R\` specifies the radius. \`X\` or \`Y\` is required.
 - Omitting both \`X\` and \`Y\` will throw an error.
 - \`X\` or \`Y\` must differ from the current XY position.
 - Mixing \`R\` with \`I\` or \`J\` will throw an error.

Arc moves actually generate several short straight-line moves, the length of which are determined by the configuration option \`MM_PER_ARC_SEGMENT\` (default 1mm). Any change in the Z position is linearly interpolated over the whole arc.

'ARC_P_CIRCLES' enables the use of the 'P' parameter to specify complete circles

### Images

This illustrates a counter clockwise arc, starting at [9, 6]. It can be generated either by \`G3 X2 Y7 I-4 J-3\` or \`G3 X2 Y7 R5\`
![counter clockwise arc](https://raw.githubusercontent.com/MarlinFirmware/MarlinDocumentation/master/assets/images/gcode/G3fig.png)
`;

export default content;