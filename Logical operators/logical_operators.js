haveUser = false;
let userInput;
while (!haveUser) {
  userInput = prompt(`Enter username`);
  if (userInput !== "user" && userInput !== "admin") {
    alert("Такого пользователя не существует");
  } else haveUser = true;
}

let passInput = prompt("Enter password");

if (
  (userInput === "user" && passInput === "123") ||
  (userInput === "admin" && passInput === "root")
) {
  alert("Вы вошли!");
} else alert("Неправильный пароль");

//////////////////////////////////////
// ⭐Для хранения пользователей и паролей используйте объект, где ключом будет имя, а значением пароль.

// const usersAndPasswords = {
//   user: "123",
//   admin: "root",
// };

// let userInput = prompt(`Enter username`);

// if (usersAndPasswords.hasOwnProperty(userInput)) {
//   let passInput = prompt("Enter password");
//   if (usersAndPasswords[userInput] === passInput) {
//     alert("Вы вошли!");
//   } else alert("Неправильный пароль");
// } else {
//   alert("Такого пользователя не существует");
// }
