document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("betForm");
	const result = document.getElementById("userBet");
	const team1 = document.getElementById("match1team1").textContent
	const team2 = document.getElementById("match1team2").textContent

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const formData = new FormData(form);
		formData.append("team1name", team1)
		formData.append("team2name", team2)
		
		const data = Object.fromEntries(formData.entries());

		const response = await fetch("/submit", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(data).toString(),
		});

        const text = await response.text()
        result.textContent = text
	});
});



const footballList = document.querySelector("li.football")
const footballUl = document.querySelector("ul.footballUl")
const footballLi = document.querySelectorAll("li.footballLi")


footballList.addEventListener("click", ()=>{
	footballUl.classList.toggle("show")
	footballLi.forEach((li)=>{
		li.classList.toggle("show")
	})
})
