const content = `
## G26 - Mesh Validation Pattern
### Usage
\`\`\`
G26 [B<temp>] [C<bool>] [D] [F<linear>] [H<linear>] [I<index>] [K<bool>] [L<linear>] [O<linear>] [P<linear>] [Q<float>] [R<int>] [S<float>] [U<linear>] [X<linear>] [Y<linear>]
\`\`\`

- \`[B<temp>]\`: Bed temperature (otherwise 60°C) to use for the test print.
- \`[C<bool>]\`: Continue with the closest point (otherwise, don’t)
- \`[D]\`: Disable leveling compensation (otherwise, enable)
- \`[F<linear>]\`: Filament diameter (otherwise 1.75mm)
- \`[H<linear>]\`: Hot end temperature (otherwise 205°C) to use for the test print.
- \`[I<index>]\`: Material preset to use for the test print. Overrides \`S\`.
- \`[K<bool>]\`: Keep heaters on when done
- \`[L<linear>]\`: Layer height to use for the test
- \`[O<linear>]\`: Ooze amount (otherwise 0.3mm). Emitted at the start of the test.
- \`[P<linear>]\`: Prime Length
- \`[Q<float>]\`: Retraction multiplier. \`G26\` retract and recover are 1.0mm and 1.2mm respectively. Both retract and recover are multiplied by this value.
- \`[R<int>]\`: Number of \`G26\` Repetitions (otherwise 999)
- \`[S<float>]\`: Nozzle size (otherwise 0.4mm)
- \`[U<linear>]\`: Random deviation. (U with no value, 50).
- \`[X<linear>]\`: X position (otherwise, current X position)
- \`[Y<linear>]\`: Y position (otherwise, current Y position)

### Description

\`G26\` Mesh Validation Pattern is designed to be used in conjunction with mesh-based leveling to test the accuracy of the probed mesh.

The \`G26\` command prints a single-layer pattern over the entire print bed, giving a clear indication of how accurately every mesh point is defined. \`G26\` can be used to determine which areas of the mesh are less-than-perfect and how much to adjust each mesh point.

### Notes
- Before 1.1.6 it only works with \`AUTO_BED_LEVELING_UBL\`.
- Since 1.1.7 it also works with \`MESH_BED_LEVELING\` and \`AUTO_BED_LEVELING_BILINEAR\`.
`;

export default content;