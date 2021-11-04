
const content = `# M27 - Report SD print status
## Print SD progress to serial
### Usage
\`\`\`plaintext
 M27  [undefined>] [S<seconds>]
\`\`\`

- \`[undefined>]\`: 

- \`[S<seconds>]\`: Interval between auto-reports. \`S0\` to disable  (requires \`AUTO_REPORT_SD_STATUS\`)

### Description

With no parameter, report the current SD read position in the form "\`SD printing byte 123/12345\`." If no file is open the response is "\`Not SD printing\`."

With \`S<seconds>\`, set the SD status auto-report interval. (Requires \`AUTO_REPORT_SD_STATUS\`)

With \`C\`, get the currently open file's name (and long filename if possible). Print "\`(no file)\`" if no file is open.


### Notes
- Requires [SDSUPPORT](/docs/configuration/configuration.html#sd-card)

### Examples
Report current SD status
\`\`\`gcode
 M27 S4
  
\`\`\`
Report SD status every 4 seconds
\`\`\`gcode
 M27 S4
  
\`\`\`
Stop reporting SD status
\`\`\`gcode
 M27 S0
  
\`\`\`
Report currently open filename
\`\`\`gcode
 M27 C
\`\`\`
`;

export default content;
