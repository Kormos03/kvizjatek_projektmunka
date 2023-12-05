document.getElementById("maingame").addEventListener("click", () => { localStorage.setItem('mode', 'main') })
document.getElementById("random").addEventListener("click", () => { localStorage.setItem('mode', 'random') })
document.getElementById("timed").addEventListener("click", () => { localStorage.setItem('mode', 'timed') })
// sends gamemode information cross-page
import { settings } from "./settings";
setTimeout(() => {
    console.log(settings);
}, 1000);