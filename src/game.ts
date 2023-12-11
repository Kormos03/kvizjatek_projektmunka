import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import questions from './questions.json';
import scores from './scores.json';
import genreList from './genreList.ts';

const questionArray = [];

const mode = localStorage.getItem('mode');
const difficulty = localStorage.getItem('difficulty')

const filteredList = [];

function init()
{
	questions.forEach(loadQuestions);
	const question = document.createElement("h1");
	question.id = "question"
	question.innerText = mode
	document.getElementById("app").appendChild(question);
	
	for (let i = 1; i < 5; i++) {
		buttonCreation(i)
	}
	
	questionHandler();
}

function gameplayLoop()
{
	
}

function createQuestion(diff)
{
	//let rand = new random(0, 1)
}

function questionHandler()
{
	let diff;
	if (mode != "main")
	switch(difficulty) {
		case 1:
			diff = 1;
		break;
		case 2:
			diff = 5;
		break;
		default:
			// default to hard mode
			diff = 9;
	}
	questionListCreation()
	createQuestion(diff)
}

function questionListCreation()
{
	// questionArray.forEach((item, index) => {
		// if (item.genre = settings[1]) {
			
		// }
	// })
	
}

function loadQuestions(item, index)
{
	let loadGenre = item.genre;
	if (localStorage.getItem(loadGenre) == "true") {questionArray.push(item); console.log("push")}
	// if (genreList.loadGenre == true) { console.log("yes") } else {console.log("no")}
	// questionArray.push(item);
}

function buttonCreation(x){
	const button = document.createElement("button");
	button.id = String.fromCharCode(64+x);
	button.innerText = String.fromCharCode(64+x) + ": lorem ipsum"
	document.getElementById("app").appendChild(button);
}

document.addEventListener("DOMContentLoaded", init);