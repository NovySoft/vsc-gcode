
const content = `# M400 - Finish Moves
## Wait for all moves to finish
### Usage
\`\`\`plaintext
 M400 
\`\`\`


### Description

This command causes G-code processing to pause and wait in a loop until all moves in the planner are completed.


### Examples
Wait for moves to finish before playing a beep
\`\`\`gcode

       M400
       M300 S440 P100
\`\`\`
`;

export default content;
