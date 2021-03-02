/* eslint-disable no-unused-vars */

const { ipcRenderer } = require("electron");

const config = ipcRenderer.sendSync("get-creds");