
const content = `# M20 - List SD Card
## List the contents of the SD Card.
### Usage
\`\`\`plaintext
 M20  [L<flag>]
\`\`\`

- \`[L<flag>]\`: Include the long filename in the listing.

### Description

List all printable files on the SD card back to the requesting serial port in compact DOS 8.3 format. Only files with \`.gcode\`, \`.gco\`, and \`.g\` extensions will be listed. Hidden files (beginning with \`.\`) will not be listed.

Hosts or serial controllers should send \`M20\` to get a DOS 8.3 file listing of the active media device that includes file sizes.

The file size is included in the output since Marlin 1.1.0.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)

### Examples
List the contents of the SD card
\`\`\`gcode
 |
      > M20
      Begin file list
      myfile.gco 14129
      subdir/moreth\~1.gco 68447
      End file list
      ok
  
\`\`\`
The firmware will send no other output between "Begin file list" and "End file list."

List files with long filename (for display)
\`\`\`gcode
 |
      > M20 L
      Begin file list
      myfile.gco 14129 MyFile.gcode
      sub_di\~1/moreth\~1.gco 68447 Sub\ Directory/MoretHall.gcode
      End file list
      ok
\`\`\`
This format produces a prettier File Manager in OctoPrint, but the long name is not used in selecting the file to print, nor are folder long names included.

`;

export default content;
