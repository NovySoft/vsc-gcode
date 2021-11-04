
const content = `# M876 - Handle Prompt Response
## Handle Host prompt responses
### Usage
\`\`\`plaintext
 M876  S<response>
\`\`\`

- \`S<response>\`: "Response to prompt"

### Description

Handle responses from the host, such as:
  - Filament runout responses: Purge More, Continue
  - General "Continue" response
  - Resume Print response
  - Dismissal of info


### Notes
- When \`EMERGENCY_PARSER\` is enabled the \`M876\` command is handled as soon as the command arrives.

### Examples
Respond \`Purge More\` to \`FILAMENT_RUNOUT\` prompt
\`\`\`gcode
 M876 S0
\`\`\`
`;

export default content;
