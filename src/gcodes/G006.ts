
const content = `# G6 - Direct Stepper Move
## Perform a direct, uninterpolated, and non-kinematic synchronized move
### Usage
\`\`\`plaintext
 G6  [E<direction>] [I<index>] [R<rate>] [S<rate>] [X<direction>] [Y<direction>] [Z<direction>]
\`\`\`

- \`[E<direction>]\`: 1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.
- \`[I<index>]\`: Set page index
- \`[R<rate>]\`: Step rate per second. Last value is cached for future invocations.
- \`[S<rate>]\`: Number of steps to take. Defaults to max steps.
- \`[X<direction>]\`: 1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.
- \`[Y<direction>]\`: 1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.
- \`[Z<direction>]\`: 1 for positive, 0 for negative. Last value is cached for future invocations. Not used for directional formats.

### Description
Direct Stepping allows a host device to issue direct stepper movements in binary format, pre-written by the host device to a page in the device RAM.

A "page manager" mechanism is provided to load the binary data onto the device. The page manager provided here uses a parallel protocol over the USB serial connection to write pages to the device RAM, and is decoupled from the normal serial G-code pipeline. This allows the host device to preload pages as fast as possible without waiting on the G-code pipeline.

Once a page is written by the device, it can be triggered using the \`G6\` G-code which references the page index that should be used for that move. Depending on the page format, direction arguments may need to be provided in the \`G6\` code.

- Requires [Step Daemon](https://github.com/colinrgodsey/step-daemon) by [@ColinRGodsey](https://github.com/colinrgodsey).
- Visit [RepRap Wiki](https://reprap.org/wiki/Direct_Stepping) for more details.


### Notes
- Requires \`DIRECT_STEPPING\`.
- Position sync in step-daemon is not entirely finished and movements made with the control panel may be lost. At this moment, homing is required to sync step daemon and the device. Always home before issuing movement commands.
- Use with extra caution.
`;

export default content;
