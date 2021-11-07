const express = require("express");
const router = express.Router();
const comments = require("../../src/data/comments");
const { findComment } = require("../../controllers/newComment");
const { v4: getID } = require("uuid");

router.get("/comments", (req, res) => {
	res.render("allComments", { comments });
});
router.get("/comments/new", (req, res) => {
	res.render("new-comment");
});
router.get("/comments/:id", (req, res) => {
	const { comment } = findComment(req, comments);
	res.render("details", { comment });
});
router.get("/comments/:id/edit", (req, res) => {
	const comment = findComment(req, comments);
	res.render("editComment", { comment });
});

router.post("/comments/new", (req, res) => {
	const { user, comment } = req.body;
	if (user && comment) {
		comments.push({ id: getID(), user, comment });
		res.redirect("/comments");
	} else {
		res.status(401).send("<p>Comment and your name can't be empty</p>");
	}
});

router.patch("/comments/:id", (req, res) => {
	const commentToEdit = comments.find((comment) => comment.id === req.params.id);
	const { comment: newValue } = req.body;
	commentToEdit.comment = newValue;
	res.redirect("/comments");
});
module.exports = { router };
