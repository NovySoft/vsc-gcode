
const content = `# M405 - Filament Width Sensor On
## Enable filament width sensor flow control
### Usage
\`\`\`plaintext
 M405  [D<int (cm)>]
\`\`\`

- \`[D<int (cm)>]\`: Distance from measurement point to hot end. If not given, the previous value will be used. The default startup value is set by \`MEASUREMENT_DELAY_CM\`.

### Description

Turn on the filament width sensor and start using it to do flow control. Initially, the filament between the sensor and the hot-end will be treated as the nominal width.


### Examples
Start measuring filament width, adjusting flow
\`\`\`gcode
 M405
\`\`\`
`;

export default content;
