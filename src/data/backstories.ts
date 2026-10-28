// Procedural 1-2 sentence fantasy origin story generator
// Uses character name and character class

interface OriginTemplate {
  origins: string[];
  deeds: string[];
  resolves: string[];
}

const CLASS_TEMPLATES: Record<string, OriginTemplate> = {
  Warrior: {
    origins: [
      'Forged in the brutal mountain skirmishes of the Ashen Peaks',
      'Trained from childhood in the royal garrison of Highwall',
      'Rising from humble blacksmith beginnings along the Iron Coast',
      'A battle-hardened veteran of the Siege of Sunken Citadel',
      'Bearing the ancestral blade of a fallen northern clan',
    ],
    deeds: [
      'single-handedly held the mountain pass against a marauding horde to protect fleeing villagers',
      'earned legendary renown after vanquishing an armored dread-beast in the imperial colosseum',
      'struck down a corrupt warlord to liberate their homeland from tyranny',
      'survived thirty grueling campaigns with unbroken martial honor and tactical brilliance',
    ],
    resolves: [
      'Now traveling as a renowned Warrior, they pledge their formidable steel to defend the vulnerable across the realm.',
      'As a valiant Warrior, they seek ancient runic armor to safeguard peace from an encroaching shadow.',
      'Carrying their heavy battle shield with pride, this Warrior will stop at nothing to fulfill an unbroken soldier’s vow.',
      'Now wandering as an indomitable Warrior, their blade hungers for justice against ancient evil.',
    ],
  },
  Mage: {
    origins: [
      'Born under a rare celestial alignment of twin comets',
      'Scholared in the sequestered astral vaults of the Kirin Spires',
      'Having deciphered forbidden glyphs within the Sunken Library',
      'Apprenticed to an eccentric chronomancer in the Whispering Isles',
      'Awakening innate sorcerous flame during an eclipse over the Arcane Basin',
    ],
    deeds: [
      'unraveled a catastrophic planar rift before it could consume the capital city',
      'mastered esoteric equations that allow the manipulation of raw elemental plasma',
      'sealed away an ancient eldritch entity using forgotten celestial theorems',
      'breached the seal of an immortal titan’s tomb to retrieve stolen star-knowledge',
    ],
    resolves: [
      'As a gifted Mage, they now journey into uncharted frontiers to master the deepest mysteries of the universe.',
      'Wielding cosmic sorcery with surgical grace, this Mage seeks to mend fractures in the fabric of reality.',
      'Now venturing forth as a renowned Mage, their arcane intellect illuminates even the deepest abyss.',
      'Bound to their spellbook, this Mage strives to prevent forbidden magics from falling into malicious hands.',
    ],
  },
  Rogue: {
    origins: [
      'Raised within the labyrinthine alleyways of the Gilded Port',
      'Trained in the elusive arts by the legendary Guild of Nightingales',
      'Once a royal scout framed by corrupt courtiers in the capital',
      'Slipping out of the shadowy catacombs beneath the City of Spires',
      'A silent wanderer whose past was wiped clean by an alchemical contract',
    ],
    deeds: [
      'infiltrated the impenetrable vaults of the Iron Bank to recover a sacred relic',
      'vanished from a maximum-security dungeon without leaving a single disturbed pebble',
      'intercepted a lethal assassination attempt on the rightful heir in broad daylight',
      'dismantled an oppressive smuggler syndicate from the inside out',
    ],
    resolves: [
      'As an elusive Rogue, they walk the knife-edge between light and shadow where ordinary laws cannot reach.',
      'Navigating peril with lightning reflexes, this Rogue uses cunning and poisoned steel to even impossible odds.',
      'Now operating as a master Rogue, they strike only from the darkest corners when tyranny least expects it.',
      'Living by their own strict code of honor, this Rogue proves that a single whispered blade can topple empires.',
    ],
  },
  Paladin: {
    origins: [
      'Anointed at the dawn altar of the Radiant Cathedral',
      'Sworn to the ancient Solar Covenant after surviving a dragon’s breath',
      'Guided by recurring visions sent from the Celestials of High Dawn',
      'Born to a lineage of holy knights sworn to cleanse cursed catacombs',
      'Taking solemn vows of justice amid the ruins of their sacred sanctuary',
    ],
    deeds: [
      'channeled pure solar light to purge a virulent necromantic blight from the provinces',
      'stood as an unbreakable beacon of hope during the longest night of the Blood Moon',
      'sacrificed their family crest to rescue innocent captives from a fiendish pact',
      'blessed the broken city gates, turning back an onslaught of undead legionnaires',
    ],
    resolves: [
      'Now marching as an unwavering Paladin, they shine as an immortal shield against the encroaching darkness.',
      'Empowered by sacred righteousness, this Paladin brings divine retribution to corrupt tyrants everywhere.',
      'With their radiant oath burning bright, this Paladin inspires courage in the hearts of all who travel in their wake.',
      'As a holy Paladin, they will not rest until every corner of the mortal realm is cleansed of wicked blight.',
    ],
  },
  Ranger: {
    origins: [
      'Reared by elder wardens within the primeval canopy of the Great Wyld',
      'A solitary scout from the wind-swept ridges of the Frostspine Mountains',
      'Guarding the forgotten borderlands where civilization meets the ancient wild',
      'Blessed with keen falcon vision by the spirit of the Emerald Glade',
      'Surviving alone for a decade in the treacherous marshlands of the Mistveil',
    ],
    deeds: [
      'tracked and felled a rampaging manticore using only handcrafted cedar arrows',
      'guided lost caravans through blizzard-choked passes without losing a single soul',
      'discovered the secret crossing points of otherworldly forest predators',
      'defended an ancient sacred grove from ruthless logging war-machines',
    ],
    resolves: [
      'As a vigilant Ranger, they patrol the wild thresholds with unmatched stealth and deadly aim.',
      'Now wandering as a master Ranger, their bow sings swift justice before danger can strike.',
      'Listening to the subtle murmurs of wind and leaf, this Ranger keeps watch over the realm’s borders.',
      'Armed with wilderness cunning, this Ranger ensures the balance between beast and civilization endures.',
    ],
  },
  Druid: {
    origins: [
      'Attuned to the subterranean leylines of the Ancient Briarwood',
      'Initiated into the sacred Circle of the Solstice atop Mount Sunstone',
      'Born amidst a lightning storm that brought rain to a century-long drought',
      'A hermit monk who learned ancient rites from primeval tree-spirits',
      'Preserving the balance of nature in the deep subterranean fungal caverns',
    ],
    deeds: [
      'restored vitality to a petrified forest corrupted by demonic ichor',
      'assumed the formidable shape of a giant cave bear to route an army of defilers',
      'communed with slumbering earth elementals to divert a molten volcanic flow',
      'nurtured an endangered seedling from the World Tree through seasons of frost',
    ],
    resolves: [
      'As a steadfast Druid, they channel nature’s primal fury against any who dare despoil the sacred earth.',
      'Commanding the living wrath of root and storm, this Druid wanders the continents as a guardian of the wild.',
      'Bound to the eternal turning of the seasons, this Druid ensures life will always triumph over decay.',
      'Walking in harmony with both predator and prey, this Druid preserves the fragile equilibrium of all living things.',
    ],
  },
};

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateCharacterBackstory(characterName: string, characterClass: string): string {
  const template = CLASS_TEMPLATES[characterClass] || CLASS_TEMPLATES['Warrior'];
  const origin = getRandom(template.origins);
  const deed = getRandom(template.deeds);
  const resolve = getRandom(template.resolves);

  // Generates a punchy, atmospheric 1-to-2 sentence story featuring the exact name and class
  return `${origin}, ${characterName} ${deed}. ${resolve}`;
}
