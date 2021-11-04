
const content = `# M18/M84 - Disable steppers
## Disable steppers (same as M84).
### Usage
\`\`\`plaintext
 M18/M84  [E<flag>] [S<seconds>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<flag>]\`: E Disable
- \`[S<seconds>]\`: Inactivity Timeout. If none specified, disable now.
- \`[X<flag>]\`: X Disable
- \`[Y<flag>]\`: Y Disable
- \`[Z<flag>]\`: Z Disable

### Description

This command can be used to set the stepper inactivity timeout (\`S\`) or to disable one or more steppers (\`X\`,\`Y\`,\`Z\`,\`E\`).

If a timeout is given with \`S\`, this command just sets the stepper inactivity timeout.

If no steppers are specified, this command disables all steppers immediately.

If one or more axes are specified, this command disables the specified steppers immediately.


### Notes

parameters:
-
    tag: S
    optional: true
    description: Inactivity Timeout. If none specified, disable now.
    values:
-
        tag: seconds
        type: int
-
    tag: X
    optional: true
    description: X Disable
    values:
-
        tag: flag
        type: bool
-
    tag: Y
    optional: true
    description: Y Disable
    values:
-
        tag: flag
        type: bool
-
    tag: Z
    optional: true
    description: Z Disable
    values:
-
        tag: flag
        type: bool
-
    tag: E
    optional: true
    description: E Disable
    values:
-
        tag: flag
        type: bool

### Examples
Set the stepper inactivity timeout to 1 minute
\`\`\`gcode
 M18 S60
  
\`\`\`
Disable all steppers immediately
\`\`\`gcode
 M18
  
\`\`\`
Disable Z and E steppers immediately
\`\`\`gcode
 M18 Z E
\`\`\`
`;

export default content;
