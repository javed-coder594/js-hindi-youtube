const myarr0 =[0,1,2,3,4,5]
console.log(myarr0[1]);
// o/p >>>> 1

// const myHero =['spiderman' ,'superman ', 'ironman'] 
// const myarr2 = new Array (1 ,2,3,4)
// we can also write this type of array



// *******array method  *****

const myarr =[0,1,2,3,4,5]

// *******push******** Add last element
myarr.push(6)
//o/p >>>> [0,1,2,3,4,5,6]

// ******pop****** Remove last element
myarr.pop()
//o/p >>>> [0,1,2,3,4,5]

// ******unshift****** add starting element
myarr.unshift(9)
//o/p >>>> [9,0,1,2,3,4,5,6]

// ******shift****** remove starting element
myarr.shift()
//o/p >>>> [0,1,2,3,4,5,6]

// console.log(myarr);

// for indexof*****8
// console.log(myarr.indexOf(3)); 
// o/p >>>>> 3

// this Element is available or not **** includes
// console.log(myarr.includes(3));
// o/p>>> true

// join () convert array into string  
// const newarr = myarr.join()
// console.log(newarr);
// console.log(typeof(newarr));
//o/p >>>> 0,1,2,3,4,5
 


// *****slice and splice***** 

// *****slice******
// // If we go trought slice in original array will same and index of 3 rd will not print  
const arr =[0,1,2,3,4,5,6]
console.log("A", myarr);
//o/p>>>>> A [ 0, 1, 2, 3, 4, 5 ]
const myna1= arr.slice(1,3)
console.log(myna1);
// o/p >>> [ 1, 2 ]


// *****splice******
// If we go trought splice in original array will manipulate 
console.log("B", myarr);
// o/p >>>>> B [ 0, 1, 2, 3, 4, 5 ]
const myna2 = arr.splice(1,3)
console.log(arr)
// o/p >>>>>> [ 0, 4, 5, 6 ]
console.log(myna2);
// o/p >>>>>> [ 1, 2, 3 ]









