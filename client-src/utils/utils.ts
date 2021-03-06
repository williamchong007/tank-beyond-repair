import { UpgradeObject } from "../entities/Upgrade";

export function capitalize(str: string) {
    return '' + str.charAt(0).toUpperCase() + str.substring(1);
}

export type IMatterContactPoints = { vertex: { x: number; y: number; }; }[];

export function makeUpgradeString(upgrades: UpgradeObject) {
    return (Object.entries(upgrades)
        .filter(([key, value]) => value !== 0)
        .map(([key, value]) => `${key}${(value >= 0 ? '+lv' + value : value)}`)
        .join('\n')
    );
}