import * as g0 from './gcodes/g0-g1';
import * as g2 from './gcodes/g2-g3';
import * as g4 from './gcodes/g4';
import * as g5 from './gcodes/g5';
import * as g6 from './gcodes/g6';
import * as g10 from './gcodes/g10';
import * as g11 from './gcodes/g11';
import * as g12 from './gcodes/g12';

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
        case "g5":
            return g5.default;
        case "g6":
            return g6.default;
        case "g10":
            return g10.default;
        case "g11":
            return g11.default;
        case "g12":
            return g12.default;
        default:
            return undefined;
    }
}