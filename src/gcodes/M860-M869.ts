
const content = `# M860/M861/M862/M863/M864/M865/M866/M867/M868/M869 - I2C Position Encoders
## I2C position encoders for closed loop control
### Usage
\`\`\`plaintext
 M860/M861/M862/M863/M864/M865/M866/M867/M868/M869  [E<axis>] [I<index>] [O<bool>] [P<int>] [R<bool>] [S<addr>] [S<bool>] [T<float>] [U<bool>] [X<axis>] [Y<axis>] [Z<axis>]
\`\`\`

- \`[E<axis>]\`: Report on E axis encoder if present. (If A or I not specified)
- \`[I<index>]\`: Module index.  [0, I2CPE_ENCODER_CNT - 1]
- \`[O<bool>]\`: Include homed zero-offset in returned position
- \`[P<int>]\`: Number of rePeats/iterations. (for M863 only)
- \`[R<bool>]\`: Reset error counter. (for M866 only)
- \`[S<addr>]\`: Module new I2C address. [30, 200]. (for M864 only)
- \`[S<bool>]\`: Enable/disable error correction. 1 enables, 0 disables.  If not supplied, toggle. (for M867 only)
- \`[T<float>]\`: New error correction threshold. (for M868 only)
- \`[U<bool>]\`: Units in mm or raw step count. (for M860 only)
- \`[X<axis>]\`: Report on X axis encoder if present. (If A or I not specified)
- \`[Y<axis>]\`: Report on Y axis encoder if present. (If A or I not specified)
- \`[Z<axis>]\`: Report on Z axis encoder if present. (If A or I not specified)

### Description
- M860 - Report the position(s) of position encoder module(s).
- M861 - Report the status of position encoder modules.
- M862 - Perform an axis continuity test for position encoder modules.
- M863 - Perform steps-per-mm calibration for position encoder modules.
- M864 - Change position encoder module I2C address.
- M865 - Check position encoder module firmware version.
- M866 - Report or reset position encoder module error count.
- M867 - Enable/disable or toggle error correction for position encoder modules.
- M868 - Report or set position encoder module error correction threshold.
- M869 - Report position encoder module error.

I2C position encoders for closed loop control. Developed by Chris Barr at Aus3D.
[Wiki: https://wiki.aus3d.com.au/Magnetic_Encoder](https://wiki.aus3d.com.au/Magnetic_Encoder)
[Github: https://github.com/Aus3D/MagneticEncoder](https://github.com/Aus3D/MagneticEncoder)


### Notes
- Requires \`I2C_POSITION_ENCODERS\`.
- See [this wiki article](https://wiki.aus3d.com.au/Magnetic_Encoder) for more info.
`;

export default content;
