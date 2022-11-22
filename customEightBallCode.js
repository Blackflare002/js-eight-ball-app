let userName = document.getElementById("name").value;
//userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = document.getElementById("question").value;
//console.log(`The user asked: ${userQuestion}`);

let myNameWas = document.getElementById("my-name-was");
let myQuestionWas = document.getElementById("my-question-was");
let answerEl = document.getElementById("answer-el");
//console.log(answerEl);

/*function what() {
    console.log("what?");
};*/

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
function shakeTheEight() {
        switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'Decidedly so!';
            break;
        case 2:
            eightBall = 'Reply hazy, try again';
            break;
        case 3:
            eightBall = 'Seems unlikely';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'Odds are fifty-fifty';
            break;
        case 6:
            eightBall = 'Mystic sources say no';
            break;
        case 7:
            eightBall = 'All signs point to yes';
            break; };
    console.log(eightBall);
    myNameWas.textContent = "My name is " + userName;
    myQuestionWas.textContent = "My question was: " + userQuestion;
    answerEl.textContent = "The mystic Eight Ball says: " + eightBall;
    //return(`The eight ball answered: ${eightBall}`);
};

//shakeTheEight();
