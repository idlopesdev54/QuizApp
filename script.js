const quizData = [
    {
        question: 'Em qual ano o PS1 foi lançado?',
        a: '1998',
        b: '2000',
        c: '1990',
        d: '1994',
        correct: 'd'
    }, {
        question: 'Qual o nome do personagem principal da franquia The Witcher?',
        a: 'Gerald D Rivia',
        b: 'Mano Brown',
        c: 'Capitão Nascimento',
        d: 'Leon Scott Keneddy',
        correct: 'a'

    }, {
        question: 'Qual foi o battleroyal mais jogado durante a pandemia de 2020?',
        a: 'PUBG',
        b: 'Fortnite',
        c: 'Call Of Duty Warzone',
        d: 'BattleField',
        correct: 'c'
    }, {
        question: 'Qual marca de refrigerante não pode faltar em uma noite de jogatina?',
        a: 'Pitchulinha',
        b: 'Guaranita',
        c: 'Fanta-Uva',
        d: 'Coca-Cola',
        correct: 'd'

    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("enviar");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
deselectAnswers();
  

    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
           answer = answerEl.id;
        }
    });

 return answer;

    }

    function deselectAnswers () {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
            
        });
    
    }



submitBtn.addEventListener('click', () => {
    //verifica a resposta
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>Você respondeu corretamente ${score}/${quizData.length} das questões.</h2> 
        <button onClick="location.reload()">Recarregar</button`;
    } 
}

});