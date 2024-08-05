const questions = [
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        answers: [
            { text: "print('Hello World')", correct: false },
            { text: "console.log('Hello World')", correct: true },
            { text: "echo('Hello World')", correct: false },
            { text: "printf('Hello World')", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript data type?",
        answers: [
            { text: "String", correct: true },
            { text: "Character", correct: false },
            { text: "Float", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "variable myVar;", correct: false },
            { text: "v myVar;", correct: false },
            { text: "var myVar;", correct: true },
            { text: "declare myVar;", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Mozilla", correct: false },
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Sun Microsystems", correct: false }
        ]
    },
    {
        question: "What is the result of the following code: 3 + 2 + '7'?",
        answers: [
            { text: "'57'", correct: true },
            { text: "'327'", correct: false },
            { text: "'12'", correct: false },
            { text: "'NaN'", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "#", correct: false },
            { text: "/*", correct: false },
            { text: "<!--", correct: false }
        ]
    },
    {
        question: "What is the output of: typeof NaN?",
        answers: [
            { text: "'undefined'", correct: false },
            { text: "'number'", correct: true },
            { text: "'object'", correct: false },
            { text: "'NaN'", correct: false }
        ]
    },
    {
        question: "Which of the following is a ternary operator in JavaScript?",
        answers: [
            { text: "?", correct: true },
            { text: ":", correct: false },
            { text: "!", correct: false },
            { text: "//", correct: false }
        ]
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
            { text: "while()", correct: false },
            { text: "loop()", correct: false },
            { text: "forEach()", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which method adds one or more elements to the end of an array?",
        answers: [
            { text: "last()", correct: false },
            { text: "put()", correct: false },
            { text: "push()", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = 'red', 'green', 'blue'", correct: false },
            { text: "var colors = ['red', 'green', 'blue']", correct: true },
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseover", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseclick", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "X", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false }
        ]
    },
    {
        question: "What will the following code output: console.log(0.1 + 0.2 == 0.3);?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "undefined", correct: false },
            { text: "NaN", correct: false }
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.rnd(7.25)", correct: false },
            { text: "Math.round(7.25)", correct: true },
            { text: "round(7.25)", correct: false },
            { text: "rnd(7.25)", correct: false }
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.max(x, y)", correct: true },
            { text: "Math.ceil(x, y)", correct: false },
            { text: "ceil(x, y)", correct: false },
            { text: "top(x, y)", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean('')?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which JavaScript keyword is used to declare a constant?",
        answers: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "const", correct: true },
            { text: "constant", correct: false }
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            { text: "<!-- This is a comment -->", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "** This is a comment", correct: false },
            { text: "'This is a comment'", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            { text: "It refers to the current function", correct: false },
            { text: "It refers to the global object", correct: false },
            { text: "It refers to the current object", correct: true },
            { text: "It refers to the previous object", correct: false }
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Online Notation", correct: false },
            { text: "Java Syntax Object Notation", correct: false },
            { text: "JavaScript Over Network", correct: false }
        ]
    },
    {
        question: "What will the following code output: console.log(typeof undefined);?",
        answers: [
            { text: "'undefined'", correct: true },
            { text: "'null'", correct: false },
            { text: "'object'", correct: false },
            { text: "'NaN'", correct: false }
        ]
    },
    {
        question: "How can you convert a string to a number in JavaScript?",
        answers: [
            { text: "Number()", correct: true },
            { text: "Parse()", correct: false },
            { text: "String()", correct: false },
            { text: "Convert()", correct: false }
        ]
    },
    {
        question: "What will the following code output: console.log(typeof NaN);?",
        answers: [
            { text: "'undefined'", correct: false },
            { text: "'number'", correct: true },
            { text: "'object'", correct: false },
            { text: "'string'", correct: false }
        ]
    },
    {
        question: "What is the output of the following code: console.log('5' - 3);?",
        answers: [
            { text: "2", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
            { text: "'53'", correct: false }
        ]
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        answers: [
            { text: "class", correct: true },
            { text: "className", correct: false },
            { text: "prototype", correct: false },
            { text: "define", correct: false }
        ]
    },
    {
        question: "Which method removes the last element from an array?",
        answers: [
            { text: "remove()", correct: false },
            { text: "pop()", correct: true },
            { text: "delete()", correct: false },
            { text: "cut()", correct: false }
        ]
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: [
            { text: "interface", correct: false },
            { text: "throws", correct: false },
            { text: "program", correct: true },
            { text: "short", correct: false }
        ]
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Document Orientated Model", correct: false },
            { text: "Data-Oriented Model", correct: false }
        ]
    }
];

// You can use the `questions` array in your quiz logic
// For example, displaying questions, checking answers, and calculating scores


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
            { text: "Pájaro", correct: false },
            { text: "Pez", correct: false }
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
    }
];
const spanishQuestionsSet2 = [
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
        question: "Which word means 'cat' in Spanish?",
        answers: [
            { text: "Gato", correct: true },
            { text: "Perro", correct: false },
            { text: "Caballo", correct: false },
            { text: "Pez", correct: false }
        ]
    },
    {
        question: "Select the Spanish word for 'bread':",
        answers: [
            { text: "Pan", correct: true },
            { text: "Leche", correct: false },
            { text: "Queso", correct: false },
            { text: "Mantequilla", correct: false }
        ]
    },
    {
        question: "Which of these is a color in Spanish?",
        answers: [
            { text: "Azul", correct: true },
            { text: "Correr", correct: false },
            { text: "Amigo", correct: false },
            { text: "Zapato", correct: false }
        ]
    },
    {
        question: "What is the Spanish translation of 'car'?",
        answers: [
            { text: "Coche", correct: true },
            { text: "Bicicleta", correct: false },
            { text: "Avión", correct: false },
            { text: "Barco", correct: false }
        ]
    },
    {
        question: "Select the correct Spanish term for 'window':",
        answers: [
            { text: "Ventana", correct: true },
            { text: "Puerta", correct: false },
            { text: "Techo", correct: false },
            { text: "Pared", correct: false }
        ]
    },
    {
        question: "Which word means 'book' in Spanish?",
        answers: [
            { text: "Libro", correct: true },
            { text: "Revista", correct: false },
            { text: "Cuaderno", correct: false },
            { text: "Página", correct: false }
        ]
    },
    {
        question: "How do you say 'water' in Spanish?",
        answers: [
            { text: "Agua", correct: true },
            { text: "Fuego", correct: false },
            { text: "Viento", correct: false },
            { text: "Tierra", correct: false }
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
        question: "What is the Spanish word for 'dog'?",
        answers: [
            { text: "Perro", correct: true },
            { text: "Gato", correct: false },
            { text: "Conejo", correct: false },
            { text: "Caballo", correct: false }
        ]
    },
    {
        question: "Choose the correct Spanish translation for 'sun':",
        answers: [
            { text: "Sol", correct: true },
            { text: "Luna", correct: false },
            { text: "Estrella", correct: false },
            { text: "Cielo", correct: false }
        ]
    },
    {
        question: "What does 'puerta' mean in English?",
        answers: [
            { text: "Door", correct: true },
            { text: "Window", correct: false },
            { text: "Floor", correct: false },
            { text: "Ceiling", correct: false }
        ]
    },
    {
        question: "Which of these words means 'milk' in Spanish?",
        answers: [
            { text: "Leche", correct: true },
            { text: "Agua", correct: false },
            { text: "Jugo", correct: false },
            { text: "Té", correct: false }
        ]
    },
    {
        question: "Select the Spanish translation for 'chair':",
        answers: [
            { text: "Silla", correct: true },
            { text: "Mesa", correct: false },
            { text: "Ventana", correct: false },
            { text: "Cama", correct: false }
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
        question: "How do you say 'pen' in Spanish?",
        answers: [
            { text: "Bolígrafo", correct: true },
            { text: "Papel", correct: false },
            { text: "Mesa", correct: false },
            { text: "Libro", correct: false }
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
        question: "Which word means 'bread' in Spanish?",
        answers: [
            { text: "Pan", correct: true },
            { text: "Queso", correct: false },
            { text: "Carne", correct: false },
            { text: "Fruta", correct: false }
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
        question: "How do you say 'music' in Spanish?",
        answers: [
            { text: "Música", correct: true },
            { text: "Canción", correct: false },
            { text: "Nota", correct: false },
            { text: "Sonido", correct: false }
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
