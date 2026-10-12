/**
 * APEX FORMULA 1 — 2026 WORLD CHAMPIONSHIP EXPERIENCE
 * Official 2026 WDC & WCC Standings, 2026 Grid with Hamilton at Ferrari, Sainz at Williams, 
 * Audi Works F1 Team, all 24 World Calendar Circuits & Official FOM Circuit Maps.
 */

// ==========================================================================
// 1. 2026 WORLD CONSTRUCTORS' CHAMPIONSHIP (WCC) STANDINGS & TEAMS
// ==========================================================================
const TEAMS = [
  {
    id: "mclaren",
    name: "McLaren Formula 1 Team",
    shortName: "McLaren",
    base: "Woking, United Kingdom",
    principal: "Andrea Stella",
    technicalDirector: "Rob Marshall & Peter Prodromou",
    powerUnit: "Mercedes-AMG F1 2026 Next-Gen Turbo Hybrid",
    chassis: "MCL40",
    firstEntry: 1966,
    worldChampionships: 9,
    driversChampionships: 12,
    polePositions: 168,
    fastestLaps: 175,
    color: "#FF8000",
    secondaryColor: "#111111",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarenlogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
    driverIds: ["norris", "piastri"],
    points: 603,
    rank: 1,
    wins: 7,
    podiums: 21,
    description: "Leading the 2026 Constructors' Championship! McLaren's innovative 2026 aero package and dynamic duo of Lando Norris and Oscar Piastri has them holding a knife-edge title lead over Ferrari."
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari HP",
    shortName: "Ferrari",
    base: "Maranello, Italy",
    principal: "Frédéric Vasseur",
    technicalDirector: "Loïc Serra",
    powerUnit: "Ferrari 067 2026 100% Sustainable Fuel 350kW ERS",
    chassis: "SF-26",
    firstEntry: 1950,
    worldChampionships: 16,
    driversChampionships: 15,
    polePositions: 258,
    fastestLaps: 266,
    color: "#E80020",
    secondaryColor: "#FFEB3B",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/ferrari/2026ferrarilogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
    driverIds: ["leclerc", "hamilton"],
    points: 599,
    rank: 2,
    wins: 6,
    podiums: 20,
    description: "The dream team! Charles Leclerc and 7-time champion Lewis Hamilton in iconic Scuderia scarlet have mounted a ferocious title assault, trailing McLaren by just 4 points in a historic championship thriller."
  },
  {
    id: "redbull",
    name: "Oracle Red Bull Racing",
    shortName: "Red Bull",
    base: "Milton Keynes, United Kingdom",
    principal: "Christian Horner",
    technicalDirector: "Pierre Waché",
    powerUnit: "Red Bull Ford Powertrains 2026",
    chassis: "RB22",
    firstEntry: 2005,
    worldChampionships: 6,
    driversChampionships: 7,
    polePositions: 108,
    fastestLaps: 103,
    color: "#3671C6",
    secondaryColor: "#EA1D2D",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracinglogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
    driverIds: ["verstappen", "hadjar"],
    points: 356,
    rank: 3,
    wins: 4,
    podiums: 13,
    description: "Max Verstappen continues his superhuman brilliance, wringing extraordinary victories from the new Red Bull-Ford power unit alongside French prodigy Isack Hadjar."
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG PETRONAS F1 Team",
    shortName: "Mercedes",
    base: "Brackley, United Kingdom",
    principal: "Toto Wolff",
    technicalDirector: "James Allison",
    powerUnit: "Mercedes-AMG F1 2026 High Performance PU",
    chassis: "F1 W17",
    firstEntry: 1954,
    worldChampionships: 8,
    driversChampionships: 9,
    polePositions: 142,
    fastestLaps: 112,
    color: "#27F4D2",
    secondaryColor: "#C0C0C0",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedeslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
    driverIds: ["russell", "antonelli"],
    points: 316,
    rank: 4,
    wins: 2,
    podiums: 9,
    description: "The Silver Arrows' new era: Team leader George Russell paired with Italian teenage sensation Andrea Kimi Antonelli, scoring multiple podiums with robust high-speed downforce."
  },
  {
    id: "williams",
    name: "Williams Racing",
    shortName: "Williams",
    base: "Grove, Oxfordshire, United Kingdom",
    principal: "James Vowles",
    technicalDirector: "Pat Fry",
    powerUnit: "Mercedes-AMG F1 2026",
    chassis: "FW48",
    firstEntry: 1977,
    worldChampionships: 9,
    driversChampionships: 7,
    polePositions: 128,
    fastestLaps: 134,
    color: "#64C4FF",
    secondaryColor: "#041E42",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/williams/2026williamslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
    driverIds: ["sainz", "albon"],
    points: 194,
    rank: 5,
    wins: 0,
    podiums: 5,
    description: "The biggest sensation of 2026! Led by Carlos Sainz and Alex Albon, James Vowles' revamped Williams squad has surged to 5th in the World Championship with 5 glorious podiums."
  },
  {
    id: "astonmartin",
    name: "Aston Martin Aramco F1 Team",
    shortName: "Aston Martin (Honda)",
    base: "Silverstone, United Kingdom",
    principal: "Mike Krack & Adrian Newey",
    technicalDirector: "Enrico Cardile",
    powerUnit: "Honda Works 2026 F1 Hybrid PU",
    chassis: "AMR26",
    firstEntry: 1959,
    worldChampionships: 0,
    driversChampionships: 0,
    polePositions: 1,
    fastestLaps: 4,
    color: "#229971",
    secondaryColor: "#CEDC00",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartinlogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
    driverIds: ["alonso", "stroll"],
    points: 92,
    rank: 6,
    wins: 0,
    podiums: 2,
    description: "The debut season of the official Honda Works partnership with genius designer Adrian Newey guiding the AMR26 technical evolution alongside the ageless Fernando Alonso."
  },
  {
    id: "haas",
    name: "MoneyGram Haas F1 Team",
    shortName: "Haas",
    base: "Kannapolis, North Carolina, USA",
    principal: "Ayao Komatsu",
    technicalDirector: "Andrea De Zordo",
    powerUnit: "Ferrari 067",
    chassis: "VF-26",
    firstEntry: 2016,
    worldChampionships: 0,
    driversChampionships: 0,
    polePositions: 1,
    fastestLaps: 2,
    color: "#B6BABD",
    secondaryColor: "#E10600",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/haasf1team/2026haasf1teamlogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/haasf1team/2026haasf1teamcarright.webp",
    driverIds: ["ocon", "bearman"],
    points: 66,
    rank: 7,
    wins: 0,
    podiums: 1,
    description: "Boasting race-winner Esteban Ocon and British sensation Oliver Bearman, Haas has produced aggressive midfield pace under Ayao Komatsu's focused leadership."
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    shortName: "Alpine",
    base: "Enstone, United Kingdom / Viry, France",
    principal: "Oliver Oakes",
    technicalDirector: "David Sanchez",
    powerUnit: "Mercedes-AMG 2026 Customer PU",
    chassis: "A526",
    firstEntry: 1977,
    worldChampionships: 2,
    driversChampionships: 2,
    polePositions: 20,
    fastestLaps: 16,
    color: "#0093CC",
    secondaryColor: "#FF87BC",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/alpine/2026alpinelogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
    driverIds: ["gasly", "colapinto"],
    points: 62,
    rank: 8,
    wins: 0,
    podiums: 1,
    description: "The Enstone squad features Pierre Gasly partnered with Argentine fan favourite Franco Colapinto, scoring consistent double-points finishes."
  },
  {
    id: "racingbulls",
    name: "Visa Cash App RB F1 Team",
    shortName: "Racing Bulls (RB)",
    base: "Faenza, Italy",
    principal: "Laurent Mekies",
    technicalDirector: "Jody Egginton",
    powerUnit: "Red Bull Ford Powertrains 2026",
    chassis: "VCARB 03",
    firstEntry: 1985,
    worldChampionships: 0,
    driversChampionships: 0,
    polePositions: 1,
    fastestLaps: 4,
    color: "#6692FF",
    secondaryColor: "#FFFFFF",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
    driverIds: ["lawson", "tsunoda"],
    points: 46,
    rank: 9,
    wins: 0,
    podiums: 0,
    description: "Faenza's squad fielding Liam Lawson and Yuki Tsunoda, battling tenaciously in the upper midfield with rapid corner entries."
  },
  {
    id: "audi",
    name: "Audi F1 Factory Team",
    shortName: "Audi",
    base: "Hinwil, Switzerland / Neuburg, Germany",
    principal: "Mattia Binotto & Jonathan Wheatley",
    technicalDirector: "James Key",
    powerUnit: "Audi Factory Works 2026 Hybrid PU",
    chassis: "Audi R26",
    firstEntry: 2026,
    worldChampionships: 0,
    driversChampionships: 0,
    polePositions: 0,
    fastestLaps: 1,
    color: "#52E252",
    secondaryColor: "#000000",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/audi/2026audilogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/v1740000001/common/f1/2026/audi/2026audicarright.webp",
    driverIds: ["hulkenberg", "bortoleto"],
    points: 44,
    rank: 10,
    wins: 0,
    podiums: 0,
    description: "The historic debut of the Audi Works team! Under Mattia Binotto, veteran Nico Hülkenberg and Brazilian wonderkid Gabriel Bortoleto have registered points in Audi's inaugural campaign."
  }
];

// ==========================================================================
// 2. 2026 WORLD DRIVERS' CHAMPIONSHIP (WDC) STANDINGS & DRIVERS
// ==========================================================================
const DRIVERS = [
  {
    id: "norris",
    name: "Lando Norris",
    code: "NOR",
    number: 4,
    teamId: "mclaren",
    teamName: "McLaren",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    birthDate: "13 Nov 1999",
    birthPlace: "Bristol, United Kingdom",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",
    championships: 0,
    points: 338,
    wins: 5,
    podiums: 13,
    polePositions: 7,
    gpEntries: 146,
    fastestLaps: 15,
    rank: 1,
    form: ["p1", "p2", "p1", "p3", "p1"],
    bio: "Current 2026 World Drivers' Championship leader! Lando Norris has taken the fight to Verstappen and the Ferraris with ice-cold racecraft and 5 stellar Grand Prix victories.",
    radar: { speed: 99, consistency: 97, racecraft: 96, wetWeather: 95, tyreMgmt: 96 }
  },
  {
    id: "verstappen",
    name: "Max Verstappen",
    code: "VER",
    number: 1,
    teamId: "redbull",
    teamName: "Red Bull Racing",
    country: "Netherlands",
    countryCode: "NL",
    flag: "🇳🇱",
    birthDate: "30 Sep 1997",
    birthPlace: "Hasselt, Belgium",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",
    championships: 4,
    points: 322,
    wins: 4,
    podiums: 12,
    polePositions: 6,
    gpEntries: 228,
    fastestLaps: 36,
    rank: 2,
    form: ["p2", "p1", "p3", "p2", "p4"],
    bio: "Quadruple World Champion fighting relentlessly for his 5th title. Only 16 points behind Norris, Max's wet-weather prowess and raw racecraft keep Red Bull in the hunt.",
    radar: { speed: 99, consistency: 98, racecraft: 99, wetWeather: 99, tyreMgmt: 97 }
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    code: "LEC",
    number: 16,
    teamId: "ferrari",
    teamName: "Ferrari",
    country: "Monaco",
    countryCode: "MC",
    flag: "🇲🇨",
    birthDate: "16 Oct 1997",
    birthPlace: "Monte Carlo, Monaco",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",
    championships: 0,
    points: 315,
    wins: 4,
    podiums: 11,
    polePositions: 5,
    gpEntries: 166,
    fastestLaps: 13,
    rank: 3,
    form: ["p3", "p1", "p2", "p1", "p2"],
    bio: "Ferrari's Prince of Monaco is in the form of his life, having claimed 4 magnificent victories in 2026 and locked in a ferocious title fight with teammate Hamilton and Norris.",
    radar: { speed: 99, consistency: 96, racecraft: 95, wetWeather: 93, tyreMgmt: 94 }
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    code: "HAM",
    number: 44,
    teamId: "ferrari",
    teamName: "Ferrari",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    birthDate: "07 Jan 1985",
    birthPlace: "Stevenage, United Kingdom",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",
    championships: 7,
    points: 284,
    wins: 2,
    podiums: 9,
    polePositions: 2,
    gpEntries: 375,
    fastestLaps: 69,
    rank: 4,
    form: ["p1", "p3", "p4", "p2", "p3"],
    bio: "The 7-time World Champion is experiencing a thunderous resurgence in Ferrari Red! Claimed his maiden Ferrari Grand Prix victory and remains in hot championship contention.",
    radar: { speed: 97, consistency: 97, racecraft: 99, wetWeather: 99, tyreMgmt: 98 }
  },
  {
    id: "piastri",
    name: "Oscar Piastri",
    code: "PIA",
    number: 81,
    teamId: "mclaren",
    teamName: "McLaren",
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    birthDate: "06 Apr 2001",
    birthPlace: "Melbourne, Australia",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",
    championships: 0,
    points: 265,
    wins: 2,
    podiums: 8,
    polePositions: 2,
    gpEntries: 66,
    fastestLaps: 5,
    rank: 5,
    form: ["p2", "p4", "p1", "p4", "p5"],
    bio: "Ice-cool Aussie ace with 2 wins and 8 podiums in 2026, delivering crucial constructors' points alongside Norris.",
    radar: { speed: 96, consistency: 97, racecraft: 95, wetWeather: 93, tyreMgmt: 95 }
  },
  {
    id: "russell",
    name: "George Russell",
    code: "RUS",
    number: 63,
    teamId: "mercedes",
    teamName: "Mercedes",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    birthDate: "15 Feb 1998",
    birthPlace: "King's Lynn, United Kingdom",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",
    championships: 0,
    points: 218,
    wins: 2,
    podiums: 7,
    polePositions: 3,
    gpEntries: 147,
    fastestLaps: 9,
    rank: 6,
    form: ["p4", "p5", "p1", "p5", "p2"],
    bio: "Mercedes team leader whose surgical qualifying pace and aggressive starts have yielded 2 victories in 2026.",
    radar: { speed: 96, consistency: 94, racecraft: 94, wetWeather: 95, tyreMgmt: 92 }
  },
  {
    id: "sainz",
    name: "Carlos Sainz",
    code: "SAI",
    number: 55,
    teamId: "williams",
    teamName: "Williams",
    country: "Spain",
    countryCode: "ES",
    flag: "🇪🇸",
    birthDate: "01 Sep 1994",
    birthPlace: "Madrid, Spain",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",
    championships: 0,
    points: 142,
    wins: 0,
    podiums: 4,
    polePositions: 0,
    gpEntries: 225,
    fastestLaps: 5,
    rank: 7,
    form: ["p3", "p6", "p4", "p3", "top10"],
    bio: "The 'Smooth Operator' has revitalized Williams Racing! Four podium finishes in 2026 have elevated the iconic Grove team back into the sport's elite.",
    radar: { speed: 95, consistency: 96, racecraft: 97, wetWeather: 93, tyreMgmt: 96 }
  },
  {
    id: "antonelli",
    name: "Andrea Kimi Antonelli",
    code: "ANT",
    number: 12,
    teamId: "mercedes",
    teamName: "Mercedes",
    country: "Italy",
    countryCode: "IT",
    flag: "🇮🇹",
    birthDate: "25 Aug 2006",
    birthPlace: "Bologna, Italy",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",
    championships: 0,
    points: 98,
    wins: 0,
    podiums: 2,
    polePositions: 0,
    gpEntries: 18,
    fastestLaps: 2,
    rank: 8,
    form: ["p5", "p3", "top10", "p4", "top10"],
    bio: "Italy's teenage wunderkind has stunned Formula 1 with lightning-quick reflexes, bagging 2 maiden podiums in his rookie Mercedes campaign.",
    radar: { speed: 95, consistency: 89, racecraft: 91, wetWeather: 92, tyreMgmt: 89 }
  },
  {
    id: "alonso",
    name: "Fernando Alonso",
    code: "ALO",
    number: 14,
    teamId: "astonmartin",
    teamName: "Aston Martin (Honda)",
    country: "Spain",
    countryCode: "ES",
    flag: "🇪🇸",
    birthDate: "29 Jul 1981",
    birthPlace: "Oviedo, Spain",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",
    championships: 2,
    points: 76,
    wins: 0,
    podiums: 2,
    polePositions: 0,
    gpEntries: 422,
    fastestLaps: 27,
    rank: 9,
    form: ["top10", "p3", "top10", "top10", "p5"],
    bio: "Over 420 Grand Prix starts and still lethal. Alonso has led the new Aston Martin-Honda works partnership to 2 podiums with unmatched craft.",
    radar: { speed: 94, consistency: 97, racecraft: 99, wetWeather: 97, tyreMgmt: 97 }
  },
  {
    id: "albon",
    name: "Alexander Albon",
    code: "ALB",
    number: 23,
    teamId: "williams",
    teamName: "Williams",
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    birthDate: "23 Mar 1996",
    birthPlace: "London, United Kingdom",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",
    championships: 0,
    points: 52,
    wins: 0,
    podiums: 1,
    polePositions: 0,
    gpEntries: 124,
    fastestLaps: 1,
    rank: 10,
    form: ["top10", "top10", "p3", "top10", "top10"],
    bio: "Joined teammate Sainz on the podium in 2026, delivering 52 championship points with world-class wheel-to-wheel tenacity.",
    radar: { speed: 92, consistency: 92, racecraft: 93, wetWeather: 91, tyreMgmt: 94 }
  },
  {
    id: "gasly",
    name: "Pierre Gasly",
    code: "GAS",
    number: 10,
    teamId: "alpine",
    teamName: "Alpine",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    birthDate: "07 Feb 1996",
    birthPlace: "Rouen, France",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",
    championships: 0,
    points: 44,
    wins: 0,
    podiums: 1,
    polePositions: 0,
    gpEntries: 172,
    fastestLaps: 4,
    rank: 11,
    form: ["top10", "top10", "top10", "p3", "top10"],
    bio: "Alpine team leader whose grit and sharp race execution scored 44 points and a podium in the 2026 campaign.",
    radar: { speed: 92, consistency: 91, racecraft: 92, wetWeather: 93, tyreMgmt: 90 }
  },
  {
    id: "ocon",
    name: "Esteban Ocon",
    code: "OCO",
    number: 31,
    teamId: "haas",
    teamName: "Haas",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    birthDate: "17 Sep 1996",
    birthPlace: "Évreux, France",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",
    championships: 0,
    points: 38,
    wins: 0,
    podiums: 1,
    polePositions: 0,
    gpEntries: 176,
    fastestLaps: 1,
    rank: 12,
    form: ["top10", "p3", "top10", "top10", "top10"],
    bio: "Grand Prix winner now leading Haas F1 Team, delivering an inspiring podium finish and regular top-10 performances.",
    radar: { speed: 91, consistency: 91, racecraft: 93, wetWeather: 94, tyreMgmt: 90 }
  },
  {
    id: "hulkenberg",
    name: "Nico Hülkenberg",
    code: "HUL",
    number: 27,
    teamId: "audi",
    teamName: "Audi",
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    birthDate: "19 Aug 1987",
    birthPlace: "Emmerich am Rhein, Germany",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",
    championships: 0,
    points: 32,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 246,
    fastestLaps: 3,
    rank: 13,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Spearheading Audi's historic factory entry into Formula 1, scoring Audi's maiden championship points with masterclass qualifying runs.",
    radar: { speed: 93, consistency: 93, racecraft: 91, wetWeather: 92, tyreMgmt: 91 }
  },
  {
    id: "bearman",
    name: "Oliver Bearman",
    code: "BEA",
    number: 87,
    teamId: "haas",
    teamName: "Haas",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    birthDate: "08 May 2005",
    birthPlace: "Chelmsford, United Kingdom",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",
    championships: 0,
    points: 28,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 21,
    fastestLaps: 0,
    rank: 14,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Ferrari academy graduate in his first full Haas season, demonstrating fearsome overtaking confidence.",
    radar: { speed: 92, consistency: 89, racecraft: 90, wetWeather: 89, tyreMgmt: 88 }
  },
  {
    id: "lawson",
    name: "Liam Lawson",
    code: "LAW",
    number: 30,
    teamId: "racingbulls",
    teamName: "Racing Bulls",
    country: "New Zealand",
    countryCode: "NZ",
    flag: "🇳🇿",
    birthDate: "11 Feb 2002",
    birthPlace: "Hastings, New Zealand",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/racingbulls/lialaw01/2026racingbullslialaw01right.webp",
    championships: 0,
    points: 24,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 29,
    fastestLaps: 0,
    rank: 15,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Kiwi charger displaying ferocious wheel-to-wheel racecraft to secure 24 championship points.",
    radar: { speed: 91, consistency: 90, racecraft: 93, wetWeather: 90, tyreMgmt: 89 }
  },
  {
    id: "tsunoda",
    name: "Yuki Tsunoda",
    code: "TSU",
    number: 22,
    teamId: "racingbulls",
    teamName: "Racing Bulls",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    birthDate: "11 May 2000",
    birthPlace: "Sagamihara, Japan",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",
    championships: 0,
    points: 22,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 110,
    fastestLaps: 2,
    rank: 16,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Fiery Japanese star with rapid qualifying pace and veteran experience inside the Red Bull program.",
    radar: { speed: 92, consistency: 89, racecraft: 90, wetWeather: 88, tyreMgmt: 88 }
  },
  {
    id: "colapinto",
    name: "Franco Colapinto",
    code: "COL",
    number: 43,
    teamId: "alpine",
    teamName: "Alpine",
    country: "Argentina",
    countryCode: "AR",
    flag: "🇦🇷",
    birthDate: "27 May 2003",
    birthPlace: "Pilar, Argentina",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",
    championships: 0,
    points: 18,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 27,
    fastestLaps: 0,
    rank: 17,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Argentine talent whose fearless overtakes have solidified his standing as an Alpine point-scorer.",
    radar: { speed: 92, consistency: 88, racecraft: 92, wetWeather: 89, tyreMgmt: 88 }
  },
  {
    id: "stroll",
    name: "Lance Stroll",
    code: "STR",
    number: 18,
    teamId: "astonmartin",
    teamName: "Aston Martin (Honda)",
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    birthDate: "29 Oct 1998",
    birthPlace: "Montreal, Canada",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
    championships: 0,
    points: 16,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 185,
    fastestLaps: 0,
    rank: 18,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Canadian racer contributing crucial points to the Aston Martin-Honda campaign.",
    radar: { speed: 89, consistency: 88, racecraft: 88, wetWeather: 92, tyreMgmt: 87 }
  },
  {
    id: "bortoleto",
    name: "Gabriel Bortoleto",
    code: "BOR",
    number: 5,
    teamId: "audi",
    teamName: "Audi",
    country: "Brazil",
    countryCode: "BR",
    flag: "🇧🇷",
    birthDate: "14 Oct 2004",
    birthPlace: "São Paulo, Brazil",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",
    championships: 0,
    points: 12,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 18,
    fastestLaps: 1,
    rank: 19,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Reigning F2 & F3 Champion scoring points in his rookie Formula 1 campaign for Audi.",
    radar: { speed: 92, consistency: 90, racecraft: 91, wetWeather: 90, tyreMgmt: 89 }
  },
  {
    id: "hadjar",
    name: "Isack Hadjar",
    code: "HAD",
    number: 6,
    teamId: "redbull",
    teamName: "Red Bull Racing",
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    birthDate: "28 Sep 2004",
    birthPlace: "Paris, France",
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",
    championships: 0,
    points: 10,
    wins: 0,
    podiums: 0,
    polePositions: 0,
    gpEntries: 18,
    fastestLaps: 0,
    rank: 20,
    form: ["top10", "top10", "top10", "top10", "top10"],
    bio: "Red Bull's French protege contributing 10 valuable championship points to Red Bull's 2026 campaign.",
    radar: { speed: 91, consistency: 88, racecraft: 90, wetWeather: 89, tyreMgmt: 88 }
  }
];

// ==========================================================================
// 3. ALL 24 CALENDAR CIRCUITS WITH OFFICIAL FOM TRACK MAPS
// ==========================================================================
const CIRCUITS = [
  {
    id: "bahrain",
    round: 1,
    name: "Bahrain International Circuit",
    grandPrix: "Bahrain Grand Prix",
    city: "Sakhir",
    country: "Bahrain",
    flag: "🇧🇭",
    firstGp: 2004,
    lengthKm: 5.412,
    laps: 57,
    raceDistanceKm: 308.238,
    turns: 15,
    drsZones: 3,
    lapRecord: { time: "1:31.447", driver: "Pedro de la Rosa", year: 2005 },
    topSpeed: "340 km/h",
    throttle: "66%",
    type: "Desert Night Race, High Tire Abrasion",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.webp",
    description: "The traditional twilight season opener. Known for 495 floodlights, heavy braking into Turn 1 and tricky downhill off-camber entry into Turn 10."
  },
  {
    id: "saudi_arabia",
    round: 2,
    name: "Jeddah Corniche Circuit",
    grandPrix: "Saudi Arabian Grand Prix",
    city: "Jeddah",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    firstGp: 2021,
    lengthKm: 6.174,
    laps: 50,
    raceDistanceKm: 308.450,
    turns: 27,
    drsZones: 3,
    lapRecord: { time: "1:30.734", driver: "Lewis Hamilton", year: 2021 },
    topSpeed: "350 km/h",
    throttle: "79%",
    type: "High-Speed Coastal Street Circuit",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.webp",
    description: "The fastest street circuit in the world. Features 27 blind sweeping turns hugging the Red Sea coast with speeds averaging over 250 km/h."
  },
  {
    id: "australia",
    round: 3,
    name: "Albert Park Circuit",
    grandPrix: "Australian Grand Prix",
    city: "Melbourne, Victoria",
    country: "Australia",
    flag: "🇦🇺",
    firstGp: 1996,
    lengthKm: 5.278,
    laps: 58,
    raceDistanceKm: 306.124,
    turns: 14,
    drsZones: 4,
    lapRecord: { time: "1:19.813", driver: "Charles Leclerc", year: 2024 },
    topSpeed: "340 km/h",
    throttle: "75%",
    type: "Semi-Permanent Lakeside Park Track",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.webp",
    description: "Wraps around Albert Park Lake with 4 DRS zones and fast chicane transitions that test mid-corner balance and high-speed directional agility."
  },
  {
    id: "japan",
    round: 4,
    name: "Suzuka International Racing Course",
    grandPrix: "Japanese Grand Prix",
    city: "Suzuka, Mie",
    country: "Japan",
    flag: "🇯🇵",
    firstGp: 1987,
    lengthKm: 5.807,
    laps: 53,
    raceDistanceKm: 307.471,
    turns: 18,
    drsZones: 1,
    lapRecord: { time: "1:30.983", driver: "Lewis Hamilton", year: 2019 },
    topSpeed: "330 km/h",
    throttle: "70%",
    type: "Iconic Figure-Eight Crossover Layout",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.webp",
    description: "Universally revered by drivers. Features an iconic figure-eight overpass, challenging rhythmic Esses in Sector 1, Degner corners, and flat-out 130R."
  },
  {
    id: "china",
    round: 5,
    name: "Shanghai International Circuit",
    grandPrix: "Chinese Grand Prix",
    city: "Shanghai",
    country: "China",
    flag: "🇨🇳",
    firstGp: 2004,
    lengthKm: 5.451,
    laps: 56,
    raceDistanceKm: 305.066,
    turns: 16,
    drsZones: 2,
    lapRecord: { time: "1:32.238", driver: "Michael Schumacher", year: 2004 },
    topSpeed: "345 km/h",
    throttle: "56%",
    type: "Hermann Tilke 'Shang' Character Track",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.webp",
    description: "Shaped like the Chinese character 'Shang'. Famous for the tightening 270-degree snail turn and a gargantuan 1.2km back straight."
  },
  {
    id: "miami",
    round: 6,
    name: "Miami International Autodrome",
    grandPrix: "Miami Grand Prix",
    city: "Miami Gardens, Florida",
    country: "United States",
    flag: "🇺🇸",
    firstGp: 2022,
    lengthKm: 5.412,
    laps: 57,
    raceDistanceKm: 308.326,
    turns: 19,
    drsZones: 3,
    lapRecord: { time: "1:29.708", driver: "Max Verstappen", year: 2023 },
    topSpeed: "348 km/h",
    throttle: "58%",
    type: "Modern Stadium Street Circuit",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.webp",
    description: "Built around the Hard Rock Stadium. Combines high-speed sweeping curves with a tight chicane under the turnpike highway and long straights."
  },
  {
    id: "emilia_romagna",
    round: 7,
    name: "Autodromo Enzo e Dino Ferrari",
    grandPrix: "Emilia-Romagna Grand Prix",
    city: "Imola, Bologna",
    country: "Italy",
    flag: "🇮🇹",
    firstGp: 1980,
    lengthKm: 4.909,
    laps: 63,
    raceDistanceKm: 309.049,
    turns: 19,
    drsZones: 1,
    lapRecord: { time: "1:15.484", driver: "Lewis Hamilton", year: 2020 },
    topSpeed: "330 km/h",
    throttle: "71%",
    type: "Historic Old-School Rollercoaster",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.webp",
    description: "Historic Italian cathedral of speed. Undulating elevation changes through Tamburello, Villeneuve, Piratella, Acque Minerali, and Rivazza."
  },
  {
    id: "monaco",
    round: 8,
    name: "Circuit de Monaco",
    grandPrix: "Monaco Grand Prix",
    city: "Monte Carlo",
    country: "Monaco",
    flag: "🇲🇨",
    firstGp: 1950,
    lengthKm: 3.337,
    laps: 78,
    raceDistanceKm: 260.286,
    turns: 19,
    drsZones: 1,
    lapRecord: { time: "1:12.909", driver: "Lewis Hamilton", year: 2021 },
    topSpeed: "295 km/h",
    throttle: "42%",
    type: "The Jewel in the Crown, Barrier-Lined Streets",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.webp",
    description: "Motorsport's ultimate glamour and challenge. Microscopic margins between barriers through Casino Square, Grand Hotel Hairpin, Tunnel, and Swimming Pool."
  },
  {
    id: "canada",
    round: 9,
    name: "Circuit Gilles Villeneuve",
    grandPrix: "Canadian Grand Prix",
    city: "Montreal, Quebec",
    country: "Canada",
    flag: "🇨🇦",
    firstGp: 1978,
    lengthKm: 4.361,
    laps: 70,
    raceDistanceKm: 305.270,
    turns: 14,
    drsZones: 2,
    lapRecord: { time: "1:13.078", driver: "Valtteri Bottas", year: 2019 },
    topSpeed: "345 km/h",
    throttle: "60%",
    type: "Island Park Stop-and-Go Circuit",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.webp",
    description: "Located on Île Notre-Dame. Brutal on brakes with heavy stop-and-go straights, ending at the infamous 'Wall of Champions'."
  },
  {
    id: "spain",
    round: 10,
    name: "Circuit de Barcelona-Catalunya",
    grandPrix: "Spanish Grand Prix",
    city: "Montmeló, Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    firstGp: 1991,
    lengthKm: 4.657,
    laps: 66,
    raceDistanceKm: 307.236,
    turns: 14,
    drsZones: 2,
    lapRecord: { time: "1:16.330", driver: "Max Verstappen", year: 2023 },
    topSpeed: "338 km/h",
    throttle: "68%",
    type: "Aerodynamic Benchmark Permanent Track",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.webp",
    description: "The definitive test of aerodynamic downforce and chassis balance. Features the long flat-out Turn 3 and high-speed final sweep."
  },
  {
    id: "austria",
    round: 11,
    name: "Red Bull Ring",
    grandPrix: "Austrian Grand Prix",
    city: "Spielberg, Styria",
    country: "Austria",
    flag: "🇦🇹",
    firstGp: 1970,
    lengthKm: 4.318,
    laps: 71,
    raceDistanceKm: 306.452,
    turns: 10,
    drsZones: 3,
    lapRecord: { time: "1:05.619", driver: "Carlos Sainz", year: 2020 },
    topSpeed: "335 km/h",
    throttle: "79%",
    type: "Mountain Sprint with 3 DRS Zones",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.webp",
    description: "Styrian Alpine sprint track with just 10 corners and 3 successive DRS zones, generating nonstop overtaking into Turns 1, 3, and 4."
  },
  {
    id: "great_britain",
    round: 12,
    name: "Silverstone Circuit",
    grandPrix: "British Grand Prix",
    city: "Silverstone, Northamptonshire",
    country: "United Kingdom",
    flag: "🇬🇧",
    firstGp: 1950,
    lengthKm: 5.891,
    laps: 52,
    raceDistanceKm: 306.198,
    turns: 18,
    drsZones: 2,
    lapRecord: { time: "1:27.097", driver: "Max Verstappen", year: 2020 },
    topSpeed: "340 km/h",
    throttle: "76%",
    type: "The Birthplace of F1, Ultra High Downforce",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.webp",
    description: "The historic cradle of the World Championship. Maggotts, Becketts, Chapel, and Copse test the boundaries of aerodynamic grip at over 280 km/h."
  },
  {
    id: "hungary",
    round: 13,
    name: "Hungaroring",
    grandPrix: "Hungarian Grand Prix",
    city: "Mogyoród, Budapest",
    country: "Hungary",
    flag: "🇭🇺",
    firstGp: 1986,
    lengthKm: 4.381,
    laps: 70,
    raceDistanceKm: 306.630,
    turns: 14,
    drsZones: 2,
    lapRecord: { time: "1:16.627", driver: "Lewis Hamilton", year: 2020 },
    topSpeed: "320 km/h",
    throttle: "55%",
    type: "'Monaco Without the Barriers'",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.webp",
    description: "A tight, twisty karting-style permanent circuit. Dusty, hot summer conditions make qualifying and tyre degradation paramount."
  },
  {
    id: "belgium",
    round: 14,
    name: "Circuit de Spa-Francorchamps",
    grandPrix: "Belgian Grand Prix",
    city: "Stavelot / Francorchamps",
    country: "Belgium",
    flag: "🇧🇪",
    firstGp: 1950,
    lengthKm: 7.004,
    laps: 44,
    raceDistanceKm: 308.052,
    turns: 19,
    drsZones: 2,
    lapRecord: { time: "1:46.286", driver: "Valtteri Bottas", year: 2018 },
    topSpeed: "355 km/h",
    throttle: "78%",
    type: "Ardennes Mountain Rollercoaster",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.webp",
    description: "The longest track on the calendar. Features the uphill rush through Eau Rouge/Raidillon, Kemmel Straight, Pouhon, and unpredictable microclimates."
  },
  {
    id: "netherlands",
    round: 15,
    name: "Circuit Zandvoort",
    grandPrix: "Dutch Grand Prix",
    city: "Zandvoort, North Holland",
    country: "Netherlands",
    flag: "🇳🇱",
    firstGp: 1952,
    lengthKm: 4.259,
    laps: 72,
    raceDistanceKm: 306.587,
    turns: 14,
    drsZones: 2,
    lapRecord: { time: "1:11.097", driver: "Lewis Hamilton", year: 2021 },
    topSpeed: "325 km/h",
    throttle: "65%",
    type: "North Sea Coastal Dunes with Extreme Banking",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.webp",
    description: "Nestled in the seaside sand dunes. Iconic for steep 18-degree banked corners at Hugenholtz and Arie Luyendyk curves."
  },
  {
    id: "italy",
    round: 16,
    name: "Autodromo Nazionale Monza",
    grandPrix: "Italian Grand Prix",
    city: "Monza, Lombardy",
    country: "Italy",
    flag: "🇮🇹",
    firstGp: 1950,
    lengthKm: 5.793,
    laps: 53,
    raceDistanceKm: 306.720,
    turns: 11,
    drsZones: 2,
    lapRecord: { time: "1:21.046", driver: "Rubens Barrichello", year: 2004 },
    topSpeed: "362 km/h",
    throttle: "84%",
    type: "The Temple of Speed, Ultra Low Downforce",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.webp",
    description: "The fastest circuit in Formula 1. Cars exceed 355 km/h on straights before violently braking for the Rettifilo, Roggia, and Ascari chicanes."
  },
  {
    id: "azerbaijan",
    round: 17,
    name: "Baku City Circuit",
    grandPrix: "Azerbaijan Grand Prix",
    city: "Baku",
    country: "Azerbaijan",
    flag: "🇦🇿",
    firstGp: 2016,
    lengthKm: 6.003,
    laps: 51,
    raceDistanceKm: 306.049,
    turns: 20,
    drsZones: 2,
    lapRecord: { time: "1:43.009", driver: "Charles Leclerc", year: 2019 },
    topSpeed: "360 km/h",
    throttle: "56%",
    type: "Medieval Castle Section & 2.2km Full Throttle Blast",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.webp",
    description: "Extreme contrast between the narrow 7.6-meter medieval castle section and the widest, fastest 2.2km main straight in Grand Prix racing."
  },
  {
    id: "singapore",
    round: 18,
    name: "Marina Bay Street Circuit",
    grandPrix: "Singapore Grand Prix",
    city: "Marina Bay",
    country: "Singapore",
    flag: "🇸🇬",
    firstGp: 2008,
    lengthKm: 4.940,
    laps: 62,
    raceDistanceKm: 306.143,
    turns: 19,
    drsZones: 4,
    lapRecord: { time: "1:34.486", driver: "Daniel Ricciardo", year: 2024 },
    topSpeed: "320 km/h",
    throttle: "51%",
    type: "Tropical Night Street Marathon",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.webp",
    description: "The original night race. Extreme 80% humidity and 30°C heat test driver endurance across 62 punishing laps under downtown floodlights."
  },
  {
    id: "usa",
    round: 19,
    name: "Circuit of the Americas (COTA)",
    grandPrix: "United States Grand Prix",
    city: "Austin, Texas",
    country: "United States",
    flag: "🇺🇸",
    firstGp: 2012,
    lengthKm: 5.513,
    laps: 56,
    raceDistanceKm: 308.405,
    turns: 20,
    drsZones: 2,
    lapRecord: { time: "1:36.169", driver: "Charles Leclerc", year: 2019 },
    topSpeed: "340 km/h",
    throttle: "67%",
    type: "Steep Uphill Hairpin & High-Downforce Esses",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.webp",
    description: "Renowned for its dramatic 133-foot climb into the blind Turn 1 hairpin, rapid flowing Sector 1 esses, and stadium section."
  },
  {
    id: "mexico",
    round: 20,
    name: "Autódromo Hermanos Rodríguez",
    grandPrix: "Mexico City Grand Prix",
    city: "Mexico City",
    country: "Mexico",
    flag: "🇲🇽",
    firstGp: 1963,
    lengthKm: 4.304,
    laps: 71,
    raceDistanceKm: 305.354,
    turns: 17,
    drsZones: 3,
    lapRecord: { time: "1:17.774", driver: "Valtteri Bottas", year: 2021 },
    topSpeed: "355 km/h",
    throttle: "54%",
    type: "High Altitude (2,200m) & Foro Sol Baseball Stadium",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.webp",
    description: "At 2,285 meters above sea level, thin air reduces engine power and downforce while delivering top speeds into the buzzing Foro Sol baseball stadium."
  },
  {
    id: "brazil",
    round: 21,
    name: "Autódromo José Carlos Pace (Interlagos)",
    grandPrix: "São Paulo Grand Prix",
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    firstGp: 1973,
    lengthKm: 4.309,
    laps: 71,
    raceDistanceKm: 305.879,
    turns: 15,
    drsZones: 2,
    lapRecord: { time: "1:10.540", driver: "Valtteri Bottas", year: 2018 },
    topSpeed: "338 km/h",
    throttle: "72%",
    type: "Anti-Clockwise Natural Amphitheatre",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.webp",
    description: "Motorsport poetry. Interlagos runs anti-clockwise with intense elevation changes, passionate Brazilian crowds, and legendary Senna 'S' battles."
  },
  {
    id: "las_vegas",
    round: 22,
    name: "Las Vegas Strip Circuit",
    grandPrix: "Las Vegas Grand Prix",
    city: "Las Vegas, Nevada",
    country: "United States",
    flag: "🇺🇸",
    firstGp: 2023,
    lengthKm: 6.201,
    laps: 50,
    raceDistanceKm: 310.050,
    turns: 17,
    drsZones: 2,
    lapRecord: { time: "1:34.876", driver: "Lando Norris", year: 2024 },
    topSpeed: "352 km/h",
    throttle: "78%",
    type: "Neon Night Strip Spectacle",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.webp",
    description: "Cars hit 350+ km/h blast down the iconic Las Vegas Boulevard, roaring past the Bellagio Fountains, Caesars Palace, and the Sphere."
  },
  {
    id: "qatar",
    round: 23,
    name: "Lusail International Circuit",
    grandPrix: "Qatar Grand Prix",
    city: "Lusail, Doha",
    country: "Qatar",
    flag: "🇶🇦",
    firstGp: 2021,
    lengthKm: 5.419,
    laps: 57,
    raceDistanceKm: 308.611,
    turns: 16,
    drsZones: 1,
    lapRecord: { time: "1:24.319", driver: "Max Verstappen", year: 2023 },
    topSpeed: "340 km/h",
    throttle: "74%",
    type: "High-G High-Speed Desert Circuit",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.webp",
    description: "Flowing medium and high-speed turns that subject drivers to sustained 5G loads, combined with hot desert temperatures."
  },
  {
    id: "abu_dhabi",
    round: 24,
    name: "Yas Marina Circuit",
    grandPrix: "Abu Dhabi Grand Prix",
    city: "Yas Island, Abu Dhabi",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    firstGp: 2009,
    lengthKm: 5.281,
    laps: 58,
    raceDistanceKm: 306.183,
    turns: 16,
    drsZones: 2,
    lapRecord: { time: "1:26.103", driver: "Max Verstappen", year: 2021 },
    topSpeed: "338 km/h",
    throttle: "64%",
    type: "Twilight Season Finale & Marina Spectacle",
    mapUrl: "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.webp",
    description: "The traditional sunset season finale on Yas Island. Twilight fireworks, yacht marina, and the venue where World Championships are crowned."
  }
];

// ==========================================================================
// 4. WEB AUDIO API SYNTHESIZER & REAL F1 ENGINE AUDIO
// ==========================================================================
class F1SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.audioElement = new Audio('engine_rev.mp3');
    this.audioElement.preload = 'auto';
    this.isRevving = false;
    this.setupAudioListeners();
  }

  setupAudioListeners() {
    if (!this.audioElement) return;

    this.audioElement.addEventListener('play', () => {
      this.updateRevUI(true);
    });

    this.audioElement.addEventListener('ended', () => {
      this.updateRevUI(false);
    });

    this.audioElement.addEventListener('pause', () => {
      this.updateRevUI(false);
    });

    this.audioElement.addEventListener('timeupdate', () => {
      this.updateProgress();
    });
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (!this.isMuted) {
      this.playRadioBeep();
    }
    return !this.isMuted;
  }

  playEngineRev() {
    this.init();

    // Ensure audio is audible when the user explicitly clicks Rev Engine
    if (this.isMuted) {
      this.isMuted = false;
      const audioBtn = document.getElementById("audioToggleBtn");
      if (audioBtn) {
        audioBtn.classList.add("active");
        const label = audioBtn.querySelector(".btn-label");
        if (label) label.textContent = "SFX: Active";
      }
    }

    if (this.audioElement) {
      this.audioElement.muted = false;
      // If already playing, reset to start like blipping the throttle!
      this.audioElement.currentTime = 0;
      const playPromise = this.audioElement.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.updateRevUI(true);
        }).catch(err => {
          console.warn("Audio playback issue, falling back to Web Audio synth:", err);
          this.playSyntheticEngineRev();
        });
      }
    } else {
      this.playSyntheticEngineRev();
    }
  }

  updateRevUI(active) {
    this.isRevving = active;

    const heroBtn = document.getElementById("heroRevBtn");
    if (heroBtn) {
      heroBtn.classList.toggle("is-revving", active);
      heroBtn.innerHTML = active 
        ? `<span>🔥 Revving Engine...</span>` 
        : `<span>🔊 Rev Engine</span>`;
    }

    const dynoBtn = document.getElementById("dynoRevBtn");
    if (dynoBtn) {
      dynoBtn.classList.toggle("is-revving", active);
      dynoBtn.innerHTML = active 
        ? `<span>🔥 15,000 RPM Throttle Wide Open</span>` 
        : `<span>🔊 Rev Dyno Engine</span>`;
    }

    const dynoTach = document.getElementById("dynoTachNeedle");
    if (dynoTach) {
      dynoTach.style.transform = active ? "rotate(130deg)" : "rotate(-90deg)";
    }

    const dynoRpm = document.getElementById("dynoRpmDisplay");
    if (dynoRpm) {
      dynoRpm.textContent = active ? "15,240 RPM" : "3,800 RPM (Idle)";
      dynoRpm.style.color = active ? "var(--f1-red)" : "var(--text-white)";
    }

    const eqBars = document.querySelectorAll(".audio-equalizer .eq-bar");
    eqBars.forEach(bar => {
      bar.style.animationPlayState = active ? "running" : (this.isMuted ? "paused" : "running");
    });
  }

  updateProgress() {
    if (!this.audioElement || !this.audioElement.duration) return;
    const pct = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    const bar = document.getElementById("dynoAudioProgressBar");
    if (bar) bar.style.width = `${pct}%`;

    const timeDisplay = document.getElementById("dynoAudioTime");
    if (timeDisplay) {
      const cur = this.audioElement.currentTime.toFixed(1);
      const dur = this.audioElement.duration.toFixed(1);
      timeDisplay.textContent = `${cur}s / ${dur}s`;
    }
  }

  playSyntheticEngineRev() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gainNode = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    subOsc.type = 'triangle';

    osc1.frequency.setValueAtTime(130, now);
    osc1.frequency.exponentialRampToValueAtTime(440, now + 0.35);
    osc1.frequency.exponentialRampToValueAtTime(150, now + 0.9);

    osc2.frequency.setValueAtTime(132, now);
    osc2.frequency.exponentialRampToValueAtTime(445, now + 0.35);
    osc2.frequency.exponentialRampToValueAtTime(152, now + 0.9);

    subOsc.frequency.setValueAtTime(65, now);
    subOsc.frequency.exponentialRampToValueAtTime(220, now + 0.35);
    subOsc.frequency.exponentialRampToValueAtTime(75, now + 0.9);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(2800, now + 0.35);
    filter.frequency.exponentialRampToValueAtTime(500, now + 0.9);
    filter.Q.value = 6;

    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 1.15);
    osc2.stop(now + 1.15);
    subOsc.stop(now + 1.15);
  }

  playRadioBeep() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1760, now);
    osc.frequency.setValueAtTime(2637, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }
}

const f1Audio = new F1SoundFX();

// ==========================================================================
// 5. APPLICATION INITIALIZATION & RENDERERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderDriversChampionshipTable();
  renderConstructorsChampionshipTable();
  renderTop3PodiumCards();
  renderDriversGrid(DRIVERS);
  renderTeamsGrid(TEAMS);
  renderCircuitsList(CIRCUITS);
  selectCircuit("usa"); // Set default to Round 19 COTA (next race)
  initCountdownTimer();
  initHeadToHead();
  initReactionTimer();
  setupGlobalListeners();
});

function setupGlobalListeners() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const audioBtn = document.getElementById("audioToggleBtn");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      const active = f1Audio.toggleSound();
      audioBtn.classList.toggle("active", active);
      const label = audioBtn.querySelector(".btn-label");
      if (label) {
        label.textContent = active ? "SFX: Active" : "SFX: Muted";
      }
    });
  }

  const revBtn = document.getElementById("heroRevBtn");
  if (revBtn) {
    revBtn.addEventListener("click", () => {
      f1Audio.playEngineRev();
    });
  }

  const dynoRevBtn = document.getElementById("dynoRevBtn");
  if (dynoRevBtn) {
    dynoRevBtn.addEventListener("click", () => {
      f1Audio.playEngineRev();
    });
  }

  // Standings Tab Switcher
  const btnDriversTab = document.getElementById("tabDriversStandings");
  const btnConstructorsTab = document.getElementById("tabConstructorsStandings");
  const driversContainer = document.getElementById("driversStandingsView");
  const constructorsContainer = document.getElementById("constructorsStandingsView");

  if (btnDriversTab && btnConstructorsTab) {
    btnDriversTab.addEventListener("click", () => {
      btnDriversTab.classList.add("active");
      btnConstructorsTab.classList.remove("active");
      driversContainer.style.display = "block";
      constructorsContainer.style.display = "none";
      f1Audio.playRadioBeep();
    });

    btnConstructorsTab.addEventListener("click", () => {
      btnConstructorsTab.classList.add("active");
      btnDriversTab.classList.remove("active");
      driversContainer.style.display = "none";
      constructorsContainer.style.display = "block";
      f1Audio.playRadioBeep();
    });
  }

  // Driver Filter Pills
  const driverFilters = document.querySelectorAll(".driver-filter-btn");
  driverFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      driverFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      filterDrivers(filter);
    });
  });

  // Search Inputs
  const driverSearch = document.getElementById("driverSearchInput");
  if (driverSearch) {
    driverSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = DRIVERS.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.teamName.toLowerCase().includes(query) ||
        d.country.toLowerCase().includes(query) ||
        d.code.toLowerCase().includes(query) ||
        d.number.toString().includes(query)
      );
      renderDriversGrid(filtered);
    });
  }

  const teamSearch = document.getElementById("teamSearchInput");
  if (teamSearch) {
    teamSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = TEAMS.filter(t => 
        t.name.toLowerCase().includes(query) ||
        t.base.toLowerCase().includes(query) ||
        t.powerUnit.toLowerCase().includes(query) ||
        t.principal.toLowerCase().includes(query)
      );
      renderTeamsGrid(filtered);
    });
  }

  // Circuit Search Input
  const circuitSearch = document.getElementById("circuitSearchInput");
  if (circuitSearch) {
    circuitSearch.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = CIRCUITS.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.grandPrix.toLowerCase().includes(query) ||
        c.city.toLowerCase().includes(query) ||
        c.country.toLowerCase().includes(query) ||
        `round ${c.round}`.includes(query)
      );
      renderCircuitsList(filtered);
    });
  }

  // Modal Close Listeners
  const modal = document.getElementById("f1Modal");
  const modalClose = document.getElementById("modalCloseBtn");
  if (modalClose && modal) {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

// --------------------------------------------------------------------------
// STANDINGS RENDERERS
// --------------------------------------------------------------------------
function renderTop3PodiumCards() {
  const container = document.getElementById("podiumCardsRow");
  if (!container) return;

  const top3 = DRIVERS.slice(0, 3);
  const classes = ["p1", "p2", "p3"];

  container.innerHTML = top3.map((driver, idx) => `
    <div class="podium-card ${classes[idx]}" onclick="openDriverModal('${driver.id}')">
      <div class="podium-rank-badge">P${driver.rank}</div>
      <div class="podium-driver-media">
        <img class="podium-avatar" src="${driver.image}" alt="${driver.name}" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
        <div>
          <h4 class="podium-driver-name">${driver.name} ${driver.flag}</h4>
          <p class="podium-driver-team">${driver.teamName} #${driver.number}</p>
        </div>
      </div>
      <div class="podium-stats-row">
        <div>
          <div class="podium-points-big">${driver.points} <span style="font-size:14px;color:var(--text-muted)">PTS</span></div>
          <div class="podium-points-label">${driver.wins} Wins • ${driver.podiums} Podiums</div>
        </div>
        <div class="form-badges">
          ${driver.form.map(f => `<span class="form-pill ${f}">${f.toUpperCase()}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderDriversChampionshipTable() {
  const tbody = document.getElementById("driversStandingsTbody");
  if (!tbody) return;

  const maxPoints = DRIVERS[0].points;

  tbody.innerHTML = DRIVERS.map(driver => {
    const team = TEAMS.find(t => t.id === driver.teamId) || { color: '#E10600' };
    const pct = Math.round((driver.points / maxPoints) * 100);
    const gap = driver.rank === 1 ? "LEADER" : `-${maxPoints - driver.points} PTS`;

    return `
      <tr onclick="openDriverModal('${driver.id}')">
        <td class="td-rank rank-${driver.rank}">${driver.rank}</td>
        <td>
          <div class="driver-cell">
            <img class="driver-cell-img" src="${driver.image}" alt="${driver.name}" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
            <div class="driver-cell-info">
              <span class="driver-cell-name">
                ${driver.name} <span class="driver-code-tag">${driver.code}</span>
              </span>
              <span style="font-size:12px;color:var(--text-muted)">#${driver.number} • ${driver.flag} ${driver.country}</span>
            </div>
          </div>
        </td>
        <td>
          <div class="team-pill">
            <span class="team-color-indicator" style="background:${team.color}"></span>
            <span>${driver.teamName}</span>
          </div>
        </td>
        <td><strong>${driver.wins}</strong></td>
        <td>${driver.podiums}</td>
        <td class="td-pts">
          <div>${driver.points}</div>
          <div class="pts-progress-bar-bg">
            <div class="pts-progress-bar-fill" style="width:${pct}%;background:${team.color}"></div>
          </div>
        </td>
        <td style="font-family:var(--font-mono);font-size:12px;color:var(--text-secondary)">${gap}</td>
        <td>
          <div class="form-badges">
            ${driver.form.map(f => `<span class="form-pill ${f}">${f.toUpperCase()}</span>`).join('')}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderConstructorsChampionshipTable() {
  const tbody = document.getElementById("constructorsStandingsTbody");
  if (!tbody) return;

  const maxPoints = TEAMS[0].points;

  tbody.innerHTML = TEAMS.map(team => {
    const pct = Math.round((team.points / maxPoints) * 100);
    const drivers = team.driverIds.map(id => DRIVERS.find(d => d.id === id)?.name || id).join(" & ");
    const gap = team.rank === 1 ? "LEADER" : `-${maxPoints - team.points} PTS`;

    return `
      <tr onclick="openTeamModal('${team.id}')">
        <td class="td-rank rank-${team.rank}">${team.rank}</td>
        <td>
          <div style="display:flex;align-items:center;gap:14px">
            <img src="${team.logo}" alt="${team.name}" style="height:32px;max-width:50px;object-fit:contain" onerror="this.style.display='none'">
            <div>
              <strong style="color:var(--text-white);font-size:15px">${team.name}</strong>
              <div style="font-size:12px;color:var(--text-muted)">${team.base}</div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-size:13px;color:var(--text-secondary)">${drivers}</span>
        </td>
        <td><span style="font-size:12px;color:var(--text-muted)">${team.powerUnit}</span></td>
        <td><strong>${team.wins}</strong></td>
        <td>${team.podiums}</td>
        <td class="td-pts">
          <div>${team.points}</div>
          <div class="pts-progress-bar-bg">
            <div class="pts-progress-bar-fill" style="width:${pct}%;background:${team.color}"></div>
          </div>
        </td>
        <td style="font-family:var(--font-mono);font-size:12px;color:var(--text-secondary)">${gap}</td>
      </tr>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// DRIVERS SECTION RENDERERS
// --------------------------------------------------------------------------
function renderDriversGrid(driversList) {
  const container = document.getElementById("driversGrid");
  if (!container) return;

  if (driversList.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted)">
        <p style="font-size:1.2rem;font-weight:700">No Formula 1 drivers found matching your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = driversList.map(driver => {
    const team = TEAMS.find(t => t.id === driver.teamId) || { color: '#E10600' };

    return `
      <div class="driver-card" style="--card-team-color: ${team.color}" onclick="openDriverModal('${driver.id}')">
        <div class="driver-card-header">
          <div class="driver-flag-tag">${driver.flag} ${driver.countryCode}</div>
          <div class="driver-number-badge">#${driver.number}</div>
        </div>
        <div class="driver-card-media">
          <div class="driver-backdrop-glow"></div>
          <img class="driver-photo" src="${driver.image}" alt="${driver.name}" loading="lazy" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
        </div>
        <div class="driver-card-body">
          <div class="driver-meta-team">${driver.teamName}</div>
          <h3 class="driver-meta-name">${driver.name}</h3>
          
          <div class="driver-stats-grid">
            <div class="driver-stat-item">
              <span class="driver-stat-val">${driver.points}</span>
              <span class="driver-stat-label">2026 PTS</span>
            </div>
            <div class="driver-stat-item">
              <span class="driver-stat-val">${driver.wins}</span>
              <span class="driver-stat-label">Wins</span>
            </div>
            <div class="driver-stat-item">
              <span class="driver-stat-val">${driver.championships}</span>
              <span class="driver-stat-label">Titles</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterDrivers(filter) {
  let list = DRIVERS;
  if (filter === "champions") {
    list = DRIVERS.filter(d => d.championships > 0);
  } else if (filter === "winners") {
    list = DRIVERS.filter(d => d.wins > 0);
  } else if (filter === "top5") {
    list = DRIVERS.filter(d => d.rank <= 5);
  }
  renderDriversGrid(list);
}

// --------------------------------------------------------------------------
// TEAMS GRID RENDERER
// --------------------------------------------------------------------------
function renderTeamsGrid(teamsList) {
  const container = document.getElementById("teamsGrid");
  if (!container) return;

  container.innerHTML = teamsList.map(team => {
    const drivers = team.driverIds.map(id => DRIVERS.find(d => d.id === id)).filter(Boolean);

    return `
      <div class="team-card" style="--team-color: ${team.color}" onclick="openTeamModal('${team.id}')">
        <div class="team-card-top">
          <div class="team-card-brand">
            <img class="team-logo-img" src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'">
            <div class="team-title-wrap">
              <h3>${team.name}</h3>
              <p>${team.base}</p>
            </div>
          </div>
          <div class="team-championship-badges">
            ${team.worldChampionships > 0 ? `
              <span class="championship-trophy-tag">
                🏆 ${team.worldChampionships} WCC
              </span>
            ` : ''}
          </div>
        </div>

        <div class="team-car-media">
          <img class="team-car-photo" src="${team.carImage}" alt="${team.name} Car" loading="lazy" onerror="this.style.display='none'">
        </div>

        <div class="team-card-body">
          <div class="team-drivers-roster">
            ${drivers.map(d => `
              <div class="team-driver-mini">
                <img class="driver-mini-photo" src="${d.image}" alt="${d.name}" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
                <div>
                  <div class="driver-mini-name">${d.name}</div>
                  <div class="driver-mini-num">#${d.number} • ${d.flag}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="team-specs-grid">
            <div class="team-spec-item">
              <span class="team-spec-val">${team.principal}</span>
              <span class="team-spec-label">Team Principal</span>
            </div>
            <div class="team-spec-item">
              <span class="team-spec-val">${team.chassis}</span>
              <span class="team-spec-label">2026 Chassis</span>
            </div>
            <div class="team-spec-item">
              <span class="team-spec-val">${team.points} PTS</span>
              <span class="team-spec-label">Rank #${team.rank}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// CIRCUITS SECTION RENDERER (ALL 24 OFFICIAL FOM LAYOUTS)
// --------------------------------------------------------------------------
function renderCircuitsList(circuitsList) {
  const container = document.getElementById("circuitScrollList");
  if (!container) return;

  container.innerHTML = circuitsList.map((circuit) => `
    <button type="button" class="circuit-item-pill ${circuit.id === activeCircuitId ? 'active' : ''}" data-circuit-id="${circuit.id}" onclick="selectCircuit('${circuit.id}')">
      <div class="circuit-pill-left">
        <span class="circuit-flag">${circuit.flag}</span>
        <div>
          <div class="circuit-name-text">
            <span style="color:var(--f1-red);font-size:11px;font-family:var(--font-mono)">R${String(circuit.round).padStart(2, '0')}</span> 
            ${circuit.grandPrix}
          </div>
          <div class="circuit-country-text">${circuit.name} (${circuit.city})</div>
        </div>
      </div>
      <div class="circuit-length-tag">${circuit.lengthKm} km</div>
    </button>
  `).join('');
}

let activeCircuitId = "usa"; // COTA Round 19 upcoming

function selectCircuit(circuitId) {
  activeCircuitId = circuitId;
  const circuit = CIRCUITS.find(c => c.id === circuitId);
  if (!circuit) return;

  document.querySelectorAll(".circuit-item-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.circuitId === circuitId);
  });

  document.getElementById("circuitLocationBadge").innerHTML = `${circuit.flag} ${circuit.city}, ${circuit.country} • Round ${String(circuit.round).padStart(2, '0')} of 24`;
  document.getElementById("circuitFeaturedTitle").textContent = circuit.grandPrix;
  document.getElementById("circuitOfficialName").textContent = `${circuit.name} • First Held: ${circuit.firstGp}`;

  document.getElementById("circuitSpecLength").textContent = `${circuit.lengthKm} km`;
  document.getElementById("circuitSpecLaps").textContent = `${circuit.laps} Laps (${circuit.raceDistanceKm} km)`;
  document.getElementById("circuitSpecTurns").textContent = `${circuit.turns} Turns`;
  document.getElementById("circuitSpecDrs").textContent = `${circuit.drsZones} Zones`;

  document.getElementById("circuitDescription").textContent = circuit.description;
  document.getElementById("circuitLapRecordTime").textContent = circuit.lapRecord.time;
  document.getElementById("circuitLapRecordHolder").textContent = `${circuit.lapRecord.driver} (${circuit.lapRecord.year})`;
  document.getElementById("circuitTopSpeedVal").textContent = circuit.topSpeed;
  document.getElementById("circuitThrottleVal").textContent = circuit.throttle;
  document.getElementById("circuitTypeVal").textContent = circuit.type;

  const container = document.getElementById("circuitCanvasContainer");
  if (container) {
    container.innerHTML = `
      <div class="track-round-tag"><span>Round ${String(circuit.round).padStart(2, '0')}</span></div>
      <img class="official-circuit-img" src="${circuit.mapUrl}" alt="${circuit.name} Official FOM Track Layout" title="Click to open full resolution circuit map" onclick="window.open('${circuit.mapUrl}', '_blank')">
      <div class="track-view-badge">
        <span>📍 Official FIA / FOM Circuit Layout</span>
      </div>
    `;
  }
}

// --------------------------------------------------------------------------
// MODALS (Driver Details & Team Details)
// --------------------------------------------------------------------------
window.openDriverModal = function(driverId) {
  const driver = DRIVERS.find(d => d.id === driverId);
  if (!driver) return;
  const team = TEAMS.find(t => t.id === driver.teamId) || { color: '#E10600' };

  f1Audio.playRadioBeep();

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div style="display:grid;grid-template-columns:260px 1fr;gap:28px;align-items:start">
      <div style="text-align:center;background:var(--bg-carbon);padding:24px;border-radius:var(--radius-lg);border:1px solid var(--border-subtle)">
        <img src="${driver.image}" alt="${driver.name}" style="width:180px;height:180px;object-fit:cover;border-radius:50%;border:3px solid ${team.color};margin-bottom:16px;background:#000" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
        <div style="font-size:2.4rem;font-family:var(--font-mono);font-weight:900;color:${team.color};line-height:1">#${driver.number}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${driver.flag} ${driver.country}</div>
        <div style="margin-top:14px;display:inline-block;padding:4px 12px;background:rgba(225,6,0,0.12);border:1px solid rgba(225,6,0,0.3);border-radius:4px;font-size:11px;font-weight:900;color:var(--f1-red);text-transform:uppercase">
          Rank #${driver.rank} Standings (2026)
        </div>
      </div>

      <div>
        <div style="font-size:12px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;color:${team.color}">${driver.teamName}</div>
        <h2 style="font-size:2rem;font-weight:900;margin-bottom:8px">${driver.name}</h2>
        <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:20px">${driver.bio}</p>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;background:var(--bg-carbon);padding:16px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);margin-bottom:20px">
          <div>
            <div style="font-size:1.4rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${driver.wins}</div>
            <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted)">GP Wins</div>
          </div>
          <div>
            <div style="font-size:1.4rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${driver.podiums}</div>
            <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted)">Podiums</div>
          </div>
          <div>
            <div style="font-size:1.4rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${driver.polePositions}</div>
            <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted)">Poles</div>
          </div>
          <div>
            <div style="font-size:1.4rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${driver.championships}</div>
            <div style="font-size:10px;text-transform:uppercase;color:var(--text-muted)">World Titles</div>
          </div>
        </div>

        <h4 style="font-size:12px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px">Telemetry Skill Index</h4>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${renderSkillBar("Raw Speed", driver.radar.speed, team.color)}
          ${renderSkillBar("Consistency", driver.radar.consistency, team.color)}
          ${renderSkillBar("Racecraft & Overtaking", driver.radar.racecraft, team.color)}
          ${renderSkillBar("Wet Weather Control", driver.radar.wetWeather, team.color)}
          ${renderSkillBar("Tyre Management", driver.radar.tyreMgmt, team.color)}
        </div>
      </div>
    </div>
  `;

  document.getElementById("f1Modal").classList.add("open");
};

function renderSkillBar(label, val, color) {
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;font-size:12px">
      <span style="color:var(--text-secondary);width:150px">${label}</span>
      <div style="flex-grow:1;height:6px;background:var(--bg-carbon);border-radius:3px;overflow:hidden;margin:0 12px">
        <div style="width:${val}%;height:100%;background:${color};border-radius:3px"></div>
      </div>
      <span style="font-family:var(--font-mono);font-weight:800;color:#FFF;width:30px;text-align:right">${val}</span>
    </div>
  `;
}

window.openTeamModal = function(teamId) {
  const team = TEAMS.find(t => t.id === teamId);
  if (!team) return;
  const drivers = team.driverIds.map(id => DRIVERS.find(d => d.id === id)).filter(Boolean);

  f1Audio.playRadioBeep();

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:16px">
          <img src="${team.logo}" alt="${team.name}" style="height:48px;max-width:80px;object-fit:contain" onerror="this.style.display='none'">
          <div>
            <h2 style="font-size:1.8rem;font-weight:900;margin-bottom:2px">${team.name}</h2>
            <div style="font-size:13px;color:var(--text-muted)">Base: ${team.base} • First GP: ${team.firstEntry}</div>
          </div>
        </div>
        <div style="font-size:1.5rem;font-family:var(--font-mono);font-weight:900;color:${team.color}">#${team.rank} WCC</div>
      </div>

      <div style="text-align:center;background:var(--bg-carbon);padding:20px;border-radius:var(--radius-lg);margin-bottom:24px;border:1px solid var(--border-subtle)">
        <img src="${team.carImage}" alt="${team.name} Car" style="max-height:160px;max-width:100%;object-fit:contain" onerror="this.style.display='none'">
        <div style="font-size:13px;font-weight:800;color:${team.color};margin-top:10px">${team.chassis} Powered by ${team.powerUnit}</div>
      </div>

      <p style="font-size:14px;color:var(--text-secondary);line-height:1.6;margin-bottom:24px">${team.description}</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;background:var(--bg-carbon);padding:18px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);margin-bottom:24px">
        <div>
          <div style="font-size:1.5rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${team.worldChampionships}</div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--text-muted)">Constructors Titles</div>
        </div>
        <div>
          <div style="font-size:1.5rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${team.polePositions}</div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--text-muted)">Pole Positions</div>
        </div>
        <div>
          <div style="font-size:1.5rem;font-family:var(--font-mono);font-weight:900;color:#FFF">${team.fastestLaps}</div>
          <div style="font-size:11px;text-transform:uppercase;color:var(--text-muted)">Fastest Laps</div>
        </div>
      </div>

      <h4 style="font-size:13px;font-weight:900;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-white);margin-bottom:12px">Current 2026 Driver Lineup</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        ${drivers.map(d => `
          <div style="background:var(--bg-carbon);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:14px;display:flex;align-items:center;gap:14px;cursor:pointer" onclick="openDriverModal('${d.id}')">
            <img src="${d.image}" alt="${d.name}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;background:#000" onerror="this.src='https://media.formula1.com/d_driver_fallback_image.png'">
            <div>
              <div style="font-weight:900;color:#FFF">${d.name}</div>
              <div style="font-size:12px;color:var(--text-muted)">#${d.number} • ${d.points} PTS</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById("f1Modal").classList.add("open");
};

function closeModal() {
  document.getElementById("f1Modal").classList.remove("open");
}

// --------------------------------------------------------------------------
// INTERACTIVE TOOLS: HEAD-TO-HEAD COMPARISON & REACTION TIMER
// --------------------------------------------------------------------------
function initHeadToHead() {
  const select1 = document.getElementById("compareDriver1");
  const select2 = document.getElementById("compareDriver2");
  if (!select1 || !select2) return;

  const options = DRIVERS.map(d => `<option value="${d.id}">${d.name} (${d.code})</option>`).join('');
  select1.innerHTML = options;
  select2.innerHTML = options;

  select1.value = "norris";
  select2.value = "hamilton";

  select1.addEventListener("change", updateComparison);
  select2.addEventListener("change", updateComparison);

  updateComparison();
}

function updateComparison() {
  const d1Id = document.getElementById("compareDriver1").value;
  const d2Id = document.getElementById("compareDriver2").value;
  const d1 = DRIVERS.find(d => d.id === d1Id);
  const d2 = DRIVERS.find(d => d.id === d2Id);
  if (!d1 || !d2) return;

  const metrics = [
    { label: "2026 Season Points", v1: d1.points, v2: d2.points },
    { label: "Grand Prix Wins", v1: d1.wins, v2: d2.wins },
    { label: "Career Podiums", v1: d1.podiums, v2: d2.podiums },
    { label: "Pole Positions", v1: d1.polePositions, v2: d2.polePositions },
    { label: "World Championships", v1: d1.championships, v2: d2.championships },
    { label: "Fastest Laps", v1: d1.fastestLaps, v2: d2.fastestLaps }
  ];

  const container = document.getElementById("compareMetricsList");
  container.innerHTML = metrics.map(m => {
    const total = (m.v1 + m.v2) || 1;
    const p1 = Math.round((m.v1 / total) * 100);
    const p2 = 100 - p1;

    return `
      <div class="compare-metric-row">
        <div class="metric-labels">
          <span style="color:var(--f1-red);font-size:14px;font-family:var(--font-mono)">${m.v1}</span>
          <span class="metric-name">${m.label}</span>
          <span style="color:#3B82F6;font-size:14px;font-family:var(--font-mono)">${m.v2}</span>
        </div>
        <div class="metric-dual-bar">
          <div class="bar-d1" style="width:${p1}%"></div>
          <div class="bar-d2" style="width:${p2}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

let reactionState = "idle";
let lightTimeout = null;
let lightsOutTime = 0;

function initReactionTimer() {
  const btn = document.getElementById("reactionActionBtn");
  if (!btn) return;
  btn.addEventListener("click", handleReactionClick);
}

function handleReactionClick() {
  const btn = document.getElementById("reactionActionBtn");
  const prompt = document.getElementById("reactionPromptText");
  const resultDisplay = document.getElementById("reactionResultTime");
  const commentDisplay = document.getElementById("reactionBenchmarkComment");
  const lights = document.querySelectorAll(".light-pod");

  if (reactionState === "idle" || reactionState === "done") {
    f1Audio.init();
    reactionState = "countdown";
    prompt.textContent = "Hold position! Wait for LIGHTS OUT...";
    resultDisplay.textContent = "--- ms";
    commentDisplay.textContent = "";
    btn.textContent = "Get Ready...";
    lights.forEach(l => l.classList.remove("active"));

    let count = 0;
    const interval = setInterval(() => {
      if (count < 5) {
        lights[count].classList.add("active");
        f1Audio.playRadioBeep();
        count++;
      } else {
        clearInterval(interval);
        reactionState = "waiting";

        const randomDelay = Math.floor(Math.random() * 2300) + 1200;
        lightTimeout = setTimeout(() => {
          lights.forEach(l => l.classList.remove("active"));
          lightsOutTime = performance.now();
          reactionState = "readyToClick";
          prompt.textContent = "LIGHTS OUT AND AWAY WE GO! CLICK NOW!";
        }, randomDelay);
      }
    }, 1000);

  } else if (reactionState === "countdown" || reactionState === "waiting") {
    clearTimeout(lightTimeout);
    reactionState = "done";
    lights.forEach(l => l.classList.remove("active"));
    prompt.textContent = "JUMP START! 10-Second Time Penalty!";
    resultDisplay.textContent = "FALSE START";
    commentDisplay.textContent = "You jumped before the lights went out!";
    btn.textContent = "Try Again";
  } else if (reactionState === "readyToClick") {
    const reactionTime = Math.round(performance.now() - lightsOutTime);
    reactionState = "done";
    resultDisplay.textContent = `${reactionTime} ms`;
    btn.textContent = "Test Again";

    if (reactionTime < 200) {
      prompt.textContent = "INSANE REACTION! 🏁";
      commentDisplay.textContent = "Formula 1 Tier! Quicker than Hamilton and Verstappen off the line!";
    } else if (reactionTime < 270) {
      prompt.textContent = "EXCELLENT REACTION! 🏎️";
      commentDisplay.textContent = "Grand Prix calibre reflexes! Superb start!";
    } else if (reactionTime < 350) {
      prompt.textContent = "SOLID LAUNCH! 🚦";
      commentDisplay.textContent = "Respectable start off the line.";
    } else {
      prompt.textContent = "BOGGED DOWN! 🐢";
      commentDisplay.textContent = "Caught sleeping on the grid! Practice your reaction!";
    }
  }
}

function initCountdownTimer() {
  const now = new Date();
  const nextSunday = new Date();
  nextSunday.setDate(now.getDate() + ((7 - now.getDay() + 7) % 7 || 7));
  nextSunday.setHours(15, 0, 0, 0);

  function update() {
    const current = new Date();
    const diff = nextSunday - current;

    if (diff <= 0) {
      document.getElementById("timerDays").textContent = "00";
      document.getElementById("timerHours").textContent = "00";
      document.getElementById("timerMins").textContent = "00";
      document.getElementById("timerSecs").textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timerDays").textContent = String(days).padStart(2, '0');
    document.getElementById("timerHours").textContent = String(hours).padStart(2, '0');
    document.getElementById("timerMins").textContent = String(mins).padStart(2, '0');
    document.getElementById("timerSecs").textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}
