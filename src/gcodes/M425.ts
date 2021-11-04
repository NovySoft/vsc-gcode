
const content = `# M425 - Backlash compensation
## Enable and tune backlash compensation
### Usage
\`\`\`plaintext
 M425 
\`\`\`


### Description

Backlash compensation will add extra steps to one or more segments whenever a motor reverses direction.

By default, steps are added to the first segment after a direction change. This gives the best dimensional accuracy but may cause marks to appear in the print. Smoothing spreads the added steps over multiple consecutive segments to prevent blemishes in the print, at the expense of dimensional accuracy.

Backlash compensation can be configured at either compile-time or run-time. Enable \`BACKLASH_GCODE\` to turn on [M425](https://marlinfw.org/docs/gcode/M425.html) and a "Backlash" menu item.

Backlash can be measured automatically on all axes with [G425](https://marlinfw.org/docs/gcode/G425.html) or on Z only with [G29](https://marlinfw.org/docs/gcode/G029.html) when \`MEASURE_BACKLASH_WHEN_PROBING\` is enabled.


### Notes
  Requires \`BACKLASH_COMPENSATION\`, \`BACKLASH_GCODE\` and the following parameters:
- \`BACKLASH_DISTANCE_MM\` specifies the default backlash on the X, Y and Z axis.
- \`BACKLASH_CORRECTION\` specifies the default backlash correction (0.0 = none; 1.0 = 100%).
- \`BACKLASH_SMOOTHING_MM\` enables backlash smoothing over a specified distance.
- \`BACKLASH_GCODE\` enables [M425](https://marlinfw.org/docs/gcode/M425.html) for run-time tuning of backlash.
- \`MEASURE_BACKLASH_WHEN_PROBING\` turns on Z backlash measurement when probing with [G29](https://marlinfw.org/docs/gcode/G029.html).
- Use \`BACKLASH_MEASUREMENT_LIMIT\`, \`BACKLASH_MEASUREMENT_RESOLUTION\` and \`BACKLASH_MEASUREMENT_FEEDRATE\` to configure [G29](https://marlinfw.org/docs/gcode/G029.html) backlash measurement.

### Examples
'Manually configure backlash compensation:'
\`\`\`gcode

       M425 X0.1 Y0.2 Z0.3 ; Set backlash to specific values for all axis
       M425 F1             ; Enable backlash compensation at 100%
  
\`\`\`
'Use smoothing for best print surface quality:'
\`\`\`gcode

       M425 F1 S3
  
\`\`\`
'Use no smoothing for best dimensional accuracy:'
\`\`\`gcode

       M425 F1 S0
  
\`\`\`
'Automatically measure X, Y, and Z backlash using [G425](https://marlinfw.org/docs/gcode/G425.html):'
\`\`\`gcode

       G425                ; Perform a full calibration
       M425 F1             ; Use full measured value of backlash on X, Y and Z
    
\`\`\`
G425 automatically loads the measured backlash into the backlash distance, but will not enable backlash compensation.

'To automatically measure Z backlash when probing with \`MEASURE_BACKLASH_WHEN_PROBING\`:'
\`\`\`gcode

       G29                 ; Perform probe and measure backlash on Z
       M425 F1 Z           ; Use full measured value of backlash on Z
    
\`\`\`
'\`MEASURE_BACKLASH_WHEN_PROBING\` measures backlash, but does not update the configured backlash distance. The measured value should be activated by using the \`Z\` argument without a value. This differs from the behavior of [G425](https://marlinfw.org/docs/gcode/G425.html).'

'Report the current backlash configuration:'
\`\`\`gcode

       M425
---
\`\`\`
`;

export default content;
