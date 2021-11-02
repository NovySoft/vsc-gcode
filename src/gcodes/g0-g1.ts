const content = `
### Usage

\`\`\`
G0 [E<pos>] [F<rate>] [S<power>] [X<pos>] [Y<pos>] [Z<pos>]
G1 [E<pos>] [F<rate>] [S<power>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[E<pos>]\`: An absolute or relative coordinate on the E (extruder) axis (in current units). The E axis describes the position of the filament in terms of input to the extruder feeder.
- \`[F<rate>]\`: The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.
- \`[S<power>]\`: Set the Laser power for the move.
- \`[X<pos>]\`: An absolute or relative coordinate on the X (horizontal) axis (in current units).
- \`[Y<pos>]\`: An absolute or relative coordinate on the Y (vertical) axis (in current units).
- \`[Z<pos>]\`: An absolute or relative coordinate on the Z (depth) axis (in current units).

The \`G0\` and \`G1\` commands add a linear move to the queue to be performed after all previous moves are completed. These commands yield control back to the command parser as soon as the move is queued, but they may delay the command parser while awaiting a slot in the queue.

A linear move traces a straight line from one point to another, ensuring that the specified axes will arrive simultaneously at the given coordinates (by linear interpolation). The speed may change over time following an acceleration curve, according to the acceleration and jerk settings of the given axes.

A command like \`G1 F1000\` sets the feedrate for all subsequent moves.

By convention, most G-code generators use \`G0\` for non-extrusion movements (those without the E axis) and \`G1\` for moves that include extrusion. This is meant to allow a kinematic system to, optionally, do a more rapid uninterpolated movement requiring much less calculation.

For Cartesians and Deltas the \`G0\` (rapid linear movement) command is (and must be) a direct alias for \`G1\` (rapid movement). On SCARA machines \`G0\` does a fast non-linear move. Marlin 2.0 introduces an option to maintain a separate default feedrate for \`G0\`. *Note: Slicers tend to override firmware feedrates!*

\`G0\` & \`G1\` can also be used to control a laser with \`LASER_MOVE_POWER\` enabled. See the \`LASER_FEATURE\` section of \`Configuration_adv.h\` for further details.

### Notes

- Coordinates are given in millimeters by default. Units may be set to inches by \`G20\`.
- In Relative Mode \`G91\` all coordinates are interpreted as relative, adding onto the previous position.
- In Extruder Relative Mode \`M83\` the E coordinate is interpreted as relative, adding onto the previous E position.
- A single linear move may generate several smaller moves to the planner due to kinematics and bed leveling compensation. Printing performance can be tuned by adjusting segments-per-second.
`;

export default content;