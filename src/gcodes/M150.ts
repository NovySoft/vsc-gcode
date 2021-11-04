
const content = `# M150 - Set RGB(W) Color
## Set the color of the RGB(W) LED, backlight, or LED strip.
### Usage
\`\`\`plaintext
 M150  [B<intensity>] [I<pixel>] [P<intensity>] [R<intensity>] [S<strip>] [U<intensity>] [W<intensity>]
\`\`\`

- \`[B<intensity>]\`: Blue component from 0 to 255
- \`[I<pixel>]\`: NeoPixel pixel index (0 .. pixels-1) (Requires \`NEOPIXEL_LED\`)
- \`[P<intensity>]\`: Brightness from 0 to 255 (Requires \`NEOPIXEL_LED\`)
- \`[R<intensity>]\`: Red component from 0 to 255
- \`[S<strip>]\`: NeoPixel strip index (0 or 1) (Requires \`NEOPIXEL2_SEPARATE\`)
- \`[U<intensity>]\`: Green component from 0 to 255
- \`[W<intensity>]\`: White component from 0 to 255 (\`RGBW_LED\` or \`NEOPIXEL_LED\` only)

### Description

If you have an RGB(W) light, either as part of a controller or installed separately, the [M150](https://marlinfw.org/docs/gcode/M150.html) command can be used to set its color.


### Examples
Set LEDs to blue with brightness 30
\`\`\`gcode
 M150 B30
  
\`\`\`
Set NeoPixel 0 to red with brightness 100
\`\`\`gcode
 M150 R100 I0
  
\`\`\`
Set NeoPixel 1 to green with brightness 45
\`\`\`gcode
 M150 U45 I1
  
\`\`\`
Set the second NeoPixel strip full white
\`\`\`gcode
 M150 W255 S1
\`\`\`
`;

export default content;
