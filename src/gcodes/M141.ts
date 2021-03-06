
const content = `# M141 - Set Chamber Temperature
## Set a new target chamber temperature.
### Usage
\`\`\`plaintext
 M141  [S<temp>]
\`\`\`

- \`[S<temp>]\`: 'Target temperature.\n\`AUTOTEMP\`: the min auto-temperature.'

### Description

Set a new target heated chamber temperature and continue without waiting. The firmware will continue to try to reach and hold the temperature in the background.


### Examples
Set chamber target temperature to 40°C
\`\`\`gcode
 M141 S40
\`\`\`
`;

export default content;
