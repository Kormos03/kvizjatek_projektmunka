import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import questions from './questions.json';
//Majd hozzá kellene adni, hogy az a kép jelenjen meg a háttérben amilyen téma van a képek a public/genre_images-be vannak
import scores from './scores.json';
import genreList from './settings.ts';

const questionArray = [];
const settings = ["easy", ""]; //placeholder settings: difficulty, genre. will be imported later

// const difficulty = localStorage.getItem('difficulty')
// const genres = genreList;

const filteredList = [];

function init() {
	questions.forEach(loadQuestions);
	const question = document.createElement("h1");
	question.id = "question"
	question.innerText = localStorage.getItem('mode')
	document.getElementById("app").appendChild(question);

	for (let i = 1; i < 5; i++) {
		buttonCreation(i)
	}

	questionHandler();
}

function gameplayLoop() {

}

function createQuestion(diff, genre) {
	let rand = new random(0, 1)
}

function questionHandler() {
	let diff;
	switch (settings[0]) {
		case "easy":
			diff = 1;
			break;
		case "normal":
			diff = 5;
			break;
		default:
			// default to hard mode
			diff = 9;
	}
	questionListCreation()
	createQuestion(diff, settings[1])
}

function questionListCreation() {
	questionArray.forEach((item, index) => {
		if (item.genre = settings[1]) {
			greeting = "Good day";
		}
	})

}

function loadQuestions(item, index) {
	questionArray.push(item);
}

function buttonCreation(x) {
	const button = document.createElement("button");
	button.id = String.fromCharCode(64 + x);
	button.innerText = String.fromCharCode(64 + x) + ": lorem ipsum"
	document.getElementById("app").appendChild(button);
}

document.addEventListener("DOMContentLoaded", init);