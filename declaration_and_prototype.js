class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

let user1 = new User("Eros");
let user2 = new User("Andrea");

User.prototype.nickname = "Cesare";
user1.nickname = "Matteo";

console.log(user1.nickname);
console.log(user2.nickname);





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