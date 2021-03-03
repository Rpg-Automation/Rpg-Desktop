const robot = require("kbm-robot");

robot.startJar();

const demo = (text) => {
	robot.typeString(text);
	robot.press("enter");
	robot.go();
	//.sleep(100)
	//.then(robot.stopJar);
};

module.exports = {
	robot: robot,
	demo: demo
};