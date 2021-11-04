
const content = `# M997 - Firmware update
## Perform in-application firmware update
### Usage
\`\`\`plaintext
 M997 
\`\`\`


### Description

Can be used to trigger a firmware update from the SD card after the firmware binary has been uploaded remotely.


### Notes
[M997](https://marlinfw.org/docs/gcode/M997.html) is not supported by all platforms!
The following platforms will restart to trigger the update via bootloader\:
- LPC176x
- STM32
- STM32F1

### Examples
Trigger firmware update
\`\`\`gcode
 M997
\`\`\`
`;

export default content;
