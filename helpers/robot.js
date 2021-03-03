//const robot = require("robotjs");
const robot = require("kbm-robot");

//const demo = () => {
//	robot.typeString("test");
//	robot.keyTap("enter");
//};

robot.startJar();

const demo = (text) => {
	robot.typeString(text);
	robot.press("enter");
	robot.go();
	//.sleep(100)
	//.then(robot.stopJar);
};

module.exports = {
	demo: demo
};