// Array con las preguntas, opciones y respuestas correctas
const questions = [
    {
        question: '¿Cuál de los siguientes indicadores mide el nivel de servicio a los clientes?',
        options: ['a) Costo Logístico', 'b) OTIF', 'c) Días de inventario'],
        answer: 'b',
    },
    {
        question: '¿Cuál de los siguientes indicadores mide el nivel de precisión del plan de demanda?',
        options: ['a) OTIF', 'b) Costo Logístico', 'c) Forecast Accuracy (precisión del pronóstico)'],
        answer: 'c',
    },
    {
        question: '¿Cuál de los siguientes indicadores mide el nivel de cobertura del inventario existente en una operación?',
        options: ['a) OTIF', 'b) Costo Logístico', 'c) Días de inventario'],
        answer: 'c',
    },
    {
        question: 'Cuando realizamos el conteo físico de una muestra de productos y lo hacemos de manera periódica ejemplo cada semana, estamos hablando de:',
        options: ['a) Inventario general', 'b) Inventario cíclico', 'c) Inventario lento movimiento'],
        answer: 'b',
    },
    {
        question: 'Si tenemos una operación donde a diario se entregan 100 Toneladas de producto, en camiones de 5 Toneladas a un total de 200 clientes, tenemos una operación con un DROP SIZE de:',
        options: ['a) 0,5 Tonelada / Cliente', 'b) 20 camiones / día', 'c) 2 clientes / tonelada'],
        answer: 'a',
    },
    {
        question: 'Si tenemos una operación logística donde mensualmente el ALMACENAMIENTO cuesta $100,000, el TRANSPORTE cuesta $50,000 y se venden 1,000 Toneladas, cuanto es el COSTO DE TRANSPORTE en $ / Tonelada?',
        options: ['a) $100 / Tonelada', 'b) $150 / Tonelada ', 'c) $50 / Tonelada'],
        answer: 'c',
    },
    {
        question: 'Si tenemos una operación donde contratamos un proveedor que ofrece un servicio integral de Almacenamiento, Transporte, Maquila y administración integral de la cadena de suministro incluyendo manejo de tecnología, se denomina:',
        options: ['a) 2PL', 'b) 3PL', 'c) 4PL'],
        answer: 'c',
    },
    {
        question: 'Si tenemos una operación de almacenamiento donde hay 100 SKU´s y acabamos de realizar un inventario general, con un resultado de sobrante de $10,000 y con 20 SKUs con diferencias, cuanto mide el indicador de EXACTITUD DE INVENTARIO o INVENTORY RECORD ACCURACY (IRA):',
        options: ['a) $10,000', 'b) 20%', 'c) 80%'],
        answer: 'b',
    },
    {
        question: 'Si tenemos una operación de distribución donde en un día se movilizaron 80 Toneladas de carga, en 20 camiones de 5 Toneladas de capacidad cada uno, cuanto mide el indicador de EFICIENCIA DE CARGA o LOAD UTILIZATION ?',
        options: ['a) 25%', 'b) 20%', 'c) 80%'],
        answer: 'c',
    },
    {
        question: 'El concepto que engloba la parte del proceso de distribución final donde se realizan los últimos pasos para entregar el producto a los clientes se denomina:',
        options: ['a) Última milla', 'b) Transporte T1', 'c) Outsourcing'],
        answer: 'a',
    },
    {
        question: 'El concepto con el cual se realiza una comparación de desempeño de una operación de distintas empresas dentro de una misma industria se denomina:',
        options: ['a) Outsourcing', 'b) Benchmarking', 'c) Última milla'],
        answer: 'b',
    },
    {
        question: 'Un indicador financiero que en una cadena de suministro mide el tiempo de conversión del dinero, y que relaciona a los días de cuentas por pagar, días de inventario y días de cuentas por cobrar, se denomina:',
        options: ['a) EBITDA', 'b) Ciclo de conversión de efectivo (Cash  onversión Cycle CCC)', 'c) Costo logístico'],
        answer: 'b',
    },
    {
        question: 'La tecnología de trazabilidad que permite capturar datos a través de un lector de radiofrecuencia y que detecta una ETIQUETA / TAG sin necesidad de tener contacto visual directo con dicha etiqueta, se denomina:',
        options: ['a) Código de barras', 'b) QR', 'c) RFID'],
        answer: 'c',
    },
    {
        question: 'El proceso de planificación organizacional que permite balancear el suministro y la demanda, teniendo interacción mensual entre los principales actores de la organización, se denomina:',
        options: ['a) Sales and operation Planning (S&OP)', 'b) Vendor Managed Inventory (VMI)', 'c) Lean Management'],
        answer: 'a',
    },
    {
        question: 'El proceso que contempla la administración del retorno de productos ya sea debido a daños, no conformidades, cambios, garantías, desechos u otros, se denomina:',
        options: ['a) Logística de última milla', 'b) Logística inversa', 'c) Outsourcing'],
        answer: 'b',
    },
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let countQuestions = 1;
let randomizedQuestions = [];

const newGameButton = document.querySelector('#btnNuevoJuevo');
const questionElement = document.querySelector('#question');
const correctElement = document.querySelector('#contador-correctas');
const incorrectElement = document.querySelector('#contador-incorrectas');
const countQuestionsElement = document.querySelector('#contador-preguntas');

// Función para mostrar la pregunta actual
function showQuestion() {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const opcionesContainer = document.querySelector('#opciones-container');
    opcionesContainer.innerHTML = '';

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const opcion = currentQuestion.options[i];
        const opcionContainer = document.createElement('div');
        opcionContainer.classList.add('container-opcion');

        const opcionImage = document.createElement('img');
        opcionImage.src = './src/img/cuadro_opcion.png';
        opcionContainer.appendChild(opcionImage);

        const opcionText = document.createElement('span');
        opcionText.textContent = opcion;
        opcionContainer.appendChild(opcionText);

        const seleccionImage = document.createElement('img');
        seleccionImage.id = `seleccion-${i + 1}`;
        seleccionImage.classList.add('superpuesta');
        opcionContainer.appendChild(seleccionImage);

        // Agregar controlador de eventos a la opción
        opcionContainer.addEventListener('click', () => {
            checkAnswer(opcion, i + 1);
        });

        opcionesContainer.appendChild(opcionContainer);
    }
}

// Función para verificar la respuesta seleccionada
function checkAnswer(selectedOption, indice) {
    let imageElement = document.querySelector(`#seleccion-${indice}`);
    
    countQuestions++;
    if (countQuestions < 5) { 
        countQuestionsElement.innerHTML = `${countQuestions}`;
    }
    
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    if (selectedOption.startsWith(currentQuestion.answer)) {
        correctAnswers++;
        correctElement.innerHTML = `${correctAnswers}`;
        imageElement.src = './src/img/respuesta_correcta.png';
        // resultElement.textContent = '¡Respuesta correcta!';
    } else {
        incorrectAnswers++;
        incorrectElement.innerHTML = `${incorrectAnswers}`;
        imageElement.src = './src/img/respuesta_incorrecta.png';
        // resultElement.textContent = 'Respuesta incorrecta.';
    }
    setTimeout(() => {
        // Código que se ejecutará después de esperar 3 segundos
        nextQuestion();
    }, 300);
    
}

// Función para barajar las preguntas en el array randomizedQuestions
function shuffleQuestions() {
    randomizedQuestions = questions.sort(() => Math.random() - 0.5);
}

// Función para avanzar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex === 5 || incorrectAnswers === 3) {
        endGame();
    } else {
        showQuestion();
    }
}

// // Función para terminar el juego
function endGame() {
    // console.log(`FINAL JUEGO - CORRECTAS: ${correctAnswers} INCORRECTAS: ${incorrectAnswers}`);

    // questionElement.textContent = 'Juego terminado';
    if (correctAnswers >= 3 && incorrectAnswers < 3) {
        premiacion('WIN');
        // resultElement.textContent = '¡Felicidades! Ganaste el juego.';
    } else {
        premiacion('LOSER');
        // resultElement.textContent = 'Perdiste. Mejor suerte la próxima vez.';
    }
}

shuffleQuestions();
showQuestion();


// Función para iniciar un nuevo juego
function startNewGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    countQuestions = 1;

    countQuestionsElement.innerHTML = `${countQuestions}`;
    correctElement.innerHTML = `${correctAnswers}`;
    incorrectElement.innerHTML = `${incorrectAnswers}`;

    shuffleQuestions();
    showQuestion();
}

// // Asignar evento de clic al botón "Siguiente"
// nextButton.addEventListener('click', nextQuestion);

// Asignar evento de clic al botón "Nuevo Juego"
newGameButton.addEventListener('click', startNewGame);