import { Isettings } from './Interface_settings'

/**Ez a beállítások osztály, amely tartalmazza az összes beállítást */
export class Settings implements Isettings {
    /**A beállítások adattagja, amellyel a történelem témát lehet ki-be kapcsolni*/
    tori: boolean;
    /**A beállítások adattagja, amellyel a matematika témát lehet ki-be kapcsolni */
    matek: boolean;
    /**A beállítások adattagja, amellyel a informatika témát lehet ki-be kapcsolni */
    info: boolean;
    /**A beállítások adattagja, amellyel a biológia témát lehet ki-be kapcsolni */
    biosz: boolean;
    /**A beállítások adattagja, amellyel a fizika témát lehet ki-be kapcsolni */
    fizika: boolean;
    /**A beállítások adattagja, amellyel a kémia témát lehet ki-be kapcsolni */
    kemia: boolean;


}
export const settings = new Settings();
defaultSettings();


/**
 * Default settings
 */

function getSettings(slider: string, setting: string) {
    settings[setting as keyof Settings] = (document.getElementById(slider)! as HTMLInputElement).checked;
    localStorage.setItem(setting, (document.getElementById(slider)! as HTMLInputElement).checked.toString());
    console.log(settings);
    return setting;
}

function defaultSettings() {
    if (!localStorage.getItem('hasDefaultSettingsRun')) {
        document.addEventListener('DOMContentLoaded', () => {
            (document.getElementById('tori_slider')! as HTMLInputElement).checked = true;
            (document.getElementById('matek_slider')! as HTMLInputElement).checked = true;
            (document.getElementById('info_slider')! as HTMLInputElement).checked = true;
            (document.getElementById('biosz_slider')! as HTMLInputElement).checked = true;
            (document.getElementById('fizika_slider')! as HTMLInputElement).checked = true;
            (document.getElementById('kemia_slider')! as HTMLInputElement).checked = true;
        })
        settings.tori = true;
        settings.matek = true;
        settings.info = true;
        settings.biosz = true;
        settings.fizika = true;
        settings.kemia = true;

        localStorage.setItem('hasDefaultSettingsRun', 'true');
        localStorage.setItem('tori', 'true');
        localStorage.setItem('matek', 'true');
        localStorage.setItem('info', 'true');
        localStorage.setItem('biosz', 'true');
        localStorage.setItem('fizika', 'true');
        localStorage.setItem('kemia', 'true');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tori_slider = document.getElementById('tori_slider')! as HTMLInputElement;
    const matek_slider = document.getElementById('matek_slider')! as HTMLInputElement;
    const info_slider = document.getElementById('info_slider')! as HTMLInputElement;
    const biosz_slider = document.getElementById('biosz_slider')! as HTMLInputElement;
    const fizika_slider = document.getElementById('fizika_slider')! as HTMLInputElement;
    const kemia_slider = document.getElementById('kemia_slider')! as HTMLInputElement;
    settings.tori = localStorage.getItem('tori') === 'true';
    settings.matek = localStorage.getItem('matek') === 'true';
    settings.info = localStorage.getItem('info') === 'true';
    settings.biosz = localStorage.getItem('biosz') === 'true';
    settings.fizika = localStorage.getItem('fizika') === 'true';
    settings.kemia = localStorage.getItem('kemia') === 'true';
    (document.getElementById('tori_slider')! as HTMLInputElement).checked = settings.tori;
    (document.getElementById('matek_slider')! as HTMLInputElement).checked = settings.matek;
    (document.getElementById('info_slider')! as HTMLInputElement).checked = settings.info;
    (document.getElementById('biosz_slider')! as HTMLInputElement).checked = settings.biosz;
    (document.getElementById('fizika_slider')! as HTMLInputElement).checked = settings.fizika;
    (document.getElementById('kemia_slider')! as HTMLInputElement).checked = settings.kemia;

    //Erre kellene írni egy metódust, hogy ne kelljen leírni sokszor ugyanazt
    document.getElementById('tori_slider')!.addEventListener('click', () => {
        getSettings('tori_slider', 'tori');
    });

    document.getElementById('matek_slider')!.addEventListener('click', () => {
        getSettings('matek_slider', 'matek');
    });

    document.getElementById('info_slider')!.addEventListener('click', () => {
        getSettings('info_slider', 'info');
    });

    document.getElementById('biosz_slider')!.addEventListener('click', () => {
        getSettings('biosz_slider', 'biosz');
    });

    document.getElementById('fizika_slider')!.addEventListener('click', () => {
        getSettings('fizika_slider', 'fizika');
    });

    document.getElementById('kemia_slider')!.addEventListener('click', () => {
        getSettings('kemia_slider', 'kemia');
    });


});

