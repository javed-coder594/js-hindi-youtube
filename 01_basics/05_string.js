// let gameNAme ="javedop"
// let grettings ="welcome "

// using backtics
// console.log(`${grettings} ${gameNAme} you are the best gamer`);


const gameName = new String ("javedop")

// *******toUpperCase****
console.log(gameName.toUpperCase());


// ******indexof*******
console.log (gameName.indexOf ("j"))


// *****charAt*****
console.log(gameName.charAt(5))


// *******lenght******
console.log (gameName.length)


// ***** substring*****
const newString= (gameName.substring (2,7))
console.log(newString);


//**** slice *** */
const onothersrt = (gameName.slice (-8,1))
console.log(onothersrt);


// *******trim*****
const name = "   javed    "
console.log(name);
console.log( name.trim());


//****replace */
const surname = 'chaudhary'
console.log (surname.replace('chaudhary' ,'shaikh'))


//**** */ split ****
const surnames = "chaudhary-shaikh-bagwan"
console.log(surnames.split("-"));


//****include */
const home = "villa "
console.log(home.includes('villa'));
console.log(home.includes('Zilla'));


//*****concad****
let fullName= "javed"
console.log (fullName.concat( ' chaudhary'))








