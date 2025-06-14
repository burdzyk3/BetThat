const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

/*      STRONA GŁÓWNA     */

app.get("/", (req,res) =>{
	res.sendFile(path.join(__dirname, "public", "pages", "index.html"))
})

/*     POSTAW     */
app.get("/bet", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "pages", "bet.html"))
});

app.post("/submit", (req, res) => {
	const data = req.body;
	console.log("Odebrano dane z formularza:", data);
	console.log(data);
	res.send(
		`Wynik spotkania:  ${data.team1name}: ${data.amico} ${data.team2name}: ${data.zaglebie}`
	);
});

/*        HARMONOGRAM        */
app.get("/schedule", (req,res) =>{
	res.sendFile(path.join(__dirname, "public", "pages","schedule.html"))
})


/*         KONTAKT         */
app.get("/contact", (req,res)=>{
	res.sendFile(path.join(__dirname, "public", "pages", "contact.html"))
})

/*          LOGOWANIE     */

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "pages", "login.html"));
});

app.post("/login", (req, res) => {
	const login = req.body.login;
	const password = req.body.password;

	console.log(req.body);
	console.log(login);
	console.log(password);

	if (login == "user" && password == "user") {
		res.send(`Zalogowano na ${login}`);
	} else {
		res.send("Źły login lub hasło");
	}
});

/*        REJESTRACJA      */
app.get("/registration", (req,res)=>{
	res.sendFile(path.join(__dirname, "public", "pages", "registration.html"))
})





app.listen(port, () => {
	console.log(`Działam http://localhost:${port} `);
});
