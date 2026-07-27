export interface Question {
  id: number;
  question: string;
  options: { letter: string; text: string }[];
  correctLetter: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'very-hard';
}

export const QUESTIONS: Question[] = [
  // EASY (Questions 1-5)
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { letter: "A", text: "London" },
      { letter: "B", text: "Berlin" },
      { letter: "C", text: "Paris" },
      { letter: "D", text: "Madrid" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "How many continents are there on Earth?",
    options: [
      { letter: "A", text: "Five" },
      { letter: "B", text: "Six" },
      { letter: "C", text: "Seven" },
      { letter: "D", text: "Eight" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: [
      { letter: "A", text: "Atlantic Ocean" },
      { letter: "B", text: "Indian Ocean" },
      { letter: "C", text: "Arctic Ocean" },
      { letter: "D", text: "Pacific Ocean" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: [
      { letter: "A", text: "Venus" },
      { letter: "B", text: "Mars" },
      { letter: "C", text: "Jupiter" },
      { letter: "D", text: "Saturn" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "How many legs does a spider have?",
    options: [
      { letter: "A", text: "Six" },
      { letter: "B", text: "Eight" },
      { letter: "C", text: "Ten" },
      { letter: "D", text: "Twelve" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "What is the smallest country in the world?",
    options: [
      { letter: "A", text: "Monaco" },
      { letter: "B", text: "Vatican City" },
      { letter: "C", text: "San Marino" },
      { letter: "D", text: "Liechtenstein" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: [
      { letter: "A", text: "Tiger" },
      { letter: "B", text: "Elephant" },
      { letter: "C", text: "Lion" },
      { letter: "D", text: "Gorilla" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "What is the boiling point of water in Celsius?",
    options: [
      { letter: "A", text: "90°C" },
      { letter: "B", text: "100°C" },
      { letter: "C", text: "110°C" },
      { letter: "D", text: "120°C" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "In which year did World War II end?",
    options: [
      { letter: "A", text: "1943" },
      { letter: "B", text: "1944" },
      { letter: "C", text: "1945" },
      { letter: "D", text: "1946" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "What is the currency of Japan?",
    options: [
      { letter: "A", text: "Yuan" },
      { letter: "B", text: "Won" },
      { letter: "C", text: "Yen" },
      { letter: "D", text: "Ringgit" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "How many sides does a hexagon have?",
    options: [
      { letter: "A", text: "Five" },
      { letter: "B", text: "Six" },
      { letter: "C", text: "Seven" },
      { letter: "D", text: "Eight" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "What is the largest mammal in the world?",
    options: [
      { letter: "A", text: "African Elephant" },
      { letter: "B", text: "Blue Whale" },
      { letter: "C", text: "Giraffe" },
      { letter: "D", text: "Polar Bear" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      { letter: "A", text: "Oxygen" },
      { letter: "B", text: "Nitrogen" },
      { letter: "C", text: "Carbon Dioxide" },
      { letter: "D", text: "Hydrogen" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "How many colors are in a rainbow?",
    options: [
      { letter: "A", text: "Five" },
      { letter: "B", text: "Six" },
      { letter: "C", text: "Seven" },
      { letter: "D", text: "Eight" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "What is the hardest natural substance on Earth?",
    options: [
      { letter: "A", text: "Gold" },
      { letter: "B", text: "Iron" },
      { letter: "C", text: "Diamond" },
      { letter: "D", text: "Platinum" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },

  // MEDIUM (Questions 6-10)
  {
    id: 16,
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { letter: "A", text: "Charles Dickens" },
      { letter: "B", text: "William Shakespeare" },
      { letter: "C", text: "Jane Austen" },
      { letter: "D", text: "Mark Twain" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "What is the chemical symbol for gold?",
    options: [
      { letter: "A", text: "Go" },
      { letter: "B", text: "Gd" },
      { letter: "C", text: "Au" },
      { letter: "D", text: "Ag" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "In which country would you find the ancient city of Petra?",
    options: [
      { letter: "A", text: "Egypt" },
      { letter: "B", text: "Jordan" },
      { letter: "C", text: "Syria" },
      { letter: "D", text: "Lebanon" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "What is the longest river in the world?",
    options: [
      { letter: "A", text: "Amazon River" },
      { letter: "B", text: "Nile River" },
      { letter: "C", text: "Yangtze River" },
      { letter: "D", text: "Mississippi River" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Which element has the atomic number 1?",
    options: [
      { letter: "A", text: "Helium" },
      { letter: "B", text: "Hydrogen" },
      { letter: "C", text: "Oxygen" },
      { letter: "D", text: "Carbon" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Who painted the Mona Lisa?",
    options: [
      { letter: "A", text: "Vincent van Gogh" },
      { letter: "B", text: "Pablo Picasso" },
      { letter: "C", text: "Leonardo da Vinci" },
      { letter: "D", text: "Michelangelo" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "What is the speed of light in a vacuum?",
    options: [
      { letter: "A", text: "299,792 km/s" },
      { letter: "B", text: "150,000 km/s" },
      { letter: "C", text: "450,000 km/s" },
      { letter: "D", text: "600,000 km/s" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: [
      { letter: "A", text: "England" },
      { letter: "B", text: "Spain" },
      { letter: "C", text: "France" },
      { letter: "D", text: "Italy" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "What is the largest desert in the world?",
    options: [
      { letter: "A", text: "Sahara Desert" },
      { letter: "B", text: "Arabian Desert" },
      { letter: "C", text: "Gobi Desert" },
      { letter: "D", text: "Antarctic Desert" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "How many bones are in the adult human body?",
    options: [
      { letter: "A", text: "186" },
      { letter: "B", text: "206" },
      { letter: "C", text: "226" },
      { letter: "D", text: "246" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "Which planet is closest to the Sun?",
    options: [
      { letter: "A", text: "Venus" },
      { letter: "B", text: "Mars" },
      { letter: "C", text: "Mercury" },
      { letter: "D", text: "Earth" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "What is the capital of Australia?",
    options: [
      { letter: "A", text: "Sydney" },
      { letter: "B", text: "Melbourne" },
      { letter: "C", text: "Canberra" },
      { letter: "D", text: "Brisbane" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Who was the first person to walk on the Moon?",
    options: [
      { letter: "A", text: "Buzz Aldrin" },
      { letter: "B", text: "Neil Armstrong" },
      { letter: "C", text: "Yuri Gagarin" },
      { letter: "D", text: "Alan Shepard" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "In which year did the Titanic sink?",
    options: [
      { letter: "A", text: "1910" },
      { letter: "B", text: "1911" },
      { letter: "C", text: "1912" },
      { letter: "D", text: "1913" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "What is the tallest mountain in the world?",
    options: [
      { letter: "A", text: "K2" },
      { letter: "B", text: "Mount Everest" },
      { letter: "C", text: "Kangchenjunga" },
      { letter: "D", text: "Lhotse" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },

  // HARD (Questions 11-14)
  {
    id: 31,
    question: "What is the smallest bone in the human body?",
    options: [
      { letter: "A", text: "Stapes" },
      { letter: "B", text: "Incus" },
      { letter: "C", text: "Malleus" },
      { letter: "D", text: "Phalanx" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 32,
    question: "Which famous scientist developed the theory of general relativity?",
    options: [
      { letter: "A", text: "Isaac Newton" },
      { letter: "B", text: "Niels Bohr" },
      { letter: "C", text: "Albert Einstein" },
      { letter: "D", text: "Stephen Hawking" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 33,
    question: "What is the rarest blood type in humans?",
    options: [
      { letter: "A", text: "AB negative" },
      { letter: "B", text: "O negative" },
      { letter: "C", text: "B negative" },
      { letter: "D", text: "A negative" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "Who composed the opera 'The Magic Flute'?",
    options: [
      { letter: "A", text: "Johann Sebastian Bach" },
      { letter: "B", text: "Ludwig van Beethoven" },
      { letter: "C", text: "Wolfgang Amadeus Mozart" },
      { letter: "D", text: "Richard Wagner" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 35,
    question: "What is the chemical formula for table salt?",
    options: [
      { letter: "A", text: "NaCl" },
      { letter: "B", text: "KCl" },
      { letter: "C", text: "CaCl2" },
      { letter: "D", text: "MgCl2" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 36,
    question: "Which ancient wonder of the world still stands today?",
    options: [
      { letter: "A", text: "Hanging Gardens of Babylon" },
      { letter: "B", text: "Great Pyramid of Giza" },
      { letter: "C", text: "Colossus of Rhodes" },
      { letter: "D", text: "Lighthouse of Alexandria" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 37,
    question: "What is the name of the galaxy that contains our Solar System?",
    options: [
      { letter: "A", text: "Andromeda Galaxy" },
      { letter: "B", text: "Milky Way Galaxy" },
      { letter: "C", text: "Triangulum Galaxy" },
      { letter: "D", text: "Whirlpool Galaxy" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 38,
    question: "Who wrote 'The Divine Comedy'?",
    options: [
      { letter: "A", text: "Geoffrey Chaucer" },
      { letter: "B", text: "Dante Alighieri" },
      { letter: "C", text: "John Milton" },
      { letter: "D", text: "Homer" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 39,
    question: "What is the largest organ in the human body?",
    options: [
      { letter: "A", text: "Liver" },
      { letter: "B", text: "Brain" },
      { letter: "C", text: "Skin" },
      { letter: "D", text: "Heart" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 40,
    question: "In which year did the Berlin Wall fall?",
    options: [
      { letter: "A", text: "1987" },
      { letter: "B", text: "1988" },
      { letter: "C", text: "1989" },
      { letter: "D", text: "1990" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 41,
    question: "What is the powerhouse of the cell?",
    options: [
      { letter: "A", text: "Nucleus" },
      { letter: "B", text: "Ribosome" },
      { letter: "C", text: "Mitochondria" },
      { letter: "D", text: "Endoplasmic Reticulum" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 42,
    question: "Which philosopher wrote 'The Republic'?",
    options: [
      { letter: "A", text: "Aristotle" },
      { letter: "B", text: "Socrates" },
      { letter: "C", text: "Plato" },
      { letter: "D", text: "Epicurus" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 43,
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: [
      { letter: "A", text: "Oxygen" },
      { letter: "B", text: "Carbon Dioxide" },
      { letter: "C", text: "Nitrogen" },
      { letter: "D", text: "Argon" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 44,
    question: "Who invented the telephone?",
    options: [
      { letter: "A", text: "Thomas Edison" },
      { letter: "B", text: "Alexander Graham Bell" },
      { letter: "C", text: "Nikola Tesla" },
      { letter: "D", text: "Guglielmo Marconi" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 45,
    question: "What is the square root of 144?",
    options: [
      { letter: "A", text: "10" },
      { letter: "B", text: "11" },
      { letter: "C", text: "12" },
      { letter: "D", text: "13" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },

  // VERY HARD (Question 15)
  {
    id: 46,
    question: "What is the smallest prime number greater than 100?",
    options: [
      { letter: "A", text: "101" },
      { letter: "B", text: "103" },
      { letter: "C", text: "107" },
      { letter: "D", text: "109" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 47,
    question: "Which element has the highest melting point?",
    options: [
      { letter: "A", text: "Carbon" },
      { letter: "B", text: "Tungsten" },
      { letter: "C", text: "Osmium" },
      { letter: "D", text: "Rhenium" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 48,
    question: "In quantum mechanics, what does the Heisenberg Uncertainty Principle state?",
    options: [
      { letter: "A", text: "Energy and time cannot both be precisely determined" },
      { letter: "B", text: "Position and momentum cannot both be precisely determined" },
      { letter: "C", text: "Mass and velocity are inversely proportional" },
      { letter: "D", text: "Wave and particle nature are mutually exclusive" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 49,
    question: "Who was the first Holy Roman Emperor?",
    options: [
      { letter: "A", text: "Frederick Barbarossa" },
      { letter: "B", text: "Otto I" },
      { letter: "C", text: "Charlemagne" },
      { letter: "D", text: "Henry IV" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 50,
    question: "What is the name of the brightest star in the night sky?",
    options: [
      { letter: "A", text: "Canopus" },
      { letter: "B", text: "Sirius" },
      { letter: "C", text: "Arcturus" },
      { letter: "D", text: "Vega" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 51,
    question: "Which mathematician formulated the incompleteness theorems?",
    options: [
      { letter: "A", text: "Kurt Gödel" },
      { letter: "B", text: "Alan Turing" },
      { letter: "C", text: "Bertrand Russell" },
      { letter: "D", text: "David Hilbert" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 52,
    question: "What is the rarest naturally occurring element on Earth?",
    options: [
      { letter: "A", text: "Francium" },
      { letter: "B", text: "Astatine" },
      { letter: "C", text: "Promethium" },
      { letter: "D", text: "Technetium" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 53,
    question: "Who painted 'The Garden of Earthly Delights'?",
    options: [
      { letter: "A", text: "Pieter Bruegel the Elder" },
      { letter: "B", text: "Hieronymus Bosch" },
      { letter: "C", text: "Jan van Eyck" },
      { letter: "D", text: "Albrecht Dürer" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 54,
    question: "What is the half-life of Carbon-14?",
    options: [
      { letter: "A", text: "5,730 years" },
      { letter: "B", text: "11,460 years" },
      { letter: "C", text: "2,865 years" },
      { letter: "D", text: "8,200 years" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 55,
    question: "Which ancient Greek philosopher tutored Alexander the Great?",
    options: [
      { letter: "A", text: "Plato" },
      { letter: "B", text: "Socrates" },
      { letter: "C", text: "Aristotle" },
      { letter: "D", text: "Pythagoras" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 56,
    question: "What is the deepest point in Earth's oceans?",
    options: [
      { letter: "A", text: "Challenger Deep" },
      { letter: "B", text: "Horizon Deep" },
      { letter: "C", text: "Tonga Trench" },
      { letter: "D", text: "Java Trench" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 57,
    question: "Who wrote 'In Search of Lost Time'?",
    options: [
      { letter: "A", text: "James Joyce" },
      { letter: "B", text: "Marcel Proust" },
      { letter: "C", text: "Virginia Woolf" },
      { letter: "D", text: "Franz Kafka" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 58,
    question: "What is the only continent without an active volcano?",
    options: [
      { letter: "A", text: "Europe" },
      { letter: "B", text: "Australia" },
      { letter: "C", text: "Antarctica" },
      { letter: "D", text: "Africa" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 59,
    question: "In chess, what is the maximum number of queens a player can have on the board at once?",
    options: [
      { letter: "A", text: "8" },
      { letter: "B", text: "9" },
      { letter: "C", text: "10" },
      { letter: "D", text: "16" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 60,
    question: "What is the official language of Bhutan?",
    options: [
      { letter: "A", text: "Hindi" },
      { letter: "B", text: "Nepali" },
      { letter: "C", text: "Dzongkha" },
      { letter: "D", text: "Tibetan" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  }
];

export const MONEY_LADDER = [
  { level: 1, amount: 100, isSafeHaven: false },
  { level: 2, amount: 200, isSafeHaven: false },
  { level: 3, amount: 300, isSafeHaven: false },
  { level: 4, amount: 500, isSafeHaven: false },
  { level: 5, amount: 1000, isSafeHaven: true },
  { level: 6, amount: 2000, isSafeHaven: false },
  { level: 7, amount: 4000, isSafeHaven: false },
  { level: 8, amount: 8000, isSafeHaven: false },
  { level: 9, amount: 16000, isSafeHaven: false },
  { level: 10, amount: 32000, isSafeHaven: true },
  { level: 11, amount: 64000, isSafeHaven: false },
  { level: 12, amount: 125000, isSafeHaven: false },
  { level: 13, amount: 250000, isSafeHaven: false },
  { level: 14, amount: 500000, isSafeHaven: false },
  { level: 15, amount: 1000000, isSafeHaven: false }
];

export function selectRandomQuestions(): Question[] {
  const easy = QUESTIONS.filter(q => q.difficulty === 'easy');
  const medium = QUESTIONS.filter(q => q.difficulty === 'medium');
  const hard = QUESTIONS.filter(q => q.difficulty === 'hard');
  const veryHard = QUESTIONS.filter(q => q.difficulty === 'very-hard');

  const shuffle = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return [
    ...shuffle(easy).slice(0, 5),
    ...shuffle(medium).slice(0, 5),
    ...shuffle(hard).slice(0, 4),
    ...shuffle(veryHard).slice(0, 1)
  ];
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

export function getGuaranteedPrize(currentLevel: number): number {
  if (currentLevel < 5) return 0;
  if (currentLevel < 10) return 1000;
  return 32000;
}
