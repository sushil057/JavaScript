let num =[12, 24, 45, 56, 94, 86]
console.log(num)
let b = num.toString() // converts the array into string
console.log(b)
console.log(typeof(b))

let c = console.log(num.join(" or "))

let r  = num.pop() //removes an element from the last of an array.

num.push(24)  // adds a new elemnt to the end of an array.
console.log(num)
num.shift()   // removes an element fromt he starting of an array.
console.log(num)
num.unshift(32)   // adds an element to the starting of an array.
console.log(num)


let nam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(nam.length)
delete nam[0]
console.log(nam)
console.log(nam.length)

let nam2 = [1, 12, 53, 29, 434, 45]
let al = ['a', 'b', 'c', 'd', 'e']
let vl =[10, 20, 30, 40, 50]

let newArr = nam2.concat(vl)
console.log(newArr)

console.log(nam2.sort())
console.log(vl.reverse())


// Splice and Slice
let a = [1, 12, 53, 29, 434, 45, 56, 76, 87]
a.splice(2, 3, 1022, 1023, 1024)
console.log(a)
let sl = a.slice(3)
console.log(sl)