
const content = `# G425 - Backlash Calibration
## Use a conductive object to calibrate XYZ backlash
### Usage
\`\`\`plaintext
 G425 
\`\`\`


### Description

This command performs an automatic calibration of backlash, positional errors, and nozzle offset by touching the nozzle on the sides of a bed-mounted, electrically-conductive object (e.g., a cube, washer or bolt).

This command measures backlash but doesn't enable backlash correction. Use [M425](https://marlinfw.org/docs/gcode/M425.html) to enable backlash correction.


### Notes
- |
    Requires \`CALIBRATION_GCODE\` and the following parameters:
- \`CALIBRATION_MEASUREMENT_RESOLUTION\` determines the increments taken in mm when performing measurements.
- \`CALIBRATION_FEEDRATE_SLOW\`, \`CALIBRATION_FEEDRATE_FAST\` and \`CALIBRATION_FEEDRATE_TRAVEL\` determine the speed of motion during the calibration.
- \`CALIBRATION_NOZZLE_TIP_HEIGHT\` and \`CALIBRATION_NOZZLE_OUTER_DIAMETER\` refer to the conical part of the nozzle tip.
- \`CALIBRATION_REPORTING\` enables \`G425 V\` for reporting of measurements.
- \`CALIBRATION_OBJECT_CENTER\` and \`CALIBRATION_OBJECT_DIMENSIONS\` define the true location and dimensions of a cube/bolt/washer mounted on the bed.
- \`CALIBRATION_MEASURE_RIGHT\`, \`CALIBRATION_MEASURE_FRONT\`, \`CALIBRATION_MEASURE_LEFT\` and \`CALIBRATION_MEASURE_BACK\` define the usable touch points. Comment out any sides which are unreachable by the probe. For best results, all four sides should be reachable.
- \`CALIBRATION_PIN\`, \`CALIBRATION_PIN_INVERTING\`, \`CALIBRATION_PIN_PULLDOWN\` and \`CALIBRATION_PIN_PULLUP\` configure the pin used for calibration. For example, if the nozzle is grounded, the calibation cube would be connected to a digital input pin with a pull-up enabled.

### Examples
'Check positional accuracy before calibration (Requires \`CALIBRATION_REPORTING\`):'
\`\`\`gcode

       T1                  ; Switch to second nozzle
       G425 V              ; Showing positional report for T1
       T0                  ; Switch to second nozzle
       G425 V              ; Showing positional report for T0
  
\`\`\`
'Perform automatic calibration:'
\`\`\`gcode

       G425                ; Perform full calibration sequence
       M425 F1 S0          ; Enable backlash compensation at 100%
  
\`\`\`
'Check positional accuracy after calibration (Requires \`CALIBRATION_REPORTING\`):'
\`\`\`gcode

       T1                  ; Switch to second nozzle
       G425 V              ; Validate by showing report for T1
       T0                  ; Switch to second nozzle
       G425 V              ; Validate by showing report for T0
\`\`\`
`;

export default content;
