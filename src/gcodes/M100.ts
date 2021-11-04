
const content = `# M100 - Free Memory
## Observe memory used by code
### Usage
\`\`\`plaintext
 M100  [C<n>] [undefined>] [undefined>] [undefined>]
\`\`\`

- \`[C<n>]\`: Corrupt 'n' locations in the free memory pool and report the locations of the corruption. This is useful to check the correctness of the \`M100 D\` and \`M100 F\` commands
- \`[undefined>]\`: 

- \`[undefined>]\`: 

- \`[undefined>]\`: 


### Description

Use [M100](https://marlinfw.org/docs/gcode/M100.html) for development purposes to observe how much memory (particularly stack) is being used by code. Proper AVR code should avoid use of \`new\`, \`malloc\`, etc., and instead use either pre-allocated static variables or stack.


### Notes
- Requires \`M100_FREE_MEMORY_WATCHER\`.

### Examples
`;

export default content;
