
const content = `# M200 - Set Filament Diameter
## Set the diameter for volumetric extrusion.
### Usage
\`\`\`plaintext
 M200  [D<diameter>] [L<volume>] [S<flag>]
\`\`\`

- \`[D<diameter>]\`: Filament diameter
- \`[L<volume>]\`: Set volumetric extruder limit (in mm<sup>3</sup>/sec). \`L0\` disables the limit. (Requires \`VOLUMETRIC_EXTRUDER_LIMIT\`.)
- \`[S<flag>]\`: 0 to disable volumetric extrusion mode, otherwise volumetric is enabled.

### Description

Set the filament's current diameter and enable volumetric extrusion.

In volumetric extrusion mode the E axis specifies cubic mm instead of linear mm, and the firmware calculates how much length to extrude for the given volume based on the filament diameter.


### Notes

parameters:
-
    tag: D
    optional: true
    description: Filament diameter
    values:
-
        tag: diameter
        type: float
-
    tag: L
    optional: true
    description: Set volumetric extruder limit (in mm<sup>3</sup>/sec). \`L0\` disables the limit. (Requires \`VOLUMETRIC_EXTRUDER_LIMIT\`.)
    values:
-
        tag: volume
        type: float
-
    tag: S
    optional: true
    description: 0 to disable volumetric extrusion mode, otherwise volumetric is enabled.
    values:
-
        tag: flag
        type: bool

### Examples
'A common diameter close to 3mm:'
\`\`\`gcode
 M200 D2.85
  
\`\`\`
'1.75mm diameter with volumetric extrusion mode enabled'
\`\`\`gcode
 M200 S1 D1.75
  
\`\`\`
'1.75mm diameter with volumetric extrusion mode disabled'
\`\`\`gcode
 M200 S0 D1.75
  
\`\`\`
Turn off volumetric extrusion
\`\`\`gcode

       M200 D0
       M200 D  ; ...also works
       M200 S0 ; ...also works

\`\`\`
`;

export default content;
