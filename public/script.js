document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("betForm");
	const result = document.getElementById("userBet");
	const team1 = document.getElementById("match1team1").textContent;
	const team2 = document.getElementById("match1team2").textContent;

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);
		formData.append("team1name", team1);
		formData.append("team2name", team2);

		const data = Object.fromEntries(formData.entries());

		const response = await fetch("/submit", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(data).toString(),
		});

		const text = await response.text();
		result.textContent = text;
	});
});

document.querySelectorAll(".sportsList > li").forEach((li) => {
	li.addEventListener("click", function (e) {
		e.stopPropagation();
		this.classList.toggle("show");
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector(".navButton button");
	const navLinks = document.querySelector(".navLinks");
	const navBar = document.querySelector(".navBar");
	const navButtons = document.querySelector(".navButtons");
	const body = document.querySelector("body");

	menuButton.addEventListener("click", () => {
		navLinks.classList.toggle("active");
		navBar.classList.toggle("active");
		navButtons.classList.toggle("active");
		body.classList.toggle("noScroll");

		menuButton.classList.remove("rotate");
		void menuButton.offsetHeight;
		menuButton.classList.add("rotate")
	});
});

// // app.js
// const express = require('express');
// const db = require('./db');
// const app = express();

// app.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) return res.status(500).send('Błąd zapytania');
//     res.json(results);
//   });
// });

// app.listen(3000, () => {
//   console.log('Serwer działa na porcie 3000');
// });
