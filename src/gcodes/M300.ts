
const content = `# M300 - Play Tone
## Play a single tone, buzz, or beep.
### Usage
\`\`\`plaintext
 M300  [P<ms>] [S<Hz>]
\`\`\`

- \`[P<ms>]\`: Duration (1ms)
- \`[S<Hz>]\`: Frequency (260Hz)

### Description

Add a tone to the tone queue.


### Notes
- Requires \`SPEAKER\` to play tones (not just beeps).
- In Marlin 1.0.2, playing tones block the command queue. Marlin 1.1.0 uses a tone queue and background tone player to keep the command buffer from being blocked by playing tones.

### Examples
Play a tune.
\`\`\`gcode
 |
      M300 S440 P200
      M300 S660 P250
      M300 S880 P300
\`\`\`
`;

export default content;
