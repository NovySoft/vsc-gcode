
const content = `# M34 - SDCard Sorting
## Set SDCard file sorting options.
### Usage
\`\`\`plaintext
 M34  [F<minus_1|0|1>] [S<bool>]
\`\`\`

- \`[F<minus_1|0|1>]\`: 
  - \`Fminus_1\`: Folders before files
  - \`F0\`: No folder sorting
  - \`F1\`: Folders after files

- \`[S<bool>]\`: Sorting on/off

### Description

Marlin now contains support for SDCard alphabetical file sorting in the LCD menus. This feature uses free SRAM to create a sorting index for up to the first 256 files in the current folder, and (if you have _lots_ of SRAM) can optionally cache file listings for a more responsive UI. Buffering only occurs during file browsing. Otherwise the SRAM is freed.


### Notes
- Requires [SDSUPPORT](https://marlinfw.org/docs/configuration/configuration.html#sd-card) and \`SDCARD_SORT_ALPHA\`.
`;

export default content;
