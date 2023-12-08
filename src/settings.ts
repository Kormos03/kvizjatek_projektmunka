import { IGenres } from './Interface_genres'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
//a játék az videójáték?
const genreList = [{ name: "ÁLTALÁNOS", val: true }, { name: "BIOLÓGIA", val: true }, { name: "ÉPÍTÉSZET", val: true }, { name: "FILM", val: true }, { name: "FÖLDRAJZ", val: true }, { name: "IRODALOM", val: true }, { name: "JÁTÉK", val: true }, { name: "KONYHA", val: true }, { name: "KÉPZŐMŰVÉSZET", val: true }, { name: "MAGYARORSZÁG", val: true }, { name: "MŰVÉSZET", val: true }, { name: "NYELV", val: true }, { name: "OPERA", val: true }, { name: "ORSZÁGOK", val: true }, { name: "SPORT", val: true }, { name: "SZÍNHÁZ", val: true }, { name: "TECHNIKA", val: true }, { name: "TUDOMÁNY", val: true }, { name: "TÖRTÉNELEM", val: true }, { name: "VALLÁS", val: true }, { name: "ZENE", val: true }]

export default genreList;

localStorage.setItem('ÁLTALÁNOS', true)

/**
 * Default genres
 */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("genresliders").innerHTML = "";
    for (let i = 0; i < genreList.length; i++) {
        const row = document.createElement("tr");
        const celln = document.createElement("td");
        celln.innerText = genreList[i].name
        const cells = document.createElement("td");
        const container = document.createElement("label");
        container.classList.add("switch");
        container.id = "container";
        const slider = document.createElement("input");
        slider.type = "checkbox";
        slider.id = genreList[i].name + "_slider";
        slider.addEventListener('click', func);
        slider.checked = true
        const span = document.createElement("span");
        span.classList.add("slider", "round");
        container.appendChild(slider);
        container.appendChild(span);
        cells.appendChild(container)
        row.appendChild(celln)
        row.appendChild(cells)
        document.getElementById("genresliders").appendChild(row);

        const sliderfunc = document.getElementById(genreList[i].name + "_slider")! as HTMLInputElement;
        genreList[i].val = sliderfunc.checked;
    }
    //})


    // console.log(genres);
});

function func() {
    for (let i = 0; i < genreList.length; i++) {
        const sliderfunc = document.getElementById(genreList[i].name + "_slider")! as HTMLInputElement;
        genreList[i].val = sliderfunc.checked;
    }
    console.log(genreList)
}
