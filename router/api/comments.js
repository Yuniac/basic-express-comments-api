const express = require("express");
const apiRouter = express.Router();
const comments = require("../../src/data/comments");
const { newNote } = require("../../controllers/newComment");
apiRouter.get("/comments", (req, res) => {
	res.json(comments);
});
apiRouter.post("/comments/new", newNote);

module.exports = { apiRouter };
