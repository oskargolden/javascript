let array1 = [1,2,3,4,5,6,7,8]

let reverseArr = array1.reverse()


let valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

let Algoed = []
console.log(valid1)

let arrLength = valid1.length
let reverse = valid1.reverse()


for(let i = 0; i < arrLength; i++){
   if(reverse.indexOf(i) % 2 === 0){
      Algoed.push(reverse.indexOf(i) *2 ) 
   } else{
      Algoed.push(reverse.indexOf(i))
   }
}

console.log(Algoed)


