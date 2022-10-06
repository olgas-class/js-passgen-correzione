// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Input dell'utente
const userName = prompt("Dimmi il tuo nome");
console.log(userName);

const userLastName = prompt("Dimmi il tuo cognome");
console.log(userLastName);

const userColor = prompt("Dimmi il tuo colore preferito");
console.log(userColor);

const randomNumer = 21;

// Esecuzione
// const userPasswd = userName + userLastName + userColor + randomNumer;
const userPasswd = `${userName}${userLastName}${userColor}${randomNumer}`;
console.log(userPasswd);

// Output
const resultElement = document.getElementById("result");
console.log(resultElement.innerHTML);
// resultElement.innerHTML = resultElement.innerHTML + userPasswd;
resultElement.innerHTML += `<span class="${userColor}">
                                ${userPasswd}
                            </span>`;

// document.getElementById("result").innerHTML = userPasswd;
