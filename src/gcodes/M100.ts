
const content = `# M100 - Free Memory
## Observe memory used by code
### Usage
\`\`\`plaintext
 M100  [C<n>] [D<flag>] [F<flag>] [I<flag>]
\`\`\`

- \`[C<n>]\`: Corrupt 'n' locations in the free memory pool and report the locations of the corruption. This is useful to check the correctness of the \`M100 D\` and \`M100 F\` commands
- \`[D<flag>]\`: Dump the free memory block from \`__brkval\` to the stack pointer
- \`[F<flag>]\`: Return the number of free bytes in the memory pool along with other vital statistics that define the memory pool
- \`[I<flag>]\`: Initialize the free memory pool so it can be watched and print vital statistics that define the free memory pool

### Description

Use [M100](https://marlinfw.org/docs/gcode/M100.html) for development purposes to observe how much memory (particularly stack) is being used by code. Proper AVR code should avoid use of \`new\`, \`malloc\`, etc., and instead use either pre-allocated static variables or stack.


### Notes
- Requires \`M100_FREE_MEMORY_WATCHER\`.
`;

export default content;
