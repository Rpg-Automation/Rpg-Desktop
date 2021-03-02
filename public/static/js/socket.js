/* eslint-disable no-undef */

const io = require("socket.io-client");

const socket = io(config.SOCKET);

console.log(socket);