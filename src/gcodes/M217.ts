
const content = `# M217 - Filament swap parameters
## Set length and speed for filament swapping
### Usage
\`\`\`plaintext
 M217  [A<linear>] [B<linear>] [E<linear>] [F<linear>] [G<linear>] [L<linear>] [P<feedrate>] [Q<flag>] [R<feedrate>] [S<linear>] [U<linear>] [W<linear>] [X<linear>]
\`\`\`

- \`[A<linear>]\`: Migration Auto Mode. Requires \`TOOLCHANGE_MIGRATION_FEATURE\`.
- \`[B<linear>]\`: Extra resume
- \`[E<linear>]\`: Extra Prime Length
- \`[F<linear>]\`: Fan speed (0-255)
- \`[G<linear>]\`: Fan Time (seconds)
- \`[L<linear>]\`: Last Migration. Requires \`TOOLCHANGE_MIGRATION_FEATURE\`.
- \`[P<feedrate>]\`: Prime feedrate
- \`[Q<flag>]\`: Prime active tool using TOOLCHANGE_FILAMENT_SWAP settings
- \`[R<feedrate>]\`: Retract feedrate
- \`[S<linear>]\`: Swap length
- \`[U<linear>]\`: Unretract feedrate
- \`[W<linear>]\`: Enable Park Feature. Requires \`TOOLCHANGE_PARK\` - was \`SINGLENOZZLE_SWAP_PARK\`.
- \`[X<linear>]\`: Park X position. Requires \`TOOLCHANGE_PARK\` - was \`SINGLENOZZLE_SWAP_PARK\`.

### Description

When changing tools on some setups, one filament may be retracted before the other is primed. This command sets the length and feedrates used for the filament swap retract and prime.

If no parameters are given this command reports the current filament swap parameters.


### Notes
- These values are stored in EEPROM.

### Examples
`;

export default content;
