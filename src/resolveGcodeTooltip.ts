import { readFile } from 'fs';
import { promisify } from 'util';
import * as g0 from './gcodes/g0-g1';
const asyncReadFile = promisify(readFile); 

export async function resolveGcodeTooltip(gcode: string): Promise<string | undefined> {
    switch (gcode.toLowerCase()) {
        case "g0":
        case "g1":
            return g0.default;
        default:
            return undefined;
    }
}