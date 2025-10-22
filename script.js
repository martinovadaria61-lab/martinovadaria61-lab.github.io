let userName = prompt("Введіть ваше ім'я:");
document.querySelector("h2").textContent = `${userName} vs Комп’ютер`;
const cards = [
    { value: 6, img: "6.JPG" },
    { value: 7, img: "7.JPG" },
    { value: 8, img: "8.JPG" },
    { value: 9, img: "9.JPG" },
    { value: 10, img: "10.JPG" },
    { value: 2, img: "valet.JPG" },
    { value: 3, img: "dama.JPG" },
    { value: 4, img: "korol.JPG" },
    { value: 11, img: "tuz.JPG" }
];

let userScore = 0;
let compScore = 0;
let round = 1;
document.getElementById("generate").addEventListener("click", () => {
    if (round > 3) return;
	const userCard = cards[Math.floor(Math.random() * cards.length)];
	const compCard = cards[Math.floor(Math.random() * cards.length)];
	userScore += userCard.value;
    compScore += compCard.value;

    document.getElementById("userCard").src = `${userCard.img}`;
    document.getElementById("compCard").src = `${compCard.img}`;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;
    document.getElementById("roundText").textContent = `Спроба ${round} з 3`;
	round++;

    if (round > 3) {
      let result = "";
      if (userScore > compScore) result = `${userName} виграв(ла)!`;
      else if (userScore < compScore) result = "Комп’ютер виграв!";
      else result = "Нічия!";
      document.getElementById("result").textContent = result;
    }

  });
