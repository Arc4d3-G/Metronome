const colorClass = document.querySelectorAll(".teal");
const counterText = document.querySelector("[data-counter-input]");
const tempoText = document.querySelector("[data-tempo-italian]");
const body = document.querySelector("[data-body]");
const themeText = document.querySelector("[data-theme]");

let currentTheme = "light"; // Used to toggle theme
const lightColor = "teal";
const lightColorText = "teal-text";
const darkColor = "light-blue";
const darkColorText = "light-blue-text";

/**
 * Function that grabs the current theme from {@link currentTheme} and then adds/replaces/removes the relevant
 * classes to change the element colors. A querySelector is used to find all elements that contain
 * theme related css classes.
 * @returns {string} currentTheme
 */
export const themeSwitch = () => {
	if (currentTheme === "light") {
		for (let element of colorClass) {
			element.classList.replace(lightColor, darkColor);
		}
		counterText.classList.replace(lightColorText, darkColorText);
		tempoText.classList.replace(lightColorText, darkColorText);
		body.classList.add("grey", "darken-3");
		themeText.innerHTML = `<i class="tiny material-icons left">brightness_medium</i> LIGHT MODE`;
		return (currentTheme = "dark");
	}
	if (currentTheme === "dark") {
		for (let element of colorClass) {
			element.classList.replace(darkColor, lightColor);
		}
		counterText.classList.replace(darkColorText, lightColorText);
		tempoText.classList.replace(darkColorText, lightColorText);
		body.classList.remove("grey", "darken-3");
		themeText.innerHTML = `<i class="tiny material-icons left">brightness_medium</i> DARK MODE`;
		return (currentTheme = "light");
	}
};
