class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

//Aggiungendo l'array friends al prototype, si va a legare il riferimento dell'array al prototype
//Ciò significa che tutti gli oggetti che andrò a creare punteranno allo stesso riferimento
//Quindi modificato l'array in un oggetto istanziato, lo andrò a modificare anche in tutti gli altri
//Per le variabili primitive (string, number, boolean, symbol) viene usato il valore e non il riferimento
//Quindi questa tecnica funziona correttamente
User.prototype.friends = ["Tom", "Chili"];

User.prototype.surname = "Righetto";

let user1 = new User("Eros");
let user2 = new User("Andrea");

user1.friends.push("Aladdin");
user1.surname = "Mckinnon"

console.log(user1.friends);
console.log(user2.friends);

console.log(user1.surname);
console.log(user2.surname);





/*
  function User(name) {
    this.name = name;
  }
  
  User.prototype.sayHi = function() {
    console.log(this.name);
  }
  
  let user = new User("John");
  user.sayHi();
  console.log(user);
  */