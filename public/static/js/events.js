const { ipcRenderer } = require("electron");

const val = ipcRenderer.sendSync("test", new Date());
console.log(val);
