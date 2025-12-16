import {CharacterGearSet} from "../../../gear";
import {SimResult, SimSettings, SimSpec, Simulation} from "../../sim_types";
import {EmptyObject} from "@xivgear/util/util_types";

export const brd248SimSpec: SimSpec<Brd248Sim, SimSettings> = {
    displayName: "BRD @ 2.48",
    loadSavedSimInstance(exported: SimSettings) {
        return new Brd248Sim();
    },
    makeNewSimInstance(): Brd248Sim {
        return new Brd248Sim();
    },
    stub: "brd-248-sim",
    description: "BRD sim for 2.48 recast",
    supportedJobs: ['BRD'],
    supportedLevels: [100],
    isDefaultSim: false,
};

export interface Brd248SimResult extends SimResult {
}

export class Brd248Sim implements Simulation<Brd248SimResult, SimSettings, EmptyObject> {
    exportSettings() {
        return {
            ...this.settings,
        };
    };

    settings = {};
    shortName = "brd-248-sim";
    displayName = "BRD 2.48";

    async simulate(set: CharacterGearSet): Promise<Brd248SimResult> {

        const partyBuffs = 1.157625;
        const partyCritBuffs = 0.1;

        let cycleLength = 120;
        if (set.computedStats.skillspeed < 527) {
            cycleLength = 120.3;
        }
        else if (set.computedStats.skillspeed < 613) {
            cycleLength = 120.07;
        }

        const wmNoBVPotency = 4402;
        const wmBVPotency = 9430.5;
        const mbPotency = 9413;
        const apPotency = 5552;

        const wmNoBVSksImpactedPotency = 526.5;
        const wmBVSksImpactedPotency = 1374;
        const mbSksImpactedPotency = 1577;
        const apSksImpactedPotency = 1399.5;

        const sksAdjustedWmNoBVPotency = (Math.floor(130 * (set.computedStats.skillspeed - 420) / 2780) / 1000) * wmNoBVSksImpactedPotency;
        const sksAdjustedWmBVPotency = (Math.floor(130 * (set.computedStats.skillspeed - 420) / 2780) / 1000) * wmBVSksImpactedPotency;
        const sksAdjustedMbPotency = (Math.floor(130 * (set.computedStats.skillspeed - 420) / 2780) / 1000) * mbSksImpactedPotency;
        const sksAdjustedApPotency = (Math.floor(130 * (set.computedStats.skillspeed - 420) / 2780) / 1000) * apSksImpactedPotency;

        console.log('--sksadjusted--');
        console.log(sksAdjustedWmNoBVPotency);
        console.log(sksAdjustedWmBVPotency);
        console.log(sksAdjustedMbPotency);
        console.log(sksAdjustedApPotency);

        const wmNoBVTotalPotency = wmNoBVPotency + sksAdjustedWmNoBVPotency;
        const wmBVTotalPotency = (wmBVPotency + sksAdjustedWmBVPotency) * partyBuffs;
        const mbTotalPotency = mbPotency + sksAdjustedMbPotency;
        const apTotalPotency = apPotency + sksAdjustedApPotency;

        console.log('--totalpotency--');
        console.log(wmNoBVTotalPotency);
        console.log(wmBVTotalPotency);
        console.log(mbTotalPotency);
        console.log(apTotalPotency);

        const wmNoBvIadAdjusted = wmNoBVTotalPotency * 1.2;
        const wmBvIadAdjusted = wmBVTotalPotency * 1.2;
        const mbIadAdjusted = mbTotalPotency * 1.2;
        const apIadAdjusted = apTotalPotency * 1.2;

        console.log('--iadAdjusted--');
        console.log(wmNoBvIadAdjusted);
        console.log(wmBvIadAdjusted);
        console.log(mbIadAdjusted);
        console.log(apIadAdjusted);

        const wmNoBvPrimaryDamage = Math.floor(wmNoBvIadAdjusted * (set.computedStats.wdPhys + 50.6) * (Math.floor(237 * (set.computedStats.dexterity * 1.05 - 440) / 440) + 100) / 100);
        const wmBvPrimaryDamage = Math.floor(wmBvIadAdjusted * (set.computedStats.wdPhys + 50.6) * (Math.floor(237 * (set.computedStats.dexterity * 1.05 - 440) / 440) + 100) / 100);
        const mbPrimaryDamage = Math.floor(mbIadAdjusted * (set.computedStats.wdPhys + 50.6) * (Math.floor(237 * (set.computedStats.dexterity * 1.05 - 440) / 440) + 100) / 100);
        const apPrimaryDamage = Math.floor(apIadAdjusted * (set.computedStats.wdPhys + 50.6) * (Math.floor(237 * (set.computedStats.dexterity * 1.05 - 440) / 440) + 100) / 100);

        console.log('--primarydamage--');
        console.log(wmNoBvPrimaryDamage);
        console.log(wmBvPrimaryDamage);
        console.log(mbPrimaryDamage);
        console.log(apPrimaryDamage);

        const wmNoBvDetAdjustedDamage = Math.floor(wmNoBvPrimaryDamage * (1000 + Math.floor(140 * (set.computedStats.determination - 440) / 2780)) / 1000);
        const wmBvDetAdjustedDamage = Math.floor(wmBvPrimaryDamage * (1000 + Math.floor(140 * (set.computedStats.determination - 440) / 2780)) / 1000);
        const mbBvDetAdjustedDamage = Math.floor(mbPrimaryDamage * (1000 + Math.floor(140 * (set.computedStats.determination - 440) / 2780)) / 1000);
        const apNoBvDetAdjustedDamage = Math.floor(apPrimaryDamage * (1000 + Math.floor(140 * (set.computedStats.determination - 440) / 2780)) / 1000);

        console.log('--det--');
        console.log(wmNoBvDetAdjustedDamage);
        console.log(wmBvDetAdjustedDamage);
        console.log(mbBvDetAdjustedDamage);
        console.log(apNoBvDetAdjustedDamage);

        const wmNoBvDhitAdjustedDamage = Math.floor(wmNoBvDetAdjustedDamage * (1 + (Math.floor(550 * (set.computedStats.dhit - 420) / 2780) / 1000) / 4));
        const wmBvDhitAdjustedDamage = Math.floor(wmBvDetAdjustedDamage * (1 + (Math.floor(550 * (set.computedStats.dhit - 420) / 2780) / 1000 + 0.2) / 4));
        const mbDhitAdjustedDamage = Math.floor(mbBvDetAdjustedDamage * (1 + (Math.floor(550 * (set.computedStats.dhit - 420) / 2780) / 1000) / 4));
        const apDhitAdjustedDamage = Math.floor(apNoBvDetAdjustedDamage * (1 + (Math.floor(550 * (set.computedStats.dhit - 420) / 2780) / 1000 + 0.03) / 4));

        console.log('--dhit--');
        console.log(wmNoBvDhitAdjustedDamage);
        console.log(wmBvDhitAdjustedDamage);
        console.log(mbDhitAdjustedDamage);
        console.log(apDhitAdjustedDamage);

        const wmNoBvCritAdjustedDamage = Math.floor(wmNoBvDhitAdjustedDamage * (1 + ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 50)) / 1000 + 0.02) * ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 400)) / 1000)));
        const wmBvCritAdjustedDamage = Math.floor(wmBvDhitAdjustedDamage * (1 + ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 50)) / 1000 + 0.02 + partyCritBuffs) * ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 400)) / 1000)));
        const mbCritAdjustedDamage = Math.floor(mbDhitAdjustedDamage * (1 + ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 50)) / 1000) * ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 400)) / 1000)));
        const apCritAdjustedDamage = Math.floor(apDhitAdjustedDamage * (1 + ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 50)) / 1000) * ((Math.floor(200 * (set.computedStats.crit - 420) / 2780 + 400)) / 1000)));

        console.log('--crit--');
        console.log(wmNoBvCritAdjustedDamage);
        console.log(wmBvCritAdjustedDamage);
        console.log(mbCritAdjustedDamage);
        console.log(apCritAdjustedDamage);

        const wmNoBvTotalDamage = Math.floor(wmNoBvCritAdjustedDamage / 100);
        const wmBvTotalDamage = Math.floor(wmBvCritAdjustedDamage / 100);
        const mbTotalDamage = Math.floor(mbCritAdjustedDamage / 100);
        const apTotalDamage = Math.floor(apCritAdjustedDamage / 100);

        console.log('--total--');
        console.log(wmNoBvTotalDamage);
        console.log(wmBvTotalDamage);
        console.log(mbTotalDamage);
        console.log(apTotalDamage);

        const totalDamage = wmNoBvTotalDamage + wmBvTotalDamage + mbTotalDamage + apTotalDamage;

        console.log('--cycle--');
        console.log(cycleLength);

        const cycleDps = totalDamage / cycleLength;

        return {
            mainDpsResult: cycleDps,
        };
    };

    async simulateSimple(set: CharacterGearSet): Promise<number> {
        return (await this.simulate(set)).mainDpsResult;
    }


    spec = brd248SimSpec;

    settingsChanged(): void {

    }
}
