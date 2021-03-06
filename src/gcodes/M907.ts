
const content = `# M907 - Set Motor Current
## Set motor current via digital trimpot
### Usage
\`\`\`plaintext
 M907  [B<current>] [C<current>] [D<current>] [E<current>] [S<current>] [X<current>] [Y<current>] [Z<current>]
\`\`\`

- \`[B<current>]\`: Current for the E1 stepper (Requires \`DIGIPOTSS_PIN\` or \`DIGIPOT_I2C\`)
- \`[C<current>]\`: Current for the E2 stepper (Requires \`DIGIPOT_I2C\`)
- \`[D<current>]\`: Current for the E3 stepper (Requires \`DIGIPOT_I2C\`)
- \`[E<current>]\`: Current for the E0 stepper
- \`[S<current>]\`: Set this current on all steppers (Requires \`DIGIPOTSS_PIN\` or \`DAC_STEPPER_CURRENT\`)
- \`[X<current>]\`: Current for the X stepper (and the Y stepper with \`MOTOR_CURRENT_PWM_XY\`)
- \`[Y<current>]\`: Current for the Y stepper (Use \`X\` with \`MOTOR_CURRENT_PWM_XY\`)
- \`[Z<current>]\`: Current for the Z stepper

### Description

Set digital trimpot motor current using axis codes \`X\`, \`Y\`, \`Z\`, \`E\`, plus \`B\` and \`S\`. The unit used for current depends on the type of stepper driver.

`;

export default content;
