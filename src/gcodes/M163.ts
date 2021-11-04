
const content = `# M163 - Set Mix Factor
## Set a single mix factor for a mixing extruder.
### Usage
\`\`\`plaintext
 M163  [P<factor>] [S<index>]
\`\`\`

- \`[P<factor>]\`: Mix factor
- \`[S<index>]\`: Component index

### Description

Set a single mix factor (in proportion to the sum total of all mix factors). The mix must be committed to a virtual tool by [M164](https://marlinfw.org/docs/gcode/M164.html) before it takes effect.


### Examples
'Save a 60/40 mix as tool index 5:'
\`\`\`gcode

       M163 S0 P0.6
       M163 S1 P0.4
       M164 S5
  
\`\`\`
'Save a 3/5 mix as tool index 4:'
\`\`\`gcode

       M163 S0 P3
       M163 S1 P5
       M164 S4
\`\`\`
`;

export default content;
