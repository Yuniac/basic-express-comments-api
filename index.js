const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

const { apiRouter } = require("./router/api/comments");
const { router } = require("./router/user/comments");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRouter);
app.use("/", router);

app.get("/", (req, res) => {
	res.send("<h1>Welcome. See our <a href='/comments'>comments</a></h1>");
});
app.listen(port, () => {
	console.log(`app running at port: ${port}`);
});
