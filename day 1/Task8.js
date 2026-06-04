let num = [1, 2, 3, 4]
function sumAll(...numbers){
    let sum = 0
    for(let no of numbers){
    sum += no 
    }
    return sum
}
console.log(sumAll(...num))