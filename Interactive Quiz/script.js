//questions 
const spanishQuestions = [
    {
        question: "What is the translation of the word 'house' in Spanish?",
        answers: [
            { text: "Casa", correct: true },
            { text: "Perro", correct: false },
            { text: "Gato", correct: false },
            { text: "Calle", correct: false }
        ]
    },
    {
        question: "How do you say 'hello' in Spanish?",
        answers: [
            { text: "Hola", correct: true },
            { text: "Adiós", correct: false },
            { text: "Gracias", correct: false },
            { text: "Por favor", correct: false }
        ]
    },
    {
        question: "What is the plural of 'libro' in Spanish?",
        answers: [
            { text: "Libros", correct: true },
            { text: "Libres", correct: false },
            { text: "Libras", correct: false },
            { text: "Librons", correct: false }
        ]
    },
    {
        question: "What does the word 'rojo' mean in English?",
        answers: [
            { text: "Red", correct: true },
            { text: "Blue", correct: false },
            { text: "Green", correct: false },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "How do you say 'thank you' in Spanish?",
        answers: [
            { text: "Por favor", correct: false },
            { text: "De nada", correct: false },
            { text: "Gracias", correct: true },
            { text: "Perdón", correct: false }
        ]
    },
    {
        question: "What is the correct form of the verb 'ser' in the first person singular?",
        answers: [
            { text: "Eres", correct: false },
            { text: "Es", correct: false },
            { text: "Soy", correct: true },
            { text: "Somos", correct: false }
        ]
    },
    {
        question: "Which of these words is an adjective in Spanish?",
        answers: [
            { text: "Rápido", correct: true },
            { text: "Correr", correct: false },
            { text: "Niño", correct: false },
            { text: "Comer", correct: false }
        ]
    },
    {
        question: "Which definite article corresponds to the word 'perro'?",
        answers: [
            { text: "La", correct: false },
            { text: "El", correct: true },
            { text: "Los", correct: false },
            { text: "Un", correct: false }
        ]
    },
    {
        question: "What is the meaning of 'escuela' in English?",
        answers: [
            { text: "School", correct: true },
            { text: "Hospital", correct: false },
            { text: "Library", correct: false },
            { text: "Office", correct: false }
        ]
    },
    {
        question: "How is the verb 'hablar' conjugated in the third person singular in the present tense?",
        answers: [
            { text: "Hablan", correct: false },
            { text: "Hablas", correct: false },
            { text: "Hablo", correct: false },
            { text: "Habla", correct: true }
        ]
    },
    {
        question: "What does 'amigo' mean in English?",
        answers: [
            { text: "Friend", correct: true },
            { text: "Enemy", correct: false },
            { text: "Neighbor", correct: false },
            { text: "Teacher", correct: false }
        ]
    },
    {
        question: "What is the gender of the word 'agua'?",
        answers: [
            { text: "Femenino", correct: false },
            { text: "Masculino", correct: true },
            { text: "Neutro", correct: false },
            { text: "Variable", correct: false }
        ]
    },
    {
        question: "How do you say 'I am' in Spanish?",
        answers: [
            { text: "Tú eres", correct: false },
            { text: "Él es", correct: false },
            { text: "Yo soy", correct: true },
            { text: "Nosotros somos", correct: false }
        ]
    },
    {
        question: "What is the correct form of the verb 'ir' in the first person singular?",
        answers: [
            { text: "Voy", correct: true },
            { text: "Va", correct: false },
            { text: "Vamos", correct: false },
            { text: "Van", correct: false }
        ]
    },
    {
        question: "What does 'azul' mean in English?",
        answers: [
            { text: "Red", correct: false },
            { text: "Green", correct: false },
            { text: "Blue", correct: true },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "Which of the following words is a personal pronoun in Spanish?",
        answers: [
            { text: "Correr", correct: false },
            { text: "Él", correct: true },
            { text: "Amigo", correct: false },
            { text: "Rápido", correct: false }
        ]
    },
    {
        question: "How do you say 'goodbye' in Spanish?",
        answers: [
            { text: "Hola", correct: false },
            { text: "Gracias", correct: false },
            { text: "Por favor", correct: false },
            { text: "Adiós", correct: true }
        ]
    },
    {
        question: "What does 'familia' mean in English?",
        answers: [
            { text: "Family", correct: true },
            { text: "Friend", correct: false },
            { text: "Country", correct: false },
            { text: "School", correct: false }
        ]
    },
    {
        question: "What is the correct form of the verb 'tener' in the third person singular?",
        answers: [
            { text: "Tienes", correct: false },
            { text: "Tiene", correct: true },
            { text: "Tenemos", correct: false },
            { text: "Tienen", correct: false }
        ]
    },
    {
        question: "How do you say 'book' in Spanish?",
        answers: [
            { text: "Libro", correct: true },
            { text: "Mesa", correct: false },
            { text: "Silla", correct: false },
            { text: "Coche", correct: false }
        ]
    },
    {
        question: "What is the translation of the word 'water' in Spanish?",
        answers: [
            { text: "Agua", correct: true },
            { text: "Fuego", correct: false },
            { text: "Aire", correct: false },
            { text: "Tierra", correct: false }
        ]
    },
    {
        question: "What does 'verde' mean in English?",
        answers: [
            { text: "Red", correct: false },
            { text: "Green", correct: true },
            { text: "Blue", correct: false },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "How do you say 'please' in Spanish?",
        answers: [
            { text: "Gracias", correct: false },
            { text: "Por favor", correct: true },
            { text: "De nada", correct: false },
            { text: "Perdón", correct: false }
        ]
    },
    {
        question: "What is the feminine form of the adjective 'alto'?",
        answers: [
            { text: "Alta", correct: true },
            { text: "Alto", correct: false },
            { text: "Altos", correct: false },
            { text: "Altas", correct: false }
        ]
    },
    {
        question: "What does 'escuchar' mean in English?",
        answers: [
            { text: "To listen", correct: true },
            { text: "To speak", correct: false },
            { text: "To read", correct: false },
            { text: "To write", correct: false }
        ]
    },
    {
        question: "How do you say 'mother' in Spanish?",
        answers: [
            { text: "Madre", correct: true },
            { text: "Padre", correct: false },
            { text: "Hermana", correct: false },
            { text: "Abuela", correct: false }
        ]
    },
    {
        question: "What does 'comer' mean in English?",
        answers: [
            { text: "To eat", correct: true },
            { text: "To drink", correct: false },
            { text: "To sleep", correct: false },
            { text: "To run", correct: false }
        ]
    },
    {
        question: "What is the translation of the word 'dog' in Spanish?",
        answers: [
            { text: "Perro", correct: true },
            { text: "Gato", correct: false },
            { text: "Ratón", correct: false },
            { text: "Pájaro", correct: false }
        ]
    },
    {
        question: "What does 'noche' mean in English?",
        answers: [
            { text: "Night", correct: true },
            { text: "Day", correct: false },
            { text: "Morning", correct: false },
            { text: "Afternoon", correct: false }
        ]
    },
    {
        question: "How do you say 'teacher' in Spanish?",
        answers: [
            { text: "Profesor", correct: true },
            { text: "Estudiante", correct: false },
            { text: "Director", correct: false },
            { text: "Secretario", correct: false }
        ]
    },
    {
        question: "Choose the correct translation for the word 'apple':",
        answers: [
            { text: "Manzana", correct: true },
            { text: "Naranja", correct: false },
            { text: "Banana", correct: false },
            { text: "Pera", correct: false }
        ]
    },
    {
        question: "Select the Spanish word for 'window':",
        answers: [
            { text: "Ventana", correct: true },
            { text: "Puerta", correct: false },
            { text: "Techo", correct: false },
            { text: "Pared", correct: false }
        ]
    },
    {
        question: "Identify the Spanish word for 'table':",
        answers: [
            { text: "Mesa", correct: true },
            { text: "Silla", correct: false },
            { text: "Cama", correct: false },
            { text: "Espejo", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'school'?",
        answers: [
            { text: "Escuela", correct: true },
            { text: "Oficina", correct: false },
            { text: "Biblioteca", correct: false },
            { text: "Hospital", correct: false }
        ]
    },
    {
        question: "Choose the correct Spanish word for 'night':",
        answers: [
            { text: "Noche", correct: true },
            { text: "Día", correct: false },
            { text: "Mañana", correct: false },
            { text: "Tarde", correct: false }
        ]
    },
    {
        question: "What does 'hermana' mean in English?",
        answers: [
            { text: "Sister", correct: true },
            { text: "Brother", correct: false },
            { text: "Mother", correct: false },
            { text: "Father", correct: false }
        ]
    },
    {
        question: "Identify the Spanish word for 'tree':",
        answers: [
            { text: "Árbol", correct: true },
            { text: "Flor", correct: false },
            { text: "Hoja", correct: false },
            { text: "Raíz", correct: false }
        ]
    },
    {
        question: "Select the Spanish translation for 'horse':",
        answers: [
            { text: "Caballo", correct: true },
            { text: "Vaca", correct: false },
            { text: "Cerdo", correct: false },
            { text: "Oveja", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'happy'?",
        answers: [
            { text: "Feliz", correct: true },
            { text: "Triste", correct: false },
            { text: "Enojado", correct: false },
            { text: "Cansado", correct: false }
        ]
    },
    {
        question: "Choose the correct translation for 'beach':",
        answers: [
            { text: "Playa", correct: true },
            { text: "Montaña", correct: false },
            { text: "Río", correct: false },
            { text: "Bosque", correct: false }
        ]
    },
    {
        question: "Which word means 'child' in Spanish?",
        answers: [
            { text: "Niño", correct: true },
            { text: "Adulto", correct: false },
            { text: "Anciano", correct: false },
            { text: "Joven", correct: false }
        ]
    },
    {
        question: "Select the Spanish word for 'kitchen':",
        answers: [
            { text: "Cocina", correct: true },
            { text: "Baño", correct: false },
            { text: "Sala", correct: false },
            { text: "Dormitorio", correct: false }
        ]
    },
    {
        question: "What does 'ciudad' mean in English?",
        answers: [
            { text: "City", correct: true },
            { text: "Town", correct: false },
            { text: "Village", correct: false },
            { text: "Country", correct: false }
        ]
    },
    {
        question: "How do you say 'bird' in Spanish?",
        answers: [
            { text: "Pájaro", correct: true },
            { text: "Perro", correct: false },
            { text: "Gato", correct: false },
            { text: "Conejo", correct: false }
        ]
    },
    {
        question: "Which word means 'money' in Spanish?",
        answers: [
            { text: "Dinero", correct: true },
            { text: "Banco", correct: false },
            { text: "Billete", correct: false },
            { text: "Tarjeta", correct: false }
        ]
    }
];














//Element Control 
const StartBtn = document.getElementById('start');
const ReStartBtn = document.getElementById('restart');
const question = document.getElementById('questions');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next');
const restartBtn = document.getElementById('restart');
const scoreCounter = document.getElementById('score');
const answersbtn = document.getElementsByClassName('answer')




let currentQuestionIndex=0;
let score=0;
// const currentQuestion = spanishQuestions[currentQuestionIndex];
let rightAns = '';



StartBtn.addEventListener('click',() => {startQuiz()})
nextBtn.addEventListener('click',()=>{nextQuestion()})
restartBtn.addEventListener('click',()=>{restartQuiz()})










function showQuestion(){

   const currentQuestion = spanishQuestions[currentQuestionIndex];

    currentQuestionIndex+=1;

    currentQuestion.answers.forEach(answer =>{
        if (answer.correct) {
            rightAns=answer.text;
            return;}})

    question.innerText=`${currentQuestion.question}`;

    const answers = currentQuestion.answers;

    answers.forEach(answer => {
        let button = document.createElement('button');
        button.setAttribute('class', 'answer');
        button.innerText=answer.text;
        button.addEventListener('click',()=>{selectAnswer(button)})
        answersContainer.appendChild(button);
    });
}

function selectAnswer(button) {
    nextBtn.style.pointerEvents='all';

    for (const iterator of answersbtn) {
        iterator.style.pointerEvents='none';
    }

    if (button.innerText===rightAns) {
        correctAns(button);
    } else{
    wrongAns(button);
    }
    scoreCounter.innerText=score;

}
function correctAns(button) {
    score++;
    button.style.background='hsla(120, 87%, 35%, 0.652)';
    button.style.color= 'aliceblue';
}
function wrongAns(button) {
    button.style.background='hsla(0, 86%, 43%, 0.652)';
    button.style.color= 'aliceblue';

    for (let index = 0; index < 4; index++) {
        const btn = answersbtn[index];
        if (rightAns===btn.textContent ) {
            btn.style.background='hsla(120, 87%, 35%, 0.652)';
            btn.style.color= 'aliceblue';
        } 
    }
}

function removeAns() {
    nextBtn.style.pointerEvents='none'
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function nextQuestion() {
    if (currentQuestionIndex<spanishQuestions.length) {
        removeAns()
        showQuestion();

    }
}


function resetState() {
    currentQuestionIndex = 0;
     score = 0;
     removeAns();

    showQuestion()
}

function startQuiz() {
    resetState()
}
function restartQuiz() {
    removeAns();
    question.innerText='questions goes here';
    for (let index = 0; index < 4; index++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'answer');
        button.innerText='answers goes here';
        answersContainer.appendChild(button);  
    }


    
}