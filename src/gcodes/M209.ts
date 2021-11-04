
const content = `# M209 - Set Auto Retract
## Enable / disable auto-retraction.
### Usage
\`\`\`plaintext
 M209  S<flag>
\`\`\`

- \`S<flag>\`: Set Auto-Retract on/off

### Description

Enable or disable automatic retraction. This option is meant to help slicers that don't support [G10](https://marlinfw.org/docs/gcode/G010.html)/[G11](https://marlinfw.org/docs/gcode/G011.html). But it can be used to override retraction in any G-code.

When auto-retract is enabled, all reversed E-only moves are treated as retraction. (Recover moves are also automatically overridden.) When disabled, E retraction derives from G-code.


### Notes
- Requires \`FWRETRACT\`.
- Most slicers today can generate [G10](https://marlinfw.org/docs/gcode/G010.html)/[G11](https://marlinfw.org/docs/gcode/G011.html). But this option is useful for older G-code.
- Though not currently very popular, both volumetric extrusion and firmware-based retraction (and/or [M209](https://marlinfw.org/docs/gcode/M209.html)) make G-code more immune to changes from one machine to another, and permit changing the hardware without needing to re-slice.
- See related codes [G10](https://marlinfw.org/docs/gcode/G010.html), [G11](https://marlinfw.org/docs/gcode/G010.html), [M207](https://marlinfw.org/docs/gcode/M207.html), and [M208](https://marlinfw.org/docs/gcode/M208.html).

### Examples
`;

export default content;
