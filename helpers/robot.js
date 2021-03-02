const robot = require("robotjs");

const demo = () => {
	robot.typeString("test");
	robot.keyTap("enter");
};

module.exports = {
	demo: demo
};