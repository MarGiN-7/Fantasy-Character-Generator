/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FantasyPortrait } from './components/FantasyPortrait';
import { generateCharacterBackstory } from './data/backstories';

// Character classes with representative icons
const CLASSES = [
  { name: 'Warrior', icon: '⚔️' },
  { name: 'Mage', icon: '🔮' },
  { name: 'Rogue', icon: '🗡️' },
  { name: 'Paladin', icon: '🛡️' },
  { name: 'Ranger', icon: '🏹' },
  { name: 'Druid', icon: '🌿' },
];

// Fantasy name word banks
const FIRST_NAMES = [
  'Aeloria', 'Thorne', 'Zephyr', 'Kaelen', 'Morrigan',
  'Eldrin', 'Valeria', 'Garrick', 'Lyra', 'Boran',
  'Sariel', 'Darius', 'Faelan', 'Nyx', 'Ignis',
  'Rowan', 'Cassian', 'Isolde', 'Theron', 'Mira',
  'Alistair', 'Brynn', 'Vaelin', 'Seraphina', 'Torvald',
  'Vivienne', 'Draven', 'Elowen', 'Fenric', 'Lunara'
];

const SURNAMES = [
  'Shadowbane', 'Stormwhisper', 'Ironbreaker', 'Moonfall',
  'Emberheart', 'Frostborn', 'Starfall', 'Nightbreeze',
  'Silverhand', 'Duskrunner', 'Wildstride', 'Dawnseeker',
  'Ashworth', 'Ravenshadow', 'Runeweaver', 'Brightflame'
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

interface CharacterStats {
  health: number;
  mana: number;
  strength: number;
}

function rollStats(className: string): CharacterStats {
  switch (className) {
    case 'Warrior':
      return {
        health: Math.floor(Math.random() * 30) + 130, // 130-159
        mana: Math.floor(Math.random() * 20) + 25,    // 25-44
        strength: Math.floor(Math.random() * 4) + 16, // 16-19
      };
    case 'Mage':
      return {
        health: Math.floor(Math.random() * 25) + 65,  // 65-89
        mana: Math.floor(Math.random() * 40) + 140,   // 140-179
        strength: Math.floor(Math.random() * 4) + 8,  // 8-11
      };
    case 'Rogue':
      return {
        health: Math.floor(Math.random() * 25) + 85,  // 85-109
        mana: Math.floor(Math.random() * 30) + 50,    // 50-79
        strength: Math.floor(Math.random() * 4) + 12, // 12-15
      };
    case 'Paladin':
      return {
        health: Math.floor(Math.random() * 30) + 120, // 120-149
        mana: Math.floor(Math.random() * 30) + 85,    // 85-114
        strength: Math.floor(Math.random() * 4) + 15, // 15-18
      };
    case 'Ranger':
      return {
        health: Math.floor(Math.random() * 25) + 95,  // 95-119
        mana: Math.floor(Math.random() * 30) + 70,    // 70-99
        strength: Math.floor(Math.random() * 4) + 13, // 13-16
      };
    case 'Druid':
      return {
        health: Math.floor(Math.random() * 30) + 100, // 100-129
        mana: Math.floor(Math.random() * 35) + 115,   // 115-149
        strength: Math.floor(Math.random() * 4) + 12, // 12-15
      };
    default:
      return {
        health: 100,
        mana: 75,
        strength: 14,
      };
  }
}

interface Character {
  name: string;
  characterClass: {
    name: string;
    icon: string;
  };
  stats: CharacterStats;
}

interface DeckCharacter extends Character {
  id: string;
  backstory: string;
  portraitVariation: number;
}

export default function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [portraitVisible, setPortraitVisible] = useState(false);
  const [portraitVariation, setPortraitVariation] = useState(0);
  const [backstory, setBackstory] = useState<string | null>(null);
  const [deck, setDeck] = useState<DeckCharacter[]>(() => {
    try {
      const saved = localStorage.getItem('alchemist_fantasy_deck');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [deckNotification, setDeckNotification] = useState<string | null>(null);

  const [animate, setAnimate] = useState(false);
  const [portraitAnimate, setPortraitAnimate] = useState(false);
  const [backstoryAnimate, setBackstoryAnimate] = useState(false);

  // Sync deck to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('alchemist_fantasy_deck', JSON.stringify(deck));
    } catch (e) {
      console.error('Failed to save deck', e);
    }
  }, [deck]);

  // Generate a new random character with stats
  const generateCharacter = () => {
    const firstName = getRandomItem(FIRST_NAMES);
    const surname = getRandomItem(SURNAMES);
    const characterClass = getRandomItem(CLASSES);
    const stats = rollStats(characterClass.name);

    setCharacter({
      name: `${firstName} ${surname}`,
      characterClass,
      stats,
    });

    setPortraitVariation(0);
    setBackstory(null);
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  };

  // Generate portrait for the currently displayed character
  const handleGeneratePortrait = () => {
    let currentCharacter = character;
    if (!currentCharacter) {
      const firstName = getRandomItem(FIRST_NAMES);
      const surname = getRandomItem(SURNAMES);
      const characterClass = getRandomItem(CLASSES);
      const stats = rollStats(characterClass.name);
      currentCharacter = {
        name: `${firstName} ${surname}`,
        characterClass,
        stats,
      };
      setCharacter(currentCharacter);
    }

    setPortraitVisible(true);
    setPortraitAnimate(false);
    setTimeout(() => {
      setPortraitAnimate(true);
    }, 10);
  };

  // Regenerate a different portrait for the SAME character
  const handleRegeneratePortrait = () => {
    if (!character) {
      handleGeneratePortrait();
      return;
    }

    setPortraitVariation((prev) => (prev + 1) % 3);
    setPortraitVisible(true);
    setPortraitAnimate(false);
    setTimeout(() => {
      setPortraitAnimate(true);
    }, 10);
  };

  // Generate a unique 1-2 sentence origin story for the currently displayed character
  const handleGenerateBackstory = () => {
    let currentCharacter = character;
    if (!currentCharacter) {
      const firstName = getRandomItem(FIRST_NAMES);
      const surname = getRandomItem(SURNAMES);
      const characterClass = getRandomItem(CLASSES);
      const stats = rollStats(characterClass.name);
      currentCharacter = {
        name: `${firstName} ${surname}`,
        characterClass,
        stats,
      };
      setCharacter(currentCharacter);
    }

    const story = generateCharacterBackstory(
      currentCharacter.name,
      currentCharacter.characterClass.name
    );
    setBackstory(story);
    setBackstoryAnimate(false);
    setTimeout(() => {
      setBackstoryAnimate(true);
    }, 10);
  };

  // Save the current character and its details to "My Deck"
  // Avoids duplicate entries when the same character is saved repeatedly
  const handleSaveToDeck = () => {
    if (!character) return;

    // Check for duplicate entry by character name
    const alreadyExists = deck.some((item) => item.name === character.name);
    if (alreadyExists) {
      setDeckNotification(`"${character.name}" is already in your deck.`);
      setTimeout(() => setDeckNotification(null), 2500);
      return;
    }

    // Ensure backstory exists when saving to deck
    const currentBackstory =
      backstory ||
      generateCharacterBackstory(character.name, character.characterClass.name);

    if (!backstory) {
      setBackstory(currentBackstory);
    }

    const newDeckEntry: DeckCharacter = {
      id: `deck-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: character.name,
      characterClass: character.characterClass,
      stats: { ...character.stats },
      backstory: currentBackstory,
      portraitVariation,
    };

    setDeck((prev) => [newDeckEntry, ...prev]);
    setDeckNotification(`Saved ${character.name} to My Deck!`);
    setTimeout(() => setDeckNotification(null), 2500);
  };

  // Load a character from the deck back onto the workbench card
  const handleLoadFromDeck = (deckEntry: DeckCharacter) => {
    setCharacter({
      name: deckEntry.name,
      characterClass: deckEntry.characterClass,
      stats: { ...deckEntry.stats },
    });
    setPortraitVariation(deckEntry.portraitVariation);
    setPortraitVisible(true);
    setBackstory(deckEntry.backstory);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };

  // Remove a character from the deck
  const handleRemoveFromDeck = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeck((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="alchemist-desk min-h-screen text-[#2a1a0e] flex flex-col items-center justify-start p-4 sm:p-6 sm:py-10 relative overflow-x-hidden select-none">
      {/* Background Alchemical Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-[600px] h-[600px] text-[#e0a955]" fill="none" stroke="currentColor">
          <circle cx="200" cy="200" r="180" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="140" strokeWidth="1.5" />
          <polygon points="200,60 320,270 80,270" strokeWidth="1.5" />
          <polygon points="200,340 320,130 80,130" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="80" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Main Alchemical Workspace */}
      <div className="w-full max-w-xl text-center relative z-10 flex flex-col items-center">
        {/* Heading: Stylized with antique brass filigree accents */}
        <div className="mb-6 w-full">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-[#b8864c] text-sm">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#b8864c] to-transparent" />
            <span className="text-[#dfa857] text-xs uppercase tracking-[0.25em] font-cinzel">
              Alchemist Card Forge
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#b8864c] to-transparent" />
            <span className="text-[#b8864c] text-sm">✦</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f3d38c] tracking-wider uppercase font-cinzel drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Fantasy Character Creator
          </h1>
        </div>

        {/* Visually Appealing Bordered Player Card Container */}
        <div
          id="card"
          className="character-card parchment-sheet relative rounded-2xl p-5 sm:p-7 mb-6 border-4 border-[#8c5e2e] shadow-[0_20px_40px_rgba(0,0,0,0.7),inset_0_0_20px_rgba(140,94,46,0.3)] w-full max-w-md transition-all duration-200"
        >
          {/* Ornate Double Inlaid Border */}
          <div className="absolute inset-1.5 rounded-xl border border-[#b8864c]/40 pointer-events-none" />

          {/* Antique Metallic Corner Ornaments */}
          <div className="absolute top-2 left-2 text-[#8c5e2e] font-serif select-none pointer-events-none text-xl leading-none">
            ⚜
          </div>
          <div className="absolute top-2 right-2 text-[#8c5e2e] font-serif select-none pointer-events-none text-xl leading-none">
            ⚜
          </div>
          <div className="absolute bottom-2 left-2 text-[#8c5e2e] font-serif select-none pointer-events-none text-xl leading-none">
            ⚜
          </div>
          <div className="absolute bottom-2 right-2 text-[#8c5e2e] font-serif select-none pointer-events-none text-xl leading-none">
            ⚜
          </div>

          {/* Hammered Brass Rivets */}
          <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#edd291] to-[#805018] shadow-sm border border-[#59350d]" />
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#edd291] to-[#805018] shadow-sm border border-[#59350d]" />
          <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#edd291] to-[#805018] shadow-sm border border-[#59350d]" />
          <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gradient-to-br from-[#edd291] to-[#805018] shadow-sm border border-[#59350d]" />

          <div
            id="character-display"
            className={`flex flex-col items-center justify-center ${animate ? 'fade-in' : ''}`}
          >
            {character ? (
              <>
                {/* Card Header: Class Badge */}
                <div className="class-badge inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5c2410] bg-[#ebd5b3]/90 border-2 border-[#a66a38] px-4 py-1 rounded-full mb-2 shadow-sm font-cinzel">
                  <span className="text-base">{character.characterClass.icon}</span>
                  <span className="text-[#4a1c0d] font-extrabold">{character.characterClass.name}</span>
                </div>

                {/* Character Name in stylized medieval font */}
                <div
                  className="character-name text-2xl sm:text-3xl font-extrabold text-[#2a150b] font-medieval tracking-wide mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
                >
                  {character.name}
                </div>

                {/* Portrait Window */}
                <div className="relative p-1.5 rounded-xl bg-gradient-to-b from-[#8c5e2e] via-[#4d3217] to-[#261709] shadow-md border-2 border-[#b8864c] mb-3.5">
                  <div
                    id="portrait-display"
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden border-2 border-[#d4a359]/70 bg-[#160f09] relative flex items-center justify-center shadow-inner"
                  >
                    {portraitVisible ? (
                      <div className={`w-full h-full ${portraitAnimate ? 'fade-in' : ''}`}>
                        <FantasyPortrait
                          classNameString={character.characterClass.name}
                          characterName={character.name}
                          variationIndex={portraitVariation}
                        />
                      </div>
                    ) : (
                      <div className="p-3 text-center text-[#997957] text-xs italic">
                        <span className="text-3xl block mb-1 opacity-60">⚗️</span>
                        Transmute the portrait looking-glass below to reveal {character.name}.
                      </div>
                    )}
                  </div>
                </div>

                {/* Randomly Generated Health, Mana, and Strength Stats with Clearly Displayed Numeric Values */}
                <div className="grid grid-cols-3 gap-2 w-full mb-3.5">
                  {/* Health Stat */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#ebd5b3]/90 border border-[#a87442]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#991b1b] font-cinzel flex items-center gap-1">
                      <span>❤️</span> Health
                    </span>
                    <span id="stat-health" className="text-lg sm:text-xl font-extrabold font-mono text-[#7f1d1d] tabular-nums mt-0.5">
                      {character.stats.health}
                    </span>
                  </div>

                  {/* Mana Stat */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#ebd5b3]/90 border border-[#a87442]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1e40af] font-cinzel flex items-center gap-1">
                      <span>🔷</span> Mana
                    </span>
                    <span id="stat-mana" className="text-lg sm:text-xl font-extrabold font-mono text-[#1e3a8a] tabular-nums mt-0.5">
                      {character.stats.mana}
                    </span>
                  </div>

                  {/* Strength Stat */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#ebd5b3]/90 border border-[#a87442]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b45309] font-cinzel flex items-center gap-1">
                      <span>⚔️</span> Strength
                    </span>
                    <span id="stat-strength" className="text-lg sm:text-xl font-extrabold font-mono text-[#78350f] tabular-nums mt-0.5">
                      {character.stats.strength}
                    </span>
                  </div>
                </div>

                {/* Backstory Display Container */}
                <div
                  id="backstory-display"
                  className="character-backstory w-full p-3 rounded-lg bg-[#ebd5b3]/80 border border-[#b8864c]/60 text-left shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center gap-1 mb-1 text-[10px] font-bold uppercase tracking-widest text-[#7a481c] font-cinzel">
                    <span>📜</span>
                    <span>Origin Chronicle</span>
                  </div>
                  {backstory ? (
                    <p className={`text-xs text-[#382012] leading-relaxed font-serif italic ${backstoryAnimate ? 'fade-in' : ''}`}>
                      "{backstory}"
                    </p>
                  ) : (
                    <p className="text-xs text-[#785433] italic">
                      Click the "Generate Backstory" button below to chronicle {character.name}'s origins.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="min-h-[200px] flex flex-col items-center justify-center text-[#6e4e2e]">
                <span className="text-4xl mb-3 opacity-60">🎴</span>
                <p className="placeholder-text font-medieval text-lg italic text-[#593d22]">
                  Consult the alchemist's forge below to draw a legendary hero card.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Feedback / Notification banner for Deck actions */}
        {deckNotification && (
          <div className="mb-4 px-4 py-2 rounded-lg bg-[#2a1e16] border border-[#f4c464] text-[#f4c464] text-xs font-cinzel font-semibold animate-in fade-in duration-150">
            {deckNotification}
          </div>
        )}

        {/* Workbench Action Controls */}
        <div className="flex flex-col gap-2.5 w-full max-w-md mb-8">
          {/* Portrait and Backstory Action Buttons Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <button
              id="generate-portrait-btn"
              onClick={handleGeneratePortrait}
              className="btn btn-bronze text-[#f3d38c] font-cinzel font-bold text-xs tracking-wider uppercase px-2 py-2.5 rounded-lg transition-all duration-150 cursor-pointer"
            >
              Generate Portrait
            </button>

            <button
              id="regenerate-portrait-btn"
              onClick={handleRegeneratePortrait}
              className="btn btn-bronze text-[#e2ba78] font-cinzel font-bold text-xs tracking-wider uppercase px-2 py-2.5 rounded-lg transition-all duration-150 cursor-pointer"
            >
              Regenerate Portrait
            </button>

            <button
              id="generate-backstory-btn"
              onClick={handleGenerateBackstory}
              className="btn btn-bronze col-span-2 sm:col-span-1 text-[#f6d798] font-cinzel font-bold text-xs tracking-wider uppercase px-2 py-2.5 rounded-lg transition-all duration-150 cursor-pointer"
            >
              Generate Backstory
            </button>
          </div>

          {/* "Save to Deck" Button */}
          <button
            id="save-to-deck-btn"
            onClick={handleSaveToDeck}
            disabled={!character}
            className={`btn text-xs sm:text-sm font-cinzel font-extrabold tracking-wider uppercase px-6 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${
              character
                ? 'bg-[#3b2719] hover:bg-[#4d3321] text-[#fde047] border-[#d97706] shadow-md hover:-translate-y-0.5 active:translate-y-0'
                : 'bg-[#221811] text-[#6b523e] border-[#443122] cursor-not-allowed'
            }`}
          >
            <span>🎴</span>
            <span>Save to Deck</span>
          </button>

          {/* Primary Action Button: "Generate Character" */}
          <button
            id="generate-btn"
            onClick={generateCharacter}
            className="btn btn-brass w-full text-[#241306] font-cinzel font-black text-base sm:text-lg tracking-widest uppercase px-8 py-3.5 rounded-xl transition-all duration-150 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            Generate Character
          </button>
        </div>

        {/* "My Deck" Collection Section */}
        <div className="w-full max-w-xl text-left border-t border-[#8c5e2e]/40 pt-8 mt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎴</span>
              <h2 className="text-lg sm:text-xl font-extrabold text-[#f3d38c] font-cinzel tracking-wider uppercase">
                My Deck ({deck.length})
              </h2>
            </div>
            {deck.length > 0 && (
              <span className="text-[11px] font-cinzel text-[#b8864c] uppercase tracking-wider">
                Saved Champions
              </span>
            )}
          </div>

          {/* Deck Cards Grid / List */}
          {deck.length === 0 ? (
            <div className="p-6 rounded-xl border border-dashed border-[#8c5e2e]/40 bg-[#140e0a]/50 text-center text-[#997957]">
              <p className="font-medieval text-base italic text-[#b8864c]">
                Your deck is currently empty.
              </p>
              <p className="text-xs text-[#785433] mt-1">
                Summon a hero and click "Save to Deck" to archive them into your deck.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deck.map((savedHero) => (
                <div
                  key={savedHero.id}
                  onClick={() => handleLoadFromDeck(savedHero)}
                  className="parchment-sheet relative rounded-xl p-4 border-2 border-[#8c5e2e] shadow-lg hover:border-[#f4c464] transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                  title="Click to view and load this card"
                >
                  {/* Top Bar of saved card */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5c2410] font-cinzel flex items-center gap-1">
                        <span>{savedHero.characterClass.icon}</span>
                        <span>{savedHero.characterClass.name}</span>
                      </span>
                      <button
                        onClick={(e) => handleRemoveFromDeck(savedHero.id, e)}
                        title="Remove from deck"
                        className="text-xs text-[#785433] hover:text-[#dc2626] p-1 rounded transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="text-lg font-bold font-medieval text-[#2a150b] truncate mb-2">
                      {savedHero.name}
                    </div>

                    {/* Small preview row with portrait and stats */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#b8864c] bg-[#160f09] shrink-0 shadow-inner">
                        <FantasyPortrait
                          classNameString={savedHero.characterClass.name}
                          characterName={savedHero.name}
                          variationIndex={savedHero.portraitVariation}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-1 flex-1 text-center text-[10px] font-mono">
                        <div className="bg-[#ebd5b3] p-1 rounded border border-[#a87442]/40">
                          <span className="text-[#991b1b] font-bold block text-[9px]">HP</span>
                          <span className="font-bold text-[#7f1d1d]">{savedHero.stats.health}</span>
                        </div>
                        <div className="bg-[#ebd5b3] p-1 rounded border border-[#a87442]/40">
                          <span className="text-[#1e40af] font-bold block text-[9px]">MP</span>
                          <span className="font-bold text-[#1e3a8a]">{savedHero.stats.mana}</span>
                        </div>
                        <div className="bg-[#ebd5b3] p-1 rounded border border-[#a87442]/40">
                          <span className="text-[#b45309] font-bold block text-[9px]">STR</span>
                          <span className="font-bold text-[#78350f]">{savedHero.stats.strength}</span>
                        </div>
                      </div>
                    </div>

                    {/* Backstory excerpt */}
                    <p className="text-[11px] text-[#382012] font-serif italic line-clamp-2 leading-relaxed bg-[#ebd5b3]/50 p-2 rounded border border-[#b8864c]/30">
                      "{savedHero.backstory}"
                    </p>
                  </div>

                  {/* Load prompt footer */}
                  <div className="mt-2.5 pt-1.5 border-t border-[#b8864c]/30 flex items-center justify-between text-[10px] font-cinzel text-[#8c5e2e] group-hover:text-[#4a1c0d]">
                    <span>View Card</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
