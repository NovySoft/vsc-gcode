
const content = `# G34 - Z Steppers Auto-Alignment
## Align multiple Z steppers using a bed probe
### Usage
\`\`\`plaintext
 G34  [A<float>] [E<bool>] [I<int>] [T<float>]
\`\`\`

- \`[A<float>]\`: Amplification (must be between 0.5 and 2.0)
- \`[E<bool>]\`: Stow probe after probing each point.
- \`[I<int>]\`: Iterations (must be between 1 and 30)
- \`[T<float>]\`: Target accuracy (must be between 0.01 and 1.0)

### Description

Align multiple Z stepper motors using a bed probe by probing one position per stepper. See [M422](https://marlinfw.org/docs/gcode/M422.html) for Z-Stepper automatic alignment parameter selection.


### Notes
- Requires \`Z_STEPPER_AUTO_ALIGN\`.

### Examples
'Align Z steppers:'
\`\`\`gcode
 G34
    
\`\`\`
`;

export default content;
