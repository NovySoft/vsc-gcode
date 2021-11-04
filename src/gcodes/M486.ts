
const content = `# M486 - Cancel Objects
## Identify and cancel objects
### Usage
\`\`\`plaintext
 M486  [C<flag>] [P<index>] [S<index>] [T<count>] [U<index>]
\`\`\`

- \`[C<flag>]\`: Cancel the current object.
- \`[P<index>]\`: Cancel the object with the given index.
- \`[S<index>]\`: Set the index of the current object. If the object with the given index has been canceled, this will cause the firmware to skip to the next object. The value -1 is used to indicate something that isn't an object and shouldn't be skipped.
- \`[T<count>]\`: Reset the state and set the number of objects.
- \`[U<index>]\`: Un-cancel the object with the given index. This command will be ignored if the object has already been skipped.

### Description

Use [M486](https://marlinfw.org/docs/gcode/M486.html) to identify and cancel objects during a multi-object print job.

This command was originally developed for SD card printing but it works fine when host printing too. Of course, since hosts can skip objects more efficiently, host plugins are the better choice in that scenario.


### Notes
  This G-code may not be widely supported by slicers for a while, but they do include helpful comments in the G-code output that includes the current object. So for now you can use a post-processing script to convert these comments into [M486](https://marlinfw.org/docs/gcode/M486.html) commands.
  #### Slicer post-processing scripts:
- [M486 for Prusa Slicer](https://github.com/paukstelis/PrusaSlicer-M486) by [Paul Paukstelis](https://github.com/paukstelis).

### Examples
Typical usage in a G-code file
\`\`\`gcode

       M486 T12 ; Total of 12 objects (otherwise the firmware must count)
       M486 S3  ; Indicate that the 4th object is starting now
       M486 S-1 ; Indicate a non-object, purge tower, or other global feature
       M486 P10 ; Cancel object with index 10 (the 11th object)
       M486 U2  ; Un-cancel object with index 2 (the 3rd object)
       M486 C   ; Cancel the current object (use with care!)
\`\`\`
`;

export default content;
