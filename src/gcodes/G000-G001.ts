
const content = `# G0/G1 - Linear Move
## Add a straight line movement to the planner
### Usage
\`\`\`plaintext
 G0/G1  [E<pos>] [F<rate>] [S<power>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[E<pos>]\`: An absolute or relative coordinate on the E (extruder) axis (in current units). The E axis describes the position of the filament in terms of input to the extruder feeder.
- \`[F<rate>]\`: The maximum movement rate of the move between the start and end point. The feedrate set here applies to subsequent moves that omit this parameter.
- \`[S<power>]\`: Set the Laser power for the move. (Requires \`LASER_MOVE_POWER\`). \`G0\` will turn off the laser with \`LASER_MOVE_G0_OFF\` enabled.
- \`[X<pos>]\`: An absolute or relative coordinate on the X axis (in current units).
- \`[Y<pos>]\`: An absolute or relative coordinate on the Y axis (in current units).
- \`[Z<pos>]\`: An absolute or relative coordinate on the Z axis (in current units).

### Description
The \`G0\` and \`G1\` commands add a linear move to the queue to be performed after all previous moves are completed. These commands yield control back to the command parser as soon as the move is queued, but they may delay the command parser while awaiting a slot in the queue.

A linear move traces a straight line from one point to another, ensuring that the specified axes will arrive simultaneously at the given coordinates (by linear interpolation). The speed may change over time following an acceleration curve, according to the acceleration and jerk settings of the given axes.

A command like \`G1 F1000\` sets the feedrate for all subsequent moves.

By convention, most G-code generators use \`G0\` for non-extrusion movements (those without the E axis) and \`G1\` for moves that include extrusion. This is meant to allow a kinematic system to, optionally, do a more rapid uninterpolated movement requiring much less calculation.

For Cartesians and Deltas the \`G0\` (rapid linear movement) command is (and must be) a direct alias for \`G1\` (rapid movement). On SCARA machines \`G0\` does a fast non-linear move. Marlin 2.0 introduces an option to maintain a separate default feedrate for \`G0\`. *Note: Slicers tend to override firmware feedrates!*

\`G0\` & \`G1\` can also be used to control a laser with \`LASER_MOVE_POWER\` enabled. See the \`LASER_FEATURE\` section of \`Configuration_adv.h\` for further details.


### Notes
- Coordinates are given in millimeters by default. Units may be set to inches by [G20](https://marlinfw.org/docs/gcode/G020.html).
- In Relative Mode ([G91](https://marlinfw.org/docs/gcode/G091.html)) all coordinates are interpreted as relative, adding onto the previous position.
- In Extruder Relative Mode ([M83](https://marlinfw.org/docs/gcode/M083.html)) the E coordinate is interpreted as relative, adding onto the previous E position.
- A single linear move may generate several smaller moves to the planner due to kinematics and bed leveling compensation. Printing performance can be tuned by adjusting segments-per-second.

### Examples
The most basic move sets a feedrate and moves the tool to the given position.
\`\`\`gcode

       G0 X12   ; move to 12mm on the X axis
       G0 F1500 ; set the feedrate to 1500 mm/min
       G1 X90.6 Y13.8 ; move to 90.6mm on the X axis and 13.8mm on the Y axis
  
\`\`\`
There are some caveats related with feedrates. Consider the following&#x3A;
\`\`\`gcode

       G1 F1500 ; set the feedrate to 1500 mm/min
       G92 E0
       G1 X50 Y25.3 E22.4 ; move while extruding
    
\`\`\`
In the above example the feedrate is set to 1500 mm/min, then the tool is moved 50mm on the X axis and 25.3mm on the Y axis while extruding 22.4mm of filament between the two points.

\`\`\`gcode

       G1 F1500
       G92 E0
       G1 X50 Y25.3 E22.4 F3000
    
\`\`\`
However, in the above example, we set a feedrate of 1500 mm/min on line 1 then do the move described above, accelerating to a feedrate of 3000 mm/min (if possible). The extrusion will accelerate along with the X and Y movement, so everything stays synchronized.

`;

export default content;
