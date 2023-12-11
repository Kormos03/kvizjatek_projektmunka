import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import genreList from './genreList.ts';

document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Set up genre sliders
	 */
	document.getElementById("genresliders").innerHTML = "";
	for (let i = 0; i < genreList.length; i++) {
		if (localStorage.getItem(genreList[i] == null)) { localStorage.setItem(genreList[i], true); console.log("set") }
		const row = document.createElement("tr");
		const celln = document.createElement("td");
		celln.innerText = genreList[i]
		const cells = document.createElement("td");
		const container = document.createElement("label");
		container.classList.add("switch");
		container.id = "container";
		const slider = document.createElement("input");
		slider.type = "checkbox";
		slider.id = genreList[i] + "_slider";
		slider.addEventListener('click', func);
		slider.checked = localStorage.getItem(genreList[i]) == "true" ? true : false
		const span = document.createElement("span");
		span.classList.add("slider", "round");
		container.appendChild(slider);
		container.appendChild(span);
		cells.appendChild(container)
		row.appendChild(celln)
		row.appendChild(cells)
		document.getElementById("genresliders").appendChild(row);
	}
	document.getElementById("diffSelect").addEventListener("change", diffSend)
});

function func()
/**
 * Update genre list
 */ {
	for (let i = 0; i < genreList.length; i++) {
		const sliderfunc = document.getElementById(genreList[i] + "_slider")! as HTMLInputElement;
		let val = sliderfunc.checked;
		console.log(val)
		localStorage.setItem(genreList[i], val);
	}

}

function diffSend()
/**
 * Update difficulty
 */ {
	localStorage.setItem('difficulty', document.getElementById("diffSelect").value)
}
