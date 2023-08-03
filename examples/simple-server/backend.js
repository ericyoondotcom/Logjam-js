const express = require("express");
const logjam = require("logjam");

const app = express();



app.get("/", (req, res, next) => {
	res.send("Hello World!");
});

app.listen(3000, () => {
	logjam.info("Example app listening on port 3000!");
});
