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
  },

  // ─── EASY (additional) ───────────────────────────────────────────────────────
  {
    id: 61,
    question: "How many days are in a leap year?",
    options: [
      { letter: "A", text: "364" },
      { letter: "B", text: "365" },
      { letter: "C", text: "366" },
      { letter: "D", text: "367" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 62,
    question: "What color do you get when you mix red and white?",
    options: [
      { letter: "A", text: "Orange" },
      { letter: "B", text: "Pink" },
      { letter: "C", text: "Purple" },
      { letter: "D", text: "Peach" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 63,
    question: "Which instrument has black and white keys?",
    options: [
      { letter: "A", text: "Guitar" },
      { letter: "B", text: "Violin" },
      { letter: "C", text: "Piano" },
      { letter: "D", text: "Trumpet" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 64,
    question: "How many hours are in two days?",
    options: [
      { letter: "A", text: "24" },
      { letter: "B", text: "36" },
      { letter: "C", text: "48" },
      { letter: "D", text: "72" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "What is the tallest animal in the world?",
    options: [
      { letter: "A", text: "Elephant" },
      { letter: "B", text: "Giraffe" },
      { letter: "C", text: "Ostrich" },
      { letter: "D", text: "Polar Bear" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 66,
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { letter: "A", text: "China" },
      { letter: "B", text: "South Korea" },
      { letter: "C", text: "Japan" },
      { letter: "D", text: "Vietnam" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 67,
    question: "How many sides does a triangle have?",
    options: [
      { letter: "A", text: "2" },
      { letter: "B", text: "3" },
      { letter: "C", text: "4" },
      { letter: "D", text: "5" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "What is frozen water called?",
    options: [
      { letter: "A", text: "Steam" },
      { letter: "B", text: "Vapor" },
      { letter: "C", text: "Ice" },
      { letter: "D", text: "Sleet" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 69,
    question: "Which ocean is on the east coast of the United States?",
    options: [
      { letter: "A", text: "Pacific Ocean" },
      { letter: "B", text: "Indian Ocean" },
      { letter: "C", text: "Arctic Ocean" },
      { letter: "D", text: "Atlantic Ocean" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 70,
    question: "What is the primary color you get by mixing blue and yellow?",
    options: [
      { letter: "A", text: "Purple" },
      { letter: "B", text: "Green" },
      { letter: "C", text: "Orange" },
      { letter: "D", text: "Brown" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 71,
    question: "Which planet is the largest in our solar system?",
    options: [
      { letter: "A", text: "Saturn" },
      { letter: "B", text: "Neptune" },
      { letter: "C", text: "Uranus" },
      { letter: "D", text: "Jupiter" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "What do bees produce?",
    options: [
      { letter: "A", text: "Milk" },
      { letter: "B", text: "Honey" },
      { letter: "C", text: "Wax only" },
      { letter: "D", text: "Silk" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "What is the name of the fairy tale character who slept for 100 years?",
    options: [
      { letter: "A", text: "Snow White" },
      { letter: "B", text: "Cinderella" },
      { letter: "C", text: "Sleeping Beauty" },
      { letter: "D", text: "Rapunzel" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 74,
    question: "How many minutes are in one hour?",
    options: [
      { letter: "A", text: "50" },
      { letter: "B", text: "60" },
      { letter: "C", text: "70" },
      { letter: "D", text: "100" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 75,
    question: "What is the most spoken language in the world?",
    options: [
      { letter: "A", text: "Spanish" },
      { letter: "B", text: "English" },
      { letter: "C", text: "Mandarin Chinese" },
      { letter: "D", text: "Hindi" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 76,
    question: "Which sport uses a ball and a racket on a net?",
    options: [
      { letter: "A", text: "Baseball" },
      { letter: "B", text: "Tennis" },
      { letter: "C", text: "Golf" },
      { letter: "D", text: "Rugby" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 77,
    question: "What is the opposite of 'hot'?",
    options: [
      { letter: "A", text: "Warm" },
      { letter: "B", text: "Mild" },
      { letter: "C", text: "Cold" },
      { letter: "D", text: "Cool" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "How many zeros are in one million?",
    options: [
      { letter: "A", text: "5" },
      { letter: "B", text: "6" },
      { letter: "C", text: "7" },
      { letter: "D", text: "8" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "Which Disney film features the song 'Let It Go'?",
    options: [
      { letter: "A", text: "Tangled" },
      { letter: "B", text: "Moana" },
      { letter: "C", text: "Frozen" },
      { letter: "D", text: "Brave" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 80,
    question: "What is the capital of the United States of America?",
    options: [
      { letter: "A", text: "New York City" },
      { letter: "B", text: "Los Angeles" },
      { letter: "C", text: "Chicago" },
      { letter: "D", text: "Washington D.C." }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 81,
    question: "Which fruit is known for keeping the doctor away?",
    options: [
      { letter: "A", text: "Banana" },
      { letter: "B", text: "Apple" },
      { letter: "C", text: "Orange" },
      { letter: "D", text: "Grape" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 82,
    question: "What is the name of Superman's home planet?",
    options: [
      { letter: "A", text: "Mars" },
      { letter: "B", text: "Xandar" },
      { letter: "C", text: "Krypton" },
      { letter: "D", text: "Asgard" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 83,
    question: "How many players are on a standard football (soccer) team?",
    options: [
      { letter: "A", text: "9" },
      { letter: "B", text: "10" },
      { letter: "C", text: "11" },
      { letter: "D", text: "12" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "What is the largest continent on Earth?",
    options: [
      { letter: "A", text: "Africa" },
      { letter: "B", text: "North America" },
      { letter: "C", text: "Asia" },
      { letter: "D", text: "Europe" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 85,
    question: "Which shape has four equal sides?",
    options: [
      { letter: "A", text: "Rectangle" },
      { letter: "B", text: "Rhombus" },
      { letter: "C", text: "Square" },
      { letter: "D", text: "Both B and C" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },

  // ─── MEDIUM (additional) ─────────────────────────────────────────────────────
  {
    id: 86,
    question: "What is the powerhouse of the cell?",
    options: [
      { letter: "A", text: "Nucleus" },
      { letter: "B", text: "Ribosome" },
      { letter: "C", text: "Mitochondria" },
      { letter: "D", text: "Golgi apparatus" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "In which year did the French Revolution begin?",
    options: [
      { letter: "A", text: "1776" },
      { letter: "B", text: "1789" },
      { letter: "C", text: "1799" },
      { letter: "D", text: "1804" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "What is the chemical symbol for silver?",
    options: [
      { letter: "A", text: "Si" },
      { letter: "B", text: "Sr" },
      { letter: "C", text: "Ag" },
      { letter: "D", text: "Sv" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Which author wrote '1984'?",
    options: [
      { letter: "A", text: "Aldous Huxley" },
      { letter: "B", text: "George Orwell" },
      { letter: "C", text: "Ray Bradbury" },
      { letter: "D", text: "H.G. Wells" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "How many keys does a standard piano have?",
    options: [
      { letter: "A", text: "72" },
      { letter: "B", text: "76" },
      { letter: "C", text: "88" },
      { letter: "D", text: "96" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 91,
    question: "What is the capital city of Canada?",
    options: [
      { letter: "A", text: "Toronto" },
      { letter: "B", text: "Vancouver" },
      { letter: "C", text: "Montreal" },
      { letter: "D", text: "Ottawa" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Which element is represented by the symbol 'Fe'?",
    options: [
      { letter: "A", text: "Fluorine" },
      { letter: "B", text: "Iron" },
      { letter: "C", text: "Francium" },
      { letter: "D", text: "Fermium" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      { letter: "A", text: "Rosalind Franklin" },
      { letter: "B", text: "Dorothy Hodgkin" },
      { letter: "C", text: "Marie Curie" },
      { letter: "D", text: "Lise Meitner" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "In which country is the Great Wall located?",
    options: [
      { letter: "A", text: "Japan" },
      { letter: "B", text: "Mongolia" },
      { letter: "C", text: "China" },
      { letter: "D", text: "Korea" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "What is the name of the largest rainforest in the world?",
    options: [
      { letter: "A", text: "Congo Rainforest" },
      { letter: "B", text: "Amazon Rainforest" },
      { letter: "C", text: "Daintree Rainforest" },
      { letter: "D", text: "Tongass Rainforest" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "Who composed 'Beethoven's Fifth Symphony'?",
    options: [
      { letter: "A", text: "Johann Sebastian Bach" },
      { letter: "B", text: "Wolfgang Amadeus Mozart" },
      { letter: "C", text: "Ludwig van Beethoven" },
      { letter: "D", text: "Franz Schubert" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 97,
    question: "What year did World War I begin?",
    options: [
      { letter: "A", text: "1912" },
      { letter: "B", text: "1913" },
      { letter: "C", text: "1914" },
      { letter: "D", text: "1915" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Which gas makes up most of the Earth's atmosphere?",
    options: [
      { letter: "A", text: "Oxygen" },
      { letter: "B", text: "Carbon Dioxide" },
      { letter: "C", text: "Nitrogen" },
      { letter: "D", text: "Argon" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "What is the main language spoken in Brazil?",
    options: [
      { letter: "A", text: "Spanish" },
      { letter: "B", text: "Portuguese" },
      { letter: "C", text: "French" },
      { letter: "D", text: "English" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "How many chromosomes does a human cell typically contain?",
    options: [
      { letter: "A", text: "23" },
      { letter: "B", text: "44" },
      { letter: "C", text: "46" },
      { letter: "D", text: "48" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 101,
    question: "Which Shakespeare play features the characters Iago and Othello?",
    options: [
      { letter: "A", text: "Macbeth" },
      { letter: "B", text: "King Lear" },
      { letter: "C", text: "The Tempest" },
      { letter: "D", text: "Othello" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "What is the closest star to Earth after the Sun?",
    options: [
      { letter: "A", text: "Sirius" },
      { letter: "B", text: "Proxima Centauri" },
      { letter: "C", text: "Betelgeuse" },
      { letter: "D", text: "Vega" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "In which US state is the Grand Canyon located?",
    options: [
      { letter: "A", text: "Utah" },
      { letter: "B", text: "Nevada" },
      { letter: "C", text: "Arizona" },
      { letter: "D", text: "Colorado" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "What is the currency of the United Kingdom?",
    options: [
      { letter: "A", text: "Euro" },
      { letter: "B", text: "Dollar" },
      { letter: "C", text: "Pound Sterling" },
      { letter: "D", text: "Franc" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Which planet has the most moons in our solar system?",
    options: [
      { letter: "A", text: "Jupiter" },
      { letter: "B", text: "Saturn" },
      { letter: "C", text: "Uranus" },
      { letter: "D", text: "Neptune" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Who invented the World Wide Web?",
    options: [
      { letter: "A", text: "Bill Gates" },
      { letter: "B", text: "Steve Jobs" },
      { letter: "C", text: "Tim Berners-Lee" },
      { letter: "D", text: "Vint Cerf" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "What is the capital of Argentina?",
    options: [
      { letter: "A", text: "São Paulo" },
      { letter: "B", text: "Santiago" },
      { letter: "C", text: "Lima" },
      { letter: "D", text: "Buenos Aires" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "Which bone protects the brain?",
    options: [
      { letter: "A", text: "Sternum" },
      { letter: "B", text: "Skull" },
      { letter: "C", text: "Vertebra" },
      { letter: "D", text: "Pelvis" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 109,
    question: "Which musical term means 'very fast'?",
    options: [
      { letter: "A", text: "Andante" },
      { letter: "B", text: "Moderato" },
      { letter: "C", text: "Presto" },
      { letter: "D", text: "Adagio" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "What year did man first land on the Moon?",
    options: [
      { letter: "A", text: "1967" },
      { letter: "B", text: "1968" },
      { letter: "C", text: "1969" },
      { letter: "D", text: "1970" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },

  // ─── HARD (additional) ───────────────────────────────────────────────────────
  {
    id: 111,
    question: "What is the Fibonacci sequence's 10th number?",
    options: [
      { letter: "A", text: "34" },
      { letter: "B", text: "55" },
      { letter: "C", text: "89" },
      { letter: "D", text: "144" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 112,
    question: "Which treaty ended the Thirty Years' War?",
    options: [
      { letter: "A", text: "Treaty of Utrecht" },
      { letter: "B", text: "Peace of Westphalia" },
      { letter: "C", text: "Treaty of Paris" },
      { letter: "D", text: "Congress of Vienna" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 113,
    question: "What is the atomic number of carbon?",
    options: [
      { letter: "A", text: "4" },
      { letter: "B", text: "6" },
      { letter: "C", text: "8" },
      { letter: "D", text: "12" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "In which year was the Magna Carta signed?",
    options: [
      { letter: "A", text: "1066" },
      { letter: "B", text: "1189" },
      { letter: "C", text: "1215" },
      { letter: "D", text: "1265" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 115,
    question: "Who wrote 'Crime and Punishment'?",
    options: [
      { letter: "A", text: "Leo Tolstoy" },
      { letter: "B", text: "Anton Chekhov" },
      { letter: "C", text: "Fyodor Dostoevsky" },
      { letter: "D", text: "Ivan Turgenev" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 116,
    question: "What is the process by which plants make food using sunlight?",
    options: [
      { letter: "A", text: "Respiration" },
      { letter: "B", text: "Transpiration" },
      { letter: "C", text: "Fermentation" },
      { letter: "D", text: "Photosynthesis" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 117,
    question: "Which Roman emperor issued the Edict of Milan, granting religious tolerance?",
    options: [
      { letter: "A", text: "Augustus" },
      { letter: "B", text: "Nero" },
      { letter: "C", text: "Constantine I" },
      { letter: "D", text: "Diocletian" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 118,
    question: "What is the speed of sound in dry air at 20°C (approximately)?",
    options: [
      { letter: "A", text: "200 m/s" },
      { letter: "B", text: "343 m/s" },
      { letter: "C", text: "500 m/s" },
      { letter: "D", text: "700 m/s" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 119,
    question: "Which country has won the most FIFA World Cups?",
    options: [
      { letter: "A", text: "Germany" },
      { letter: "B", text: "Argentina" },
      { letter: "C", text: "Italy" },
      { letter: "D", text: "Brazil" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 120,
    question: "What is the name of the scale used to measure the hardness of minerals?",
    options: [
      { letter: "A", text: "Richter Scale" },
      { letter: "B", text: "Beaufort Scale" },
      { letter: "C", text: "Mohs Scale" },
      { letter: "D", text: "pH Scale" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 121,
    question: "Which mountain range separates Europe from Asia?",
    options: [
      { letter: "A", text: "Alps" },
      { letter: "B", text: "Caucasus Mountains" },
      { letter: "C", text: "Ural Mountains" },
      { letter: "D", text: "Carpathian Mountains" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 122,
    question: "What does DNA stand for?",
    options: [
      { letter: "A", text: "Deoxyribonucleic Acid" },
      { letter: "B", text: "Diribonucleic Acid" },
      { letter: "C", text: "Deoxyribose Nucleotide Acid" },
      { letter: "D", text: "Dynamic Nucleic Acid" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 123,
    question: "Who painted the Sistine Chapel ceiling?",
    options: [
      { letter: "A", text: "Leonardo da Vinci" },
      { letter: "B", text: "Raphael" },
      { letter: "C", text: "Michelangelo" },
      { letter: "D", text: "Donatello" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "What is the term for a group of lions?",
    options: [
      { letter: "A", text: "Pack" },
      { letter: "B", text: "Herd" },
      { letter: "C", text: "Pride" },
      { letter: "D", text: "Colony" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 125,
    question: "Which ancient Egyptian pharaoh built the Great Pyramid of Giza?",
    options: [
      { letter: "A", text: "Ramesses II" },
      { letter: "B", text: "Tutankhamun" },
      { letter: "C", text: "Khufu" },
      { letter: "D", text: "Cleopatra VII" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 126,
    question: "What is Avogadro's number (approximately)?",
    options: [
      { letter: "A", text: "6.02 × 10²³" },
      { letter: "B", text: "3.14 × 10²³" },
      { letter: "C", text: "9.81 × 10²³" },
      { letter: "D", text: "1.67 × 10²³" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 127,
    question: "Which author created the fictional detective Hercule Poirot?",
    options: [
      { letter: "A", text: "Arthur Conan Doyle" },
      { letter: "B", text: "Dorothy L. Sayers" },
      { letter: "C", text: "Agatha Christie" },
      { letter: "D", text: "P.D. James" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "In which country did the Renaissance originate?",
    options: [
      { letter: "A", text: "France" },
      { letter: "B", text: "Germany" },
      { letter: "C", text: "Spain" },
      { letter: "D", text: "Italy" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 129,
    question: "What is the largest internal organ in the human body?",
    options: [
      { letter: "A", text: "Heart" },
      { letter: "B", text: "Lungs" },
      { letter: "C", text: "Liver" },
      { letter: "D", text: "Kidneys" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 130,
    question: "Which empire was ruled by Genghis Khan?",
    options: [
      { letter: "A", text: "Ottoman Empire" },
      { letter: "B", text: "Mongol Empire" },
      { letter: "C", text: "Ming Dynasty" },
      { letter: "D", text: "Mughal Empire" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },

  // ─── VERY HARD (additional) ──────────────────────────────────────────────────
  {
    id: 131,
    question: "What is the Schwarzschild radius of an object?",
    options: [
      { letter: "A", text: "The radius at which its escape velocity equals the speed of light" },
      { letter: "B", text: "The maximum radius a neutron star can have" },
      { letter: "C", text: "The radius of the event horizon of a quasar" },
      { letter: "D", text: "The distance at which gravitational lensing begins" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 132,
    question: "Which philosopher wrote 'Critique of Pure Reason'?",
    options: [
      { letter: "A", text: "Friedrich Nietzsche" },
      { letter: "B", text: "G.W.F. Hegel" },
      { letter: "C", text: "Immanuel Kant" },
      { letter: "D", text: "Arthur Schopenhauer" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 133,
    question: "In which year did the Byzantine Empire fall?",
    options: [
      { letter: "A", text: "1389" },
      { letter: "B", text: "1453" },
      { letter: "C", text: "1492" },
      { letter: "D", text: "1517" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 134,
    question: "What is the oxidation state of sulfur in sulfuric acid (H₂SO₄)?",
    options: [
      { letter: "A", text: "+4" },
      { letter: "B", text: "+5" },
      { letter: "C", text: "+6" },
      { letter: "D", text: "+7" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 135,
    question: "Who wrote the mathematical proof of Fermat's Last Theorem?",
    options: [
      { letter: "A", text: "Paul Erdős" },
      { letter: "B", text: "Andrew Wiles" },
      { letter: "C", text: "John Nash" },
      { letter: "D", text: "Grigori Perelman" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 136,
    question: "Which pre-Columbian civilization built Machu Picchu?",
    options: [
      { letter: "A", text: "Aztec" },
      { letter: "B", text: "Maya" },
      { letter: "C", text: "Olmec" },
      { letter: "D", text: "Inca" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 137,
    question: "What is the name of the protein that allows red blood cells to carry oxygen?",
    options: [
      { letter: "A", text: "Myosin" },
      { letter: "B", text: "Hemoglobin" },
      { letter: "C", text: "Albumin" },
      { letter: "D", text: "Fibrinogen" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 138,
    question: "In music theory, what interval is the ratio 3:2?",
    options: [
      { letter: "A", text: "Major third" },
      { letter: "B", text: "Perfect fourth" },
      { letter: "C", text: "Perfect fifth" },
      { letter: "D", text: "Major sixth" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 139,
    question: "Who was the first person to circumnavigate the globe?",
    options: [
      { letter: "A", text: "Christopher Columbus" },
      { letter: "B", text: "Ferdinand Magellan" },
      { letter: "C", text: "Juan Sebastián Elcano" },
      { letter: "D", text: "Vasco da Gama" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 140,
    question: "What is the name of the longest-running English-language soap opera?",
    options: [
      { letter: "A", text: "EastEnders" },
      { letter: "B", text: "Coronation Street" },
      { letter: "C", text: "Emmerdale" },
      { letter: "D", text: "Hollyoaks" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 141,
    question: "Which element was discovered by Pierre and Marie Curie in 1898 and named after their homeland?",
    options: [
      { letter: "A", text: "Radium" },
      { letter: "B", text: "Curium" },
      { letter: "C", text: "Polonium" },
      { letter: "D", text: "Francium" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 142,
    question: "What is the term for a group of crows?",
    options: [
      { letter: "A", text: "Flock" },
      { letter: "B", text: "Murder" },
      { letter: "C", text: "Conspiracy" },
      { letter: "D", text: "Parliament" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 143,
    question: "In computing, what does the acronym SQL stand for?",
    options: [
      { letter: "A", text: "Standard Query Language" },
      { letter: "B", text: "Structured Query Language" },
      { letter: "C", text: "Sequential Query Language" },
      { letter: "D", text: "System Query Language" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 144,
    question: "The Peloponnesian War was fought between Athens and which other city-state?",
    options: [
      { letter: "A", text: "Corinth" },
      { letter: "B", text: "Thebes" },
      { letter: "C", text: "Sparta" },
      { letter: "D", text: "Troy" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 145,
    question: "What is the chemical formula for glucose?",
    options: [
      { letter: "A", text: "C₆H₁₂O₅" },
      { letter: "B", text: "C₆H₁₂O₆" },
      { letter: "C", text: "C₅H₁₀O₅" },
      { letter: "D", text: "C₁₂H₂₂O₁₁" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 146,
    question: "Who wrote 'Gödel, Escher, Bach: An Eternal Golden Braid'?",
    options: [
      { letter: "A", text: "Roger Penrose" },
      { letter: "B", text: "Douglas Hofstadter" },
      { letter: "C", text: "Daniel Dennett" },
      { letter: "D", text: "Stephen Wolfram" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 147,
    question: "What is the population of Vatican City (approximately)?",
    options: [
      { letter: "A", text: "100" },
      { letter: "B", text: "800" },
      { letter: "C", text: "5,000" },
      { letter: "D", text: "25,000" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 148,
    question: "Which ancient library was one of the largest in the ancient world, located in Egypt?",
    options: [
      { letter: "A", text: "Library of Pergamon" },
      { letter: "B", text: "Library of Athens" },
      { letter: "C", text: "Library of Alexandria" },
      { letter: "D", text: "Library of Carthage" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 149,
    question: "What is the only number that is both a Fibonacci number and a perfect square greater than 1?",
    options: [
      { letter: "A", text: "8" },
      { letter: "B", text: "144" },
      { letter: "C", text: "Both 8 and 144" },
      { letter: "D", text: "89" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 150,
    question: "Who developed the polio vaccine in 1955?",
    options: [
      { letter: "A", text: "Alexander Fleming" },
      { letter: "B", text: "Albert Sabin" },
      { letter: "C", text: "Jonas Salk" },
      { letter: "D", text: "Louis Pasteur" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 151,
    question: "What color do you get when you mix blue and yellow paint?",
    options: [
      { letter: "A", text: "Orange" },
      { letter: "B", text: "Green" },
      { letter: "C", text: "Brown" },
      { letter: "D", text: "Purple" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "How many days are there in a leap year?",
    options: [
      { letter: "A", text: "367" },
      { letter: "B", text: "364" },
      { letter: "C", text: "365" },
      { letter: "D", text: "366" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "What is the largest planet in our solar system?",
    options: [
      { letter: "A", text: "Saturn" },
      { letter: "B", text: "Mars" },
      { letter: "C", text: "Jupiter" },
      { letter: "D", text: "Earth" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 154,
    question: "What is the freezing point of water in Celsius?",
    options: [
      { letter: "A", text: "10°C" },
      { letter: "B", text: "-10°C" },
      { letter: "C", text: "0°C" },
      { letter: "D", text: "100°C" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 155,
    question: "What is the capital of Japan?",
    options: [
      { letter: "A", text: "Seoul" },
      { letter: "B", text: "Tokyo" },
      { letter: "C", text: "Bangkok" },
      { letter: "D", text: "Beijing" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 156,
    question: "What is the main ingredient in guacamole?",
    options: [
      { letter: "A", text: "Avocado" },
      { letter: "B", text: "Lime" },
      { letter: "C", text: "Onion" },
      { letter: "D", text: "Tomato" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 157,
    question: "How many strings does a standard guitar have?",
    options: [
      { letter: "A", text: "6" },
      { letter: "B", text: "5" },
      { letter: "C", text: "4" },
      { letter: "D", text: "7" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 158,
    question: "What gas do plants absorb from the atmosphere?",
    options: [
      { letter: "A", text: "Nitrogen" },
      { letter: "B", text: "Hydrogen" },
      { letter: "C", text: "Oxygen" },
      { letter: "D", text: "Carbon dioxide" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 159,
    question: "Which ocean is the largest on Earth?",
    options: [
      { letter: "A", text: "Atlantic" },
      { letter: "B", text: "Arctic" },
      { letter: "C", text: "Indian" },
      { letter: "D", text: "Pacific" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "What is the capital city of Italy?",
    options: [
      { letter: "A", text: "Rome" },
      { letter: "B", text: "Naples" },
      { letter: "C", text: "Milan" },
      { letter: "D", text: "Venice" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "How many colors are there in a rainbow?",
    options: [
      { letter: "A", text: "7" },
      { letter: "B", text: "6" },
      { letter: "C", text: "8" },
      { letter: "D", text: "5" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 162,
    question: "What do you call a baby dog?",
    options: [
      { letter: "A", text: "Foal" },
      { letter: "B", text: "Cub" },
      { letter: "C", text: "Puppy" },
      { letter: "D", text: "Kitten" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 163,
    question: "Which shape has three sides?",
    options: [
      { letter: "A", text: "Pentagon" },
      { letter: "B", text: "Circle" },
      { letter: "C", text: "Square" },
      { letter: "D", text: "Triangle" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 164,
    question: "How many hours are there in a day?",
    options: [
      { letter: "A", text: "24" },
      { letter: "B", text: "30" },
      { letter: "C", text: "20" },
      { letter: "D", text: "12" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 165,
    question: "What is the chemical symbol for water?",
    options: [
      { letter: "A", text: "H2O" },
      { letter: "B", text: "O2" },
      { letter: "C", text: "HO" },
      { letter: "D", text: "CO2" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 166,
    question: "Which season comes after winter?",
    options: [
      { letter: "A", text: "Fall" },
      { letter: "B", text: "Summer" },
      { letter: "C", text: "Spring" },
      { letter: "D", text: "Autumn" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 167,
    question: "What instrument has 88 keys?",
    options: [
      { letter: "A", text: "Violin" },
      { letter: "B", text: "Flute" },
      { letter: "C", text: "Piano" },
      { letter: "D", text: "Guitar" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 168,
    question: "What is the closest star to Earth?",
    options: [
      { letter: "A", text: "The Sun" },
      { letter: "B", text: "Alpha Centauri" },
      { letter: "C", text: "Proxima Centauri" },
      { letter: "D", text: "Sirius" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 169,
    question: "How many players are on a soccer team on the field at once?",
    options: [
      { letter: "A", text: "12" },
      { letter: "B", text: "11" },
      { letter: "C", text: "10" },
      { letter: "D", text: "9" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 170,
    question: "What do caterpillars turn into?",
    options: [
      { letter: "A", text: "Bees" },
      { letter: "B", text: "Butterflies" },
      { letter: "C", text: "Moths only" },
      { letter: "D", text: "Beetles" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 171,
    question: "Which country is famous for the Eiffel Tower?",
    options: [
      { letter: "A", text: "Italy" },
      { letter: "B", text: "France" },
      { letter: "C", text: "Germany" },
      { letter: "D", text: "Spain" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 172,
    question: "How many wheels does a standard bicycle have?",
    options: [
      { letter: "A", text: "1" },
      { letter: "B", text: "4" },
      { letter: "C", text: "3" },
      { letter: "D", text: "2" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "What do you call a group of wolves?",
    options: [
      { letter: "A", text: "Flock" },
      { letter: "B", text: "School" },
      { letter: "C", text: "Pack" },
      { letter: "D", text: "Herd" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 174,
    question: "What is the currency used in the United States?",
    options: [
      { letter: "A", text: "Dollar" },
      { letter: "B", text: "Peso" },
      { letter: "C", text: "Euro" },
      { letter: "D", text: "Pound" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 175,
    question: "Which vegetable is known for making people cry when cut?",
    options: [
      { letter: "A", text: "Onion" },
      { letter: "B", text: "Carrot" },
      { letter: "C", text: "Potato" },
      { letter: "D", text: "Cucumber" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 176,
    question: "What is the first month of the year?",
    options: [
      { letter: "A", text: "January" },
      { letter: "B", text: "March" },
      { letter: "C", text: "December" },
      { letter: "D", text: "February" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 177,
    question: "How many continents are covered mostly in ice?",
    options: [
      { letter: "A", text: "3" },
      { letter: "B", text: "2" },
      { letter: "C", text: "1" },
      { letter: "D", text: "0" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 178,
    question: "What do you call the study of stars and planets?",
    options: [
      { letter: "A", text: "Geology" },
      { letter: "B", text: "Chemistry" },
      { letter: "C", text: "Biology" },
      { letter: "D", text: "Astronomy" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 179,
    question: "Which bird is known for its ability to mimic human speech?",
    options: [
      { letter: "A", text: "Sparrow" },
      { letter: "B", text: "Parrot" },
      { letter: "C", text: "Eagle" },
      { letter: "D", text: "Owl" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 180,
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: [
      { letter: "A", text: "Leonardo da Vinci" },
      { letter: "B", text: "Michelangelo" },
      { letter: "C", text: "Raphael" },
      { letter: "D", text: "Donatello" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 181,
    question: "What is the smallest country in the world by area?",
    options: [
      { letter: "A", text: "Vatican City" },
      { letter: "B", text: "Monaco" },
      { letter: "C", text: "Liechtenstein" },
      { letter: "D", text: "San Marino" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Which element has the chemical symbol 'Fe'?",
    options: [
      { letter: "A", text: "Fluorine" },
      { letter: "B", text: "Francium" },
      { letter: "C", text: "Lead" },
      { letter: "D", text: "Iron" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 183,
    question: "Who composed 'The Four Seasons'?",
    options: [
      { letter: "A", text: "Bach" },
      { letter: "B", text: "Mozart" },
      { letter: "C", text: "Vivaldi" },
      { letter: "D", text: "Beethoven" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 184,
    question: "Which country invented paper?",
    options: [
      { letter: "A", text: "Greece" },
      { letter: "B", text: "India" },
      { letter: "C", text: "Egypt" },
      { letter: "D", text: "China" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 185,
    question: "What is the study of earthquakes called?",
    options: [
      { letter: "A", text: "Seismology" },
      { letter: "B", text: "Meteorology" },
      { letter: "C", text: "Volcanology" },
      { letter: "D", text: "Geology" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: [
      { letter: "A", text: "Carbon dioxide" },
      { letter: "B", text: "Nitrogen" },
      { letter: "C", text: "Hydrogen" },
      { letter: "D", text: "Oxygen" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "Who was the first President of the United States?",
    options: [
      { letter: "A", text: "John Adams" },
      { letter: "B", text: "Thomas Jefferson" },
      { letter: "C", text: "George Washington" },
      { letter: "D", text: "Benjamin Franklin" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 188,
    question: "Which country hosted the 2016 Summer Olympics?",
    options: [
      { letter: "A", text: "China" },
      { letter: "B", text: "Brazil" },
      { letter: "C", text: "United Kingdom" },
      { letter: "D", text: "Japan" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 189,
    question: "What does 'www' stand for in a website address?",
    options: [
      { letter: "A", text: "World Web Wide" },
      { letter: "B", text: "World Wide Web" },
      { letter: "C", text: "Web World Wide" },
      { letter: "D", text: "Wide World Web" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 190,
    question: "Which of these is not a primary color in painting?",
    options: [
      { letter: "A", text: "Yellow" },
      { letter: "B", text: "Blue" },
      { letter: "C", text: "Green" },
      { letter: "D", text: "Red" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 191,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { letter: "A", text: "John Milton" },
      { letter: "B", text: "William Shakespeare" },
      { letter: "C", text: "Christopher Marlowe" },
      { letter: "D", text: "Ben Jonson" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 192,
    question: "What is the powerhouse of the cell called?",
    options: [
      { letter: "A", text: "Mitochondria" },
      { letter: "B", text: "Ribosome" },
      { letter: "C", text: "Nucleus" },
      { letter: "D", text: "Golgi apparatus" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 193,
    question: "Which country is the largest by land area?",
    options: [
      { letter: "A", text: "Russia" },
      { letter: "B", text: "China" },
      { letter: "C", text: "United States" },
      { letter: "D", text: "Canada" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "What is the term for a word that is spelled the same forwards and backwards?",
    options: [
      { letter: "A", text: "Acronym" },
      { letter: "B", text: "Synonym" },
      { letter: "C", text: "Homophone" },
      { letter: "D", text: "Palindrome" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: [
      { letter: "A", text: "Vitamin C" },
      { letter: "B", text: "Vitamin A" },
      { letter: "C", text: "Vitamin E" },
      { letter: "D", text: "Vitamin D" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "What is the name of the galaxy that contains our solar system?",
    options: [
      { letter: "A", text: "Triangulum" },
      { letter: "B", text: "Andromeda" },
      { letter: "C", text: "Whirlpool" },
      { letter: "D", text: "Milky Way" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 197,
    question: "Who developed the theory of relativity?",
    options: [
      { letter: "A", text: "Galileo Galilei" },
      { letter: "B", text: "Albert Einstein" },
      { letter: "C", text: "Niels Bohr" },
      { letter: "D", text: "Isaac Newton" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Which country is famous for inventing sushi?",
    options: [
      { letter: "A", text: "Japan" },
      { letter: "B", text: "South Korea" },
      { letter: "C", text: "China" },
      { letter: "D", text: "Thailand" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 199,
    question: "What is the collective name for a group of lions?",
    options: [
      { letter: "A", text: "Colony" },
      { letter: "B", text: "Pack" },
      { letter: "C", text: "Pride" },
      { letter: "D", text: "Herd" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 200,
    question: "Which US state is known as the 'Sunshine State'?",
    options: [
      { letter: "A", text: "Texas" },
      { letter: "B", text: "Florida" },
      { letter: "C", text: "Arizona" },
      { letter: "D", text: "California" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "What is the boiling point of water at sea level in Fahrenheit?",
    options: [
      { letter: "A", text: "32°F" },
      { letter: "B", text: "180°F" },
      { letter: "C", text: "212°F" },
      { letter: "D", text: "100°F" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 202,
    question: "Which artist is known for painting 'The Starry Night'?",
    options: [
      { letter: "A", text: "Vincent van Gogh" },
      { letter: "B", text: "Salvador Dalí" },
      { letter: "C", text: "Pablo Picasso" },
      { letter: "D", text: "Claude Monet" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 203,
    question: "What is the term for an animal that eats both plants and meat?",
    options: [
      { letter: "A", text: "Herbivore" },
      { letter: "B", text: "Insectivore" },
      { letter: "C", text: "Omnivore" },
      { letter: "D", text: "Carnivore" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 204,
    question: "Which country is home to the ancient city of Machu Picchu?",
    options: [
      { letter: "A", text: "Mexico" },
      { letter: "B", text: "Chile" },
      { letter: "C", text: "Bolivia" },
      { letter: "D", text: "Peru" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 205,
    question: "What is the name of the first artificial satellite launched into space?",
    options: [
      { letter: "A", text: "Voyager 1" },
      { letter: "B", text: "Apollo 11" },
      { letter: "C", text: "Explorer 1" },
      { letter: "D", text: "Sputnik 1" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 206,
    question: "Which sea creature has three hearts?",
    options: [
      { letter: "A", text: "Shark" },
      { letter: "B", text: "Squid" },
      { letter: "C", text: "Octopus" },
      { letter: "D", text: "Dolphin" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 207,
    question: "Who is credited with inventing the telephone?",
    options: [
      { letter: "A", text: "Thomas Edison" },
      { letter: "B", text: "Nikola Tesla" },
      { letter: "C", text: "Alexander Graham Bell" },
      { letter: "D", text: "Guglielmo Marconi" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 208,
    question: "Which planet is known for its prominent ring system?",
    options: [
      { letter: "A", text: "Saturn" },
      { letter: "B", text: "Uranus" },
      { letter: "C", text: "Neptune" },
      { letter: "D", text: "Jupiter" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 209,
    question: "What is the name for the imaginary line at 0 degrees longitude?",
    options: [
      { letter: "A", text: "Tropic of Cancer" },
      { letter: "B", text: "International Date Line" },
      { letter: "C", text: "Prime Meridian" },
      { letter: "D", text: "Equator" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 210,
    question: "Which of these countries is not in South America?",
    options: [
      { letter: "A", text: "Colombia" },
      { letter: "B", text: "Peru" },
      { letter: "C", text: "Nigeria" },
      { letter: "D", text: "Chile" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 211,
    question: "Which composer became completely deaf later in his life?",
    options: [
      { letter: "A", text: "Beethoven" },
      { letter: "B", text: "Bach" },
      { letter: "C", text: "Chopin" },
      { letter: "D", text: "Mozart" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 212,
    question: "What is the name of the process by which plants make food using sunlight?",
    options: [
      { letter: "A", text: "Fermentation" },
      { letter: "B", text: "Transpiration" },
      { letter: "C", text: "Respiration" },
      { letter: "D", text: "Photosynthesis" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 213,
    question: "Which treaty officially ended World War I?",
    options: [
      { letter: "A", text: "Treaty of Versailles" },
      { letter: "B", text: "Treaty of Ghent" },
      { letter: "C", text: "Treaty of Paris" },
      { letter: "D", text: "Treaty of Vienna" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 214,
    question: "What is the SI unit of electrical resistance?",
    options: [
      { letter: "A", text: "Volt" },
      { letter: "B", text: "Watt" },
      { letter: "C", text: "Ampere" },
      { letter: "D", text: "Ohm" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 215,
    question: "Which ancient civilization built Machu Picchu?",
    options: [
      { letter: "A", text: "Olmec" },
      { letter: "B", text: "Aztec" },
      { letter: "C", text: "Inca" },
      { letter: "D", text: "Maya" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 216,
    question: "What is the term for a triangle with all sides of different lengths?",
    options: [
      { letter: "A", text: "Scalene" },
      { letter: "B", text: "Isosceles" },
      { letter: "C", text: "Equilateral" },
      { letter: "D", text: "Obtuse" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 217,
    question: "Which scientist proposed the laws of planetary motion?",
    options: [
      { letter: "A", text: "Johannes Kepler" },
      { letter: "B", text: "Galileo Galilei" },
      { letter: "C", text: "Isaac Newton" },
      { letter: "D", text: "Nicolaus Copernicus" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 218,
    question: "What is the capital of Kazakhstan?",
    options: [
      { letter: "A", text: "Tashkent" },
      { letter: "B", text: "Astana" },
      { letter: "C", text: "Bishkek" },
      { letter: "D", text: "Almaty" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 219,
    question: "Who wrote the novel 'One Hundred Years of Solitude'?",
    options: [
      { letter: "A", text: "Jorge Luis Borges" },
      { letter: "B", text: "Pablo Neruda" },
      { letter: "C", text: "Gabriel García Márquez" },
      { letter: "D", text: "Mario Vargas Llosa" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 220,
    question: "What is the name of the strait separating Europe and Africa at its narrowest point?",
    options: [
      { letter: "A", text: "Strait of Gibraltar" },
      { letter: "B", text: "Bosphorus" },
      { letter: "C", text: "Strait of Hormuz" },
      { letter: "D", text: "Bering Strait" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 221,
    question: "Which dynasty built the Great Wall of China's most famous sections?",
    options: [
      { letter: "A", text: "Ming Dynasty" },
      { letter: "B", text: "Tang Dynasty" },
      { letter: "C", text: "Qing Dynasty" },
      { letter: "D", text: "Han Dynasty" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 222,
    question: "What is the term for the branch of mathematics dealing with rates of change?",
    options: [
      { letter: "A", text: "Geometry" },
      { letter: "B", text: "Trigonometry" },
      { letter: "C", text: "Algebra" },
      { letter: "D", text: "Calculus" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 223,
    question: "Which country was formerly known as Persia?",
    options: [
      { letter: "A", text: "Turkey" },
      { letter: "B", text: "Syria" },
      { letter: "C", text: "Iraq" },
      { letter: "D", text: "Iran" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 224,
    question: "What is the name of the phenomenon where light bends when entering water?",
    options: [
      { letter: "A", text: "Refraction" },
      { letter: "B", text: "Reflection" },
      { letter: "C", text: "Dispersion" },
      { letter: "D", text: "Diffraction" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 225,
    question: "Who was the longest-reigning British monarch before Elizabeth II?",
    options: [
      { letter: "A", text: "William IV" },
      { letter: "B", text: "George III" },
      { letter: "C", text: "Victoria" },
      { letter: "D", text: "Edward VII" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 226,
    question: "What is the name of Earth's outermost layer of atmosphere?",
    options: [
      { letter: "A", text: "Mesosphere" },
      { letter: "B", text: "Exosphere" },
      { letter: "C", text: "Stratosphere" },
      { letter: "D", text: "Troposphere" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 227,
    question: "What is the largest bone in the human body?",
    options: [
      { letter: "A", text: "Femur" },
      { letter: "B", text: "Fibula" },
      { letter: "C", text: "Humerus" },
      { letter: "D", text: "Tibia" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 228,
    question: "Which country was the first to grant women the right to vote?",
    options: [
      { letter: "A", text: "United Kingdom" },
      { letter: "B", text: "New Zealand" },
      { letter: "C", text: "France" },
      { letter: "D", text: "United States" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 229,
    question: "What is the name of the theory explaining the origin of the universe?",
    options: [
      { letter: "A", text: "String Theory" },
      { letter: "B", text: "Steady State Theory" },
      { letter: "C", text: "Big Bang Theory" },
      { letter: "D", text: "Inflation Theory" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 230,
    question: "Which river flows through Baghdad?",
    options: [
      { letter: "A", text: "Tigris" },
      { letter: "B", text: "Euphrates" },
      { letter: "C", text: "Nile" },
      { letter: "D", text: "Jordan" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 231,
    question: "Which scientist discovered penicillin?",
    options: [
      { letter: "A", text: "Robert Koch" },
      { letter: "B", text: "Louis Pasteur" },
      { letter: "C", text: "Joseph Lister" },
      { letter: "D", text: "Alexander Fleming" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 232,
    question: "What is the name of the largest known coral reef system?",
    options: [
      { letter: "A", text: "Belize Barrier Reef" },
      { letter: "B", text: "Red Sea Coral Reef" },
      { letter: "C", text: "Great Barrier Reef" },
      { letter: "D", text: "Florida Reef" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 233,
    question: "Which country is the origin of the tango dance?",
    options: [
      { letter: "A", text: "Brazil" },
      { letter: "B", text: "Mexico" },
      { letter: "C", text: "Spain" },
      { letter: "D", text: "Argentina" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 234,
    question: "What is the name for a fear of heights?",
    options: [
      { letter: "A", text: "Arachnophobia" },
      { letter: "B", text: "Agoraphobia" },
      { letter: "C", text: "Claustrophobia" },
      { letter: "D", text: "Acrophobia" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 235,
    question: "Which planet has a day longer than its year?",
    options: [
      { letter: "A", text: "Neptune" },
      { letter: "B", text: "Mars" },
      { letter: "C", text: "Mercury" },
      { letter: "D", text: "Venus" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 236,
    question: "Who painted 'Guernica'?",
    options: [
      { letter: "A", text: "Joan Miró" },
      { letter: "B", text: "Diego Rivera" },
      { letter: "C", text: "Salvador Dalí" },
      { letter: "D", text: "Pablo Picasso" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 237,
    question: "What is the term for the study of fossils?",
    options: [
      { letter: "A", text: "Paleontology" },
      { letter: "B", text: "Archaeology" },
      { letter: "C", text: "Geology" },
      { letter: "D", text: "Anthropology" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 238,
    question: "Which country has the most time zones?",
    options: [
      { letter: "A", text: "United States" },
      { letter: "B", text: "China" },
      { letter: "C", text: "France" },
      { letter: "D", text: "Russia" }
    ],
    correctLetter: "C",
    difficulty: "hard"
  },
  {
    id: 239,
    question: "What is the name of the process by which a solid changes directly to a gas?",
    options: [
      { letter: "A", text: "Deposition" },
      { letter: "B", text: "Sublimation" },
      { letter: "C", text: "Evaporation" },
      { letter: "D", text: "Condensation" }
    ],
    correctLetter: "B",
    difficulty: "hard"
  },
  {
    id: 240,
    question: "Which war was fought between the North and South regions of the United States?",
    options: [
      { letter: "A", text: "Civil War" },
      { letter: "B", text: "Revolutionary War" },
      { letter: "C", text: "Spanish-American War" },
      { letter: "D", text: "War of 1812" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 241,
    question: "What is the name of the smallest bone in the human body?",
    options: [
      { letter: "A", text: "Hyoid" },
      { letter: "B", text: "Malleus" },
      { letter: "C", text: "Stapes" },
      { letter: "D", text: "Incus" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 242,
    question: "Which mathematician is known for Fermat's Last Theorem?",
    options: [
      { letter: "A", text: "Carl Friedrich Gauss" },
      { letter: "B", text: "Leonhard Euler" },
      { letter: "C", text: "Pierre de Fermat" },
      { letter: "D", text: "Isaac Newton" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 243,
    question: "What is the name of the deepest point in the world's oceans?",
    options: [
      { letter: "A", text: "Tonga Trench" },
      { letter: "B", text: "Java Trench" },
      { letter: "C", text: "Puerto Rico Trench" },
      { letter: "D", text: "Mariana Trench" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 244,
    question: "Which ancient wonder of the world was located in Alexandria?",
    options: [
      { letter: "A", text: "Colossus of Rhodes" },
      { letter: "B", text: "Hanging Gardens" },
      { letter: "C", text: "Temple of Artemis" },
      { letter: "D", text: "Lighthouse of Alexandria" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 245,
    question: "What is the term for the group of enzymes that cut DNA at specific sequences?",
    options: [
      { letter: "A", text: "Ligases" },
      { letter: "B", text: "Helicases" },
      { letter: "C", text: "Polymerases" },
      { letter: "D", text: "Restriction enzymes" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 246,
    question: "Which physicist first proposed the concept of antimatter?",
    options: [
      { letter: "A", text: "Niels Bohr" },
      { letter: "B", text: "Werner Heisenberg" },
      { letter: "C", text: "Paul Dirac" },
      { letter: "D", text: "Max Planck" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 247,
    question: "What is the capital of Burkina Faso?",
    options: [
      { letter: "A", text: "Niamey" },
      { letter: "B", text: "Accra" },
      { letter: "C", text: "Ouagadougou" },
      { letter: "D", text: "Bamako" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 248,
    question: "Which composer wrote the opera 'The Ring of the Nibelung'?",
    options: [
      { letter: "A", text: "Richard Wagner" },
      { letter: "B", text: "Johann Strauss" },
      { letter: "C", text: "Giacomo Puccini" },
      { letter: "D", text: "Giuseppe Verdi" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 249,
    question: "What is the name of the process by which stars produce energy?",
    options: [
      { letter: "A", text: "Combustion" },
      { letter: "B", text: "Nuclear fusion" },
      { letter: "C", text: "Nuclear fission" },
      { letter: "D", text: "Radioactive decay" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 250,
    question: "Which medieval king signed the Magna Carta in 1215?",
    options: [
      { letter: "A", text: "John" },
      { letter: "B", text: "Henry II" },
      { letter: "C", text: "Edward I" },
      { letter: "D", text: "Richard I" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 251,
    question: "What is the name of the largest moon of Saturn?",
    options: [
      { letter: "A", text: "Mimas" },
      { letter: "B", text: "Enceladus" },
      { letter: "C", text: "Titan" },
      { letter: "D", text: "Rhea" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 252,
    question: "Which economist wrote 'The Wealth of Nations'?",
    options: [
      { letter: "A", text: "Karl Marx" },
      { letter: "B", text: "John Maynard Keynes" },
      { letter: "C", text: "David Ricardo" },
      { letter: "D", text: "Adam Smith" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 253,
    question: "What is the name given to the region of space just outside a black hole from which nothing can escape?",
    options: [
      { letter: "A", text: "Ergosphere" },
      { letter: "B", text: "Photon sphere" },
      { letter: "C", text: "Accretion disk" },
      { letter: "D", text: "Event horizon" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 254,
    question: "Which pharaoh is believed to have commissioned the Great Sphinx of Giza?",
    options: [
      { letter: "A", text: "Ramesses II" },
      { letter: "B", text: "Tutankhamun" },
      { letter: "C", text: "Akhenaten" },
      { letter: "D", text: "Khafre" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 255,
    question: "What is the name of the underlying particle theory that unifies the fundamental forces except gravity?",
    options: [
      { letter: "A", text: "Standard Model" },
      { letter: "B", text: "Quantum Chromodynamics" },
      { letter: "C", text: "String Theory" },
      { letter: "D", text: "General Relativity" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 256,
    question: "Which explorer led the first expedition to circumnavigate the globe, though he died before completing it?",
    options: [
      { letter: "A", text: "James Cook" },
      { letter: "B", text: "Christopher Columbus" },
      { letter: "C", text: "Vasco da Gama" },
      { letter: "D", text: "Ferdinand Magellan" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 257,
    question: "What is the name of the syndrome caused by a deficiency of vitamin B1?",
    options: [
      { letter: "A", text: "Rickets" },
      { letter: "B", text: "Pellagra" },
      { letter: "C", text: "Scurvy" },
      { letter: "D", text: "Beriberi" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 258,
    question: "Which mathematician developed the field of non-Euclidean geometry alongside Bolyai and Lobachevsky?",
    options: [
      { letter: "A", text: "Bernhard Riemann" },
      { letter: "B", text: "Carl Friedrich Gauss" },
      { letter: "C", text: "Leonhard Euler" },
      { letter: "D", text: "David Hilbert" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 259,
    question: "What is the name of the ancient Greek system of writing used before the Greek alphabet?",
    options: [
      { letter: "A", text: "Hieroglyphics" },
      { letter: "B", text: "Linear B" },
      { letter: "C", text: "Cuneiform" },
      { letter: "D", text: "Linear A" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 260,
    question: "Which country was formerly called 'Rhodesia'?",
    options: [
      { letter: "A", text: "Zimbabwe" },
      { letter: "B", text: "Botswana" },
      { letter: "C", text: "Zambia" },
      { letter: "D", text: "Malawi" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 261,
    question: "What is the term for the boundary of a black hole beyond which light cannot escape, when measured as a radius?",
    options: [
      { letter: "A", text: "Roche limit" },
      { letter: "B", text: "Schwarzschild radius" },
      { letter: "C", text: "Chandrasekhar limit" },
      { letter: "D", text: "Planck length" }
    ],
    correctLetter: "B",
    difficulty: "very-hard"
  },
  {
    id: 262,
    question: "Which Renaissance polymath designed a flying machine centuries before powered flight existed?",
    options: [
      { letter: "A", text: "Michelangelo" },
      { letter: "B", text: "Galileo Galilei" },
      { letter: "C", text: "Filippo Brunelleschi" },
      { letter: "D", text: "Leonardo da Vinci" }
    ],
    correctLetter: "D",
    difficulty: "very-hard"
  },
  {
    id: 263,
    question: "What is the name of the longest reigning pharaoh of ancient Egypt?",
    options: [
      { letter: "A", text: "Pepi II" },
      { letter: "B", text: "Ramesses II" },
      { letter: "C", text: "Thutmose III" },
      { letter: "D", text: "Amenhotep III" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 264,
    question: "Which Nobel laureate developed the polymerase chain reaction (PCR) technique?",
    options: [
      { letter: "A", text: "Kary Mullis" },
      { letter: "B", text: "Francis Crick" },
      { letter: "C", text: "Frederick Sanger" },
      { letter: "D", text: "James Watson" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 265,
    question: "What is the name of the 1976 agreement that established special drawing rights reforms at the IMF?",
    options: [
      { letter: "A", text: "Plaza Accord" },
      { letter: "B", text: "Smithsonian Agreement" },
      { letter: "C", text: "Jamaica Accords" },
      { letter: "D", text: "Bretton Woods Agreement" }
    ],
    correctLetter: "C",
    difficulty: "very-hard"
  },
  {
    id: 266,
    question: "Which 19th-century mathematician is considered the first computer programmer for her work on Babbage's Analytical Engine?",
    options: [
      { letter: "A", text: "Ada Lovelace" },
      { letter: "B", text: "Emmy Noether" },
      { letter: "C", text: "Marie Curie" },
      { letter: "D", text: "Sofia Kovalevskaya" }
    ],
    correctLetter: "A",
    difficulty: "very-hard"
  },
  {
    id: 267,
    question: "Which big cat is known as the 'King of Beasts'?",
    options: [
      { letter: "A", text: "Cheetah" },
      { letter: "B", text: "Tiger" },
      { letter: "C", text: "Leopard" },
      { letter: "D", text: "Lion" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 268,
    question: "How many eyes does a typical spider have?",
    options: [
      { letter: "A", text: "4" },
      { letter: "B", text: "8" },
      { letter: "C", text: "2" },
      { letter: "D", text: "6" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 269,
    question: "Which fruit is famously associated with Sir Isaac Newton and gravity?",
    options: [
      { letter: "A", text: "Peach" },
      { letter: "B", text: "Pear" },
      { letter: "C", text: "Apple" },
      { letter: "D", text: "Orange" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 270,
    question: "What do silkworms produce that is used to make fabric?",
    options: [
      { letter: "A", text: "Linen" },
      { letter: "B", text: "Cotton" },
      { letter: "C", text: "Wool" },
      { letter: "D", text: "Silk" }
    ],
    correctLetter: "D",
    difficulty: "easy"
  },
  {
    id: 271,
    question: "How many sides does an octagon have?",
    options: [
      { letter: "A", text: "8" },
      { letter: "B", text: "6" },
      { letter: "C", text: "9" },
      { letter: "D", text: "7" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 272,
    question: "Which mountain range is home to Mount Everest?",
    options: [
      { letter: "A", text: "Andes" },
      { letter: "B", text: "Rockies" },
      { letter: "C", text: "Himalayas" },
      { letter: "D", text: "Alps" }
    ],
    correctLetter: "C",
    difficulty: "easy"
  },
  {
    id: 273,
    question: "Which land animal is the tallest in the world?",
    options: [
      { letter: "A", text: "Giraffe" },
      { letter: "B", text: "Elephant" },
      { letter: "C", text: "Camel" },
      { letter: "D", text: "Horse" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 274,
    question: "What is the official language of Mexico?",
    options: [
      { letter: "A", text: "Spanish" },
      { letter: "B", text: "Italian" },
      { letter: "C", text: "Portuguese" },
      { letter: "D", text: "French" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 275,
    question: "Which desert covers much of northern Africa?",
    options: [
      { letter: "A", text: "Sahara" },
      { letter: "B", text: "Gobi" },
      { letter: "C", text: "Kalahari" },
      { letter: "D", text: "Namib" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 276,
    question: "What is the opposite of 'cold'?",
    options: [
      { letter: "A", text: "Hot" },
      { letter: "B", text: "Mild" },
      { letter: "C", text: "Cool" },
      { letter: "D", text: "Chilly" }
    ],
    correctLetter: "A",
    difficulty: "easy"
  },
  {
    id: 277,
    question: "In which year did World War I begin?",
    options: [
      { letter: "A", text: "1918" },
      { letter: "B", text: "1912" },
      { letter: "C", text: "1914" },
      { letter: "D", text: "1916" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 278,
    question: "What is the second-longest river in the world?",
    options: [
      { letter: "A", text: "Mississippi" },
      { letter: "B", text: "Yangtze" },
      { letter: "C", text: "Nile" },
      { letter: "D", text: "Amazon" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 279,
    question: "Which author wrote 'Brave New World'?",
    options: [
      { letter: "A", text: "George Orwell" },
      { letter: "B", text: "Ray Bradbury" },
      { letter: "C", text: "Aldous Huxley" },
      { letter: "D", text: "H.G. Wells" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 280,
    question: "What is generally considered the second-hardest natural substance after diamond?",
    options: [
      { letter: "A", text: "Emerald" },
      { letter: "B", text: "Topaz" },
      { letter: "C", text: "Corundum" },
      { letter: "D", text: "Quartz" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 281,
    question: "Which planet has the second-most moons in our solar system?",
    options: [
      { letter: "A", text: "Jupiter" },
      { letter: "B", text: "Saturn" },
      { letter: "C", text: "Uranus" },
      { letter: "D", text: "Neptune" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 282,
    question: "What is the capital of New Zealand?",
    options: [
      { letter: "A", text: "Christchurch" },
      { letter: "B", text: "Wellington" },
      { letter: "C", text: "Hamilton" },
      { letter: "D", text: "Auckland" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 283,
    question: "Which organ in the human body produces insulin?",
    options: [
      { letter: "A", text: "Liver" },
      { letter: "B", text: "Spleen" },
      { letter: "C", text: "Pancreas" },
      { letter: "D", text: "Kidney" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 284,
    question: "What does 'RNA' stand for?",
    options: [
      { letter: "A", text: "Ribonuclear acid" },
      { letter: "B", text: "Ribose nitric acid" },
      { letter: "C", text: "Ribo-nitrogen acid" },
      { letter: "D", text: "Ribonucleic acid" }
    ],
    correctLetter: "D",
    difficulty: "medium"
  },
  {
    id: 285,
    question: "Which mountain range runs along the western edge of South America?",
    options: [
      { letter: "A", text: "Alps" },
      { letter: "B", text: "Andes" },
      { letter: "C", text: "Urals" },
      { letter: "D", text: "Rockies" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 286,
    question: "What is the currency used in South Korea?",
    options: [
      { letter: "A", text: "Won" },
      { letter: "B", text: "Yen" },
      { letter: "C", text: "Yuan" },
      { letter: "D", text: "Ringgit" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 287,
    question: "Which element has the atomic number 6?",
    options: [
      { letter: "A", text: "Nitrogen" },
      { letter: "B", text: "Oxygen" },
      { letter: "C", text: "Carbon" },
      { letter: "D", text: "Boron" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 288,
    question: "Which philosopher was Plato's most famous student?",
    options: [
      { letter: "A", text: "Zeno" },
      { letter: "B", text: "Aristotle" },
      { letter: "C", text: "Socrates" },
      { letter: "D", text: "Epicurus" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 289,
    question: "What is the term for a group of owls?",
    options: [
      { letter: "A", text: "Parliament" },
      { letter: "B", text: "Colony" },
      { letter: "C", text: "Flock" },
      { letter: "D", text: "Murder" }
    ],
    correctLetter: "A",
    difficulty: "medium"
  },
  {
    id: 290,
    question: "Which empire was ruled by Julius Caesar and later Augustus?",
    options: [
      { letter: "A", text: "Byzantine Empire" },
      { letter: "B", text: "Ottoman Empire" },
      { letter: "C", text: "Roman Empire" },
      { letter: "D", text: "Persian Empire" }
    ],
    correctLetter: "C",
    difficulty: "medium"
  },
  {
    id: 291,
    question: "What is the chemical formula for baking soda?",
    options: [
      { letter: "A", text: "NaCl" },
      { letter: "B", text: "NaHCO3" },
      { letter: "C", text: "KHCO3" },
      { letter: "D", text: "CaCO3" }
    ],
    correctLetter: "B",
    difficulty: "medium"
  },
  {
    id: 292,
    question: "Which planet in our solar system spins on an axis tilted almost 98 degrees, causing it to roll like a ball?",
    options: [
      { letter: "A", text: "Mars" },
      { letter: "B", text: "Uranus" },
      { letter: "C", text: "Saturn" },
      { letter: "D", text: "Neptune" }
    ],
    correctLetter: "B",
    difficulty: "easy"
  },
  {
    id: 293,
    question: "Which 1919 treaty formally established the League of Nations?",
    options: [
      { letter: "A", text: "Treaty of Versailles" },
      { letter: "B", text: "Treaty of Trianon" },
      { letter: "C", text: "Treaty of Lausanne" },
      { letter: "D", text: "Treaty of Sevres" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 294,
    question: "What is the name for a triangle where all three sides are equal in length?",
    options: [
      { letter: "A", text: "Scalene" },
      { letter: "B", text: "Right" },
      { letter: "C", text: "Isosceles" },
      { letter: "D", text: "Equilateral" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 295,
    question: "Which ancient civilization is credited with inventing the concept of zero as a number?",
    options: [
      { letter: "A", text: "Indians" },
      { letter: "B", text: "Romans" },
      { letter: "C", text: "Egyptians" },
      { letter: "D", text: "Greeks" }
    ],
    correctLetter: "A",
    difficulty: "hard"
  },
  {
    id: 296,
    question: "What is the SI unit used to measure electric current?",
    options: [
      { letter: "A", text: "Ohm" },
      { letter: "B", text: "Volt" },
      { letter: "C", text: "Watt" },
      { letter: "D", text: "Ampere" }
    ],
    correctLetter: "D",
    difficulty: "hard"
  },
  {
    id: 297,
    question: "Which country was the first to use paper currency?",
    options: [
      { letter: "A", text: "Rome" },
      { letter: "B", text: "Egypt" },
      { letter: "C", text: "China" },
      { letter: "D", text: "India" }
    ],
    correctLetter: "C",
    difficulty: "hard"
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
  // A safe haven amount is only locked in once that level has been
  // answered CORRECTLY. `currentLevel` is the level the player is on
  // when they get one wrong (or walk away before answering), so a miss
  // on the safe-haven level itself must NOT pay out that level's prize.
  const lastSecuredHaven = [...MONEY_LADDER]
    .reverse()
    .find(item => item.isSafeHaven && item.level < currentLevel);
  return lastSecuredHaven?.amount ?? 0;
}
