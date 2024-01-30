import { themeSwitch } from "./darkmode.js";

const bpmForm = document.querySelector("[data-counter]");
const bpmInput = document.querySelector("[data-counter-input]");
const slider = document.querySelector("[data-slider]");
const addButton = document.querySelector("[data-add]");
const subtractButton = document.querySelector("[data-subtract]");
const startButton = document.querySelector("[data-start]");
const resetButton = document.querySelector("[data-reset]")
const bpmItalianName = document.querySelector("[data-bpm-italian]")
const themeButton = document.querySelector("[data-theme]")


let bpm = 120; // Beats Per Minute. Default 120

/**
 * This function sets the BPM counter (or input field, rather) to the user input value and returns the new 
 * value as variable {@link bpm}. If the input value is less than 20 or more than 240, bpm is set to
 * 20 or 240 respectively. The function also sets the bpm slider value to reflect the new input value.
 * @param {*} event
 * @returns {number}
 */
const submitHandler = (event) => {
    event.preventDefault();
    bpm = bpmInput.value < 20 ? 20 
        : bpmInput.value > 240 ? 240 
        : bpmInput.value;
    bpmInput.value = bpm;
    slider.value = bpm;
    setBpmItalian()
    return bpm;
};
bpmForm.addEventListener("submit", submitHandler);

/**
 * Sets the BPM variable and counter equal to the slider value, updating it as you drag.
 * @returns {number} bpm
 */
const setCounterSlider = () => {
    console.log(bpm);
    bpm = slider.value;
    bpmInput.value = slider.value;
    setBpmItalian()
    return bpm;
};
slider.addEventListener("input", setCounterSlider);

/**
 * Plus button increases the BPM variable and counter by 1.
 * @returns {number} bpm
 */
const addHandler = () => {
    if (bpm >= 240) {
        return;
    } else bpm++;
    console.log(bpm);
    bpmInput.value = bpm;
    slider.value = bpm;
    setBpmItalian()
    return bpm;
}
addButton.addEventListener("click", addHandler);

/**
 * Minus button decreases the BPM variable and counter by 1.
 * @returns {number} bpm
 */
const subtractHandler = () => {
    if (bpm <= 20) {
        return;
    } else bpm--;
    console.log(bpm);
    bpmInput.value = bpm;
    slider.value = bpm;
    setBpmItalian()
    return bpm;
}
subtractButton.addEventListener("click", subtractHandler)

/**
 * Function sets the counter to display the Italian name for the current bpm.
 */
const setBpmItalian = () => {
    bpmItalianName.innerText = `BPM - ${
        (bpm >= 20 && bpm < 40) ? "Grave"
        : (bpm >= 40 && bpm < 60) ? "Largo"
        : (bpm >= 60 && bpm < 66) ? "Larghetto"
        : (bpm >= 66 && bpm < 76) ? "Adagio"
        : (bpm >= 76 && bpm < 108) ? "Andante"
        : (bpm >= 108 && bpm < 120) ? "Moderato"
        : (bpm >= 120 && bpm < 156) ? "Allegro"
        : (bpm >= 156 && bpm < 176) ? "Vivace"
        : (bpm >= 176 && bpm < 200) ? "Presto"
        : (bpm >= 200) ? "Prestissimo" : ""
    }`
          
}

/**
 * Reset button sets all values back to their init state.
 */
const resetHandler = () => {
    bpm = 120
    bpmInput.value = bpm
    slider.value = bpm
    setBpmItalian()
}
resetButton.addEventListener("click", resetHandler)


/**
 * Triggers {@link themeSwitch}, which toggles the theme between light and dark.
 */
themeButton.addEventListener("click", themeSwitch)

startButton.addEventListener("click", () => console.log(bpm));



