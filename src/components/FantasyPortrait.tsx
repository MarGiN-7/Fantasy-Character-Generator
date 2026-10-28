import React from 'react';

interface FantasyPortraitProps {
  classNameString: string;
  characterName: string;
  variationIndex: number;
}

export const FantasyPortrait: React.FC<FantasyPortraitProps> = ({
  classNameString,
  characterName,
  variationIndex
}) => {
  // Normalize variation index 0, 1, 2
  const variation = Math.abs(variationIndex) % 3;

  switch (classNameString) {
    case 'Warrior':
      if (variation === 0) {
        // Heavy steel knight with golden crest and glowing visor
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="warBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
              <linearGradient id="steel0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="gold0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>
            {/* Background */}
            <rect width="200" height="200" fill="url(#warBg0)" />
            <circle cx="100" cy="90" r="75" fill="#ef4444" opacity="0.15" />

            {/* Spark particles */}
            <circle cx="45" cy="40" r="2" fill="#f87171" opacity="0.8" />
            <circle cx="160" cy="50" r="2.5" fill="#fca5a5" opacity="0.7" />
            <circle cx="30" cy="130" r="1.5" fill="#f87171" opacity="0.6" />

            {/* Pauldrons / Shoulders */}
            <path d="M25 185 Q30 135 65 140 L70 200 Z" fill="url(#steel0)" stroke="#1e293b" strokeWidth="3" />
            <path d="M175 185 Q170 135 135 140 L130 200 Z" fill="url(#steel0)" stroke="#1e293b" strokeWidth="3" />
            <path d="M50 148 L65 140 L70 170 Z" fill="url(#gold0)" opacity="0.8" />
            <path d="M150 148 L135 140 L130 170 Z" fill="url(#gold0)" opacity="0.8" />

            {/* Chestplate & Gorget */}
            <path d="M65 140 Q100 155 135 140 L140 200 H60 Z" fill="#475569" stroke="#1e293b" strokeWidth="3" />
            <polygon points="100,150 110,165 90,165" fill="url(#gold0)" />

            {/* Neck guard */}
            <rect x="80" y="115" width="40" height="30" rx="6" fill="#334155" stroke="#1e293b" strokeWidth="2" />

            {/* Helmet base */}
            <path d="M60 90 Q60 40 100 40 Q140 40 140 90 Q140 125 100 130 Q60 125 60 90 Z" fill="url(#steel0)" stroke="#1e293b" strokeWidth="3.5" />

            {/* Red plume / crest on helm */}
            <path d="M92 40 Q100 12 115 15 Q125 18 108 40 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
            <path d="M88 40 Q94 20 106 24 Z" fill="#ef4444" />

            {/* Visor plate */}
            <path d="M68 76 Q100 86 132 76 Q130 105 100 108 Q70 105 68 76 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
            
            {/* Glowing visor slit */}
            <path d="M74 85 Q100 93 126 85 Q100 90 74 85 Z" fill="#fde047" filter="drop-shadow(0 0 4px #eab308)" />

            {/* Helm golden accents & rivets */}
            <line x1="100" y1="42" x2="100" y2="76" stroke="url(#gold0)" strokeWidth="3" />
            <circle cx="70" cy="95" r="2.5" fill="#cbd5e1" />
            <circle cx="130" cy="95" r="2.5" fill="#cbd5e1" />
            <circle cx="100" cy="116" r="2.5" fill="url(#gold0)" />
          </svg>
        );
      } else if (variation === 1) {
        // Fierce Berserker with war paint & horns
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="warBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" />
                <stop offset="100%" stopColor="#27272a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#warBg1)" />
            {/* Fur collar */}
            <path d="M30 190 Q50 130 100 140 Q150 130 170 190 Z" fill="#78350f" stroke="#451a03" strokeWidth="4" />
            <circle cx="45" cy="160" r="15" fill="#92400e" />
            <circle cx="155" cy="160" r="15" fill="#92400e" />

            {/* Neck & Face */}
            <rect x="85" y="110" width="30" height="35" fill="#d97706" />
            <path d="M66 80 Q66 45 100 45 Q134 45 134 80 Q134 122 100 126 Q66 122 66 80 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="3" />

            {/* War Paint */}
            <path d="M78 75 L92 95 M78 85 L90 102" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M122 75 L108 95 M122 85 L110 102" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />

            {/* Fierce Eyes */}
            <polygon points="76,76 90,80 80,84" fill="#ffffff" stroke="#451a03" strokeWidth="1.5" />
            <circle cx="84" cy="80" r="2.5" fill="#b91c1c" />
            <polygon points="124,76 110,80 120,84" fill="#ffffff" stroke="#451a03" strokeWidth="1.5" />
            <circle cx="116" cy="80" r="2.5" fill="#b91c1c" />
            
            {/* Brow & Grimace */}
            <path d="M72 70 Q85 75 94 72" stroke="#451a03" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M128 70 Q115 75 106 72" stroke="#451a03" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M88 108 Q100 114 112 108" stroke="#451a03" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Iron Horned Circlet */}
            <path d="M62 65 Q100 58 138 65 L135 52 Q100 46 65 52 Z" fill="#475569" stroke="#1e293b" strokeWidth="2.5" />
            {/* Curved Horns */}
            <path d="M64 60 Q40 40 42 20 Q55 30 68 52 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <path d="M136 60 Q160 40 158 20 Q145 30 132 52 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          </svg>
        );
      } else {
        // High Knight with royal crested helm
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="warBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="silverPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#warBg2)" />
            {/* Heavy Shield on Back */}
            <path d="M30 140 Q100 170 170 140 L160 200 H40 Z" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="3" />
            <circle cx="100" cy="170" r="10" fill="#fbbf24" />

            {/* Knight Armor */}
            <path d="M55 125 Q100 145 145 125 L150 175 Q100 195 50 175 Z" fill="url(#silverPlate)" stroke="#334155" strokeWidth="3" />

            {/* Helmet */}
            <path d="M65 85 Q65 42 100 42 Q135 42 135 85 Q135 120 100 124 Q65 120 65 85 Z" fill="url(#silverPlate)" stroke="#334155" strokeWidth="3" />
            {/* Crown ridge */}
            <polygon points="100,24 108,44 92,44" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <polygon points="82,32 90,44 76,44" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            <polygon points="118,32 124,44 110,44" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />

            {/* T-shaped Crusader slit */}
            <rect x="74" y="78" width="52" height="8" rx="2" fill="#0f172a" />
            <rect x="96" y="78" width="8" height="32" rx="2" fill="#0f172a" />
            {/* Glowing blue warrior eyes behind slit */}
            <circle cx="86" cy="82" r="2.5" fill="#38bdf8" />
            <circle cx="114" cy="82" r="2.5" fill="#38bdf8" />
          </svg>
        );
      }

    case 'Mage':
      if (variation === 0) {
        // Arcane Archmage with deep cowl and glowing starry eyes
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mageBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b0764" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <linearGradient id="robe0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7e22ce" />
                <stop offset="100%" stopColor="#4a044e" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#mageBg0)" />

            {/* Magical runes floating */}
            <circle cx="40" cy="50" r="16" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <polygon points="40,38 48,54 32,54" fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.7" />
            <circle cx="160" cy="65" r="12" fill="none" stroke="#818cf8" strokeWidth="1.5" opacity="0.6" />
            <circle cx="160" cy="65" r="3" fill="#a855f7" />

            {/* Robe Shoulders */}
            <path d="M30 200 Q50 140 100 145 Q150 140 170 200 Z" fill="url(#robe0)" stroke="#2e1065" strokeWidth="3" />
            <path d="M75 145 L100 175 L125 145 Z" fill="#fbbf24" opacity="0.8" />

            {/* Arcane cowl & hood */}
            <path d="M50 90 Q50 35 100 28 Q150 35 150 90 Q155 130 100 135 Q45 130 50 90 Z" fill="url(#robe0)" stroke="#2e1065" strokeWidth="3.5" />
            
            {/* Shadowed inner hood face */}
            <path d="M65 90 Q65 55 100 52 Q135 55 135 90 Q130 120 100 122 Q70 120 65 90 Z" fill="#180d2b" />

            {/* Glowing violet/cyan eyes */}
            <ellipse cx="85" cy="88" rx="7" ry="4" fill="#a855f7" />
            <ellipse cx="85" cy="88" rx="3.5" ry="2" fill="#fdf4ff" filter="drop-shadow(0 0 5px #c084fc)" />
            
            <ellipse cx="115" cy="88" rx="7" ry="4" fill="#a855f7" />
            <ellipse cx="115" cy="88" rx="3.5" ry="2" fill="#fdf4ff" filter="drop-shadow(0 0 5px #c084fc)" />

            {/* Floating Arcane Orb near chin */}
            <circle cx="100" cy="155" r="10" fill="#c084fc" opacity="0.9" />
            <circle cx="98" cy="153" r="3" fill="#ffffff" />
            <circle cx="100" cy="155" r="16" fill="none" stroke="#e879f9" strokeWidth="1" opacity="0.5" />
          </svg>
        );
      } else if (variation === 1) {
        // Pyromancer with fiery hair and magic spectacles
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mageBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#431407" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#mageBg1)" />
            {/* Fiery hair flame tips */}
            <path d="M60 70 Q40 30 70 20 Q90 10 95 30 Q110 8 135 22 Q160 30 140 70 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="3" />
            <path d="M75 55 Q70 30 90 28 Q105 20 115 35 Q130 25 125 55 Z" fill="#facc15" />

            {/* Face */}
            <path d="M66 85 Q66 50 100 50 Q134 50 134 85 Q134 125 100 128 Q66 125 66 85 Z" fill="#fed7aa" stroke="#7c2d12" strokeWidth="2.5" />
            {/* Gilded Spectacles */}
            <circle cx="84" cy="86" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="116" cy="86" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <line x1="96" y1="86" x2="104" y2="86" stroke="#f59e0b" strokeWidth="2.5" />
            {/* Amber Eyes */}
            <circle cx="84" cy="86" r="4" fill="#d97706" />
            <circle cx="116" cy="86" r="4" fill="#d97706" />
            {/* Smirk */}
            <path d="M92 108 Q102 115 112 106" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Robe */}
            <path d="M35 195 Q55 140 100 145 Q145 140 165 195 Z" fill="#991b1b" stroke="#450a0a" strokeWidth="3" />
            <polygon points="100,146 108,162 92,162" fill="#fbbf24" />
          </svg>
        );
      } else {
        // Chronomancer with starry pointed wizard hat
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mageBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#mageBg2)" />
            {/* Wizard Hat Brim */}
            <ellipse cx="100" cy="75" rx="65" ry="16" fill="#312e81" stroke="#1e1b4b" strokeWidth="3" />
            {/* Wizard Hat Cone */}
            <path d="M55 75 Q100 10 125 15 Q135 25 145 75 Z" fill="#3730a3" stroke="#1e1b4b" strokeWidth="3" />
            <circle cx="125" cy="15" r="4" fill="#facc15" />
            {/* Gold Hatband with Star */}
            <path d="M58 72 Q100 82 142 72 L140 64 Q100 74 60 64 Z" fill="#f59e0b" />
            <polygon points="100,66 103,72 109,72 104,76 106,82 100,78 94,82 96,76 91,72 97,72" fill="#fef08a" />

            {/* Face & White Beard */}
            <path d="M72 82 Q72 65 100 65 Q128 65 128 82 Q128 105 100 110 Q72 105 72 82 Z" fill="#ffedd5" stroke="#4338ca" strokeWidth="2" />
            <circle cx="88" cy="85" r="3" fill="#312e81" />
            <circle cx="112" cy="85" r="3" fill="#312e81" />
            {/* Wispy Beard */}
            <path d="M75 98 Q100 145 100 155 Q100 145 125 98 Q100 115 75 98 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />

            {/* Midnight Robes */}
            <path d="M40 195 Q60 150 100 155 Q140 150 160 195 Z" fill="#1e1b4b" stroke="#0f172a" strokeWidth="3" />
          </svg>
        );
      }

    case 'Rogue':
      if (variation === 0) {
        // Shadow assassin with face mask and hood
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rogueBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rogueBg0)" />
            {/* Dagger hilts behind shoulders */}
            <path d="M35 120 L50 80 M42 95 L55 90" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <path d="M165 120 L150 80 M158 95 L145 90" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

            {/* Leather armor shoulders */}
            <path d="M30 195 Q50 140 100 145 Q150 140 170 195 Z" fill="#18181b" stroke="#052e16" strokeWidth="3" />
            
            {/* Deep Shadow Cowl */}
            <path d="M52 90 Q50 35 100 30 Q150 35 148 90 Q152 135 100 138 Q48 135 52 90 Z" fill="#0f172a" stroke="#022c22" strokeWidth="3.5" />
            
            {/* Half Face Mask */}
            <path d="M68 95 Q100 115 132 95 L128 126 Q100 134 72 126 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />

            {/* Fierce Catlike Jade Eyes */}
            <polygon points="72,82 92,86 80,90" fill="#10b981" />
            <polygon points="128,82 108,86 120,90" fill="#10b981" />
            <ellipse cx="82" cy="86" rx="2" ry="4" fill="#022c22" />
            <ellipse cx="118" cy="86" rx="2" ry="4" fill="#022c22" />
            <circle cx="83" cy="85" r="1.5" fill="#a7f3d0" />
            <circle cx="119" cy="85" r="1.5" fill="#a7f3d0" />
          </svg>
        );
      } else if (variation === 1) {
        // Dashing Swashbuckler with feathered hat
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rogueBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14532d" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rogueBg1)" />
            {/* Tricorn Hat */}
            <path d="M35 65 Q100 35 165 65 Q145 90 100 85 Q55 90 35 65 Z" fill="#292524" stroke="#0c0a09" strokeWidth="3" />
            {/* Green Feather */}
            <path d="M140 60 Q175 25 180 15 Q165 35 130 50 Z" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {/* Face */}
            <path d="M68 85 Q68 60 100 60 Q132 60 132 85 Q132 125 100 128 Q68 125 68 85 Z" fill="#fde68a" stroke="#78350f" strokeWidth="2" />
            {/* Eyes & Eyepatch */}
            <circle cx="85" cy="88" r="3.5" fill="#15803d" />
            <circle cx="86" cy="87" r="1.5" fill="#ffffff" />
            {/* Eye patch on other side */}
            <polygon points="108,82 126,82 122,94 112,94" fill="#1c1917" />
            <line x1="100" y1="78" x2="134" y2="98" stroke="#1c1917" strokeWidth="2" />
            {/* Dashing mustache and smirk */}
            <path d="M88 108 Q100 114 112 108" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M84 104 Q92 108 100 105 Q108 108 116 104" stroke="#451a03" strokeWidth="2.5" fill="none" />

            {/* Duelist Tunic */}
            <path d="M40 195 Q60 145 100 148 Q140 145 160 195 Z" fill="#047857" stroke="#064e3b" strokeWidth="3" />
          </svg>
        );
      } else {
        // Phantom Night Scout with hood and glowing rune goggles
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rogueBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#022c22" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rogueBg2)" />
            {/* Hood */}
            <path d="M52 90 Q50 30 100 25 Q150 30 148 90 Q150 135 100 138 Q50 135 52 90 Z" fill="#064e3b" stroke="#022c22" strokeWidth="3.5" />
            <path d="M64 90 Q65 55 100 50 Q135 55 136 90 Q130 120 100 122 Q70 120 64 90 Z" fill="#0f172a" />
            {/* Goggles with glowing emerald lenses */}
            <rect x="70" y="78" width="26" height="18" rx="6" fill="#10b981" stroke="#022c22" strokeWidth="2.5" />
            <rect x="104" y="78" width="26" height="18" rx="6" fill="#10b981" stroke="#022c22" strokeWidth="2.5" />
            <line x1="96" y1="87" x2="104" y2="87" stroke="#022c22" strokeWidth="3" />
            <circle cx="83" cy="87" r="3" fill="#ecfdf5" filter="drop-shadow(0 0 4px #34d399)" />
            <circle cx="117" cy="87" r="3" fill="#ecfdf5" filter="drop-shadow(0 0 4px #34d399)" />

            {/* Bandana over mouth */}
            <path d="M72 102 Q100 114 128 102 L124 125 Q100 132 76 125 Z" fill="#047857" stroke="#022c22" strokeWidth="2" />
            {/* Torso */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#18181b" stroke="#022c22" strokeWidth="3" />
          </svg>
        );
      }

    case 'Paladin':
      if (variation === 0) {
        // Radiant Crusader with solar halo and gold helm
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="palBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
              <linearGradient id="palGold0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#palBg0)" />

            {/* Radiant Sun Halo */}
            <circle cx="100" cy="85" r="68" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
            <circle cx="100" cy="85" r="58" fill="#fef08a" opacity="0.12" />

            {/* Heavy Golden Pauldrons */}
            <path d="M25 185 Q35 130 70 138 L72 200 Z" fill="url(#palGold0)" stroke="#78350f" strokeWidth="3" />
            <path d="M175 185 Q165 130 130 138 L128 200 Z" fill="url(#palGold0)" stroke="#78350f" strokeWidth="3" />

            {/* Holy Gorget with Sunburst */}
            <path d="M65 138 Q100 155 135 138 L140 200 H60 Z" fill="#f8fafc" stroke="#64748b" strokeWidth="3" />
            <circle cx="100" cy="165" r="10" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
            <path d="M100 150 V180 M85 165 H115" stroke="#fef08a" strokeWidth="2.5" />

            {/* Golden Helm */}
            <path d="M62 88 Q62 42 100 40 Q138 42 138 88 Q138 124 100 128 Q62 124 62 88 Z" fill="url(#palGold0)" stroke="#78350f" strokeWidth="3.5" />
            {/* Winged Helm Ear Guards */}
            <polygon points="56,75 38,48 64,62" fill="#fef08a" stroke="#b45309" strokeWidth="1.5" />
            <polygon points="144,75 162,48 136,62" fill="#fef08a" stroke="#b45309" strokeWidth="1.5" />

            {/* Slit and Radiant Eyes */}
            <path d="M72 82 Q100 90 128 82 Q100 86 72 82 Z" fill="#0f172a" />
            <circle cx="86" cy="83" r="2.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fbbf24)" />
            <circle cx="114" cy="83" r="2.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fbbf24)" />
          </svg>
        );
      } else if (variation === 1) {
        // High Elf Paladin with crown and golden armor
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="palBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#palBg1)" />
            {/* Flowing golden hair */}
            <path d="M52 80 Q45 140 55 170 Q70 80 80 50 Q120 50 130 80 Q140 140 148 170 Q155 140 148 80 Z" fill="#fde047" stroke="#b45309" strokeWidth="2.5" />

            {/* High Elf Face with Pointed Ears */}
            <polygon points="52,80 32,68 60,92" fill="#fed7aa" stroke="#b45309" strokeWidth="1.5" />
            <polygon points="148,80 168,68 140,92" fill="#fed7aa" stroke="#b45309" strokeWidth="1.5" />
            
            <path d="M68 80 Q68 50 100 50 Q132 50 132 80 Q132 122 100 126 Q68 122 68 80 Z" fill="#ffedd5" stroke="#9a3412" strokeWidth="2" />
            {/* Solar Circlet */}
            <polygon points="100,38 108,52 92,52" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
            <path d="M66 58 Q100 50 134 58 L132 52 Q100 44 68 52 Z" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />

            {/* Noble Calm Golden Eyes */}
            <circle cx="86" cy="82" r="3.5" fill="#d97706" />
            <circle cx="114" cy="82" r="3.5" fill="#d97706" />
            <circle cx="87" cy="81" r="1.5" fill="#ffffff" />
            <circle cx="115" cy="81" r="1.5" fill="#ffffff" />

            {/* White and Gold tabard */}
            <path d="M40 195 Q60 140 100 145 Q140 140 160 195 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="3" />
            <path d="M85 145 L100 195 L115 145 Z" fill="#f59e0b" />
          </svg>
        );
      } else {
        // Holy Inquisitor with radiant cowl and silver breastplate
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="palBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#312e81" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#palBg2)" />
            {/* White & Gold Hood */}
            <path d="M54 90 Q52 35 100 30 Q148 35 146 90 Q150 135 100 138 Q50 135 54 90 Z" fill="#f8fafc" stroke="#d97706" strokeWidth="3" />
            <path d="M66 90 Q66 60 100 55 Q134 60 134 90 Q130 118 100 120 Q70 118 66 90 Z" fill="#1e1b4b" />
            
            {/* Resolute golden eyes */}
            <circle cx="86" cy="88" r="4" fill="#fbbf24" filter="drop-shadow(0 0 3px #f59e0b)" />
            <circle cx="114" cy="88" r="4" fill="#fbbf24" filter="drop-shadow(0 0 3px #f59e0b)" />
            <circle cx="87" cy="87" r="1.5" fill="#ffffff" />
            <circle cx="115" cy="87" r="1.5" fill="#ffffff" />

            {/* Golden cross pendant */}
            <polygon points="100,140 104,148 114,148 106,154 109,164 100,158 91,164 94,154 86,148 96,148" fill="#f59e0b" />
            {/* White Mantle */}
            <path d="M35 195 Q55 145 100 150 Q145 145 165 195 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="3" />
          </svg>
        );
      }

    case 'Ranger':
      if (variation === 0) {
        // Forest Hunter with green hood and feathered clasp
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rngBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#042f2e" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rngBg0)" />
            {/* Quiver of arrows on back */}
            <rect x="145" y="60" width="16" height="50" rx="3" fill="#78350f" transform="rotate(15 145 60)" />
            <polygon points="152,45 158,55 146,55" fill="#2dd4bf" transform="rotate(15 152 45)" />
            <polygon points="162,48 168,58 156,58" fill="#f43f5e" transform="rotate(15 162 48)" />

            {/* Hunter Green Hood */}
            <path d="M55 88 Q50 32 100 25 Q150 32 145 88 Q148 135 100 138 Q52 135 55 88 Z" fill="#0f766e" stroke="#042f2e" strokeWidth="3.5" />
            
            {/* Face inside hood */}
            <path d="M68 85 Q68 55 100 50 Q132 55 132 85 Q130 120 100 122 Q70 120 68 85 Z" fill="#fde68a" stroke="#78350f" strokeWidth="2" />
            {/* Alert Turquoise Eyes */}
            <circle cx="85" cy="85" r="4" fill="#0d9488" />
            <circle cx="115" cy="85" r="4" fill="#0d9488" />
            <circle cx="86" cy="84" r="1.5" fill="#ffffff" />
            <circle cx="116" cy="84" r="1.5" fill="#ffffff" />
            {/* Camouflage cheek paint */}
            <line x1="72" y1="94" x2="84" y2="92" stroke="#115e59" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="128" y1="94" x2="116" y2="92" stroke="#115e59" strokeWidth="2.5" strokeLinecap="round" />

            {/* Leather armor with leaves */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#78350f" stroke="#451a03" strokeWidth="3" />
            <polygon points="100,150 106,162 94,162" fill="#2dd4bf" />
          </svg>
        );
      } else if (variation === 1) {
        // Frostwood sniper with wolf pelt mantle
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rngBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#083344" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rngBg1)" />
            {/* Wolf cowl */}
            <path d="M50 75 Q40 40 70 30 Q100 15 130 30 Q160 40 150 75 Q155 130 100 135 Q45 130 50 75 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="3.5" />
            {/* Wolf Ears */}
            <polygon points="65,40 50,15 80,30" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <polygon points="135,40 150,15 120,30" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />

            {/* Face */}
            <path d="M68 85 Q68 55 100 52 Q132 55 132 85 Q130 120 100 122 Q70 120 68 85 Z" fill="#ffedd5" stroke="#475569" strokeWidth="2" />
            {/* Frost blue eyes */}
            <circle cx="86" cy="85" r="4" fill="#38bdf8" />
            <circle cx="114" cy="85" r="4" fill="#38bdf8" />
            <circle cx="87" cy="84" r="1.5" fill="#ffffff" />
            <circle cx="115" cy="84" r="1.5" fill="#ffffff" />

            {/* Tunic */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#0369a1" stroke="#082f49" strokeWidth="3" />
          </svg>
        );
      } else {
        // Beast Master with eagle clasp and recurve bow
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rngBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#115e59" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#rngBg2)" />
            {/* Recurve Bow Curve behind back */}
            <path d="M25 40 Q55 100 25 180" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" fill="none" />
            <line x1="25" y1="40" x2="25" y2="180" stroke="#f8fafc" strokeWidth="1" strokeDasharray="3 2" />

            {/* Leather Hood */}
            <path d="M56 85 Q52 35 100 30 Q148 35 144 85 Q148 130 100 134 Q52 130 56 85 Z" fill="#042f2e" stroke="#0f172a" strokeWidth="3.5" />
            <path d="M68 85 Q68 55 100 50 Q132 55 132 85 Q130 120 100 122 Q70 120 68 85 Z" fill="#fde68a" stroke="#78350f" strokeWidth="2" />
            {/* Hawk Amber Eyes */}
            <circle cx="85" cy="85" r="4" fill="#f59e0b" />
            <circle cx="115" cy="85" r="4" fill="#f59e0b" />
            <circle cx="86" cy="84" r="1.5" fill="#ffffff" />
            <circle cx="116" cy="84" r="1.5" fill="#ffffff" />
            {/* Feather headpiece */}
            <path d="M125 50 Q155 35 145 20 Q135 35 118 45 Z" fill="#14b8a6" stroke="#0f766e" strokeWidth="1.5" />

            {/* Hunter Jerkin */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#0f766e" stroke="#042f2e" strokeWidth="3" />
          </svg>
        );
      }

    case 'Druid':
      if (variation === 0) {
        // Archdruid with wooden antler headdress and oak leaf cloak
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="druidBg0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14532d" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#druidBg0)" />

            {/* Antler Headdress */}
            <path d="M68 45 Q40 30 35 10 M44 22 L35 30" stroke="#a16207" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M132 45 Q160 30 165 10 M156 22 L165 30" stroke="#a16207" strokeWidth="3.5" strokeLinecap="round" />

            {/* Moss Cowl */}
            <path d="M55 85 Q52 35 100 30 Q148 35 145 85 Q148 135 100 138 Q52 135 55 85 Z" fill="#3f6212" stroke="#1a2e05" strokeWidth="3.5" />

            {/* Face */}
            <path d="M68 85 Q68 55 100 50 Q132 55 132 85 Q130 120 100 122 Q70 120 68 85 Z" fill="#fed7aa" stroke="#365314" strokeWidth="2" />
            {/* Emerald Glowing Nature Eyes */}
            <circle cx="86" cy="85" r="4.5" fill="#84cc16" filter="drop-shadow(0 0 4px #65a30d)" />
            <circle cx="114" cy="85" r="4.5" fill="#84cc16" filter="drop-shadow(0 0 4px #65a30d)" />
            <circle cx="87" cy="84" r="1.5" fill="#ffffff" />
            <circle cx="115" cy="84" r="1.5" fill="#ffffff" />

            {/* Leaf Vine Wreath on Brow */}
            <circle cx="80" cy="62" r="4" fill="#84cc16" />
            <circle cx="100" cy="58" r="5" fill="#a3e635" />
            <circle cx="120" cy="62" r="4" fill="#84cc16" />

            {/* Bark & Leaf Cloak */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#65a30d" stroke="#365314" strokeWidth="3" />
            <circle cx="100" cy="165" r="8" fill="#a16207" />
          </svg>
        );
      } else if (variation === 1) {
        // Lunar Druid with starry crown and glowing tattoos
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="druidBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#druidBg1)" />
            {/* Crescent Moon Crown */}
            <path d="M100 20 C85 20 78 30 78 42 C78 54 85 64 100 64 C92 56 88 48 88 42 C88 36 92 28 100 20 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />

            {/* Flowing hair with blossom */}
            <path d="M55 75 Q45 140 55 170 Q70 80 80 50 Q120 50 130 80 Q140 140 145 170 Q155 140 145 75 Z" fill="#4d7c0f" stroke="#1e3a1e" strokeWidth="2" />

            {/* Face */}
            <path d="M68 85 Q68 55 100 50 Q132 55 132 85 Q132 120 100 124 Q68 120 68 85 Z" fill="#fef08a" stroke="#854d0e" strokeWidth="2" />
            {/* Starry Violet Eyes */}
            <circle cx="85" cy="85" r="4" fill="#a855f7" />
            <circle cx="115" cy="85" r="4" fill="#a855f7" />
            <circle cx="86" cy="84" r="1.5" fill="#ffffff" />
            <circle cx="116" cy="84" r="1.5" fill="#ffffff" />

            {/* Moonlight Cloak */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#065f46" stroke="#022c22" strokeWidth="3" />
          </svg>
        );
      } else {
        // Primal Bearwarden with bear claw necklace and rugged beard
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="druidBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#365314" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#druidBg2)" />
            {/* Fur Hood */}
            <path d="M50 80 Q45 35 100 28 Q155 35 150 80 Q152 135 100 138 Q48 135 50 80 Z" fill="#78350f" stroke="#451a03" strokeWidth="3.5" />
            {/* Bear ears */}
            <circle cx="62" cy="42" r="14" fill="#92400e" stroke="#451a03" strokeWidth="2" />
            <circle cx="138" cy="42" r="14" fill="#92400e" stroke="#451a03" strokeWidth="2" />

            {/* Rugged face and beard */}
            <path d="M68 85 Q68 55 100 50 Q132 55 132 85 Q130 120 100 122 Q70 120 68 85 Z" fill="#fed7aa" stroke="#451a03" strokeWidth="2" />
            <path d="M72 98 Q100 145 100 155 Q100 145 128 98 Q100 115 72 98 Z" fill="#451a03" />
            {/* Glowing amber eyes */}
            <circle cx="86" cy="85" r="4" fill="#f59e0b" />
            <circle cx="114" cy="85" r="4" fill="#f59e0b" />

            {/* Torso */}
            <path d="M35 195 Q55 145 100 148 Q145 145 165 195 Z" fill="#3f6212" stroke="#1a2e05" strokeWidth="3" />
          </svg>
        );
      }

    default:
      return null;
  }
};
