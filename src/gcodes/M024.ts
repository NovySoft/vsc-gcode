
const content = `# M24 - Start or Resume SD print
## Start or resume a file selected with [M23](https://marlinfw.org/docs/gcode/M023.html)
### Usage
\`\`\`plaintext
 M24  [S<pos>] [T<time>]
\`\`\`

- \`[S<pos>]\`: Position in file to resume from (requires \`POWER_LOSS_RECOVERY\`)
- \`[T<time>]\`: Elapsed time since start of print (requires \`POWER_LOSS_RECOVERY\`)

### Description

Start an SD print or resume the paused SD print. If \`PARK_HEAD_ON_PAUSE\` is enabled, unpark the nozzle.

If \`POWER_LOSS_RECOVERY\` is enabled [M24](https://marlinfw.org/docs/gcode/M024.html) accepts parameters which allow resuming the print from a specific point in the file. These parameters are usually only used in this scenario.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)
- Since Marlin 2.0.0, SD printing can be aborted with [M524](https://marlinfw.org/docs/gcode/M524.html).

### Examples
`;

export default content;
