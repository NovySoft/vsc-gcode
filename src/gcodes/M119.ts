
const content = `# M119 - Endstop States
## Report endstop and probe states to the host.
### Usage
\`\`\`plaintext
 M119 
\`\`\`


### Description

Use this command to get the current state of all endstops, useful for setup and troubleshooting. Endstops are reported as either "\`open\`" or "\`TRIGGERED\`".

The state of the Z probe and filament runout sensors are also reported with this command.


### Notes
- The \`BLTOUCH\` probe only sends a brief pulse, so "\`TRIGGERED\`" indicates the probe is in error state.
- Similarly, Trinamic's Sensorless Homing only sends a short pulse, so for these "\`TRIGGERED\`" is unusual.

### Examples
Get all endstop states
\`\`\`gcode
 |
          > M119
          Reporting endstop status
          x_min: open
          y_min: open
          z_min: TRIGGERED
          z_probe: open
          filament: open
\`\`\`
`;

export default content;
