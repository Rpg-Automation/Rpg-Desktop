/* eslint-disable no-undef */

const { remote } = require("electron");

const closeButton = document.getElementById("close-temp");
const minButton = document.getElementById("min-temp");

const startLoopButton = document.getElementById("start-loop");
const stopLoopButton = document.getElementById("stop-loop");

closeButton.onclick = () => {
	const window = remote.getCurrentWindow();
	window.close();
};

minButton.onclick = () => {
	const window = remote.getCurrentWindow();
	window.minimize();
};

startLoopButton.onclick = () => {
	const shouldRunTrue = ipcRenderer.sendSync("run-true");
	console.log(shouldRunTrue);
};

stopLoopButton.onclick = () => {
	const shouldRunFalse = ipcRenderer.sendSync("run-false");
	console.log(shouldRunFalse);
};