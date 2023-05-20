/*Задайте вопрос с помощью prompt(). Запишите ответ в переменную. Проверьте правильность ответа. Покажите alert() в зависимости от правильности ответа.
Составьте небольшой квиз.*/

let question1 = prompt("Capital of Great Britain?").toLowerCase().trim();
let correct = false;
while (!correct) {
  if (question1 === "london") {
    correct = true;
    alert("🏆Correct!🎉");
  } else {
    alert("👿 Nyet! 👿 Try again! 👿");
    question1 = prompt("Capital of Great Britain? 😈").toLowerCase().trim();
  }
}
let question2 = prompt("Capital of Germany?").toLowerCase().trim();
correct = false;
while (!correct) {
  if (question2 === "berlin") {
    correct = true;
    alert("🏆Correct!🎉");
  } else {
    alert("👿 Nyet! 👿 Try again! 👿");
    question2 = prompt("Capital of Germany? 😈").toLowerCase();
  }
}
let question3 = prompt("Capital of Norway?").toLowerCase().trim();
correct = false;
while (!correct) {
  if (question3 === "oslo") {
    correct = true;
    alert("🏆Correct!🎉");
  } else {
    alert("👿 Nyet! 👿 Try again! 👿");
    question3 = prompt("Capital of Norway? 😈").toLowerCase().trim();
  }
}
