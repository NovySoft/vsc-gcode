
const content = `# M421 - Set Mesh Value
## Set a single mesh Z height
### Usage
\`\`\`plaintext
 M421  [C<bool>] [I<int>] [J<int>] [N<bool>] [Q<linear>] [X<linear>] [Y<linear>] [Z<linear>]
\`\`\`

- \`[C<bool>]\`: Set the mesh point closest to the current nozzle position (\`AUTO_BED_LEVELING_UBL\` only)
- \`[I<int>]\`: X index into the mesh array
- \`[J<int>]\`: Y index into the mesh array
- \`[N<bool>]\`: Set the mesh point to undefined (\`AUTO_BED_LEVELING_UBL\` only)
- \`[Q<linear>]\`: A value to add to the existing Z value
- \`[X<linear>]\`: X position (which should be very close to a grid line) (\`MESH_BED_LEVELING\` only)
- \`[Y<linear>]\`: Y position (which should be very close to a grid line) (\`MESH_BED_LEVELING\` only)
- \`[Z<linear>]\`: The new Z value to set

### Description

This command is used to set a single Z value for a mesh point in the stored bed leveling data.

Allowed forms are \`M421 In Jn Zn\`, \`M421 Xn Yn Zn\` (\`MESH_BED_LEVELING\` only) or \`M421 C Zn\` (\`AUTO_BED_LEVELING_UBL\` only).


### Notes

parameters:
-
    tag: I
    optional: true
    description: X index into the mesh array
    values:
-
        type: int
-
    tag: J
    optional: true
    description: Y index into the mesh array
    values:
-
        type: int
-
    tag: X
    optional: true
    description: X position (which should be very close to a grid line) (\`MESH_BED_LEVELING\` only)
    values:
-
        tag: linear
        type: float
-
    tag: Y
    optional: true
    description: Y position (which should be very close to a grid line) (\`MESH_BED_LEVELING\` only)
    values:
-
        tag: linear
        type: float
-
    tag: Z
    optional: true
    description: The new Z value to set
    values:
-
        tag: linear
        type: float
-
    tag: Q
    optional: true
    description: A value to add to the existing Z value
    values:
-
        tag: linear
        type: float
-
    tag: C
    optional: true
    description: Set the mesh point closest to the current nozzle position (\`AUTO_BED_LEVELING_UBL\` only)
    values:
-
        type: bool
-
    tag: N
    optional: true
    description: Set the mesh point to undefined (\`AUTO_BED_LEVELING_UBL\` only)
    values:
-
        type: bool

### Examples
Set the Z height in the middle of a 5x5 grid
\`\`\`gcode
 M421 I2 J2 Z-0.05
  
\`\`\`
Set the same Z height using XY
\`\`\`gcode
 M421 X100 Y100 Z-0.05
  
\`\`\`
Adjust the mesh point by -0.01
\`\`\`gcode
 M421 I2 J2 Q-0.01
\`\`\`
`;

export default content;
