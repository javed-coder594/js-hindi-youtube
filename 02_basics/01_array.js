// const myarr =[0,1,2,3,4,5]
// console.log(myarr[1]);

// const myHero =['spiderman' ,'superman ', 'ironman']


// const myarr2 = new Array (1 ,2,3,4)
// we can also write this type of array



// *******array method  *****

const myarr =[0,1,2,3,4,5]

// *******push******** Add last element
myarr.push(6)

// ******pop****** Remove last element
myarr.pop()

// ******unshift****** add starting element
myarr.unshift(9)

// ******shift****** remove starting element
myarr.shift()

// console.log(myarr);

// for indexof
// console.log(myarr.indexOf(3)); 

// this Element is available or not 
// console.log(myarr.includes(3));

// join () convert array into string 
// const newarr = myarr.join()
// console.log(newarr);
// console.log(typeof(newarr));
 


// *****slice and splice***** 

// *****slice******
// // If we go trought slice in original array will same and index of 3 rd will not print  
const arr =[0,1,2,3,4,5,6]
console.log("A", myarr);
const myna1= arr.slice(1,3)
console.log(myna1);


// *****splice******
// If we go trought splice in original array will manipulate 
console.log("B", myarr);
const myna2 = arr.splice(1,3)
console.log(arr)
console.log(myna2);









