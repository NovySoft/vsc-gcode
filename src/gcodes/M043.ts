
const content = `# M43 - Debug Pins
## Get information about pins.
### Usage
\`\`\`plaintext
 M43  [E<bool>] [I<flag>] [P<pin>] [S<flag>] [T<flag>] [W<flag>]
\`\`\`

- \`[E<bool>]\`: Watch endstops
- \`[I<flag>]\`: Ignore protection when reporting values
- \`[P<pin>]\`: Digital Pin Number
- \`[S<flag>]\`: Test BLTouch type servo probes. Use \`P\` to specify servo index (0-3). Defaults to 0 if \`P\` omitted
- \`[T<flag>]\`: Toggle pins - see [M43 T](https://marlinfw.org/docs/gcode/M043-T.html) for options
- \`[W<flag>]\`: Watch pins

### Description

When setting up or debugging a machine it's useful to know how pins are assigned to functions by the firmware, and to be able to find pins for use with new functions. [M43](https://marlinfw.org/docs/gcode/M043.html) provides these tools. [M43](https://marlinfw.org/docs/gcode/M043.html) by itself reports all pin assignments. Use \`P\` to specify a single pin. Use \`I\` to report the values on pins that are protected. Use \`W\` to watch the specified pin, or all pins. Use the \`E\` option to monitor endstops. Use \`S\` option to test a BLTouch type servo probe. Use \`T\` option to toggle pins.

The \`W\` watch mode option continues looping, blocking all further commands, until the board is reset. If \`EMERGENCY_PARSER\` is enabled, [M108](https://marlinfw.org/docs/gcode/M108.html) may also be used to exit the watch loop without needing to reset the board.

See [M43 T](https://marlinfw.org/docs/gcode/M043-T.html) for Pins Debugging toggle options.


### Notes
- Requires \`PINS_DEBUGGING\`. This feature should be disabled for production use.

### Examples
Get a report on all pins
\`\`\`gcode
 M43
  
\`\`\`
Get a report on all pins, ignore pin protection list when displaying values
\`\`\`gcode
 M43 I
  
\`\`\`
Watch pin 56 for changes
\`\`\`gcode
 M43 P56 W
  
\`\`\`
Start watching endstops
\`\`\`gcode
 M43 E1
  
\`\`\`
Toggle pins 3-6 five times with 1 second low and 1 second high pulses but only if the pin isn't in the protected list.
\`\`\`gcode
 M43 T S3 L6 R5 W1000
  
\`\`\`
Test probe controlled by servo index 2.
\`\`\`gcode
 M43 S P2

\`\`\`
`;

export default content;
