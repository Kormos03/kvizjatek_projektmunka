import { Isettings } from './Interface_settings'
class Settings implements Isettings {
    tori: boolean = (document.getElementById('tori_slider')! as HTMLInputElement).checked;
    matek: boolean = (document.getElementById('matek_slider')! as HTMLInputElement).checked;
    info: boolean = (document.getElementById('info_slider')! as HTMLInputElement).checked;
    biosz: boolean = (document.getElementById('biosz_slider')! as HTMLInputElement).checked;
    fizika: boolean = (document.getElementById('fizika_slider')! as HTMLInputElement).checked;
    kemia: boolean = (document.getElementById('kemia_slider')! as HTMLInputElement).checked;

    constructor() {
        this.tori = (document.getElementById('tori_slider')! as HTMLInputElement).checked = true;
        this.matek = (document.getElementById('matek_slider')! as HTMLInputElement).checked = true;
        this.info = (document.getElementById('info_slider')! as HTMLInputElement).checked = true;
        this.biosz = (document.getElementById('biosz_slider')! as HTMLInputElement).checked = true;
        this.fizika = (document.getElementById('fizika_slider')! as HTMLInputElement).checked = true;
        this.kemia = (document.getElementById('kemia_slider')! as HTMLInputElement).checked = true;

    }
}

const settings = new Settings();


/**
 * Default settings
 */
document.addEventListener('DOMContentLoaded', () => {

    //Erre kellene írni egy metódust, hogy ne kelljen leírni sokszor ugyanazt
    document.getElementById('tori_slider')!.addEventListener('click', () => {
        settings.tori = (document.getElementById('tori_slider')! as HTMLInputElement).checked;
        console.log(settings);
    })
    console.log(settings);
});

