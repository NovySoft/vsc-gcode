
const content = `# M852 - Bed Skew Compensation
## Misalignment in the XYZ axes.
### Usage
\`\`\`plaintext
 M852  [I<float>] [J<float>] [K<float>] [S<float>]
\`\`\`

- \`[I<float>]\`: Skew correction factor for XY axis.
- \`[J<float>]\`: Skew correction factor for XZ axis
- \`[K<float>]\`: Skew correction factor for YZ axis
- \`[S<float>]\`: Alias for \`I\` when only XY skew correction is enabled

### Description

Bed Skew Compensation corrects for misalignment in the XY, XZ, and ZY axes through the use of correction factors.


### Notes
- Correction factors have a range of -1 to 1.
- See Bed Skew Compensation section in the configuration file for more information on calculating the correction factors.
`;

export default content;
