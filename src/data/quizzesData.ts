import { QuizQuestion } from '../types';

export const QUIZZES_DATA: QuizQuestion[] = [
  // KIMYO TESTLARI
  {
    id: 'q-chem-1',
    subject: 'kimyo',
    grade: 7,
    topic: 'Mendeleyev jadvali va Atomlar',
    question: "Mendeleyev davriy jadvalidagi eng birinchi va eng yengil element qaysi?",
    options: ["Geliy (He)", "Vodorod (H)", "Litiy (Li)", "Kislorod (O)"],
    correctIndex: 1,
    explanation: "Vodorod (H) – 1-tartib raqamda turadi, atom massasi 1.008 g/mol bo'lib, koinotdagi eng yengil elementdir.",
    difficulty: 'Oson'
  },
  {
    id: 'q-chem-2',
    subject: 'kimyo',
    grade: 8,
    topic: 'Molar massa',
    question: "Suv (H₂O) molekulasining molyar massasi necha g/mol ga teng? (Ar(H)=1, Ar(O)=16)",
    options: ["17 g/mol", "18 g/mol", "32 g/mol", "16 g/mol"],
    correctIndex: 1,
    explanation: "M(H₂O) = 2×1 + 16 = 18 g/mol.",
    difficulty: 'Oson'
  },
  {
    id: 'q-chem-3',
    subject: 'kimyo',
    grade: 8,
    topic: 'Anorganik birikmalar',
    question: "Osh tuzi va sulfat kislotaning kimyoviy formulalari to'g'ri ko'rsatilgan javobni toping.",
    options: ["NaOH va HCl", "NaCl va H₂SO₄", "Na₂CO₃ va HNO₃", "KOH va H₃PO₄"],
    correctIndex: 1,
    explanation: "Osh tuzi – Natriy xlorid (NaCl), Sulfat kislotasi – (H₂SO₄).",
    difficulty: 'Oson'
  },
  {
    id: 'q-chem-4',
    subject: 'kimyo',
    grade: 9,
    topic: 'Eritmalar',
    question: "100 gramm suvda 25 gramm tuz eritildi. Ushbu eritmaning massa ulushini (%) toping.",
    options: ["25%", "20%", "15%", "10%"],
    correctIndex: 1,
    explanation: "Eritma massasi = 100 + 25 = 125g. Massa ulushi = (25 / 125) × 100% = 20%.",
    difficulty: 'O\'orta'
  },
  {
    id: 'q-chem-5',
    subject: 'kimyo',
    grade: 10,
    topic: 'Oksidlanish-qaytarilish',
    question: "Kimyoviy reaksiyalarda elektron biriktirib oluvchi zarracha nima deyiladi?",
    options: ["Qaytaruvchi", "Oksidlovchi", "Katalizator", "Inhibitor"],
    correctIndex: 1,
    explanation: "Oksidlovchi zarracha elektronlarni o'ziga biriktirib oladi va oksidlanish darajasini kamaytiradi.",
    difficulty: 'O\'orta'
  },

  // BIOLOGIYA TESTLARI
  {
    id: 'q-bio-1',
    subject: 'biologiya',
    grade: 5,
    topic: 'Hujayra tuzilishi',
    question: "O'simlik hujayrasiga yashil rang beruvchi va fotosintez amalga oshadigan organoid qaysi?",
    options: ["Mitoxondriya", "Xloroplast", "Vakuola", "Ribosoma"],
    correctIndex: 1,
    explanation: "Xloroplastlar tarkibidagi xlorofill pigmenti tufayli yashil rangda bo'ladi va fotosintez qiladi.",
    difficulty: 'Oson'
  },
  {
    id: 'q-bio-2',
    subject: 'biologiya',
    grade: 7,
    topic: 'Zoologiya',
    question: "Odam va sutemizuvchilarning yuragi necha kamerali bo'ladi?",
    options: ["2 kamerali", "3 kamerali", "4 kamerali", "1 kamerali"],
    correctIndex: 2,
    explanation: "Sutemizuvchilar va qushlarning yuragi 4 kamerali (2 bo'lmacha, 2 qorincha) bo'lib, arterial va venoz qon aralashmaydi.",
    difficulty: 'Oson'
  },
  {
    id: 'q-bio-3',
    subject: 'biologiya',
    grade: 8,
    topic: 'Anatomiya',
    question: "Odam qonidagi kislorod tashuvchi qizil qon tanachalari nima deyiladi?",
    options: ["Leykotsitlar", "Eritrotsitlar", "Trombotsitlar", "Neyronlar"],
    correctIndex: 1,
    explanation: "Eritrotsitlar tarkibidagi gemoglobin oqsili kislorod va karbonat angidridni toqimalarga tasiydi.",
    difficulty: 'Oson'
  },
  {
    id: 'q-bio-4',
    subject: 'biologiya',
    grade: 10,
    topic: 'Molekulyar biologiya',
    question: "DNK zanjiridagi Adenin (A) nukleotidiga komplementar bo'lgan nukleotid qaysi?",
    options: ["Guanin (G)", "Sitozin (S)", "Timin (T)", "Uratsil (U)"],
    correctIndex: 2,
    explanation: "DNK da Adenin (A) va Timin (T) o'zaro 2 ta vodorod bog'i orqali komplementar bog'lanadi.",
    difficulty: 'O\'orta'
  },
  {
    id: 'q-bio-5',
    subject: 'biologiya',
    grade: 11,
    topic: 'Ekologiya',
    question: "Lindeman qoidasiga ko'ra, oziq zanjirining bir trofik pog'onasidan keyingisiga biomassaning necha foizi o'tadi?",
    options: ["50%", "100%", "10%", "1%"],
    correctIndex: 2,
    explanation: "Lindeman (10% qoidasi) bo'yicha har bir navbatdagi pog'onaga atigi 10% energiya/biomassa o'tadi.",
    difficulty: 'O\'orta'
  }
];
