
const content = `# M149 - Set Temperature Units
## Set temperature units to Celsius, Fahrenheit, or Kelvin.
### Usage
\`\`\`plaintext
 M149  [C<flag>] [F<flag>] [K<flag>]
\`\`\`

- \`[C<flag>]\`: Celsius
- \`[F<flag>]\`: Fahrenheit
- \`[K<flag>]\`: Kelvin

### Description

Set temperature units to Celsius, Fahrenheit, or Kelvin. Celsius is the default.


### Notes

parameters:
-
    tag: C
    optional: true
    description: Celsius
    values:
- type: flag
-
    tag: F
    optional: true
    description: Fahrenheit
    values:
- type: flag
-
    tag: K
    optional: true
    description: Kelvin
    values:
- type: flag
`;

export default content;
