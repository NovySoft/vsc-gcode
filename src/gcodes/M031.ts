
const content = `# M31 - Print time
## Report the current print time.
### Usage
\`\`\`plaintext
 M31 
\`\`\`


### Description

This command reports the time elapsed since the start of the current print job to the host. When printing from SD card, the print job timer starts as soon as SD printing starts.

If \`PRINTJOB_TIMER_AUTOSTART\` is enabled then the first [M109](https://marlinfw.org/docs/gcode/M109.html) or [M190](https://marlinfw.org/docs/gcode/M190.html) command received from the host will also start the print job timer.

For manual control from the host, use [M75](https://marlinfw.org/docs/gcode/M075.html), [M76](https://marlinfw.org/docs/gcode/M076.html), and [M77](https://marlinfw.org/docs/gcode/M077.html) to start, pause, and stop the print job timer.

`;

export default content;
