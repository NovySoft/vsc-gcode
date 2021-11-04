
const content = `# M600 - Filament Change
## Automatically change filament
### Usage
\`\`\`plaintext
 M600  [B<beeps>] [E<pos>] [L<pos>] [R<temp>] [T<index>] [U<pos>] [X<pos>] [Y<pos>] [Z<pos>]
\`\`\`

- \`[B<beeps>]\`: Number of beeps to alert user of filament change (default \`FILAMENT_CHANGE_ALERT_BEEPS\`)
- \`[E<pos>]\`: Retract before moving to change position (negative, default \`PAUSE_PARK_RETRACT_LENGTH\`)
- \`[L<pos>]\`: Load length, longer for bowden (negative)
- \`[R<temp>]\`: "Resume temperature. (AUTOTEMP: the min auto-temperature.)"
- \`[T<index>]\`: Target extruder
- \`[U<pos>]\`: Amount of retraction for unload (negative)
- \`[X<pos>]\`: X position for filament change
- \`[Y<pos>]\`: Y position for filament change
- \`[Z<pos>]\`: Z relative lift for filament change position

### Description

The [M600](https://marlinfw.org/docs/gcode/M600.html) command initiates the filament change procedure. The basic procedure will move the print head away from the print, eject the filament, wait for new filament to be inserted and the user to confirm, load and prime the filament, and continue with the print. [M600](https://marlinfw.org/docs/gcode/M600.html) may be initiated automatically if a filament runout sensor is installed.


### Notes
- Requires \`ADVANCED_PAUSE_FEATURE\`.
- The settings for this command can be found in \`Configuration_adv.h\`. At this time [M600](https://marlinfw.org/docs/gcode/M600.html) requires an LCD controller.

### Examples
With no parameters [M600](https://marlinfw.org/docs/gcode/M600.html) uses the settings in \`Configuration.h\`.
\`\`\`gcode
 M600 ; execute filament change
  
\`\`\`
'To set the change position:'
\`\`\`gcode
 M600 X10 Y15 Z5 ; Do filament change at X:10, Y:15 and Z:+5 from current
\`\`\`
`;

export default content;
