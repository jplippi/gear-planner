import { potionMaxStr } from "@xivgear/core/sims/common/potion";
import * as Actions from '../drk_actions';
import { DrkAbility } from "../drk_types";

export const Opener: DrkAbility[] = [
    Actions.Unmend,
    potionMaxStr,
    Actions.HardSlash,
    Actions.EdgeOfShadow,
    Actions.LivingShadow,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Delirium,
    Actions.Disesteem,
    Actions.SaltedEarth,
    Actions.EdgeOfShadow,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.CarveAndSpit,
    Actions.EdgeOfShadow,
    Actions.Torcleaver,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.SaltAndDarkness,
];

// This is transcribed from https://www.youtube.com/watch?v=-qDvEZQU9dQ with: 
// - an additional Edge in every two minute burst, assuming we have Dark Arts.
// - a 6m pot added
// - an extra GCD combo and bloodspiller added
export const Loop: DrkAbility[] = [
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Delirium,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.Torcleaver,
    Actions.CarveAndSpit,
    Actions.Bloodspiller,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.SaltedEarth,
    Actions.HardSlash,
    Actions.SaltAndDarkness,    
    Actions.SyphonStrike,
    Actions.TheBlackestNight,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,   
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.LivingShadow,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.Delirium,
    Actions.Disesteem,
    Actions.EdgeOfShadow,
    Actions.EdgeOfShadow,
    Actions.ScarletDelirium,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.EdgeOfShadow,
    Actions.CarveAndSpit,
    Actions.Torcleaver,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.Bloodspiller,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Delirium,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.SaltedEarth,
    Actions.Torcleaver,
    Actions.CarveAndSpit,
    Actions.Bloodspiller,
    Actions.SaltAndDarkness,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.Bloodspiller,
    Actions.TheBlackestNight,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.LivingShadow,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.Delirium,
    Actions.Disesteem,
    Actions.EdgeOfShadow,
    Actions.EdgeOfShadow,
    Actions.ScarletDelirium,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.CarveAndSpit,
    Actions.EdgeOfShadow,
    Actions.Torcleaver,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.Bloodspiller,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.SaltedEarth,
    Actions.Bloodspiller,
    Actions.SaltAndDarkness,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Delirium,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.Torcleaver,
    Actions.CarveAndSpit,
    Actions.Bloodspiller,
    Actions.Bloodspiller,
    Actions.EdgeOfShadow,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.TheBlackestNight,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.LivingShadow,
    potionMaxStr, //6m pot
    Actions.Souleater,
    Actions.HardSlash,
    Actions.Delirium,
    Actions.EdgeOfShadow,
    Actions.Disesteem,
    Actions.EdgeOfShadow,
    Actions.Shadowbringer,
    Actions.ScarletDelirium,
    Actions.SaltedEarth,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.CarveAndSpit,
    Actions.EdgeOfShadow,
    Actions.Torcleaver,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.SaltAndDarkness,
    Actions.Bloodspiller,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.Delirium,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.Torcleaver,
    Actions.CarveAndSpit,
    Actions.Bloodspiller,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.TheBlackestNight,
    Actions.HardSlash,
    Actions.SaltedEarth,
    Actions.SyphonStrike,
    Actions.SaltAndDarkness,
    Actions.Souleater,
    Actions.Bloodspiller,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,    
    Actions.SyphonStrike,
    Actions.LivingShadow,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.Delirium,
    Actions.EdgeOfShadow,
    Actions.Disesteem,
    Actions.EdgeOfShadow,
    Actions.Shadowbringer,
    Actions.ScarletDelirium,
    Actions.EdgeOfShadow,
    Actions.Comeuppance,
    Actions.CarveAndSpit,
    Actions.EdgeOfShadow,
    Actions.Torcleaver,
    Actions.Shadowbringer,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
    Actions.Bloodspiller,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.EdgeOfShadow,
    Actions.Souleater,
    Actions.HardSlash,
    Actions.SyphonStrike,
    Actions.Souleater,
    Actions.EdgeOfShadow,
    Actions.Bloodspiller,
];