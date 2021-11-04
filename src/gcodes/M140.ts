
const content = `# M140 - Set Bed Temperature
## Set a new target bed temperature.
### Usage
\`\`\`plaintext
 M140  [I<index>] [S<temp>]
\`\`\`

- \`[I<index>]\`: Material preset index. Overrides \`S\`.
- \`[S<temp>]\`: Target temperature

### Description

Set a new target temperature for the heated bed and continue without waiting. The firmware manages heating in the background.

Use [M190](https://marlinfw.org/docs/gcode/M190.html) to wait for the bed to reach the target temperature.


### Notes

parameters:
-
    tag: I
    since: 2.0.6
    optional: true
    description: Material preset index. Overrides \`S\`.
    values:
-
        type: int
        tag: index
-
    tag: S
    optional: true
    description: Target temperature
    values:
-
        tag: temp
        type: float

### Examples
Set target temperature, no waiting
\`\`\`gcode
 M140 S80
\`\`\`
`;

export default content;
