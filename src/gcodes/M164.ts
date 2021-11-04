
const content = `# M164 - Save Mix
## Save the current mix as a virtual tool.
### Usage
\`\`\`plaintext
 M164  S<index>
\`\`\`

- \`S<index>\`: Tool index (active virtual tool if omitted)

### Description


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
