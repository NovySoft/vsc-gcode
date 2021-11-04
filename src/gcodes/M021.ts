
const content = `# M21 - Init SD card
## Attempt to detect an SD card in the slot.
### Usage
\`\`\`plaintext
 M21 
\`\`\`


### Description

Use this command to mount the last-selected SD card or thumb drive.


### Examples
Init card with success
\`\`\`gcode
 |
      > M21
      SD card ok
      ok
  
\`\`\`
Init card with failure
\`\`\`gcode
 |
      > M21
      No SD card
      ok
\`\`\`
`;

export default content;
