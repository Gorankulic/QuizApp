function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}
let currentQuestion = 0;

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
    } else {
        console.log('Falsche antwort!!');
    }

};