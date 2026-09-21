import { PracticeProblem } from '../types';

export const SAMPLE_PROBLEMS: PracticeProblem[] = [
  // KIMYO MASALALARI
  {
    id: 'chem-prob-1',
    subject: 'kimyo',
    title: "Sulfat kislotaning (H₂SO₄) molar massasi va foiz tarkibini hisoblash",
    grade: 8,
    problemText: "Sulfat kislotaning (H₂SO₄) molyar massasini va uning tarkibidagi har bir elementning o'rtacha massa ulushini (%) hisoblang.",
    givens: [
      "Ar(H) = 1 g/mol",
      "Ar(S) = 32 g/mol",
      "Ar(O) = 16 g/mol"
    ],
    formulasUsed: [
      "Molar massa: M(H₂SO₄) = 2×Ar(H) + 1×Ar(S) + 4×Ar(O)",
      "Massa ulushi: w(E) = [n × Ar(E) / M(birikma)] × 100%"
    ],
    stepByStepSolution: [
      "1-qadam: Sulfat kislotaning umumiy molyar massasini topamiz:\nM(H₂SO₄) = (2 × 1) + (1 × 32) + (4 × 16) = 2 + 32 + 64 = 98 g/mol.",
      "2-qadam: Vodorodning massa ulushini topamiz:\nw(H) = (2 / 98) × 100% = 2.04%.",
      "3-qadam: Oltingugurtning massa ulushini topamiz:\nw(S) = (32 / 98) × 100% = 32.65%.",
      "4-qadam: Kislorodning massa ulushini topamiz:\nw(O) = (64 / 98) × 100% = 65.31%."
    ],
    finalAnswer: "M(H₂SO₄) = 98 g/mol. Massa ulushlari: w(H) = 2.04%, w(S) = 32.65%, w(O) = 65.31%.",
    teacherNote: "O'quvchilar e'tiborini umumiy yig'indi 100% ga teng bo'lishiga qarating (2.04 + 32.65 + 65.31 = 100%)."
  },
  {
    id: 'chem-prob-2',
    subject: 'kimyo',
    title: "Eritma konsentratsiyasi (Massa ulushi) masalasi",
    grade: 9,
    problemText: "200 gramm 15% li natriy xlorid (NaCl) eritmasini tayyorlash uchun qancha gramm NaCl tuzi va qancha millilitr suv kerak bo'ladi?",
    givens: [
      "m(eritma) = 200 g",
      "w(NaCl) = 15% (0.15)",
      "ρ(H₂O) = 1 g/ml"
    ],
    formulasUsed: [
      "m(erigan modda) = m(eritma) × (w / 100%)",
      "m(suv) = m(eritma) - m(erigan modda)",
      "V(suv) = m(suv) / ρ"
    ],
    stepByStepSolution: [
      "1-qadam: Kerakli NaCl tuzining massasini hisoblaymiz:\nm(NaCl) = 200 g × 0.15 = 30 gramm.",
      "2-qadam: Erituvchi suvning massasini hisoblaymiz:\nm(H₂O) = 200 g - 30 g = 170 gramm.",
      "3-qadam: Suvning zichligi 1 g/ml bo'lgani uchun uning hajmi ham 170 ml ga teng bo'ladi."
    ],
    finalAnswer: "30 gramm NaCl tuzi va 170 ml toza suv kerak bo'ladi.",
    teacherNote: "Laboratoriyada bu eritma 30g tuzni 170ml suvda eritish orqali olinadi."
  },
  {
    id: 'chem-prob-3',
    subject: 'kimyo',
    title: "Reaksiya tenglamasi bo'yicha mahsulot massasini topish (Stenoxometriya)",
    grade: 8,
    problemText: "5.4 gramm alyuminiy (Al) yetarli miqdordagi kislorodda to'liq yonganda necha gramm alyuminiy oksid (Al₂O₃) hosil bo'ladi?",
    givens: [
      "m(Al) = 5.4 g",
      "M(Al) = 27 g/mol",
      "M(Al₂O₃) = 102 g/mol"
    ],
    formulasUsed: [
      "Reaksiya tenglamasi: 4Al + 3O₂ ➔ 2Al₂O₃",
      "Proportsiya: m(Al) / (4 × M_Al) = m(Al₂O₃) / (2 × M_Al₂O₃)"
    ],
    stepByStepSolution: [
      "1-qadam: Reaksiya tenglamasini yozamiz va koeffitsiyentlarni qo'yamiz:\n4Al + 3O₂ ➔ 2Al₂O₃",
      "2-qadam: Tenglama bo'yicha molyar massalarni qo'yamiz:\n4 mol Al (4 × 27 = 108 g) reaksiyaga kirishganda 2 mol Al₂O₃ (2 × 102 = 204 g) hosil bo'ladi.",
      "3-qadam: Proportsiya tuzamiz:\n108 g Al ➔ 204 g Al₂O₃\n5.4 g Al ➔ X g Al₂O₃",
      "4-qadam: X ni hisoblaymiz:\nX = (5.4 × 204) / 108 = 10.2 gramm."
    ],
    finalAnswer: "10.2 gramm Al₂O₃ hosil bo'ladi.",
    teacherNote: "Reaksiya tenglamasini to'g'ri tenglashtirish muhim!"
  },

  // BIOLOGIYA MASALALARI
  {
    id: 'bio-prob-1',
    subject: 'biologiya',
    title: "DNK masalasi: Nukleotidlar soni va Vodorod bog'larini hisoblash",
    grade: 10,
    problemText: "DNK fragmentida 300 ta Adenin nukleotidi bor bo'lib, u umumiy nukleotidlarning 20% qismini tashkil etadi. Ushbu DNK molekulasidagi vodorod bog'lari sonini va uning uzunligini (nm) hisoblang.",
    givens: [
      "A = 300 ta (20%)",
      "Chargaff qoidasi: A = T va G = C",
      "1 nukleotid uzunligi = 0.34 nm"
    ],
    formulasUsed: [
      "Jami nukleotidlar N = (A × 100%) / %A",
      "Vodorod bog'lari H = 2A + 3G",
      "DNK uzunligi L = (N / 2) × 0.34 nm"
    ],
    stepByStepSolution: [
      "1-qadam: DNK ning umumiy nukleotidlar sonini (N) topamiz:\nN = (300 × 100) / 20 = 1500 ta nukleotid.",
      "2-qadam: A va T sonini aniqlaymiz: A = T = 300 ta (jami A+T = 600 ta).",
      "3-qadam: G va C sonini topamiz:\nG + C = 1500 - 600 = 900 ta.\nG = C = 900 / 2 = 450 ta.",
      "4-qadam: Vodorod bog'lari sonini (H) hisoblaymiz:\nH = 2 × A + 3 × G = (2 × 300) + (3 × 450) = 600 + 1350 = 1950 ta vodorod bog'i.",
      "5-qadam: DNK fragmenti uzunligini (L) topamiz (bir zanjirdagi nukleotidlar bo'yicha):\nL = (1500 / 2) × 0.34 = 750 × 0.34 = 255 nm."
    ],
    finalAnswer: "Vodorod bog'lari soni: 1950 ta. DNK uzunligi: 255 nm.",
    teacherNote: "DNK ikkita zanjirli bo'lgani uchun uzunlikni hisoblashda N / 2 olinadi."
  },
  {
    id: 'bio-prob-2',
    subject: 'biologiya',
    title: "Genetika masalasi: Monogidrid chatishtirish va ehtimollik",
    grade: 10,
    problemText: "O'simlikda sariq urug' geni (A) yashil urug' geni (a) ustidan dominantlik qiladi. Ikki geterozigota sariq urug'li o'simlik chatishtirilganda hosil bo'lgan 400 ta urug'dan nechtasi yashil rangda bo'ladi?",
    givens: [
      "Ota-ona genotipi: P = Aa × Aa",
      "Jami hosil bo'lgan urug'lar: 400 ta"
    ],
    formulasUsed: [
      "F2 da ajralish nisbati fenotip bo'yicha: 3 sariq : 1 yashil (75% : 25%)",
      "Pennet to'ri: AA (25%), Aa (50%), aa (25%)"
    ],
    stepByStepSolution: [
      "1-qadam: Ginetik chatishtirish sxemasini tuzamiz:\nP: ♀ Aa  ×  ♂ Aa\nGametalar: A, a | A, a\nF1 genotiplari: 1 AA (sariq) : 2 Aa (sariq) : 1 aa (yashil).",
      "2-qadam: Fenotipik ajralishni aniqlaymiz:\nSariq urug'lar (AA + Aa) = 75% (3/4 qism).\nYashil urug'lar (aa) = 25% (1/4 qism).",
      "3-qadam: Yashil urug'lar sonini hisoblaymiz:\nN(yashil) = 400 × (1/4) = 100 ta urug'."
    ],
    finalAnswer: "400 ta urug'dan 100 tasi yashil rangli (aa) bo'ladi.",
    teacherNote: "Mendelning 2-qonuni qo'llaniladi."
  },
  {
    id: 'bio-prob-3',
    subject: 'biologiya',
    title: "Ekologik piramida va Lindeman 10% qoidasi masalasi",
    grade: 11,
    problemText: "Oziq zanjirida: O'simlik ➔ Quyon ➔ Bo'ri. Agar bo'ri massasi 40 kg bo'lsa, ushbu oziq zanjiri uzluksizligini ta'minlash uchun qancha massa o'simlik (biomassa) talab etiladi?",
    givens: [
      "Konsument III (Bo'ri) = 40 kg",
      "Lindeman qoidasi: 10% biomassa o'tadi"
    ],
    formulasUsed: [
      "Har bir oldingi trofik pog'onaga o'tishda biomassa 10 barobar ko'payadi."
    ],
    stepByStepSolution: [
      "1-qadam: Trofik pog'onalarni tartib bilan yozib olamiz:\n1-pog'ona: Produsent (O'simlik)\n2-pog'ona: Konsument I (Quyon)\n3-pog'ona: Konsument II (Bo'ri) = 40 kg.",
      "2-qadam: Bo'rini boqish uchun kerakli Quyon massasini topamiz:\nQuyon biomassasi = 40 kg × 10 = 400 kg.",
      "3-qadam: Quyonlarni boqish uchun kerakli O'simlik biomassasini topamiz:\nO'simlik biomassasi = 400 kg × 10 = 4000 kg (4 tonna)."
    ],
    finalAnswer: "4000 kg (4 tonna) o'simlik biomassasi zarur bo'ladi.",
    teacherNote: "Pastki trofik pog'onaga o'tganda har safar 10 ga ko'paytiriladi."
  }
];
