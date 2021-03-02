require("dotenv").config();
const { app, BrowserWindow, ipcMain } = require("electron");

const IS_DEV = (process.env.NODE_ENV == "development" ? true : false);

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false,
		maximizable: false,
		frame: false,
		transparent: true,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		}
	});
	win.loadFile("public/index.html");
	IS_DEV ? win.webContents.openDevTools() : win.removeMenu();
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
