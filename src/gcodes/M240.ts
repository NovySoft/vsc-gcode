
const content = `# M240 - Trigger Camera
## Trigger a camera shutter
### Usage
\`\`\`plaintext
 M240  [A<offset>] [B<offset>] [D<ms>] [F<feedrate>] [I<pos>] [J<pos>] [P<ms>] [R<length>] [S<feedrate>] [X<pos>] [Y<pos>] [Z<length>]
\`\`\`

- \`[A<offset>]\`: Offset to the X return position. (Requires \`PHOTO_POSITION\`)
- \`[B<offset>]\`: Offset to the Y return position. (Requires \`PHOTO_POSITION\`)
- \`[D<ms>]\`: Duration to hold down the shutter switch. (Requires \`PHOTO_SWITCH_POSITION\` and \`PHOTO_SWITCH_MS\`)
- \`[F<feedrate>]\`: Feedrate for the main photo moves. If omitted, the homing feedrate will be used. (Requires \`PHOTO_POSITION\`)
- \`[I<pos>]\`: Shutter switch X position. If omitted, the photo move X position applies. (Requires \`PHOTO_SWITCH_POSITION\`)
- \`[J<pos>]\`: Shutter switch Y position. If omitted, the photo move Y position applies. (Requires \`PHOTO_SWITCH_POSITION\`)
- \`[P<ms>]\`: Delay after pressing the shutter switch. (Requires \`PHOTO_SWITCH_POSITION\` and \`PHOTO_SWITCH_MS\`)
- \`[R<length>]\`: Retract/recover length. (Requires \`PHOTO_POSITION\`)
- \`[S<feedrate>]\`: Retract/recover feedrate. (Requires \`PHOTO_POSITION\`)
- \`[X<pos>]\`: Main photo move X position. (Requires \`PHOTO_POSITION\`)
- \`[Y<pos>]\`: Main photo move Y position. (Requires \`PHOTO_POSITION\`)
- \`[Z<length>]\`: Main photo move Z raise. (Requires \`PHOTO_POSITION\`)

### Description

Trigger a camera shutter using a digital pin or by bumping a physical switch.


### Notes
- "\`CHDK_PIN\` or \`PHOTOGRAPH_PIN\` is required prior to Marlin 2.0.0."
- To use the \`CHDK_PIN\` or \`PHOTOGRAPH_PIN\` option with a digital camera see [this article](https://www.doc-diy.net/photo/rc-1_hacked/).
- To use an endstop or contact switch as a shutter switch for your smartphone's camera, see [this video](https://www.youtube.com/watch?v=i5g3ziK5wpI).
`;

export default content;
