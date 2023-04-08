function init() {
    // Postavlja broj svih pitanja na stranici na početku
    // Sets the total number of questions on the page at the beginning
    // Legt die Gesamtzahl der Fragen auf der Seite am Anfang fest
    document.getElementById('all-questions').innerHTML = questions.length;
    // Poziva funkciju za prikaz pitanja
    // Calls the function for displaying the question
    // Ruft die Funktion zum Anzeigen der Frage auf
    showQuestion();
}

// Varijabla koja označava trenutno prikazano pitanje
// A variable that indicates the currently displayed question
// Eine Variable, die die aktuell angezeigte Frage angibt
let currentQuestion = 0;
let rightQuestions = 0;

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/winner.jpg';


    } else {

        let percent = currentQuestion + 1 / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;


        console.log('Fortschritt:', percent);


        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        // Dohvaća pitanje koje treba prikazati
        // Gets the question that needs to be displayed
        // Ruft die Frage ab, die angezeigt werden soll
        let question = questions[currentQuestion];
        // Postavlja tekst pitanja u HTML element s ID-jem "questiontext"
        // Sets the text of the question in the HTML element with the ID "questiontext"
        // Legt den Text der Frage im HTML-Element mit der ID "questiontext" fest
        document.getElementById('questiontext').innerHTML = question['question'];
        // Postavlja tekst odgovora 1 u HTML element s ID-jem "answer_1"
        // Sets the text of answer 1 in the HTML element with the ID "answer_1"
        // Legt den Text von Antwort 1 im HTML-Element mit der ID "answer_1" fest
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        // Postavlja tekst odgovora 2 u HTML element s ID-jem "answer_2"
        // Sets the text of answer 2 in the HTML element with the ID "answer_2"
        // Legt den Text von Antwort 2 im HTML-Element mit der ID "answer_2" fest
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        // Postavlja tekst odgovora 3 u HTML element s ID-jem "answer_3"
        // Sets the text of answer 3 in the HTML element with the ID "answer_3"
        // Legt den Text von Antwort 3 im HTML-Element mit der ID "answer_3" fest
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        // Postavlja tekst odgovora 4 u HTML element s ID-jem "answer_4"
        // Sets the text of answer 4 in the HTML element with the ID "answer_4"
        // Legt den Text von Antwort 4 im HTML-Element mit der ID "answer_4" fest
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    // Dohvaća trenutno pitanje na koje se odnosi odgovor
    // Retrieves the current question to which the answer applies
    // Ruft die aktuelle Frage ab, auf die sich die Antwort bezieht
    let question = questions[currentQuestion];
    // Dohvaća broj odabranog odgovora
    // Retrieves the number of the selected answer
    // Ruft die Nummer der ausgewählten Antwort ab
    let selectedQuestionNumber = selection.slice(-1);

    // Dohvaća ID točnog odgovora za pitanje
    // Retrieves the ID of the correct answer for the question
    // Ruft die ID der richtigen Antwort für die Frage ab
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    // Provjerava je li odabran odgovor jednak točnom odgovoru na pitanje
    // Checks if the selected answer is equal to the correct answer for the question
    // Überprüft, ob die ausgewählte Antwort der richtigen Antwort für die Frage entspricht
    if (selectedQuestionNumber == question['right_answer']) {
        // Ako je odabrani odgovor točan, dodaje se klasa 'bg-success' roditeljskom elementu odabranog odgovora
        // If the selected answer is correct, adds a 'bg-success' class to the parent element of the selected answer
        // Wenn die ausgewählte Antwort korrekt ist, wird der Eltern-Element des ausgewählten Antwort ein 'bg-success' Klasse hinzugefügt
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        // Ako je odabrani odgovor netočan, dodaje se klasa 'bg-danger' roditeljskom elementu odabranog odgovora,
        // i klasa 'bg-success' roditeljskom elementu točnog odgovora
        // If the selected answer is incorrect, adds a 'bg-danger' class to the parent element of the selected answer,
        // and a 'bg-success' class to the parent element of the correct answer
        // Wenn die ausgewählte Antwort inkorrekt ist, wird dem Eltern-Element des ausgewählten Antwort ein 'bg-danger' Klasse hinzugefügt
        // und ein 'bg-success' Klasse dem Eltern-Element der richtigen Antwort hinzugefügt
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    // Omogućava gumb 'next'
    // Enables the 'next' button
    // Aktiviert die Schaltfläche 'Weiter'
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}