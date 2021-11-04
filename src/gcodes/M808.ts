
const content = `# M808 - Repeat Marker
## Set or go to a marker for looping G-code
### Usage
\`\`\`plaintext
 M808  [L<int (count)>]
\`\`\`

- \`[L<int (count)>]\`: Loop counter. Use \`L\` or \`L0\` for an infinite loop.

### Description

The Repeat Marker command is used to define regions of a G-code file that will be repeated during SD printing. A marker is first set with \`M808 L[count]\`, and later in the file a plain \`M808\` command is used count down and loop. (By default up to 10 start markers can be nested.)

In slicer software put \`M808 L\` to the "**Start G-code**" and \`M808\` to the "**End G-code**." But this command is not the only requirement. Before starting each whole object it's important to actually clear the print area of obstacles and to reset the coordinate system with \`G92\` or \`G28\`, so this command is best used with belt printers or other systems with automatic print removal.


### Notes
- At this time repeat markers only apply during SD printing.

### Examples
Say "Hello World" 5 times
\`\`\`gcode

       M808 L5
       M118 Hello World
       M808
\`\`\`
`;

export default content;
