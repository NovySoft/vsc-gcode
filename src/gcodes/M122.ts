
const content = `# M122 - TMC Debugging
## Get TMC Debug Info
### Usage
\`\`\`plaintext
 M122  [E<flag>] [I<flag>] [P<ms>] [S<flag>] [V<flag>] [X<flag>] [Y<flag>] [Z<flag>]
\`\`\`

- \`[E<flag>]\`: Target E driver(s) only.
- \`[I<flag>]\`: Flag to re-initialize stepper drivers with current settings.
- \`[P<ms>]\`: Interval between continuous debug reports, in milliseconds.
- \`[S<flag>]\`: Flag to enable/disable continuous debug reporting.
- \`[V<flag>]\`: Report raw register data. Refer to the datasheet to decypher.
- \`[X<flag>]\`: Target X driver(s) only.
- \`[Y<flag>]\`: Target Y driver(s) only.
- \`[Z<flag>]\`: Target Z driver(s) only.

### Description

Do a communication check for configured TMC drivers. Trinamic drivers that support this feature are TMC2130, TMC2160, TMC2208, TMC2209, TMC2660, TMC5130, and TMC5160.

- With no parameters, this command returns the current settings for all installed and supported Trinamic stepper drivers.
- Send \`M122 I\` to re-initialize drivers after a late power-on. Use \`S[0|1]\` to enable/disable continuous debugging output.


### Notes
- '\`TMC_DEBUG\` is no longer needed in Marlin 2.0.x, but enabling it produces an extended report.'
- Responses of all \`LOW\` (\`00:00:00:00\`) or all \`HIGH\` (\`FF:FF:FF:FF\`) are signs of a communication problem.<br/>
    See [TMC Troubleshooting](https://docs/hardware/tmc_drivers.html) for further information.

### Examples
'Enable debugging output:'
\`\`\`gcode
 M122 S1
  
\`\`\`
'Get all (supported) Trinamic driver states:'
\`\`\`gcode
 |
      > M122
                        X       Y
      Enabled           false   false
      Set current       850     850
      RMS current       826     826
      MAX current       1165    1165
      Run current       26/31   26/31
      Hold current      13/31   13/31
      CS actual         13/31   13/31
      PWM scale 41      41
      vsense            1=.18   1=.18
      stealthChop       true    true
      msteps            16      16
      tstep             1048575 1048575
      pwm
      threshold         0       0
      [mm/s]            Na      Na
      OT prewarn        false   false
      OT prewarn has
      been triggered    false   false
      off time          5       5
      blank time        24      24
      hysterisis
      _end              2       2
      _start            3       3
      Stallguard thrs   0       0
      DRVSTATUS X       Y
      stallguard
      sg_result         0       0
      fsactive
      stst
      olb
      ola
      s2gb
      s2ga
      otpw
      ot
      'Driver registers:'
        X = 0x80:0D:00:00
        Y = 0x80:0D:00:00
\`\`\`
`;

export default content;
