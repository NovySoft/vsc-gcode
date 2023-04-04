
const content = `# Tc - Load previously requested Tool
## Loads the user selected tool (or filament).
### Usage
\`\`\`plaintext
 Tc 
\`\`\`


### Description
\`Tc\` Loads the tool selected with a previous Tx command. 


### Examples
Load previously selected tool
\`\`\`gcode

       Tx
--
\`\`\`

Prompt user for tool, wait for extruder temp, and load.
\`\`\`gcode

       Tx ; Request filament
       M109 S215 ; wait for extruder temp
       Tc ; Load filament

`;

export default content;
