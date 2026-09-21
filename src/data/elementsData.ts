import { ChemicalElement } from '../types';

export const ELEMENTS_DATA: ChemicalElement[] = [
  {
    number: 1,
    symbol: 'H',
    nameUz: 'Vodorod',
    nameLat: 'Hydrogenium',
    atomicMass: 1.008,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 1,
    group: 1,
    block: 's',
    electronConfiguration: '1s¹',
    shells: [1],
    electronegativity: 2.20,
    density: 0.00008988,
    meltingPoint: 14.01,
    boilingPoint: 20.28,
    discoveredBy: 'Genri Kevendish',
    discoveryYear: 1766,
    phase: 'Gaz',
    oxidationStates: '-1, +1',
    summaryUz: "Vodorod – koinotdagi eng ko'p tarqalgan kimyoviy element bo'lib, uning atomi 1 ta proton va 1 ta elektrondan iborat. Rang va hidsiz, havodan 14.5 barobar yengil gaz.",
    applicationsUz: [
      "Ammiak (NH₃) va mineral o'g'itlar sintezida",
      "Koinot raketalari va ekologik toza vodorod yoqilg'isida",
      "Yog'larni gidrogenlashda (margarin ishlab chiqarish)",
      "Metallurgiyada metallarni qaytarishda"
    ]
  },
  {
    number: 2,
    symbol: 'He',
    nameUz: 'Geliy',
    nameLat: 'Helium',
    atomicMass: 4.0026,
    category: 'noble-gas',
    categoryUz: 'Asil gaz',
    period: 1,
    group: 18,
    block: 's',
    electronConfiguration: '1s²',
    shells: [2],
    electronegativity: undefined,
    density: 0.0001785,
    meltingPoint: 0.95,
    boilingPoint: 4.22,
    discoveredBy: 'Pyer Janssen, Norman Lokyer',
    discoveryYear: 1868,
    phase: 'Gaz',
    oxidationStates: '0',
    summaryUz: "Geliy – reaksiyaga kirishmaydigan inert (asil) gaz. Koinotda vodoroddan keyin 2-o'rinda turadi. Qaynash harorati eng past element.",
    applicationsUz: [
      "Aerostatlar va havo sharlarini to'ldirishda",
      "MNT (MRT) skanerlarining o'ta o'tkazuvchan magnitlarini sovutishda",
      "G'avvoslar uchun nafas olish aralashmalarida (Geliox)",
      "Lazer texnikasi va mikroelektronikada"
    ]
  },
  {
    number: 3,
    symbol: 'Li',
    nameUz: 'Litiy',
    nameLat: 'Lithium',
    atomicMass: 6.94,
    category: 'alkali-metal',
    categoryUz: 'Ishqoriy metall',
    period: 2,
    group: 1,
    block: 's',
    electronConfiguration: '[He] 2s¹',
    shells: [2, 1],
    electronegativity: 0.98,
    density: 0.534,
    meltingPoint: 453.69,
    boilingPoint: 1615,
    discoveredBy: 'Yoxann Arfvedson',
    discoveryYear: 1817,
    phase: 'Qattiq',
    oxidationStates: '+1',
    summaryUz: "Litiy – eng yengil metall bo'lib, suv yuzida suzadi. Havoda tez oksidlanadi, kerosin yoki kerosin moyida saqlanadi.",
    applicationsUz: [
      "Litiy-ionli akkumulyatorlar (smartfon va elektromobillar)",
      "Aviasiya va kosmik qotishmalarida",
      "Psixiatriyada kayfiyatni barqarorlashtiruvchi preparat sifatida"
    ]
  },
  {
    number: 4,
    symbol: 'Be',
    nameUz: 'Berilliy',
    nameLat: 'Beryllium',
    atomicMass: 9.0122,
    category: 'alkaline-earth',
    categoryUz: 'Ishqoriy-yer metalli',
    period: 2,
    group: 2,
    block: 's',
    electronConfiguration: '[He] 2s²',
    shells: [2, 2],
    electronegativity: 1.57,
    density: 1.85,
    meltingPoint: 1560,
    boilingPoint: 2742,
    discoveredBy: 'Lui Nikolya Voklen',
    discoveryYear: 1798,
    phase: 'Qattiq',
    oxidationStates: '+2',
    summaryUz: "Berilliy – kulrang, juda mustahkam va yengil metall. Uning birikmalari va changi inson organizmi uchun juda zaharli hisoblanadi.",
    applicationsUz: [
      "Renta va kosmik teleskoplar oynalarini yasashda (Djeyms Uebb teleskopi)",
      "Yadro reaktorlarida neytron sekinlashtiruvchi sifatida",
      "Mustahkam berilliy bronzasi qotishmalarida"
    ]
  },
  {
    number: 5,
    symbol: 'B',
    nameUz: 'Bor',
    nameLat: 'Borum',
    atomicMass: 10.81,
    category: 'metalloid',
    categoryUz: 'Yarim metall',
    period: 2,
    group: 13,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p¹',
    shells: [2, 3],
    electronegativity: 2.04,
    density: 2.34,
    meltingPoint: 2349,
    boilingPoint: 4200,
    discoveredBy: 'Jozef Lui Gey-Lussak, Lui Tenar',
    discoveryYear: 1808,
    phase: 'Qattiq',
    oxidationStates: '+3',
    summaryUz: "Bor – amorf yoki kristall holda uchraydigan qattiq metalloid. O'simliklar oziqlanishi uchun muhim mikroelement hisoblanadi.",
    applicationsUz: [
      "Borosilikat shisha (Pyrex) va issiqqa chidamli idishlar",
      "Dezinseksiya va antiseptik vositalar (Bor kislotasi)",
      "Yadro reaktorlarida neytron yutuvchi sterjenlar"
    ]
  },
  {
    number: 6,
    symbol: 'C',
    nameUz: 'Uglerod',
    nameLat: 'Carboneum',
    atomicMass: 12.011,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 2,
    group: 14,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p²',
    shells: [2, 4],
    electronegativity: 2.55,
    density: 2.267,
    meltingPoint: 3823,
    boilingPoint: 4300,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '-4, -3, -2, -1, 0, +2, +4',
    summaryUz: "Uglerod – organik kimyoning va yer yuzidagi barcha hayotning asosi. Olmos, grafit, grafen va fulleren kabi ko'plab allotropik shakllarga ega.",
    applicationsUz: [
      "Barcha organik birikmalar va oqsillar tarkibida",
      "Olmos – kesish va zargarlikda; Grafit – qalam va elektrodlarda",
      "Aktivlashtirilgan ugol – tibbiy va suv filtrlarida",
      "Grafen va nanotubalar – kelajak elektronikasida"
    ]
  },
  {
    number: 7,
    symbol: 'N',
    nameUz: 'Azot',
    nameLat: 'Nitrogenium',
    atomicMass: 14.007,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 2,
    group: 15,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p³',
    shells: [2, 5],
    electronegativity: 3.04,
    density: 0.0012506,
    meltingPoint: 63.15,
    boilingPoint: 77.36,
    discoveredBy: 'Daniel Rezerford',
    discoveryYear: 1772,
    phase: 'Gaz',
    oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5',
    summaryUz: "Azot – Yer atmosferasining 78% qismini tashkil etuvchi rangsiz va hidsiz gaz. Oqsillar, DNK va RNK tarkibiga kiradi.",
    applicationsUz: [
      "Mineral o'g'itlar (Ammiakli selitra, Mochevina/Karbamid)",
      "Suyuq azot – biologik namunalar va mahsulotlarni muzlatishda",
      "Portlovchi moddalar (Trinitrotoluol) va dori-darmonlar sintezida"
    ]
  },
  {
    number: 8,
    symbol: 'O',
    nameUz: 'Kislorod',
    nameLat: 'Oxygenium',
    atomicMass: 15.999,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 2,
    group: 16,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁴',
    shells: [2, 6],
    electronegativity: 3.44,
    density: 0.001429,
    meltingPoint: 54.36,
    boilingPoint: 90.20,
    discoveredBy: 'Karl Sheele, Jozef Pristli',
    discoveryYear: 1774,
    phase: 'Gaz',
    oxidationStates: '-2, -1, +1, +2',
    summaryUz: "Kislorod – nafas olish va yonish jarayonlari uchun zarur bo'lgan, Yer po'stlog'ida eng ko'p tarqalgan element. Ozon (O₃) allotropligiga ega.",
    applicationsUz: [
      "Tibbiyotda bemorlarga kislorod niqoblari orqali berishda",
      "Metallurgiya va avotogen payvandlashda",
      "Ozon qatlami – Yer yuzini ultrabinafsha nurlardan qoplaydi"
    ]
  },
  {
    number: 9,
    symbol: 'F',
    nameUz: 'Ftor',
    nameLat: 'Fluorum',
    atomicMass: 18.998,
    category: 'halogen',
    categoryUz: 'Galogen',
    period: 2,
    group: 17,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁵',
    shells: [2, 7],
    electronegativity: 3.98,
    density: 0.001696,
    meltingPoint: 53.53,
    boilingPoint: 85.03,
    discoveredBy: 'Anri Muassan',
    discoveryYear: 1886,
    phase: 'Gaz',
    oxidationStates: '-1',
    summaryUz: "Ftor – eng kuchli elektromanfiy va kimyoviy jihatdan o'ta aktiv metallmas. Och sariq zaharli gaz.",
    applicationsUz: [
      "Tish pastalarida karies oldini olish uchun (Ftoridlar)",
      "Teflon (Teflon idishlar qoplamasi) ishlab chiqarishda",
      "Xladagentlar (Freonlar) sintezida"
    ]
  },
  {
    number: 10,
    symbol: 'Ne',
    nameUz: 'Neon',
    nameLat: 'Neon',
    atomicMass: 20.180,
    category: 'noble-gas',
    categoryUz: 'Asil gaz',
    period: 2,
    group: 18,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁶',
    shells: [2, 8],
    electronegativity: undefined,
    density: 0.0009002,
    meltingPoint: 24.56,
    boilingPoint: 27.07,
    discoveredBy: 'Uilyam Ramsay, Morris Travers',
    discoveryYear: 1898,
    phase: 'Gaz',
    oxidationStates: '0',
    summaryUz: "Neon – rangsiz inert gaz. Elektr toki o'tganda qizg'ish-oltin nurlanadi.",
    applicationsUz: [
      "Reklama va chiroqlardagi neon naychalari",
      "Yuqori kuchlanishli indikatorlar va lazerlar"
    ]
  },
  {
    number: 11,
    symbol: 'Na',
    nameUz: 'Natriy',
    nameLat: 'Natrium',
    atomicMass: 22.990,
    category: 'alkali-metal',
    categoryUz: 'Ishqoriy metall',
    period: 3,
    group: 1,
    block: 's',
    electronConfiguration: '[Ne] 3s¹',
    shells: [2, 8, 1],
    electronegativity: 0.93,
    density: 0.968,
    meltingPoint: 370.87,
    boilingPoint: 1156,
    discoveredBy: 'Xemfri Devi',
    discoveryYear: 1807,
    phase: 'Qattiq',
    oxidationStates: '+1',
    summaryUz: "Natriy – yumshoq, kumushrang ishqoriy metall. Suv bilan shiddatli reaksiyaga kirishib vodorod ajratadi va portlashi mumkin.",
    applicationsUz: [
      "Osh tuzi (NaCl) va sodalar (NaHCO₃, Na₂CO₃)",
      "Asab impulsini o'tkazishda inson bioximiyasida (Natriy-Kaliy nasosi)",
      "Suyuq natriy – yadro reaktorlarida issiqlik tashuvchi"
    ]
  },
  {
    number: 12,
    symbol: 'Mg',
    nameUz: 'Magniy',
    nameLat: 'Magnesium',
    atomicMass: 24.305,
    category: 'alkaline-earth',
    categoryUz: 'Ishqoriy-yer metalli',
    period: 3,
    group: 2,
    block: 's',
    electronConfiguration: '[Ne] 3s²',
    shells: [2, 8, 2],
    electronegativity: 1.31,
    density: 1.738,
    meltingPoint: 923,
    boilingPoint: 1363,
    discoveredBy: 'Jozef Blek, Xemfri Devi',
    discoveryYear: 1755,
    phase: 'Qattiq',
    oxidationStates: '+2',
    summaryUz: "Magniy – yengil, yorqin oq alyuminisimon metall. Havoda yonganda ko'zni qashtiruvchi yorqin oq olov chiqaradi. Xlorofill markaziy elementi.",
    applicationsUz: [
      "O'simliklar fotosintezi (Xlorofill pigmentining asosi)",
      "Avariya va fyuzelyajlar uchun engil aviatsion qotishmalar",
      "Pirotexnika va chaqnash chiroqlarida"
    ]
  },
  {
    number: 13,
    symbol: 'Al',
    nameUz: 'Alyuminiy',
    nameLat: 'Aluminium',
    atomicMass: 26.982,
    category: 'post-transition',
    categoryUz: 'Post-o\'tish metalli',
    period: 3,
    group: 13,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p¹',
    shells: [2, 8, 3],
    electronegativity: 1.61,
    density: 2.70,
    meltingPoint: 933.47,
    boilingPoint: 2792,
    discoveredBy: 'Xans Kristian Ersted',
    discoveryYear: 1825,
    phase: 'Qattiq',
    oxidationStates: '+3',
    summaryUz: "Alyuminiy – Yer po'stlog'ida eng ko'p uchraydigan metall. Yengil, zanglamaydigan amfoter metall.",
    applicationsUz: [
      "Samolyotlar, avtomobillar va qurilish konstruksiyalarida",
      "Oziq-ovqat folgasi va ichimlik bankalari",
      "Yuqori kuchlanishli elektr simlarida"
    ]
  },
  {
    number: 14,
    symbol: 'Si',
    nameUz: 'Kremniy',
    nameLat: 'Silicium',
    atomicMass: 28.085,
    category: 'metalloid',
    categoryUz: 'Yarim metall',
    period: 3,
    group: 14,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p²',
    shells: [2, 8, 4],
    electronegativity: 1.90,
    density: 2.329,
    meltingPoint: 1687,
    boilingPoint: 3538,
    discoveredBy: 'Yons Yakob Berselius',
    discoveryYear: 1824,
    phase: 'Qattiq',
    oxidationStates: '-4, +2, +4',
    summaryUz: "Kremniy – yarim o'tkazgich material. Qum (SiO₂) va tog' jinslarining asosiy tashkil etuvchisi.",
    applicationsUz: [
      "Mikroprotsessorlar, kompyuter chipi va quyosh panellari",
      "Shisha, keramik koshinlar va sement ishlab chiqarish",
      "Silikon polimerlar va germetiklar"
    ]
  },
  {
    number: 15,
    symbol: 'P',
    nameUz: 'Fosfor',
    nameLat: 'Phosphorus',
    atomicMass: 30.974,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 3,
    group: 15,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p³',
    shells: [2, 8, 5],
    electronegativity: 2.19,
    density: 1.823,
    meltingPoint: 317.3,
    boilingPoint: 553.7,
    discoveredBy: 'Xennig Brand',
    discoveryYear: 1669,
    phase: 'Qattiq',
    oxidationStates: '-3, +3, +5',
    summaryUz: "Fosfor – oq, qizil va qora allotroplarga ega metallmas. DNK, RNK, ATF va suyak toqimalarining ajralmas qismi.",
    applicationsUz: [
      "Fosforli o'g'itlar (Superfosfat, Ammofos)",
      "Gugurt ishlab chiqarish va pirotexnika",
      "Hujayra energiyasi (ATF – Adenozintrifosfat)"
    ]
  },
  {
    number: 16,
    symbol: 'S',
    nameUz: 'Oltingugurt',
    nameLat: 'Sulfur',
    atomicMass: 32.06,
    category: 'nonmetal',
    categoryUz: 'Metallmas',
    period: 3,
    group: 16,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁴',
    shells: [2, 8, 6],
    electronegativity: 2.58,
    density: 2.07,
    meltingPoint: 388.36,
    boilingPoint: 717.8,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '-2, +2, +4, +6',
    summaryUz: "Oltingugurt – sariq kristall metallmas. Kislotalar qiroli – Sulfat kislotasi (H₂SO₄) sintezining asosi.",
    applicationsUz: [
      "Sulfat kislotasi va dori vositalari (Sulfanilamidlar)",
      "Kavchukni vulkanizatsiyalash va rezina ishlab chiqarish",
      "Qishloq xo'jaligi zararkunandalariga qarshi vosita"
    ]
  },
  {
    number: 17,
    symbol: 'Cl',
    nameUz: 'Xlor',
    nameLat: 'Chlorum',
    atomicMass: 35.45,
    category: 'halogen',
    categoryUz: 'Galogen',
    period: 3,
    group: 17,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁵',
    shells: [2, 8, 7],
    electronegativity: 3.16,
    density: 0.003214,
    meltingPoint: 171.6,
    boilingPoint: 239.11,
    discoveredBy: 'Karl Sheele',
    discoveryYear: 1774,
    phase: 'Gaz',
    oxidationStates: '-1, +1, +3, +5, +7',
    summaryUz: "Xlor – sariq-yashil rangli, o'tkir hidsiz va zaharli gaz. Kuchli desinfeksiyalovchi vosita.",
    applicationsUz: [
      "Ichimlik suvini dezinfeksiya qilish va zararsizlantirish",
      "PVX plastmassa va xlorli erituvchilar sintezi",
      "Osh tuzi (NaCl) va oshqozon shirasi (HCl) tarkibida"
    ]
  },
  {
    number: 18,
    symbol: 'Ar',
    nameUz: 'Argon',
    nameLat: 'Argon',
    atomicMass: 39.948,
    category: 'noble-gas',
    categoryUz: 'Asil gaz',
    period: 3,
    group: 18,
    block: 'p',
    electronConfiguration: '[Ne] 3s² 3p⁶',
    shells: [2, 8, 8],
    electronegativity: undefined,
    density: 0.001784,
    meltingPoint: 83.80,
    boilingPoint: 87.30,
    discoveredBy: 'Lord Reley, Uilyam Ramsay',
    discoveryYear: 1894,
    phase: 'Gaz',
    oxidationStates: '0',
    summaryUz: "Argon – Yer atmosferasida eng ko'p tarqalgan inert gaz (taxminan 0.93%).",
    applicationsUz: [
      "Argonli payvandlash jarayonlarida himoya muhiti",
      "Qadimgi yoritgich lampalari va oyna paketlarini to'ldirishda"
    ]
  },
  {
    number: 19,
    symbol: 'K',
    nameUz: 'Kaliy',
    nameLat: 'Kalium',
    atomicMass: 39.098,
    category: 'alkali-metal',
    categoryUz: 'Ishqoriy metall',
    period: 4,
    group: 1,
    block: 's',
    electronConfiguration: '[Ar] 4s¹',
    shells: [2, 8, 8, 1],
    electronegativity: 0.82,
    density: 0.89,
    meltingPoint: 336.53,
    boilingPoint: 1032,
    discoveredBy: 'Xemfri Devi',
    discoveryYear: 1807,
    phase: 'Qattiq',
    oxidationStates: '+1',
    summaryUz: "Kaliy – o'ta aktiv ishqoriy metall. O'simliklar o'sishi va inson yurak faoliyati uchun muhim element.",
    applicationsUz: [
      "Kaliy o'g'itlari (KCl, KNO₃)",
      "Yurak mushaklari qisqarishi va bioelektr impulslar",
      "Sovun ishlab chiqarish va kimyoviy reaktivlar"
    ]
  },
  {
    number: 20,
    symbol: 'Ca',
    nameUz: 'Kalsiy',
    nameLat: 'Calcium',
    atomicMass: 40.078,
    category: 'alkaline-earth',
    categoryUz: 'Ishqoriy-yer metalli',
    period: 4,
    group: 2,
    block: 's',
    electronConfiguration: '[Ar] 4s²',
    shells: [2, 8, 8, 2],
    electronegativity: 1.00,
    density: 1.55,
    meltingPoint: 1115,
    boilingPoint: 1757,
    discoveredBy: 'Xemfri Devi',
    discoveryYear: 1808,
    phase: 'Qattiq',
    oxidationStates: '+2',
    summaryUz: "Kalsiy – suyak va tish toqimalarining asosi bo'lgan faol metall. Bo'r, marmar va ohaktosh (CaCO₃) ko'rinishida uchraydi.",
    applicationsUz: [
      "Suyak, tish va chig'anoqlar shakllanishi",
      "Qurilishda – gips, sement, so'ndirilgan ohak",
      "Qon ivishi va mushak qisqarishi fiziologiyasida"
    ]
  },
  {
    number: 26,
    symbol: 'Fe',
    nameUz: 'Temir',
    nameLat: 'Ferrum',
    atomicMass: 55.845,
    category: 'transition-metal',
    categoryUz: 'O\'tish metalli',
    period: 4,
    group: 8,
    block: 'd',
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    shells: [2, 8, 14, 2],
    electronegativity: 1.83,
    density: 7.874,
    meltingPoint: 1811,
    boilingPoint: 3134,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '+2, +3, +6',
    summaryUz: "Temir – insoniyat sivilizatsiyasining asosi bo'lgan magnitli metall. Qondagi gemoglobin tarkibida kislorod tashish vazifasini bajaradi.",
    applicationsUz: [
      "Cho'yan va po'lat ishlab chiqarish",
      "Qondagi gemoglobin moddasi (Kislorod tashuvchisi)",
      "Magnit va sanoat qurilmalari"
    ]
  },
  {
    number: 29,
    symbol: 'Cu',
    nameUz: 'Mis',
    nameLat: 'Cuprum',
    atomicMass: 63.546,
    category: 'transition-metal',
    categoryUz: 'O\'tish metalli',
    period: 4,
    group: 11,
    block: 'd',
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    shells: [2, 8, 18, 1],
    electronegativity: 1.90,
    density: 8.96,
    meltingPoint: 1357.77,
    boilingPoint: 2835,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '+1, +2',
    summaryUz: "Mis – qizg'ish tusli, elektr va issiqlikni o'ta yaxshi o'tkazadigan qadimiy metall.",
    applicationsUz: [
      "Elektr kabellari va mikrosxemalar",
      "Bronza (mis-qalay) va Latun (mis-sux) qotishmalari",
      "Gepatoprotektor va fungitsidlar (Mis kuporosi)"
    ]
  },
  {
    number: 47,
    symbol: 'Ag',
    nameUz: 'Kumush',
    nameLat: 'Argentum',
    atomicMass: 107.87,
    category: 'transition-metal',
    categoryUz: 'O\'tish metalli',
    period: 5,
    group: 11,
    block: 'd',
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    shells: [2, 8, 18, 18, 1],
    electronegativity: 1.93,
    density: 10.49,
    meltingPoint: 1234.93,
    boilingPoint: 2435,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '+1',
    summaryUz: "Kumush – eng yuqori elektr va issiqlik o'tkazuvchanlikka ega asil metall. Bakteritsid va antiseptik xususiyatga ega.",
    applicationsUz: [
      "Zargarlik va tangalar",
      "Suvni bakteriyalardan tozalash va tibbiy antiseptika",
      "Quyosh panellari va kontaktlar"
    ]
  },
  {
    number: 79,
    symbol: 'Au',
    nameUz: 'Oltin',
    nameLat: 'Aurum',
    atomicMass: 196.97,
    category: 'transition-metal',
    categoryUz: 'O\'tish metalli',
    period: 6,
    group: 11,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    shells: [2, 8, 18, 32, 18, 1],
    electronegativity: 2.54,
    density: 19.30,
    meltingPoint: 1337.33,
    boilingPoint: 3243,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Qattiq',
    oxidationStates: '+1, +3',
    summaryUz: "Oltin – zanglamaydigan, korroziyaga o'ta chidamli sariq rangli asil metall. Dunyo moliya tizimi valyuta zahiralari asosi.",
    applicationsUz: [
      "Xalqaro valyuta va zargarlik buyumlari",
      "Mikroelektronika va kosmik skafandrlarni oltin bilan qoplash",
      "Stomatologiya va tibbiyot"
    ]
  },
  {
    number: 80,
    symbol: 'Hg',
    nameUz: 'Simob',
    nameLat: 'Hydrargyrum',
    atomicMass: 200.59,
    category: 'transition-metal',
    categoryUz: 'O\'tish metalli',
    period: 6,
    group: 12,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    shells: [2, 8, 18, 32, 18, 2],
    electronegativity: 2.00,
    density: 13.534,
    meltingPoint: 234.32,
    boilingPoint: 629.88,
    discoveredBy: 'Qadimiy element',
    discoveryYear: 'Qadimiy',
    phase: 'Suyuq',
    oxidationStates: '+1, +2',
    summaryUz: "Simob – xona haroratida suyuq holda bo'ladigan yagona metall. Uning bug'lari o'ta zaharli va nerv tizimini zararlaydi.",
    applicationsUz: [
      "Termometrlar va barometrlar (eski namunalar)",
      "Fluorestsent va lyuminessent chiroqlar",
      "Amalgama qotishmalari"
    ]
  },
  {
    number: 92,
    symbol: 'U',
    nameUz: 'Uran',
    nameLat: 'Uranium',
    atomicMass: 238.03,
    category: 'actinide',
    categoryUz: 'Aktinoid',
    period: 7,
    group: 3,
    block: 'f',
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    shells: [2, 8, 18, 32, 21, 9, 2],
    electronegativity: 1.38,
    density: 19.1,
    meltingPoint: 1405.3,
    boilingPoint: 4404,
    discoveredBy: 'Martin Klaprot',
    discoveryYear: 1789,
    phase: 'Qattiq',
    oxidationStates: '+3, +4, +5, +6',
    summaryUz: "Uran – og'ir radioaktiv metall. Yadro energetikasining asosiy yoqilg'isi.",
    applicationsUz: [
      "Atom elektr stansiyalarida elektr energiyasi olish",
      "Yadroviy qurollar va izotopik tadqiqotlar"
    ]
  }
];

// Helper generator for other periodic elements to ensure full 118-element visual table
export function getFullPeriodicTableElements(): ChemicalElement[] {
  const map = new Map<number, ChemicalElement>();
  ELEMENTS_DATA.forEach(el => map.set(el.number, el));

  // Placeholder data generator for remaining elements so the table renders completely
  const elementNamesUz: { [key: number]: { name: string; sym: string; cat: any; catUz: string; per: number; grp: number; mass: number; phase: any; config: string } } = {
    15: { name: 'Fosfor', sym: 'P', cat: 'nonmetal', catUz: 'Metallmas', per: 3, grp: 15, mass: 30.97, phase: 'Qattiq', config: '[Ne] 3s² 3p³' },
    21: { name: 'Skandiy', sym: 'Sc', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 3, mass: 44.95, phase: 'Qattiq', config: '[Ar] 3d¹ 4s²' },
    22: { name: 'Titan', sym: 'Ti', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 4, mass: 47.86, phase: 'Qattiq', config: '[Ar] 3d² 4s²' },
    23: { name: 'Vanadiy', sym: 'V', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 5, mass: 50.94, phase: 'Qattiq', config: '[Ar] 3d³ 4s²' },
    24: { name: 'Xrom', sym: 'Cr', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 6, mass: 51.99, phase: 'Qattiq', config: '[Ar] 3d⁵ 4s¹' },
    25: { name: 'Marganets', sym: 'Mn', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 7, mass: 54.93, phase: 'Qattiq', config: '[Ar] 3d⁵ 4s²' },
    27: { name: 'Kobalt', sym: 'Co', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 9, mass: 58.93, phase: 'Qattiq', config: '[Ar] 3d⁷ 4s²' },
    28: { name: 'Nikel', sym: 'Ni', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 10, mass: 58.69, phase: 'Qattiq', config: '[Ar] 3d⁸ 4s²' },
    30: { name: 'Sux (Sink)', sym: 'Zn', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 4, grp: 12, mass: 65.38, phase: 'Qattiq', config: '[Ar] 3d¹⁰ 4s²' },
    35: { name: 'Brom', sym: 'Br', cat: 'halogen', catUz: 'Galogen', per: 4, grp: 17, mass: 79.90, phase: 'Suyuq', config: '[Ar] 3d¹⁰ 4s² 4p⁵' },
    36: { name: 'Kripton', sym: 'Kr', cat: 'noble-gas', catUz: 'Asil gaz', per: 4, grp: 18, mass: 83.79, phase: 'Gaz', config: '[Ar] 3d¹⁰ 4s² 4p⁶' },
    53: { name: 'Yod', sym: 'I', cat: 'halogen', catUz: 'Galogen', per: 5, grp: 17, mass: 126.90, phase: 'Qattiq', config: '[Kr] 4d¹⁰ 5s² 5p⁵' },
    54: { name: 'Ksenon', sym: 'Xe', cat: 'noble-gas', catUz: 'Asil gaz', per: 5, grp: 18, mass: 131.29, phase: 'Gaz', config: '[Kr] 4d¹⁰ 5s² 5p⁶' },
    78: { name: 'Platina', sym: 'Pt', cat: 'transition-metal', catUz: 'O\'tish metalli', per: 6, grp: 10, mass: 195.08, phase: 'Qattiq', config: '[Xe] 4f¹⁴ 5d⁹ 6s¹' },
    82: { name: 'Qo\'rg\'oshun', sym: 'Pb', cat: 'post-transition', catUz: 'Post-o\'tish metalli', per: 6, grp: 14, mass: 207.2, phase: 'Qattiq', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²' },
    83: { name: 'Vismut', sym: 'Bi', cat: 'post-transition', catUz: 'Post-o\'tish metalli', per: 6, grp: 15, mass: 208.98, phase: 'Qattiq', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³' },
    86: { name: 'Radon', sym: 'Rn', cat: 'noble-gas', catUz: 'Asil gaz', per: 6, grp: 18, mass: 222, phase: 'Gaz', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶' },
  };

  const list: ChemicalElement[] = [];

  // Table coordinates mapping for standard layout
  for (let i = 1; i <= 118; i++) {
    if (map.has(i)) {
      list.push(map.get(i)!);
    } else {
      const info = elementNamesUz[i];
      const nameUz = info?.name || `Element-${i}`;
      const symbol = info?.sym || `E${i}`;
      const period = info?.per || getPeriodForNumber(i);
      const group = info?.grp || getGroupForNumber(i);
      const category = info?.cat || getCategoryForNumber(i);
      const categoryUz = info?.catUz || getCategoryUz(category);

      list.push({
        number: i,
        symbol,
        nameUz,
        nameLat: symbol,
        atomicMass: info?.mass || Math.round(i * 2.3 * 100) / 100,
        category,
        categoryUz,
        period,
        group,
        block: period <= 2 ? 's' : 'p',
        electronConfiguration: info?.config || `[Core] ${i}`,
        shells: [2, 8, Math.min(18, Math.max(1, i - 10))],
        phase: info?.phase || 'Qattiq',
        oxidationStates: '+1, +2',
        summaryUz: `${nameUz} – davriy jadvalning ${i}-tartib raqamdagi kimyoviy elementi. Atom massasi: ${info?.mass || (i * 2.3).toFixed(1)}.`,
        applicationsUz: [
          `${nameUz} kimyo va sanoat sohalarida birikmalar hosil qilishda qo'llaniladi.`,
          `Laboratoriya va ta'limda kimyoviy jarayonlarni o'rganishda xizmat qiladi.`
        ]
      });
    }
  }

  return list;
}

function getPeriodForNumber(num: number): number {
  if (num <= 2) return 1;
  if (num <= 10) return 2;
  if (num <= 18) return 3;
  if (num <= 36) return 4;
  if (num <= 54) return 5;
  if (num <= 86) return 6;
  return 7;
}

function getGroupForNumber(num: number): number {
  if (num === 1) return 1;
  if (num === 2) return 18;
  if (num === 3) return 1;
  if (num === 4) return 2;
  if (num >= 5 && num <= 10) return num + 8;
  if (num === 11) return 1;
  if (num === 12) return 2;
  if (num >= 13 && num <= 18) return num;
  return ((num - 1) % 18) + 1;
}

function getCategoryForNumber(num: number): ChemicalElement['category'] {
  if ([3, 11, 19, 37, 55, 87].includes(num)) return 'alkali-metal';
  if ([4, 12, 20, 38, 56, 88].includes(num)) return 'alkaline-earth';
  if ([9, 17, 35, 53, 85, 117].includes(num)) return 'halogen';
  if ([2, 10, 18, 36, 54, 86, 118].includes(num)) return 'noble-gas';
  if (num >= 57 && num <= 71) return 'lanthanide';
  if (num >= 89 && num <= 103) return 'actinide';
  if ((num >= 21 && num <= 30) || (num >= 39 && num <= 48) || (num >= 72 && num <= 80)) return 'transition-metal';
  return 'nonmetal';
}

function getCategoryUz(cat: string): string {
  switch (cat) {
    case 'alkali-metal': return 'Ishqoriy metall';
    case 'alkaline-earth': return 'Ishqoriy-yer metalli';
    case 'transition-metal': return "O'tish metalli";
    case 'post-transition': return "Post-o'tish metalli";
    case 'metalloid': return 'Yarim metall';
    case 'nonmetal': return 'Metallmas';
    case 'halogen': return 'Galogen';
    case 'noble-gas': return 'Asil gaz';
    case 'lanthanide': return 'Lantanoid';
    case 'actinide': return 'Aktinoid';
    default: return 'Element';
  }
}
