
const content = `# M403 - MMU2 Filament Type
## Set filament type for Multi-Material Unit 2.0
### Usage
\`\`\`plaintext
 M403  E<index> F<0|1|2>
\`\`\`

- \`E<index>\`: The MMU2 slot [0..4] to set the material type for
- \`F<0|1|2>\`: 
  - \`F0\`: Default (PLA, PETG, ...)
  - \`F1\`: Flexible filament
  - \`F2\`: PVA


### Description

Set the filament type for a Prusa MMU2 (or compatible) material slot.


### Notes
- Requires a Prusa Multi-Material Unit v2.0.
- Requires [PRUSA_MMU2](/docs/configuration/configuration.html#prusa-mmu2)

### Examples
Set slot 0 to flexible
\`\`\`gcode
 M403 E0 F1
  
\`\`\`
Set slot 3 to PVA
\`\`\`gcode
 M403 E3 F2
\`\`\`
`;

export default content;
