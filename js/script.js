
//# creazione password per l'utente
//- chiedere il nome all'utente
//   - dichiarare una variabile
let userName
//   - assegnare alla variabile il valore restituito da un prompt
userName = prompt('Ciao, come ti chiami?')
console.log(userName)
//- chiedere il cognome all'utente
//   - dichiarare una variabile
let surName
//   - assegnare alla variabile il valore restituito da un prompt
surName = prompt('qualè il tuo cognome?')
console.log(surName)
//- chiedere il colore preferito all'utente
//   - dichiarare una variabile
let colorPrefer
//   - assegnare alla variabile il valore restituito da un prompt
surName = prompt('qualè il tuo colore preferito?')
console.log(colorPrefer)
//- generare un numero in modo automatico
//   -generare un numero
let num = Math.floor(Math.random()*100);
alert(num);
//-   generare la password all'utente
const messageDomElement = document.getElementById('password')
console.dir(messageDomElement)
//   - unire tutti i valore ricevuti dai prompt per ottenere la pw
let password = userName + surName + colorPrefer + num


messageDomElement.innerHTML = password
