
'use strict';

/**
 * QuestionCounter remembers which question the user is on.
 * Score remembers how many questions the user got right.
 */
let questionCounter = 0;
let score = 0;

const STORE = [{
        question: '"Ovomorph" is the name of which stage of Xenomorph biology?',
        answers: [
            'chest-burster',
            'facehugger',
            'pupa',
            'egg'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'Cutting a xenomorph at any phase of life is unsafe because of what property of its blood?',
        answers: [
            'emo-ness',
            'acidity',
            'noxiousness',
            'asthma-inducing'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Xenomorph ova attract intelligent creatures by openning its four lobes when a potential host--?',
        answers: [
            'comes close',
            'is attracted by the sweet smell',
            'picks up and shakes the ova',
            'licks the ova'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'Should you become infected by a Xenomorph egg, other Weyland-Yutani staff will not be able to remove it because--?',
        answers: [
            'it would contravene safety protocols',
            'management will not allow it',
            'Xenomorph infection is incurable.',
            'All of the above'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'Due to the nature of Xenomorph blood, what special device is needed to collect blood samples?',
        answers: [
            'a shotgun',
            'a glass needle',
            'any old knife',
            'none of the above'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'When handling the eggs and other specimens, I acknowledge that my and my coworkers safety is the responsibility of --?',
        answers: [
            'Weyland-Yutani Corporation',
            'my supervisor',
            'the entire team',
            'myself'
        ],
        correctAnswerIndex: 2
    },
    {
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correctAnswerIndex: 0
    },
    {
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correctAnswerIndex: 0
    },
    {
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correctAnswerIndex: 0
    },
    {
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correctAnswerIndex: 0
    }

];



function welcomePage() {
    /** The starting screen should have a button that users can click to start the quiz. */

    /** 
     * This function will welcome the user to the quiz and invite the user to continue.
     */


    $('.head').html(`<h1>Xenomorph Safety Quiz</h1>`);
    $('.body').append(`<p>After this training quiz you will be rated a class-C hazardous biological handler by Weyland-Yutani, heretofore known as ‘the Company’. By undertaking this quiz you waive the right to take legal action against the Company for any physical or mental harm resulting from the shipping and handling of alien eggs. Failure to comply will result in a detailed paperwork debriefing of family-members. </p>`);
    $('.foot').append(`<button class='start' type='button'>Click here to start</button>`);
    $('.start').on('click', () => {questionLoop()} );

    console.log(`welcomePage() ran`);


}

function questionLoop() {
    /** Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
            Users should be asked questions 1 after the other.
            Users should only be prompted with 1 question at a time.
        Users should not be able to skip questions.
        Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
        Upon submitting an answer, users should:
            receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
            be moved onto the next question (or interact with an element to move on). */


    /**
     * This function will iterate the user through the questions (and their answers).
     * it will also keep score
     */

    $(`.head`).empty();
    $(`.foot`).empty();
    $('.body').html(`<form class='answerBucket'></form>`);


    $('.answerBucket').empty();
    $('.head').html(`<h2>${STORE[questionCounter].question}</h2>`);
    for(let j = 0 ; j < STORE[questionCounter].answers.length ; j++){
        $(`.answerBucket`).append(`<p><button type='button${j}'>${STORE[questionCounter].answers[j]}</button></p>`); 
    }
    
    $('button0').on('click', ()=>{ evaluateAnswer(0) });
    $('button1').on('click', ()=>{ evaluateAnswer(1) });
    $('button2').on('click', ()=>{ evaluateAnswer(2) });
    $('button3').on('click', ()=>{ evaluateAnswer(3) });




    
    console.log(`questionLoop() ran`);
}

function evaluateAnswer( int ){
    if (int === STORE[questionCounter].correctAnswerIndex){
        score++;
        console.log(`correct();`);
    } else {
        console.log(`incorrect();`);
    }

    questionCounter++;

    
}

function finalScore() {
    /** Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
        Users should be able to start a new quiz.*/

    /**
     * user will be presented with their score and prompted to start a new quiz
     * 
     */

    console.log(`finalScore() ran`);
}










function init() {
    welcomePage();
}

$(init);