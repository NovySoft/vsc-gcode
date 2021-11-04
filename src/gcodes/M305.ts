
const content = `# M305 - User Thermistor Parameters
## Set (or report) custom thermistor parameters
### Usage
\`\`\`plaintext
 M305  [B<beta>] [C<coeff>] [P<index>] [R<ohm>] [T<ohms>]
\`\`\`

- \`[B<beta>]\`: Thermistor "beta" value
- \`[C<coeff>]\`: Steinhart-Hart Coefficient 'C'
- \`[P<index>]\`: Thermistor table index
- \`[R<ohm>]\`: Pullup resistor value
- \`[T<ohms>]\`: Resistance at 25C

### Description
Allows for custom temperature sensor.


### Notes
- Must specify temperature sensor \`1000\`

### Examples
Set temperature sensor 0 pullup resistor value to 4.7K, resistance to 100K, thermistor beta value to 3950, and coefficient to 0
\`\`\`gcode
 M305 P0 R4700 T100000 B3950 C0.0
\`\`\`
`;

export default content;
