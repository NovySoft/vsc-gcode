import * as g0 from './gcodes/g0-g1';
import * as g2 from './gcodes/g2-g3';
import * as g4 from './gcodes/g4';

export async function resolveGcodeTooltip(gcode: string): Promise<string | undefined> {
    switch (gcode.toLowerCase()) {
        case "g0":
        case "g1":
            return g0.default;
        case "g2":
        case "g3":
            return g2.default;
        case "g4":
            return g4.default;
        default:
            return undefined;
    }
}