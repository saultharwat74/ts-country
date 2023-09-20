import afghanistanRegions from "./afghanistanRegions";
import andorraRegions from "./andorraRegions";
import uaeRegions from "./uaeRegions";

export default {
  AD: andorraRegions,
  AE: uaeRegions,
  AF: afghanistanRegions,
};

export { andorraRegions, uaeRegions, afghanistanRegions };
export type TAndorraRegions = typeof andorraRegions;
export type TUaeRegions = typeof uaeRegions;
export type TAfghanistanRegions = typeof afghanistanRegions;