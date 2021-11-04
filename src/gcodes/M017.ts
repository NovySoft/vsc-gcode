
const content = `# M17 - Enable Steppers
## Enable steppers
### Usage
\`\`\`plaintext
 M17  [E<flag>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<flag>]\`: E Enable
- \`[X<flag>]\`: X Enable
- \`[Y<flag>]\`: Y Enable
- \`[Z<flag>]\`: Z Enable

### Description

This command can be used to enable one or more steppers (\`X\`,\`Y\`,\`Z\`,\`E\`).

If no steppers are specified, this command enables all steppers immediately.

If one or more axes are specified, this command enables the specified steppers immediately.


### Notes

parameters:
-
    tag: X
    optional: true
    description: X Enable
    values:
-
        tag: flag
        type: bool
-
    tag: Y
    optional: true
    description: Y Enable
    values:
-
        tag: flag
        type: bool
-
    tag: Z
    optional: true
    description: Z Enable
    values:
-
        tag: flag
        type: bool
-
    tag: E
    optional: true
    description: E Enable
    values:
-
        tag: flag
        type: bool

### Examples
Enable power on all stepper motors
\`\`\`gcode
 M17
  
\`\`\`
Enable Z and E steppers immediately
\`\`\`gcode
 M17 Z E
\`\`\`
`;

export default content;
