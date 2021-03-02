const { remote } = require("electron");

const closeButton = document.getElementById("close-temp");
const minButton = document.getElementById("min-temp");

closeButton.onclick = () => {
	const window = remote.getCurrentWindow();
	window.close();
};

minButton.onclick = () => {
	const window = remote.getCurrentWindow();
	window.minimize();
};