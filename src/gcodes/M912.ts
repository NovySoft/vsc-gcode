
const content = `# M912 - Clear TMC OT Pre-Warn
## Clear overtemperature pre-warn condition flag
### Usage
\`\`\`plaintext
 M912  [E<"dash"|0to4>] [I<0|1|2|3>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<"dash"|0to4>]\`: 
  - \`E"dash"\`: All E.
  - \`E0to4\`: E index.

- \`[I<0|1|2|3>]\`: 
  - \`I0\`: Both.
  - \`I1\`: Base (X, Y, Z) steppers.
  - \`I2\`: Second (X2, Y2, Z2) steppers.
  - \`I3\`: Third (Z3) steppers.

- \`[X<flag>]\`: Clear \`X\` and/or \`X2\` stepper driver Over Temperature Pre-warn flag.
- \`[Y<flag>]\`: Clear \`Y\` and/or \`Y2\` stepper driver Over Temperature Pre-warn flag.
- \`[Z<flag>]\`: Clear \`Z\` and/or \`Z2\`  and/or \`Z3\` stepper driver Over Temperature Pre-warn flag.

### Description

Clear the stepper driver overtemperature pre-warn condition flag.


### Examples
\`\`\`gcode

            M912     ; clear all
            M912 X   ; clear X and X2
            M912 X1  ; clear X1 only
            M912 X2  ; clear X2 only
            M912 X E ; clear X, X2, and all E
            M912 E1  ; clear E1 only
\`\`\`
`;

export default content;
