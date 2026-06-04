const obj1 = {
    a : 1, 
    b : 2,
}
const obj2 = { 
    c :3,
    d : 4,
}


const mergedObj = {...obj1,...obj2} // merged obj1 and obj2 with spread operator
console.log(mergedObj)

const {a, d} = mergedObj
console.log(a)
console.log(d)