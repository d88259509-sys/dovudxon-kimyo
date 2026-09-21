export type SubjectType = 'kimyo' | 'biologiya';

export interface ChemicalElement {
  number: number;
  symbol: string;
  nameUz: string;
  nameLat: string;
  atomicMass: number;
  category: 'alkali-metal' | 'alkaline-earth' | 'transition-metal' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas' | 'lanthanide' | 'actinide';
  categoryUz: string;
  period: number;
  group: number;
  block: 's' | 'p' | 'd' | 'f';
  electronConfiguration: string;
  shells: number[];
  electronegativity?: number;
  density?: number; // g/cm³
  meltingPoint?: number; // Kelvin
  boilingPoint?: number; // Kelvin
  discoveredBy?: string;
  discoveryYear?: number | string;
  summaryUz: string;
  applicationsUz: string[];
  oxidationStates: string;
  phase: 'Qattiq' | 'Suyuq' | 'Gaz';
}

export interface BiologyLesson {
  id: string;
  grade: number; // 5 to 11
  subjectSection: string; // e.g., "Botanika", "Zoologiya", "Odam anatomiyasi"
  titleUz: string;
  descriptionUz: string;
  contentUz: string;
  keyTerms: { term: string; definition: string }[];
  formulas?: { name: string; formula: string; explanation: string }[];
  diagramType?: 'cell-plant' | 'cell-animal' | 'dna' | 'photosynthesis' | 'heart' | 'eco-pyramid';
  summaryPoints: string[];
}

export interface QuizQuestion {
  id: string;
  subject: SubjectType;
  grade?: number;
  topic?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Oson' | 'O\'orta' | 'Qiyin';
}

export interface PracticeProblem {
  id: string;
  subject: SubjectType;
  title: string;
  grade: number;
  problemText: string;
  givens: string[];
  formulasUsed: string[];
  stepByStepSolution: string[];
  finalAnswer: string;
  teacherNote?: string;
}

export interface SavedBookmark {
  id: string;
  type: 'element' | 'lesson' | 'problem' | 'quiz';
  title: string;
  subtitle: string;
  data: any;
  createdAt: string;
}
