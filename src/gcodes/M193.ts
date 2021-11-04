
const content = `# M193 - Set Laser Cooler Temperature
## Set a new target laser coolant temperature.
### Usage
\`\`\`plaintext
 M193  [S<temp>]
\`\`\`

- \`[S<temp>]\`: 'Target laser coolant temperature.'

### Description

\`M193\` optionally sets the cooler target temperature and dwells until the cooler temperature is equal to or below the target.
Any value greater than the COOLER_MAXTEMP (set in Configuratin_adv.h) will be set to the COOLER_MAXTEMP value.
Use [M143](https://marlinfw.org/docs/gcode/M143.html) if you want to set the target temperature without waiting or to turn the cooler off.


### Notes
- This command may block the command queue. Enable \`EMERGENCY_PARSER\` so that hosts can break in using [M108](https://marlinfw.org/docs/gcode/M108.html).
- Use [M143](https://marlinfw.org/docs/gcode/M143.html) to set the cooler temperature and proceed without waiting.
- Configuration settings.
- '\`COOLER_MINTEMP\` Provides a low end safe operating temperature, cannot be lower than 1°C. CO2 lasers tubes can be damaged with values less than 15°C.'
- '\`COOLER_MAXTEMP\` Provides a high end safe operating temperature, when breached the system will shutdown if \`THERMAL_PROTECTION_COOLER\` is defined. CO2 laser tube life degrades exponentially at temperatures above 24°C.'
- '\`COOLER_DEFAULT_TEMP\` LCD menu default value is 16°C.'
- '\`TEMP_COOLER_HYSTERESIS\` The accepatble temperature variance + or - to the target.'
- '\`COOLER_PIN\` Cooler on/off pin used to control power to the cooling element.'
- '\`COOLER_INVERTING\` Inverts the on value to 0.'
- '\`TEMP_COOLER_PIN\` Laser/Cooler temperature sensor pin.'
- '\`COOLER_FAN\` Enables a fan on the cooler.'
- '\`COOLER_FAN_INDEX\` Defines which fan to use 0,1,2 etc.'
- '\`COOLER_FAN_BASE\` Base cooler fan PWM (0-255); on when the cooler is enabled.'
- '\`COOLER_FAN_FACTOR\` PWM increase per °C above target.'
- '\`THERMAL_PROTECTION_COOLER\` Enables thermal shutdown protection.'
- '\`THERMAL_PROTECTION_COOLER_PERIOD\` Thermal protection check interval in seconds.'
- '\`THERMAL_PROTECTION_COOLER_HYSTERESIS\` Thermal variance +- limits check interval.'
- '\`WATCH_COOLER_TEMP_PERIOD\` Check interval in seconds before runaway condition shutdown.'
- '\`WATCH_COOLER_TEMP_INCREASE\` Allowable increase during check interval.'

### Examples
\`\`\`gcode

       M193 S15
\`\`\`
`;

export default content;
