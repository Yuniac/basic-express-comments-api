const comments = require("../src/data/comments");

function newNote(req, res) {
	const { user, comment } = req.query;
	if (user && comment) {
		comments.push({ user, comment });
		res.json({ success: true, comments });
	} else {
		res.status(400).json({ success: false, message: "Please provide a comment" });
	}
}
function findComment(req, comments) {
	const { id } = req.params;
	const comment = comments.find((comment) => comment.id === id);
	return comment;
}
module.exports = { newNote, findComment };
