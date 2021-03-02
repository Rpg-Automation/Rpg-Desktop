require("dotenv").config();

const isDev = (process.env.NODE_ENV == "development" ? true : false);

// please be aware, these credentials are NOT 
// meant to be secure values
const config = {
	IS_DEV: isDev,
	SOCKET: (isDev ? process.env.SOCKET : "https://rpg-rtc.herokuapp.com/")
};

module.exports = config;