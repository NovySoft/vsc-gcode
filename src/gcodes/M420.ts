
const content = `# M420 - Bed Leveling State
## Get and/or set bed leveling state and parameters
### Usage
\`\`\`plaintext
 M420  [C<bool>] [L<int>] [S<bool>] [T<0|1|4>] [V<bool>] [Z<linear>]
\`\`\`

- \`[C<bool>]\`: Center the mesh on the mean of the lowest and highest points
- \`[L<int>]\`: Load mesh from EEPROM index (Requires \`AUTO_BED_LEVELING_UBL\` and \`EEPROM_SETTINGS\`)
- \`[S<bool>]\`: Set enabled or disabled. A valid mesh is required to enable bed leveling. If the mesh is invalid / incomplete leveling will not be enabled.
- \`[T<0|1|4>]\`: 
  - \`T0\`: Human readable
  - \`T1\`: CSV
  - \`T4\`: Compact

- \`[V<bool>]\`: 'Verbose: Print the stored mesh / matrix data'
- \`[Z<linear>]\`: |

### Description

Get and/or set bed leveling state. For mesh-based leveling systems use \`Z\` parameter to set the Z Fade Height.

With \`AUTO_BED_LEVELING_UBL\` you can use \`L\` to load a mesh from EEPROM.


### Notes
- [G28](https://marlinfw.org/docs/gcode/G028.html) disables bed leveling. Follow with \`M420 S\` to turn leveling on, or use \`RESTORE_LEVELING_AFTER_G28\` to automatically keep leveling on after [G28](https://marlinfw.org/docs/gcode/G028.html).
- The "current position" may change in response to \`M420 Sn\`.

### Examples
`;

export default content;
