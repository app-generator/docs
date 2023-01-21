const express = require("express");
const fs = require("fs");
const path = require("path");

// create express application
const app = express();

const distFolder = path.join(process.cwd(), "../build");

app.set("view engine", "html");
app.set("views", distFolder);

// app.get(
// 	"/appSeed//.(js|css|map|ico|svg|png|jpg|jpeg)$/",
// 	express.static(distFolder, {
// 		maxAge: "1y",
// 	})
// );
// serve static assets
app.get(/\.(js|css|map|ico|svg|png|jpg|jpeg|woff2)$/, express.static(path.resolve(__dirname, "../build")));

// for any other requests, send `index.html` as a response

app.get("/sitemap.xml", (req, res) => {
	let indexHTML = fs.readFileSync(path.resolve(__dirname, "../build/" + req.originalUrl), {
		encoding: "utf8",
	});

	// set header and status
	res.contentType("text/xml");
	res.status(200);

	return res.send(indexHTML);
});
app.get("/opensearch.xml", (req, res) => {
	let indexHTML = fs.readFileSync(path.resolve(__dirname, "../build/" + req.originalUrl), {
		encoding: "utf8",
	});

	// set header and status
	res.contentType("text/xml");
	res.status(200);

	return res.send(indexHTML);
});
app.get("/favicon.ico", (req, res) => {
	let indexHTML = fs.readFileSync(path.resolve(__dirname, "../build/" + req.originalUrl), {
		encoding: "utf8",
	});

	// set header and status
	res.contentType("png");
	res.status(200);

	return res.send(indexHTML);
});

app.use("*", (req, res) => {
	if (req.originalUrl.includes("assets")) return express.static(path.resolve(__dirname, "../build/" + req.originalUrl));
	console.log("url", req.originalUrl);
	// console.log("method", req.method);
	let indexHTML;
	// read `index.html` file
	if (req.originalUrl == "/") {
		indexHTML = fs.readFileSync(path.resolve(__dirname, "../build/index.html"), {
			encoding: "utf8",
		});
	} else {
		indexHTML = fs.readFileSync(path.resolve(__dirname, "../build/" + req.originalUrl + "/index.html"), {
			encoding: "utf8",
		});
	}

	// set header and status
	res.contentType("text/html");
	res.status(200);

	return res.send(indexHTML);
});

// run express server on port 9000
app.listen("9000", () => {
	console.log("Express server started at http://localhost:9000");
});
