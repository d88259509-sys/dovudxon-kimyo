import { BiologyLesson } from '../types';

export const BIOLOGY_CURRICULUM: BiologyLesson[] = [
  // 5-SINF: BOTANIKA I
  {
    id: 'bio-5-1',
    grade: 5,
    subjectSection: "Botanika (O'simliklar dunyosi)",
    titleUz: "Biologiya fani va o'simliklar dunyosi bilan tanishuv",
    descriptionUz: "Biologiya – tirik organizmlar haqidagi fan. O'simliklarning tabiatdagi va inson hayotidagi o'rni.",
    contentUz: `Biologiya so'zi yunoncha "bios" – hayot va "logos" – fan degan ma'noni anglatadi. 
5-sinfda biologiya kursida o'simliklar olami (Botanika), uning tuzilishi, o'sishi va ko'payishi o'rganiladi.

O'simliklar avtotrof organizmlar bo'lib, quyosh energiyasidan foydalanib noorganik moddalardan (suv va karbonat angidrid) organik modda (glyukoza) hosil qiladi (Fotosintez).`,
    keyTerms: [
      { term: 'Biologiya', definition: 'Tirik tabiat va undagi hayotiy jarayonlarni o\'rganuvchi fan.' },
      { term: 'Botanika', definition: 'O\'simliklar dunyosini o\'rganuvchi biologiya bo\'limi.' },
      { term: 'Avtotrof', definition: 'Quyosh energiyasi va noorganik moddalardan uz-o\'ziga oziq tayyorlay oladigan organizmlar.' }
    ],
    summaryPoints: [
      "Biologiya tirik organizmlarning kelib chiqishi, tuzilishi va rivojlanishini o'rganadi.",
      "O'simliklar Yer atmosferasida kislorod hosil qiluvchi asosiy manba hisoblanadi."
    ]
  },
  {
    id: 'bio-5-2',
    grade: 5,
    subjectSection: "Botanika (O'simliklar dunyosi)",
    titleUz: "O'simlik hujayrasining tuzilishi",
    descriptionUz: "Mikroskop ostida o'simlik hujayrasi: Hujayra qobig'i, sitoplazma, yadro, vakuola va plastidalar.",
    contentUz: `Barcha o'simliklar hujayraviy tuzilishga ega. Hujayra – tiriklikning eng kichik strukturaviy va funksional birligidir.

O'simlik hujayrasining asosiy qismlari:
1. **Hujayra qobig'i (Devori)** – kletchatka (sellyuloza)dan tashkil topgan, shakl beradi va himoya qiladi.
2. **Sitoplazma** – yarim suyuq, doimiy harakatdagi ichki muhit.
3. **Yadro** – hujayraning bo'linishi va irsiy axborotini boshqaruvchi markaz.
4. **Plastidalar** – Xloroplastlar (yashil), Xromoplastlar (sariq-qizil) va Leykoplastlar (rangsiz).
5. **Vakuola** – hujayra shirasi bilan to'lgan bo'shliq.`,
    keyTerms: [
      { term: 'Xloroplast', definition: 'Hujayrada fotosintez jarayoni kechadigan yashil plastida.' },
      { term: 'Sitoplazma', definition: 'Hujayraning ichki qismini to\'ldirib turuvchi yarim suyuq tirik muhit.' },
      { term: 'Sellyuloza', definition: 'O\'simlik hujayra devorini hosil qiluvchi qattiq uglevod.' }
    ],
    diagramType: 'cell-plant',
    summaryPoints: [
      "O'simlik hujayrasi hayvon hujayrasidan mustahkam sellyuloza devori va plastidalari bilan farq qiladi.",
      "Xloroplast tarkibidagi xlorofill piment o'simlikka yashil rang beradi."
    ]
  },

  // 6-SINF: BOTANIKA II & O'SIMLIKLAR FIZIOLOGIYASI
  {
    id: 'bio-6-1',
    grade: 6,
    subjectSection: "Botanika va O'simliklar Fiziologiyasi",
    titleUz: "O'simlik organlari: Ildiz va poyaning tuzilishi",
    descriptionUz: "Ildiz turlari, ildiz zonasi, poyaning ichki tuzilishi (pust, kambio, yog'ochlik va o'zak).",
    contentUz: `O'simlik organlari 2 guruhga bo'linadi:
1. **Vegetativ organlar**: Ildiz, poya, barg (o'sish va oziqlanish xizmatida).
2. **Generativ organlar**: Gul, meva, urug' (ko'payish xizmatida).

Ildiz zonasi:
- Ildiz qinchasi (himoya qiladi)
- Bo'linuvchi zona (hujayralar bo'linadi)
- O'suvchi zona (hujayralar cho'ziladi)
- So'ruvchi zona (ildiz tukchalari orqali suv va mineral tuzlarni so'radi)
- O'tkazuvchi zona.`,
    keyTerms: [
      { term: 'Kambiy', definition: 'Poya va ildizning yo\'g\'onlashuvini ta\'minlovchi hosil qiluvchi toqima.' },
      { term: 'Ksilema', definition: 'Suv va mineral tuzlarni ildizdan yuqoriga o\'tkazuvchi naylar.' },
      { term: 'Floema', definition: 'Organik moddalarni bargdan pastga va barcha organlarga o\'tkazuvchi elaksimon naylar.' }
    ],
    summaryPoints: [
      "Vegetativ organlar o'simlikning hayot faoliyatini va oziqlanishini ta'minlaydi.",
      "Ksilema va Floema o'simlikning nay-bo'g'iz o'tkazuvchi sistemasini hosil qiladi."
    ]
  },
  {
    id: 'bio-6-2',
    grade: 6,
    subjectSection: "Botanika va O'simliklar Fiziologiyasi",
    titleUz: "Fotosintez va nafas olish jarayonlari",
    descriptionUz: "Anorganik moddalardan quyosh nurida glyukoza sintez bo'lishi va kislorod ajralishi.",
    contentUz: `Fotosintez – yashil o'simliklarda quyosh nuri energiyasi ta'sirida suv (H₂O) va karbonat angidrid (CO₂) gazidan glyukoza (C₆H₁₂O₆) hamda kislorod (O₂) hosil bo'lish jarayoni.

Fotosintez kimyoviy tenglamasi:
6CO₂ + 6H₂O + (Nurlanish) ➔ C₆H₁₂O₆ + 6O₂ ↑`,
    keyTerms: [
      { term: 'Fotosintez', definition: 'Quyosh nuri yordamida CO₂ va H₂O dan organik modda va kislorod hosil bo\'lishi.' },
      { term: 'Transpiratsiya', definition: 'O\'simlik barglari orqali suvning bug\'lanishi.' }
    ],
    formulas: [
      { name: 'Fotosintez tenglamasi', formula: '6CO₂ + 6H₂O ➔ C₆H₁₂O₆ + 6O₂', explanation: 'Karbonat angidrid + Suv ➔ Glyukoza + Kislorod' }
    ],
    diagramType: 'photosynthesis',
    summaryPoints: [
      "Fotosintez tunda to'xtaydi va o'simlik faqat nafas oladi.",
      "O'simliklar Yer yuzidagi barcha geterotrof organizmlar uchun kislorod manbaidir."
    ]
  },

  // 7-SINF: ZOOLOGIYA
  {
    id: 'bio-7-1',
    grade: 7,
    subjectSection: "Zoologiya (Hayvonlar dunyosi)",
    titleUz: "Bir hujayrali va umurtqasiz hayvonlar",
    descriptionUz: "Amyoba, infuzoriya, kovakichlilar, chuvalchanglar, mollyuskalar va bo'g'imoyoqlilar.",
    contentUz: `Zoologiya – hayvonlar olamini o'rganadi. Hayvonlar geterotrof organizmlar hisoblanadi (tayyor organik moddalar bilan oziqlanadi).

Bir hujayralilar (Soddalilar):
- **Oddiy amyoba**: Soxta oyoqlari (psevpodiy) yordamida harakatlanadi va oziqni fagozitoz yo'li bilan qamrab oladi.
- **Tufelka (Infuzoriya)**: Kipriklari bilan suzadi, doimiy tana shakliga va 2 ta yadroga ega.`,
    keyTerms: [
      { term: 'Geterotrof', definition: 'Tayyor organik moddalar bilan oziqlanuvchi organizm.' },
      { term: 'Fagotsitoz', definition: 'Hujayraning qattiq zarrachalarni qamrab olib yutishi.' }
    ],
    summaryPoints: [
      "Hayvonlar harakatlanish, tayyor oziq yutish va asab sistemasi bilan o'simliklardan ajralib turadi."
    ]
  },
  {
    id: 'bio-7-2',
    grade: 7,
    subjectSection: "Zoologiya (Hayvonlar dunyosi)",
    titleUz: "Umurtqali hayvonlar: Baliklar, Suvda ham quruqlikda yashovchilar, Sudralib yuruvchilar, Qushlar va Sutemizuvchilar",
    descriptionUz: "Umurtqali hayvonlar sinflari, qon aylanish va nafas olish sistemalarining takomillashuvi.",
    contentUz: `Umurtqalilar tipi skeletining o'q qismi – umurtqa pog'onasi bilan xarakterlanadi.

Evolyutsion rivojlanish bosqichlari:
1. **Baliqlar**: 2 kamerali yurak, 1 ta qon aylanish doirasi, jabra orqali nafas oladi.
2. **Suvda va quruqlikda yashovchilar (Amfibiyalar)**: 3 kamerali yurak, 2 ta qon aylanish doirasi, terisi va o'pkasi bilan nafas oladi.
3. **Sudralib yuruvchilar (Reptiliyalar)**: 3 kamerali yurak (qorinchasida chala to'siq bor), quruqlikda ko'payadi.
4. **Qushlar**: 4 kamerali yurak, issiqqonli, ikkitalik nafas olish.
5. **Sutemizuvchilar**: 4 kamerali yurak, issiqqonli, bolalarini sut bilan boqadi.`,
    keyTerms: [
      { term: 'Gomeoterm (Issiqqonli)', definition: 'Tana harorati atrof-muhit haroratiga bog\'liq bo\'lmagan organizmlar (Qushlar, Sutemizuvchilar).' },
      { term: 'Poykiloterm (Sovuqqonli)', definition: 'Tana harorati atrof-muhitga qarab o\'zgaruvchi organizmlar (Baliq, Reptiliya).' }
    ],
    summaryPoints: [
      "Evolyutsiya davomida yurak kamerasi 2 tadan 4 tagacha murakkablashgan.",
      "Issiqqonlilik hayvonlarga barcha iqlim sharoitlariga moslashish imkonini berdi."
    ]
  },

  // 8-SINF: ODAM ANATOMIYASI VA FIZIOLOGIYASI
  {
    id: 'bio-8-1',
    grade: 8,
    subjectSection: "Odam Anatomiyasi va Fiziologiyasi",
    titleUz: "Odam organizmi va Qon aylanish sistemasi",
    descriptionUz: "Yurakning tuzilishi, katta va kichik qon aylanish doiralari, qon shaklli elementlari.",
    contentUz: `Odam yuragi 4 kamerali (2 ta bo'lmacha, 2 ta qorincha) muskulli organ.

Qon aylanish doiralari:
- **Katta qon aylanish doirasi**: Chap qorinchadan boshlanadi (Aorta) ➔ barcha a'zo va toqimalarga kislorod eltadi ➔ O'ng bo'lmachada tugaydi.
- **Kichik qon aylanish doirasi**: O'ng qorinchadan boshlanadi (O'pka arteriyasi) ➔ o'pkada kislorod bilan boyiydi ➔ Chap bo'lmachada tugaydi.

Qon tarkibi:
- Plazma (55%)
- Eritrotsitlar (Qizil qon tanachalari – kislorod tashqi)
- Leykotsitlar (Oq qon tanachalari – immunitet va himoya)
- Trombotsitlar (Qon plastinkalari – qon ivishi).`,
    keyTerms: [
      { term: 'Eritrotsit', definition: 'Gemoglobin tutuvchi, kislorod va CO₂ tashuvchi yadrosiz qon hujayrasi.' },
      { term: 'Leykotsit', definition: 'Organizmni mikroblardan va yot moddalardan himoya qiluvchi immun hujayra.' },
      { term: 'Aorta', definition: 'Odam organizmidagi eng yirik arteriya qon tomiri.' }
    ],
    diagramType: 'heart',
    summaryPoints: [
      "Odam yuragi daqiqasiga o'rtacha 70-75 marta uradi va 5 litr qonni haydaydi.",
      "Arteriya qoni kislorodga boy, Vena qoni esa karbonat angidridga boy bo'ladi."
    ]
  },
  {
    id: 'bio-8-2',
    grade: 8,
    subjectSection: "Odam Anatomiyasi va Fiziologiyasi",
    titleUz: "Asab sistemasi va Oliy asab faoliyati",
    descriptionUz: "Bosh va orqa miya, neyronlar, refleks yoyi va I.P. Pavlov ta'limoti.",
    contentUz: `Asab sistemasi organizm a'zolari faoliyatini o'zaro bog'laydi va idora qiladi.

Strukturaviy birligi – **Neyron** (Asab hujayrasi). Neyron tana, kalta o'simtalar (Dendritlar) va uzun o'simta (Akson)dan iborat.

Refleks – organizmning markaziy asab sistemasi ishtirokida ta'sirlagichga bergan javob reaksiyasi.
Refleks yoyi: Reseptor ➔ Sezuvchi neyron ➔ Markaziy asab sistemasi ➔ Harakatlantiruvchi neyron ➔ Ishchi organ.`,
    keyTerms: [
      { term: 'Neyron', definition: 'Asab toqimasining asosiy funksional va strukturaviy hujayrasi.' },
      { term: 'Sinaps', definition: 'Ikki neyron yoki neyron bilan ishchi organ o\'rtasidagi kontakt va signal o\'tkazish joyi.' }
    ],
    summaryPoints: [
      "Bosh miya po'stlog'i odamning mantiqiy fikrlashi va nutqi uchun mas'uldir."
    ]
  },

  // 9-SINF: UMUMIY BIOLOGIYA VA CITOLOGIYA
  {
    id: 'bio-9-1',
    grade: 9,
    subjectSection: "Umumiy Biologiya va Sitologiya",
    titleUz: "Sitologiya: Hujayraning organoidlari va bo'linishi (Mitoz va Meyoz)",
    descriptionUz: "Endoplazmatik to'r, Mitoxondriya, Ribosoma, Golji majmuasi. Mitoz va meyoz bosqichlari.",
    contentUz: `Sitologiya – hujayra haqidagi fan.

Asosiy organoidlar:
- **Mitoxondriya**: Hujayraning "kuch stansiyasi", ATF sintez qiladi.
- **Ribosoma**: Oqsil sintez qiladi.
- **Golji majmuasi**: Moddalarni toplaydi, o'raydi va eksport qiladi.
- **Endoplazmatik to'r (EPT)**: Moddalar transporti.

Hujayra bo'linishi:
1. **Mitoz**: Somatik hujayralar bo'linishi. 1 ta diploid (2n) hujayradan 2 ta genetik aynan bir xil (2n) hujayra hosil bo'ladi.
2. **Meyoz**: Jinsiy hujayralar (gametalar) bo'linishi. 1 ta diploid (2n) hujayradan 4 ta gaploid (1n) hujayra hosil bo'ladi.`,
    keyTerms: [
      { term: 'Mitoz', definition: 'Xromosomalar soni saqlanib qoladigan somatik bo\'linish usuli (Prodata, Metafaza, Anafaza, Telofaza).' },
      { term: 'Meyoz', definition: 'Xromosomalar soni 2 barobar kamayadigan (reduktsion) bo\'linish usuli.' },
      { term: 'Diploid (2n)', definition: 'Xromosomalarning juft (to\'liq) to\'plami.' }
    ],
    summaryPoints: [
      "Mitoz tufayli organizm o'sadi va toqimalar tiklanadi.",
      "Meyoz tufayli turli jinsiy gametalar shakllanib, turlarning xromosoma soni doimiyligi saqlanadi."
    ]
  },

  // 10-SINF: MOLEKULYAR BIOLOGIYA VA GENETIKA
  {
    id: 'bio-10-1',
    grade: 10,
    subjectSection: "Molekulyar Biologiya va Genetika",
    titleUz: "Nuklein kislotalar: DNK va RNK tuzilishi hamda Masalalar yechish",
    descriptionUz: "Chargaff qoidasi (A=T, G=C), komplementarlik prinsipi, nukleotidlar orasidagi vodorod bog'lari.",
    contentUz: `DNK (Dezoksiribonuklein kislota) – ikkita spiral zanjirdan iborat bo'lib, irsiy axborotni saqlaydi va uzatadi.

Nukleotidlar: Adenin (A), Timin (T), Guanin (G), Sitozin (S).
**Komplementarlik qoidasi**:
- A har doim T bilan 2 ta vodorod bog'i hosil qiladi (A = T).
- G har doim S bilan 3 ta vodorod bog'i hosil qiladi (G ≡ S).

Molar masofalar va o'lchamlar:
- 1 ta nukleotid uzunligi = 0.34 nm (3.4 Å).
- 1 ta nukleotidning o'rtacha molekulyar massasi = 345 g/mol (yoki 300 g/mol).`,
    keyTerms: [
      { term: 'Komplementarlik', definition: 'DNK zanjirida A va T, G va S nukleotidlarining bir-biriga mos kelib bog\'lanish qonuniyati.' },
      { term: 'Chargaff qoidasi', definition: 'DNK molekulasida A=T va G=C miqdoran teng bo\'lishi: (A+G) = (T+C).' }
    ],
    formulas: [
      { name: 'Chargaff tenglamasi', formula: 'A = T va G = C; (A+T+G+C) = 100%', explanation: 'Nukleotidlar foiz ulushi summasi' },
      { name: 'DNK uzunligi formulasi', formula: 'L = (N / 2) × 0.34 nm', explanation: 'N – jami nukleotidlar soni' },
      { name: 'Vodorod bog\'lari soni', formula: 'H = 2A + 3G (yoki 2T + 3C)', explanation: 'A-T juftida 2 ta, G-C juftida 3 ta bog\'' }
    ],
    diagramType: 'dna',
    summaryPoints: [
      "DNK kashfiyotchilari – J. Uotson va F. Krik (1953 y).",
      "Molekulyar biologiyada DNK masalalarida Chargaff qoidalari asosiy kalit hisoblanadi."
    ]
  },
  {
    id: 'bio-10-2',
    grade: 10,
    subjectSection: "Molekulyar Biologiya va Genetika",
    titleUz: "Gendel qonunlari: Monogidrid va Digidrid chatishtirish",
    descriptionUz: "G. Mendelning 1-qonuni (Bir xillik), 2-qonuni (Ajralish) va 3-qonuni (Mustaqil birikish).",
    contentUz: `Genetika – irsiyat va o'zgaruvchanlik haqidagi fan. Asoschisi – Gregor Mendel.

1. **Mendelning 1-qonuni (Birinchi bo'g'in duragaylarining bir xilligi)**:
Gomoziqota dominant (AA) va gomoziqota retsessiv (aa) ota-ona chatishtirilganda, F1 bo mezon a'zolari bir xil geterozigota (Aa) fenotipga ega bo'ladi.

2. **Mendelning 2-qonuni (Belgilarning ajralishi)**:
Geterozigota F1 (Aa × Aa) chatishtirilganda, F2 da fenotip bo'yicha ajralish 3:1 nisbatda, genotip bo'yicha 1:2:1 nisbatda bo'ladi.

3. **Mendelning 3-qonuni (Mustaqil ajralish qonuni)**:
Digidrid chatishtirishda (AaBb × AaBb) F2 da fenotipik ajralish nisbati **9 : 3 : 3 : 1** ni tashkil etadi.`,
    keyTerms: [
      { term: 'Genotip', definition: 'Organizmdagi barcha genlarning yig\'indisi.' },
      { term: 'Fenotip', definition: 'Organizmning tashqi va ichki belgilari yig\'indisi.' },
      { term: 'Geterozigota (Aa)', definition: 'Har xil allel genlarga ega organizm.' }
    ],
    summaryPoints: [
      "Pennet to'ri yordamida har qanday chatishtirish natijalarini va ehtimolligini hisoblash mumkin."
    ]
  },

  // 11-SINF: EKOLOGIYA VA EVOLYUTSIYA
  {
    id: 'bio-11-1',
    grade: 11,
    subjectSection: "Ekologiya va Evolyutsiya",
    titleUz: "Ekologiya: Oziq zanjirlari va Ekologik piramida qoidasi",
    descriptionUz: "Produsentlar, konsumentlar va redusentlar. Lindeman 10% ekologik piramida qoidasi va masalalar.",
    contentUz: `Ekologiya – organizmlarning bir-biri hamda atrof-muhit bilan o'zaro munosabatlarini o'rganadi.

Oziq zanjiri bo'g'inlari:
1. **Produsentlar (Hosil qiluvchilar)**: Yashil o'simliklar, avtotroflar.
2. **Konsumentlar (Iste'molchilar)**:
   - I darajali: O'txor hayvonlar (quyon, kiyik).
   - II va III darajali: Yirtqichlar (bo'ri, burgut).
3. **Redusentlar (Parchalovchilar)**: Bakteriya va zamburug'lar.

**Lindeman qoidasi (10% qoidasi)**:
Bir ekologik trofik pog'onadan keyingi trofik pog'onaga energiya yoki biomassaning o'rtacha **10 foizi** o'tadi, qolgan 90 foizi issiqlik sifatida yo'qoladi.`,
    keyTerms: [
      { term: 'Biogeotsenoz', definition: 'Muayyan hududda birga yashovchi organizmlar va anorganik muhit majmui.' },
      { term: '10% qoidasi', definition: 'Bir trofik pog\'onadan ikkinchisiga atigi 10% biomassa o\'tishi qonuni.' }
    ],
    formulas: [
      { name: 'Biomassa o\'tish tenglamasi', formula: 'M₂ = M₁ × 0.10', explanation: 'Har bir navbatdagi trofik pog\'onada biomassa 10 ga bo\'linadi' }
    ],
    diagramType: 'eco-pyramid',
    summaryPoints: [
      "Ekologik piramida qoidasi yordamida oziq-ovqat zanjiridagi hayvonlar populyatsiyasi sig'imini hisoblash mumkin."
    ]
  },
  {
    id: 'bio-11-2',
    grade: 11,
    subjectSection: "Ekologiya va Evolyutsiya",
    titleUz: "Evolyutsiya nazariyasi: Ch. Darvin ta'limoti va Tabiiy tanlanish",
    descriptionUz: "Yashash uchun kurash, o'zgaruvchanlik, moslashuvchanlik va turlar hosil bo'lishi.",
    contentUz: `Evolyutsiya – tirik organizmlarning tarixiy rivojlanish jarayoni.

Evolyutsiyaning asosiy harakatlantiruvchi kuchlari (Ch. Darvin bo'yicha):
1. **Irsiy o'zgaruvchanlik**: Organizmlarning yangi belgilarga ega bo'lishi.
2. **Yashash uchun kurash**: Turlar ichida, turlararo va noqulay muhit omillariga qarshi.
3. **Tabiiy tanlanish**: Muhit sharoitlariga eng ko'p moslashgan organizmlarning omon qolishi va nasl qoldirishi.

Aromorfoz va Idioadaptatsiya:
- **Aromorfoz**: Organizmlar tuzilishi darajasini umumiy ko'taruvchi yirik evolyutsion o'zgarish (Masalan: 4 kamerali yurak, issiqqonlilik).
- **Idioadaptatsiya**: Xususiy moslashuvlar (Masalan: Qushlar tumshug'i shaklining oziqqa qarab o'zgarishi).`,
    keyTerms: [
      { term: 'Aromorfoz', definition: 'Organizm tuzilishi va funksiyalarini tubdan murakkablashtiruvchi evolyutsion sakrash.' },
      { term: 'Tabiiy tanlanish', definition: 'Faqat moslashuvchan organizmlar yashab qolib nasl beruvchi asosiy evolyutsiya omili.' }
    ],
    summaryPoints: [
      "Evolyutsiya natijasida organik dunyoning hozirgi xilma-xilligi va organizmlarning muhitga moslashganligi yuzaga kelgan."
    ]
  }
];
