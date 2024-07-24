let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 5;

const allQuestions = [
    // Include all your 100 questions here
	// Hindi
    {
        question: "What language is this: 'भारत'?",
        a: "Telugu",
        b: "Marathi",
        c: "Gujarati",
        d: "Hindi",
        correct: "d",
    },
    {
        question: "What language is this: 'नमस्ते'?",
        a: "Odia",
        b: "Marathi",
        c: "Hindi",
        d: "Bengali",
        correct: "c",
    },
    // Gujarati
    {
        question: "What language is this: 'ભારત'?",
        a: "Kannada",
        b: "Gujarati",
        c: "Bengali",
        d: "Odia",
        correct: "b",
    },
    {
        question: "What language is this: 'નમસ્તે'?",
        a: "Gujarati",
        b: "Marathi",
        c: "Telugu",
        d: "Hindi",
        correct: "a",
    },
    // Telugu
    {
        question: "What language is this: 'భారతదేశం'?",
        a: "Tamil",
        b: "Malayalam",
        c: "Telugu",
        d: "Punjabi",
        correct: "c",
    },
    {
        question: "What language is this: 'సహాయం'?",
        a: "Odia",
        b: "Telugu",
        c: "Kannada",
        d: "Tamil",
        correct: "b",
    },
    // Tamil
    {
        question: "What language is this: 'இந்தியா'?",
        a: "Telugu",
        b: "Tamil",
        c: "Kannada",
        d: "Malayalam",
        correct: "b",
    },
    {
        question: "What language is this: 'நன்றி'?",
        a: "Telugu",
        b: "Kannada",
        c: "Malayalam",
        d: "Tamil",
        correct: "d",
    },
    // Bengali
    {
        question: "What language is this: 'বাংলা'?",
        a: "Bengali",
        b: "Assamese",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'ঢাকা'?",
        a: "Bengali",
        b: "Assamese",
        c: "Odia",
        d: "Gujarati",
        correct: "a",
    },
    // Kannada
    {
        question: "What language is this: 'ಭಾರತ'?",
        a: "Telugu",
        b: "Kannada",
        c: "Tamil",
        d: "Odia",
        correct: "b",
    },
    {
        question: "What language is this: 'ನಮಸ್ಕಾರ'?",
        a: "Telugu",
        b: "Kannada",
        c: "Odia",
        d: "Gujarati",
        correct: "b",
    },
    // Malayalam
    {
        question: "What language is this: 'ഇന്ത്യ'?",
        a: "Malayalam",
        b: "Tamil",
        c: "Telugu",
        d: "Kannada",
        correct: "a",
    },
    {
        question: "What language is this: 'നന്ദി'?",
        a: "Kannada",
        b: "Malayalam",
        c: "Tamil",
        d: "Telugu",
        correct: "b",
    },
    // Marathi
    {
        question: "What language is this: 'भारत'?",
        a: "Marathi",
        b: "Gujarati",
        c: "Bengali",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Marathi",
        b: "Odia",
        c: "Kannada",
        d: "Bengali",
        correct: "a",
    },
    // Punjabi
    {
        question: "What language is this: 'ਪੰਜਾਬੀ'?",
        a: "Punjabi",
        b: "Hindi",
        c: "Gujarati",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'ਸ਼ੁਕਰੀਆ'?",
        a: "Punjabi",
        b: "Bengali",
        c: "Marathi",
        d: "Hindi",
        correct: "a",
    },
    // Assamese
    {
        question: "What language is this: 'অসম'?",
        a: "Assamese",
        b: "Bengali",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'ধন্যবাদ'?",
        a: "Assamese",
        b: "Bengali",
        c: "Odia",
        d: "Telugu",
        correct: "a",
    },
    // Odia
    {
        question: "What language is this: 'ଭାରତ'?",
        a: "Bengali",
        b: "Odia",
        c: "Gujarati",
        d: "Marathi",
        correct: "b",
    },
    {
        question: "What language is this: 'ଧନ୍ୟବାଦ'?",
        a: "Hindi",
        b: "Odia",
        c: "Telugu",
        d: "Bengali",
        correct: "b",
    },
    // Nepali
    {
        question: "What language is this: 'नेपाल'?",
        a: "Nepali",
        b: "Hindi",
        c: "Bengali",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Nepali",
        b: "Marathi",
        c: "Bengali",
        d: "Hindi",
        correct: "a",
    },
    // Konkani
    {
        question: "What language is this: 'भारत'?",
        a: "Konkani",
        b: "Marathi",
        c: "Hindi",
        d: "Gujarati",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Konkani",
        b: "Marathi",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    // Sindhi
    {
        question: "What language is this: 'پاڪستان'?",
        a: "Sindhi",
        b: "Punjabi",
        c: "Gujarati",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'شکریہ'?",
        a: "Sindhi",
        b: "Urdu",
        c: "Hindi",
        d: "Bengali",
        correct: "a",
    },
    // Sanskrit
    {
        question: "What language is this: 'भारत'?",
        a: "Sanskrit",
        b: "Hindi",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Sanskrit",
        b: "Hindi",
        c: "Gujarati",
        d: "Marathi",
        correct: "a",
    },
    // Urdu
    {
        question: "What language is this: 'پاکستان'?",
        a: "Urdu",
        b: "Sindhi",
        c: "Bengali",
        d: "Punjabi",
        correct: "a",
    },
    {
        question: "What language is this: 'شکریہ'?",
        a: "Urdu",
        b: "Arabic",
        c: "Persian",
        d: "Sindhi",
        correct: "a",
    },
    // Bodo
    {
        question: "What language is this: 'महोरे'?",
        a: "Bodo",
        b: "Assamese",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'नमस्कार'?",
        a: "Bodo",
        b: "Hindi",
        c: "Odia",
        d: "Marathi",
        correct: "a",
    },
    // Manipuri
    {
        question: "What language is this: 'মনে'?",
        a: "Manipuri",
        b: "Bengali",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'খু'?",
        a: "Manipuri",
        b: "Bengali",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Santali
    {
        question: "What language is this: 'ᱵᱟᱲᱟᱹᱨᱟᱹᱨ'?",
        a: "Santali",
        b: "Odia",
        c: "Bengali",
        d: "Assamese",
        correct: "a",
    },
    {
        question: "What language is this: 'ᱥᱚᱛᱚᱲᱟᱹᱨ'?",
        a: "Santali",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Assamese
    {
        question: "What language is this: 'অসম'?",
        a: "Assamese",
        b: "Bengali",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'ধন্যবাদ'?",
        a: "Assamese",
        b: "Bengali",
        c: "Odia",
        d: "Telugu",
        correct: "a",
    },
    // Dogri
    {
        question: "What language is this: 'भारत'?",
        a: "Dogri",
        b: "Hindi",
        c: "Punjabi",
        d: "Marathi",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Dogri",
        b: "Hindi",
        c: "Bengali",
        d: "Odia",
        correct: "a",
    },
    // Garhwali
    {
        question: "What language is this: 'भारत'?",
        a: "Garhwali",
        b: "Hindi",
        c: "Punjabi",
        d: "Marathi",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Garhwali",
        b: "Hindi",
        c: "Bengali",
        d: "Odia",
        correct: "a",
    },
    // Kashmiri
    {
        question: "What language is this: 'بھارت'?",
        a: "Kashmiri",
        b: "Urdu",
        c: "Hindi",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'شکریہ'?",
        a: "Kashmiri",
        b: "Urdu",
        c: "Hindi",
        d: "Punjabi",
        correct: "a",
    },
    // Khasi
    {
        question: "What language is this: 'भारत'?",
        a: "Khasi",
        b: "Hindi",
        c: "Bengali",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Khasi",
        b: "Hindi",
        c: "Bengali",
        d: "Marathi",
        correct: "a",
    },
    // Mizo
    {
        question: "What language is this: 'India'?",
        a: "Mizo",
        b: "Bengali",
        c: "Odia",
        d: "Marathi",
        correct: "a",
    },
    {
        question: "What language is this: 'Thank you'?",
        a: "Mizo",
        b: "English",
        c: "Bengali",
        d: "Hindi",
        correct: "a",
    },
    // Mundari
    {
        question: "What language is this: 'ᱵᱟᱲᱟᱹᱨᱟ'?",
        a: "Mundari",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'ᱥᱟᱯᱟᱹᱨ'?",
        a: "Mundari",
        b: "Santali",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    // Tulu
    {
        question: "What language is this: 'ಭಾರತ'?",
        a: "Tulu",
        b: "Kannada",
        c: "Telugu",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'ಧನ್ಯವಾದ'?",
        a: "Tulu",
        b: "Kannada",
        c: "Telugu",
        d: "Odia",
        correct: "a",
    },
    // Chhattisgarhi
    {
        question: "What language is this: 'भारत'?",
        a: "Chhattisgarhi",
        b: "Hindi",
        c: "Odia",
        d: "Marathi",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Chhattisgarhi",
        b: "Hindi",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    // Bhojpuri
    {
        question: "What language is this: 'भारत'?",
        a: "Bhojpuri",
        b: "Hindi",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Bhojpuri",
        b: "Hindi",
        c: "Marathi",
        d: "Odia",
        correct: "a",
    },
    // Nagamese
    {
        question: "What language is this: 'India'?",
        a: "Nagamese",
        b: "Assamese",
        c: "Bengali",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'Thank you'?",
        a: "Nagamese",
        b: "Bengali",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    // Sikkimese
    {
        question: "What language is this: 'སངས་རྒྱས'?",
        a: "Sikkimese",
        b: "Nepali",
        c: "Tibetan",
        d: "Hindi",
        correct: "c",
    },
    {
        question: "What language is this: 'འདི་ནི་གང་རེད།'?",
        a: "Sikkimese",
        b: "Nepali",
        c: "Tibetan",
        d: "Hindi",
        correct: "a",
    },
    // Tripuri
    {
        question: "What language is this: 'ꠑꠣꠧ꠷ꠤ'?",
        a: "Tripuri",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'ꠠꠥ꠶'?",
        a: "Tripuri",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Mishing
    {
        question: "What language is this: '𑑅𑑃𑑄𑑈'?",
        a: "Mishing",
        b: "Assamese",
        c: "Odia",
        d: "Bodo",
        correct: "a",
    },
    {
        question: "What language is this: '𑑋𑑌𑑌𑑈'?",
        a: "Mishing",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Bodo
    {
        question: "What language is this: 'ꠑꠣꠧ꠷ꠤ'?",
        a: "Bodo",
        b: "Assamese",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'ꠠꠥ꠶'?",
        a: "Bodo",
        b: "Assamese",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    // Manipuri
    {
        question: "What language is this: 'মনে'?",
        a: "Manipuri",
        b: "Bengali",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'খু'?",
        a: "Manipuri",
        b: "Bengali",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Sanskrit
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Sanskrit",
        b: "Hindi",
        c: "Marathi",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'स्वागत'?",
        a: "Sanskrit",
        b: "Hindi",
        c: "Bengali",
        d: "Gujarati",
        correct: "a",
    },
    // Tulu
    {
        question: "What language is this: 'ಭಾರತ'?",
        a: "Tulu",
        b: "Kannada",
        c: "Telugu",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'ಧನ್ಯವಾದ'?",
        a: "Tulu",
        b: "Kannada",
        c: "Telugu",
        d: "Odia",
        correct: "a",
    },
    // Chhattisgarhi
    {
        question: "What language is this: 'भारत'?",
        a: "Chhattisgarhi",
        b: "Hindi",
        c: "Odia",
        d: "Marathi",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Chhattisgarhi",
        b: "Hindi",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    // Bhojpuri
    {
        question: "What language is this: 'भारत'?",
        a: "Bhojpuri",
        b: "Hindi",
        c: "Odia",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'धन्यवाद'?",
        a: "Bhojpuri",
        b: "Hindi",
        c: "Marathi",
        d: "Odia",
        correct: "a",
    },
    // Nagamese
    {
        question: "What language is this: 'India'?",
        a: "Nagamese",
        b: "Assamese",
        c: "Bengali",
        d: "Hindi",
        correct: "a",
    },
    {
        question: "What language is this: 'Thank you'?",
        a: "Nagamese",
        b: "Bengali",
        c: "Odia",
        d: "Hindi",
        correct: "a",
    },
    // Sikkimese
    {
        question: "What language is this: 'སངས་རྒྱས'?",
        a: "Sikkimese",
        b: "Nepali",
        c: "Tibetan",
        d: "Hindi",
        correct: "c",
    },
    {
        question: "What language is this: 'འདི་ནི་གང་རེད།'?",
        a: "Sikkimese",
        b: "Nepali",
        c: "Tibetan",
        d: "Hindi",
        correct: "a",
    },
    // Tripuri
    {
        question: "What language is this: 'ꠑꠣꠧ꠷ꠤ'?",
        a: "Tripuri",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    {
        question: "What language is this: 'ꠠꠥ꠶'?",
        a: "Tripuri",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Mishing
    {
        question: "What language is this: '𑑅𑑃𑑄𑑈'?",
        a: "Mishing",
        b: "Assamese",
        c: "Odia",
        d: "Bodo",
        correct: "a",
    },
    {
        question: "What language is this: '𑑋𑑌𑑌𑑈'?",
        a: "Mishing",
        b: "Bodo",
        c: "Assamese",
        d: "Odia",
        correct: "a",
    },
    // Punjabi
    {
        question: "What language is this: 'ਪੰਜਾਬੀ'?",
        a: "Punjabi",
        b: "Hindi",
        c: "Gujarati",
        d: "Bengali",
        correct: "a",
    },
    {
        question: "What language is this: 'ਸ਼ੁਕਰੀਆ'?",
        a: "Punjabi",
        b: "Bengali",
        c: "Marathi",
        d: "Hindi",
        correct: "a",
    },
    // Example:
    {
        question: "What language is this: 'भारत'?",
        a: "Hindi",
        b: "Marathi",
        c: "Punjabi",
        d: "Bengali",
        correct: "a",
    },
    // Add the remaining 99 questions here
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    const selectedQuestions = getRandomQuestions(allQuestions, TOTAL_QUESTIONS);
    showQuestion(selectedQuestions[currentQuestionIndex]);
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}

function getRandomQuestions(allQuestions, numQuestions) {
    // Shuffle the entire array
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    // Take the first 'numQuestions' questions from the shuffled array
    return shuffled.slice(0, numQuestions);
}

function showQuestion(question) {
    document.getElementById("question").innerText = question.question;
    document.getElementById("a_text").innerText = question.a;
    document.getElementById("b_text").innerText = question.b;
    document.getElementById("c_text").innerText = question.c;
    document.getElementById("d_text").innerText = question.d;
}

function handleAnswer(selectedOption) {
    const question = allQuestions[currentQuestionIndex];
    if (selectedOption === question.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
        showQuestion(allQuestions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").innerHTML = `
        <h2>Your Score: ${score} out of ${TOTAL_QUESTIONS}</h2>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}
