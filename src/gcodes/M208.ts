
const content = `# M208 - Firmware Recover
## Firmware-retraction recover settings.
### Usage
\`\`\`plaintext
 M208  [F<feedrate>] [R<feedrate>] [S<length>] [W<length>]
\`\`\`

- \`[F<feedrate>]\`: Recover feedrate (units/min)
- \`[R<feedrate>]\`: Swap recover feedrate (units/min)
- \`[S<length>]\`: Additional recover length. Can be negative to reduce recover length.
- \`[W<length>]\`: Additional recover swap length. Can be negative to reduce the length.

### Description

Set the added lengths and feedrates for firmware-based retract recovery. The lengths set by [M208](https://marlinfw.org/docs/gcode/M208.html) are applied *in addition* to the lengths set by [M207](https://marlinfw.org/docs/gcode/M207.html) when un-retracting (aka "recovering") the filament. The new values will apply to all subsequent [G11](https://marlinfw.org/docs/gcode/G011.html) commands.

The "swap" values apply to firmware-based recover moves after a tool-change.


### Notes
- Requires \`FWRETRACT\`.
- See related codes [G10](https://marlinfw.org/docs/gcode/G010.html), [G11](https://marlinfw.org/docs/gcode/G010.html), [M207](https://marlinfw.org/docs/gcode/M207.html), and [M209](https://marlinfw.org/docs/gcode/M209.html).

### Examples
Set recover extra length to 0.2mm and recover feedrate to 10mm/s
\`\`\`gcode
 M208 S0.2 F600
  
\`\`\`
Set a retract length of 2mm and *total* recover length of 2.5mm
\`\`\`gcode

       M207 S2.0  ; 2.0mm retract
       M208 S0.5  ; 2.0mm + 0.5mm recover
\`\`\`
`;

export default content;
