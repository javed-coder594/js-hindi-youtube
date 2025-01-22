// const marvelHero=["thor", "ironman", "spderman"]
// const dcHeros=["saktiman" , "ali" ,"alzal"]

// marvelHero.push(dcHeros)
// console.log(marvelHero);
// o/p >>> [ 'thor', 'ironman', 'spderman' ["saktiman" , "ali" ,"alzal"]]

// ****************concat************
// let combineHero=marvelHero.concat(dcHeros)
// console.log(combineHero);
// o/p >>>>> [ 'thor', 'ironman', 'spderman', 'saktiman', 'ali', 'alzal' ]


// ****************spread************ [...]
// let fruits = ['mango' , 'apple' , 'orange']
// let vegetables = ["potato", "oionao"]
// let flower = ['sunflower' ,'rose']
// let all= [...fruits,...vegetables,...flower]
// console.log(all);
// o/p >>>>>> [ 'mango', 'apple', 'orange', 'potato', 'oionao', 'sunflower', 'rose' ]



// **************flat*******************

// let myarr =[1,2,3,[4,5,6,[7,8]],9,10]
// let myotherarr=myarr.flat(Infinity)
// console.log(myotherarr);
// // o/p>>> [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// // *****************Array.isArray******************
// console.log (Array.isArray('javed'))
// // o/p >>>false

// let names = ['javed', 'juned']
// console.log (Array.isArray (names))
// o/p >>>true

// // ******************Array.from******************************
// console.log (Array.from('javed')) // Converts into array .......
// // o/p >>> [ 'j', 'a', 'v', 'e', 'd' ]
 
//  other example of .from
// let name = 'javed'
// console.log (Array.from(name))
// o/p >>>>> [ 'j', 'a', 'v', 'e', 'd' ]

// // ******************Array.of******************************
// let score  = 100
// let score2 =200
// let score3 =300
// let score4 =400
// console.log (Array.of (score,score2,score3,score4))
// // o/p >>> [ 100, 200, 300, 400 ]


