const mySymb = Symbol("sym1")
let jsUser = {
    name: "javed",
    "full Name": "Javed chaudhary",
    age : 23,
    email: 'javedchaudhary594@gmail.com',
    isLoggedIn: true,
    [mySymb] : "symbol"

}

// *********Acess value in object ***************
// console.log(jsUser.name);
// // O/P>>>> Javed
// console.log(jsUser["full Name"]);
// // o/p >>>javedchaudhary594@gmail.com
// console.log(jsUser["email"]);
// // o/p >>>>>>javedchaudhary594@gmail.com

// *****************How to change value in object **********************
// jsUser.email= "chaudahry@gamil.com"
// console.log(jsUser);

// *****************How to freeze value in object **********************
// Object.freeze(jsUser)
//  jsUser.email= "bagwan@gamil.com" //this change will not happen ater freeze the object 

jsUser.gretting = function (){
    console.log('hello Js user ');
    
}
console.log(jsUser.gretting());
// o/p >>>>>> hello Js user


jsUser.grettingtwo = function (){
    console.log(`hello Js user ${this.name} you are the best one ` )
}
console.log(jsUser.grettingtwo());
// o/p >>>>> hello Js user javed you are the best one 



    
    






// ***********How to print symbol in object ***********
// const mySymb = Symbol("sym1")

// const user= {
//     [mySymb] : "symbol"
// }
// console.log(user[mySymb]);
// console.log(typeof user[mySymb]);


