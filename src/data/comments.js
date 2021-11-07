const { v4: getID } = require("uuid");
const comments = [
	{ id: getID(), user: "yuniac", comment: "hello, world" },
	{ id: getID(), user: "bagira", comment: "Bye bye world" },
];

module.exports = comments;
