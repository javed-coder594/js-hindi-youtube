// let tinderuser = new Object () //singleton object

// const tinderuser ={} //Nonsingleton object

const tinderuser ={}
tinderuser.id = 'abc12'
tinderuser.name= "jammy"
tinderuser.loggedin= false

// console.log(tinderuser);

// ********syntax for finding  Keys in object****
console.log(Object.keys(tinderuser));
// o/p>>>>>>[ 'id', 'name', 'loggedin' ]


// ********syntax for finding values in object****
console.log(Object.values(tinderuser));
//o/p>>>>>> [ 'abc12', 'jammy', false ]


// ******** there is some is avil or not avail check *****
console.log(tinderuser.hasOwnProperty('loggedin'));  
// o/p>>>>>>>>>> true




// Object ke andar object 
const regulaarUser ={
    email: "javed@gmail.com",
    fullname :{
      username :{
       name: "javed",
       surname:"chaudhary" }
     }
    }
//  console.log(regulaarUser.fullname.username.name);
//  o/p>>>>>>>>>>>>> javed
 


// *******************Combine****************************************

// const obj1= {1:"a" , 2:"b"}
// const obj2 ={3:"c" , 4:"d"}

 
// ***********assign method foe combine object***************
// const obj4 = Object.assign({}, obj1, obj2)
//  console.log(obj3);
//  o/p>>>>>>>>>> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// ****************** spread method***************************
const obj1= {1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"d"}
const obj3 ={5:"e" , 6:"f"}

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

// o/p >>>>> '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }