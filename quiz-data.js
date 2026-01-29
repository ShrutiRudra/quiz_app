// Quiz Questions Database
const quizDatabase = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correctAnswer: 2
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3
            },
            {
                question: "How many days are there in a week?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "What is the color of the sky on a clear day?",
                options: ["Green", "Blue", "Red", "Yellow"],
                correctAnswer: 1
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 1
            },
            {
                question: "What is the freezing point of water in Celsius?",
                options: ["-10°C", "0°C", "10°C", "100°C"],
                correctAnswer: 1
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1
            },
            {
                question: "How many hours are in a day?",
                options: ["12", "20", "24", "48"],
                correctAnswer: 2
            },
            {
                question: "What is the largest mammal?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correctAnswer: 2
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correctAnswer: 1
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correctAnswer: 2
            },
            {
                question: "How many bones are in the adult human body?",
                options: ["186", "206", "226", "246"],
                correctAnswer: 1
            },
            {
                question: "What is the speed of light?",
                options: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "400,000 km/s"],
                correctAnswer: 0
            },
            {
                question: "Which country has the longest coastline?",
                options: ["Australia", "Russia", "Canada", "United States"],
                correctAnswer: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correctAnswer: 2
            },
            {
                question: "How many teeth does an adult human have?",
                options: ["28", "30", "32", "34"],
                correctAnswer: 2
            },
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Arabian", "Antarctic", "Gobi"],
                correctAnswer: 2
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle related to?",
                options: ["Chemistry", "Quantum Mechanics", "Biology", "Astronomy"],
                correctAnswer: 1
            },
            {
                question: "Which element has the atomic number 79?",
                options: ["Silver", "Platinum", "Gold", "Mercury"],
                correctAnswer: 2
            },
            {
                question: "What is the Rarest naturally occurring element on Earth?",
                options: ["Francium", "Astatine", "Radium", "Polonium"],
                correctAnswer: 1
            },
            {
                question: "Who developed the theory of general relativity?",
                options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
                correctAnswer: 2
            },
            {
                question: "What is the half-life of Carbon-14?",
                options: ["5,370 years", "5,730 years", "6,370 years", "6,730 years"],
                correctAnswer: 1
            },
            {
                question: "Which programming language was created first?",
                options: ["C", "FORTRAN", "COBOL", "BASIC"],
                correctAnswer: 1
            },
            {
                question: "What is Avogadro's number?",
                options: ["6.022 × 10²³", "6.022 × 10²²", "5.022 × 10²³", "7.022 × 10²³"],
                correctAnswer: 0
            },
            {
                question: "Who proved Fermat's Last Theorem?",
                options: ["Andrew Wiles", "Grigori Perelman", "Terence Tao", "John Nash"],
                correctAnswer: 0
            },
            {
                question: "What is the Planck constant approximately?",
                options: ["6.626 × 10⁻³⁴ J·s", "6.626 × 10⁻³³ J·s", "5.626 × 10⁻³⁴ J·s", "7.626 × 10⁻³⁴ J·s"],
                correctAnswer: 0
            },
            {
                question: "Which neurotransmitter is primarily associated with Parkinson's disease?",
                options: ["Serotonin", "Dopamine", "GABA", "Acetylcholine"],
                correctAnswer: 1
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is H2O commonly known as?",
                options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
                correctAnswer: 2
            },
            {
                question: "What planet is closest to the sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                correctAnswer: 2
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2
            },
            {
                question: "What is the center of an atom called?",
                options: ["Electron", "Proton", "Neutron", "Nucleus"],
                correctAnswer: 3
            },
            {
                question: "What force keeps us on the ground?",
                options: ["Magnetism", "Gravity", "Friction", "Tension"],
                correctAnswer: 1
            },
            {
                question: "How many legs does a spider have?",
                options: ["6", "8", "10", "12"],
                correctAnswer: 1
            },
            {
                question: "What is the boiling point of water?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                correctAnswer: 1
            },
            {
                question: "What organ pumps blood through the body?",
                options: ["Lungs", "Brain", "Heart", "Liver"],
                correctAnswer: 2
            },
            {
                question: "What is the study of living organisms called?",
                options: ["Geology", "Chemistry", "Biology", "Physics"],
                correctAnswer: 2
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
                correctAnswer: 2
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                correctAnswer: 0
            },
            {
                question: "What type of rock is formed from cooled lava?",
                options: ["Sedimentary", "Metamorphic", "Igneous", "Crystalline"],
                correctAnswer: 2
            },
            {
                question: "What is the pH of pure water?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "How many chambers does the human heart have?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 2
            },
            {
                question: "What is the process by which plants make food?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                correctAnswer: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "5", "6", "7"],
                correctAnswer: 2
            },
            {
                question: "What is Newton's first law of motion also called?",
                options: ["Law of Acceleration", "Law of Inertia", "Law of Action", "Law of Gravity"],
                correctAnswer: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 2
            },
            {
                question: "What is the unit of electric current?",
                options: ["Volt", "Watt", "Ampere", "Ohm"],
                correctAnswer: 2
            }
        ],
        hard: [
            {
                question: "What is the name of the process where RNA is synthesized from DNA?",
                options: ["Translation", "Transcription", "Replication", "Mutation"],
                correctAnswer: 1
            },
            {
                question: "What is the Schrödinger equation used to describe?",
                options: ["Chemical reactions", "Quantum wave functions", "Thermodynamics", "Nuclear decay"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the phenomenon where electrons are emitted from a metal surface when light shines on it?",
                options: ["Compton Effect", "Photoelectric Effect", "Zeeman Effect", "Stark Effect"],
                correctAnswer: 1
            },
            {
                question: "What is the typical wavelength range of visible light?",
                options: ["200-400 nm", "400-700 nm", "700-1000 nm", "1000-1400 nm"],
                correctAnswer: 1
            },
            {
                question: "What is the main enzyme responsible for DNA replication?",
                options: ["RNA Polymerase", "Helicase", "DNA Polymerase", "Ligase"],
                correctAnswer: 2
            },
            {
                question: "What is the standard temperature and pressure (STP) for gases?",
                options: ["0°C and 1 atm", "25°C and 1 atm", "0°C and 2 atm", "25°C and 2 atm"],
                correctAnswer: 0
            },
            {
                question: "What is the term for a cell that has two sets of chromosomes?",
                options: ["Haploid", "Diploid", "Triploid", "Polyploid"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the cycle that describes the conversion of carbon between different forms?",
                options: ["Water Cycle", "Nitrogen Cycle", "Carbon Cycle", "Phosphorus Cycle"],
                correctAnswer: 2
            },
            {
                question: "What is the SI unit of luminous intensity?",
                options: ["Lux", "Lumen", "Candela", "Watt"],
                correctAnswer: 2
            },
            {
                question: "What particle mediates the electromagnetic force?",
                options: ["Gluon", "W Boson", "Photon", "Graviton"],
                correctAnswer: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                correctAnswer: 1
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correctAnswer: 2
            },
            {
                question: "Who discovered America?",
                options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"],
                correctAnswer: 0
            },
            {
                question: "Which ancient wonder of the world still stands?",
                options: ["Colossus of Rhodes", "Hanging Gardens", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
                correctAnswer: 2
            },
            {
                question: "Who was known as the Iron Lady?",
                options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                correctAnswer: 1
            },
            {
                question: "What year did World War I begin?",
                options: ["1912", "1913", "1914", "1915"],
                correctAnswer: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                correctAnswer: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
                correctAnswer: 1
            },
            {
                question: "When did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correctAnswer: 2
            },
            {
                question: "Who was the first man on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                correctAnswer: 1
            }
        ],
        medium: [
            {
                question: "Which treaty ended World War I?",
                options: ["Treaty of Paris", "Treaty of Vienna", "Treaty of Versailles", "Treaty of Ghent"],
                correctAnswer: 2
            },
            {
                question: "Who was the first female Prime Minister of the UK?",
                options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
                correctAnswer: 1
            },
            {
                question: "In what year did India gain independence?",
                options: ["1945", "1946", "1947", "1948"],
                correctAnswer: 2
            },
            {
                question: "Who wrote the 'I Have a Dream' speech?",
                options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Nelson Mandela"],
                correctAnswer: 1
            },
            {
                question: "What was the name of the ship on which the Pilgrims traveled to America?",
                options: ["Santa Maria", "Mayflower", "Victoria", "Nina"],
                correctAnswer: 1
            },
            {
                question: "Who was the first emperor of China?",
                options: ["Kublai Khan", "Qin Shi Huang", "Emperor Wu", "Confucius"],
                correctAnswer: 1
            },
            {
                question: "Which revolution took place in 1789?",
                options: ["American Revolution", "French Revolution", "Russian Revolution", "Industrial Revolution"],
                correctAnswer: 1
            },
            {
                question: "Who was the longest-reigning British monarch before Elizabeth II?",
                options: ["Queen Victoria", "King George III", "King Henry VIII", "Queen Elizabeth I"],
                correctAnswer: 0
            },
            {
                question: "What was the primary cause of the American Civil War?",
                options: ["Taxation", "Slavery", "Trade", "Religion"],
                correctAnswer: 1
            },
            {
                question: "Who led the Mongol Empire?",
                options: ["Attila the Hun", "Genghis Khan", "Kublai Khan", "Tamerlane"],
                correctAnswer: 1
            }
        ],
        hard: [
            {
                question: "What year did the Byzantine Empire fall?",
                options: ["1451", "1452", "1453", "1454"],
                correctAnswer: 2
            },
            {
                question: "Who was the Pharaoh during the construction of the Great Pyramid of Giza?",
                options: ["Ramses II", "Tutankhamun", "Khufu", "Cleopatra"],
                correctAnswer: 2
            },
            {
                question: "What was the name of the alliance between Germany, Austria-Hungary, and Italy before WWI?",
                options: ["Allied Powers", "Central Powers", "Triple Alliance", "Axis Powers"],
                correctAnswer: 2
            },
            {
                question: "Which ancient civilization created the first known writing system?",
                options: ["Egyptians", "Sumerians", "Greeks", "Chinese"],
                correctAnswer: 1
            },
            {
                question: "Who was the last Tsar of Russia?",
                options: ["Nicholas I", "Alexander III", "Nicholas II", "Peter III"],
                correctAnswer: 2
            },
            {
                question: "What was the name of the first constitution of the United States?",
                options: ["Bill of Rights", "Declaration of Independence", "Articles of Confederation", "Federalist Papers"],
                correctAnswer: 2
            },
            {
                question: "Which battle is considered the turning point of the American Civil War?",
                options: ["Battle of Bull Run", "Battle of Antietam", "Battle of Gettysburg", "Battle of Vicksburg"],
                correctAnswer: 2
            },
            {
                question: "Who was the founder of the Maurya Empire?",
                options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Chanakya"],
                correctAnswer: 1
            },
            {
                question: "What year did the Spanish Armada attempt to invade England?",
                options: ["1586", "1587", "1588", "1589"],
                correctAnswer: 2
            },
            {
                question: "Which philosopher tutored Alexander the Great?",
                options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
                correctAnswer: 2
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
                correctAnswer: 0
            },
            {
                question: "What does WWW stand for?",
                options: ["World Wide Web", "World Wide Weather", "World Web Windows", "Wide World Web"],
                correctAnswer: 0
            },
            {
                question: "Which company created the iPhone?",
                options: ["Samsung", "Google", "Apple", "Microsoft"],
                correctAnswer: 2
            },
            {
                question: "What does USB stand for?",
                options: ["Universal Serial Bus", "United System Bus", "Universal System Board", "United Serial Board"],
                correctAnswer: 0
            },
            {
                question: "What is the main function of RAM?",
                options: ["Store files permanently", "Store data temporarily", "Cool the computer", "Connect to internet"],
                correctAnswer: 1
            },
            {
                question: "Which programming language is known for web development?",
                options: ["Python", "JavaScript", "C++", "Swift"],
                correctAnswer: 1
            },
            {
                question: "What does PDF stand for?",
                options: ["Portable Document Format", "Personal Document File", "Private Data Format", "Public Document File"],
                correctAnswer: 0
            },
            {
                question: "What is the most popular search engine?",
                options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
                correctAnswer: 2
            },
            {
                question: "What does AI stand for?",
                options: ["Advanced Intelligence", "Artificial Intelligence", "Automated Information", "Applied Intelligence"],
                correctAnswer: 1
            },
            {
                question: "Which company developed Windows?",
                options: ["Apple", "Google", "Microsoft", "IBM"],
                correctAnswer: 2
            }
        ],
        medium: [
            {
                question: "What is the primary language used for Android app development?",
                options: ["Swift", "Python", "Kotlin", "Ruby"],
                correctAnswer: 2
            },
            {
                question: "What does API stand for?",
                options: ["Application Programming Interface", "Advanced Programming Integration", "Applied Program Interface", "Automated Programming Interface"],
                correctAnswer: 0
            },
            {
                question: "Which protocol is used for secure web browsing?",
                options: ["HTTP", "FTP", "HTTPS", "SMTP"],
                correctAnswer: 2
            },
            {
                question: "What is the maximum speed of USB 3.0?",
                options: ["480 Mbps", "5 Gbps", "10 Gbps", "20 Gbps"],
                correctAnswer: 1
            },
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Simple Question Language", "Standard Query Logic", "System Query Language"],
                correctAnswer: 0
            },
            {
                question: "Which company created the Linux operating system?",
                options: ["Microsoft", "IBM", "Linus Torvalds", "Google"],
                correctAnswer: 2
            },
            {
                question: "What is the main purpose of DNS?",
                options: ["Encrypt data", "Translate domain names to IP addresses", "Store files", "Send emails"],
                correctAnswer: 1
            },
            {
                question: "What does IoT stand for?",
                options: ["Internet of Technology", "Integration of Things", "Internet of Things", "International of Technology"],
                correctAnswer: 2
            },
            {
                question: "Which programming paradigm does Python primarily support?",
                options: ["Functional only", "Object-oriented only", "Multi-paradigm", "Procedural only"],
                correctAnswer: 2
            },
            {
                question: "What is the binary equivalent of decimal 10?",
                options: ["1010", "1100", "1001", "1110"],
                correctAnswer: 0
            }
        ],
        hard: [
            {
                question: "What is the time complexity of QuickSort in the average case?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correctAnswer: 1
            },
            {
                question: "Which consensus algorithm does Bitcoin use?",
                options: ["Proof of Stake", "Proof of Work", "Byzantine Fault Tolerance", "Delegated Proof of Stake"],
                correctAnswer: 1
            },
            {
                question: "What is the maximum theoretical speed of Wi-Fi 6?",
                options: ["1.2 Gbps", "3.5 Gbps", "9.6 Gbps", "15 Gbps"],
                correctAnswer: 2
            },
            {
                question: "Which layer of the OSI model does TCP operate at?",
                options: ["Network Layer", "Transport Layer", "Session Layer", "Application Layer"],
                correctAnswer: 1
            },
            {
                question: "What is the purpose of a Merkle tree in blockchain?",
                options: ["Store transactions", "Verify data integrity", "Mine blocks", "Create wallets"],
                correctAnswer: 1
            },
            {
                question: "What does ACID stand for in database transactions?",
                options: ["Atomic, Consistent, Isolated, Durable", "Advanced, Complete, Integrated, Distributed", "Applied, Combined, Isolated, Definite", "Automatic, Centralized, Independent, Derived"],
                correctAnswer: 0
            },
            {
                question: "Which machine learning algorithm is typically used for classification?",
                options: ["K-means", "Linear Regression", "Random Forest", "PCA"],
                correctAnswer: 2
            },
            {
                question: "What is the default port for HTTPS?",
                options: ["80", "443", "8080", "3000"],
                correctAnswer: 1
            },
            {
                question: "Which cryptographic algorithm is used in AES?",
                options: ["RSA", "Rijndael", "Diffie-Hellman", "SHA-256"],
                correctAnswer: 1
            },
            {
                question: "What is the main advantage of using Docker containers?",
                options: ["Faster computation", "Isolation and portability", "Better graphics", "More storage"],
                correctAnswer: 1
            }
        ]
    }
};
