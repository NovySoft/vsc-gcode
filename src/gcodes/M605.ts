
const content = `# M605 - Dual Nozzle Mode
## Set the behavior mode for dual nozzles
### Usage
\`\`\`plaintext
 M605  [R<int (temp)>] S<0|1|2> [X<float (linear)>]
\`\`\`

- \`[R<int (temp)>]\`: Temperature difference to apply to E1.  (Requires \`DUAL_X_CARRIAGE\`)
- \`S<0|1|2>\`: 
  - \`S0\`: Full control mode. Both carriages are free to move, constrained by safe distance. (Requires \`DUAL_X_CARRIAGE\`)
  - \`S1\`: Autopark mode. One carriage parks while the other moves. (Requires \`DUAL_X_CARRIAGE\`)
  - \`S2\`: Duplication mode. Carriages and extruders move in unison.

- \`[X<float (linear)>]\`: X distance between dual X carriages.  (Requires \`DUAL_X_CARRIAGE\`)

### Description

This command behaves differently for \`DUAL_X_CARRIAGE\` vs. \`DUAL_NOZZLE_DUPLICATION_MODE\`

For \`DUAL_NOZZLE_DUPLICATION_MODE\` the \`S2\` parameter enables duplication mode. Any other value disables it.

For \`DUAL_X_CARRIAGE\`, this command sets the Dual X mode. See the description of \`S\` below.

`;

export default content;
