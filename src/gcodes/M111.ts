
const content = `# M111 - Debug Level
## Report and optionally set the debug flags.
### Usage
\`\`\`plaintext
 M111  [S<flags>]
\`\`\`

- \`[S<flags>]\`: Debug flag bits

### Description

Marlin has several debug bits that can be set, in combination, to help configure, troubleshoot, and debug the firmware. Add up the debug bits you need:

Mask|Name|Description
1|ECHO|Echo all commands sent to the parser.
2|INFO|Print extra informational messages.
4|ERRORS|Print extra error messages.
8|DRYRUN|Don't extrude, don't save leveling data, etc.
16|COMMUNICATION|Not currently used.
32|LEVELING|Detailed messages for homing, probing, and leveling. (Requires \`DEBUG_LEVELING_FEATURE\`.)
64|Reserved|Reserved for future usage
128|Reserved|Reserved for future usage


### Examples
Enable extra messages
\`\`\`gcode
 M111 S38 ; LEVELING, ERRORS, INFO
  
\`\`\`
Enable dry-run mode
\`\`\`gcode
 M111 S8
  
\`\`\`
Enable everything except dry-run mode
\`\`\`gcode
 M111 S247 ; 255  8
  
\`\`\`
Disable previously set extra debugging output
\`\`\`gcode
 M111 S0
\`\`\`
`;

export default content;
