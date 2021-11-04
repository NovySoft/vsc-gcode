
const content = `# M665 - Delta Configuration
## Set delta geometry values
### Usage
\`\`\`plaintext
 M665  [A<float>] [B<linear>] [B<float>] [C<float>] [H<linear>] [L<linear>] [R<linear>] [S<float>] [X<float>] [Y<float>] [Z<float>]
\`\`\`

- \`[A<float>]\`: Alpha (Tower 1) diagonal rod trim
- \`[B<linear>]\`: Delta calibration radius
- \`[B<float>]\`: Beta  (Tower 2) diagonal rod trim
- \`[C<float>]\`: Gamma (Tower 3) diagonal rod trim
- \`[H<linear>]\`: Delta height
- \`[L<linear>]\`: Diagonal rod
- \`[R<linear>]\`: Delta radius
- \`[S<float>]\`: Segments per second
- \`[X<float>]\`: Alpha (Tower 1) angle trim
- \`[Y<float>]\`: Beta (Tower 2) angle trim
- \`[Z<float>]\`: Gamma (Tower 3) angle trim

### Description

Delta machines are very fast and accurate when tuned. The first key is to make sure all your dimensions are set correctly. Even small errors in these values can lead to curved movements and failed prints. To ensure the best delta experience, use this command in conjunction with [G33](https://marlinfw.org/docs/gcode/G033.html) to get these dimensions set perfectly before beginning to print.


### Notes

parameters:
-
    tag: H
    optional: true
    description: Delta height
    values:
-
        type: float
        tag: linear
-
    tag: L
    optional: true
    description: Diagonal rod
    values:
-
        type: float
        tag: linear
-
    tag: R
    optional: true
    description: Delta radius
    values:
-
        type: float
        tag: linear
-
    tag: S
    optional: true
    description: Segments per second
    values:
-
        type: float
-
    tag: B
    optional: true
    description: Delta calibration radius
    values:
-
        type: float
        tag: linear
-
    tag: X
    optional: true
    description: Alpha (Tower 1) angle trim
    values:
-
        type: float
-
    tag: Y
    optional: true
    description: Beta (Tower 2) angle trim
    values:
-
        type: float
-
    tag: Z
    optional: true
    description: Gamma (Tower 3) angle trim
    values:
-
        type: float
-
    tag: A
    optional: true
    description: Alpha (Tower 1) diagonal rod trim
    values:
-
        type: float
-
    tag: B
    optional: true
    description: Beta  (Tower 2) diagonal rod trim
    values:
-
        type: float
-
    tag: C
    optional: true
    description: Gamma (Tower 3) diagonal rod trim
    values:
-
        type: float

### Examples
`;

export default content;
