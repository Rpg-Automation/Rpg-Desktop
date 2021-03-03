const { app, BrowserWindow, ipcMain } = require("electron");

const config = require("./helpers/config");
const { demo } = require("./helpers/robot");

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false,
		allowRunningInsecureContent: true,
		maximizable: false,
		frame: false,
		transparent: true,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	});
	win.loadFile("public/index.html");
	config.IS_DEV ? win.webContents.openDevTools() : win.removeMenu();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// listener events that emit back and forth to the html (renderer)
ipcMain.on("test", (event, arg) => {
	event.returnValue = `hello there ${arg}`;
});

ipcMain.on("get-creds", (event) => {
	event.returnValue = config;
});

// determines loop
let shouldRun = false;
ipcMain.on("run-true", (event) => {
	shouldRun = true;
	event.returnValue = "state set to true";
});

ipcMain.on("run-false", (event) => {
	shouldRun = false;
	event.returnValue = "state set to false";
});

setInterval(() => {
	console.log(shouldRun);
	if (shouldRun) demo("rpg hunt");
}, 5000);