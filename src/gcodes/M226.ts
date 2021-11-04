
const content = `# M226 - Wait for Pin State
## Wait for a pin to have a given state.
### Usage
\`\`\`plaintext
 M226  P<pin> [S<state>]
\`\`\`

- \`P<pin>\`: Pin number
- \`[S<state>]\`: State 0 or 1. Default -1 for inverted.

### Description

Wait for a pin to have a certain value or state.


### Notes

parameters:
-
    tag: P
    optional: false
    description: Pin number
    values:
-
        tag: pin
        type: byte
-
    tag: S
    optional: true
    description: State 0 or 1. Default -1 for inverted.
    values:
-
        tag: state
        type: byte

### Examples
`;

export default content;
