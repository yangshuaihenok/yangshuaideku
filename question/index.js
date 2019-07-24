// function Person(name){
//     this.name = name
// }

// let p = new Person('wn')

// p.__proto__ = Person.prototype
// Person.__proto__ == Function.prototype
// 实例的隐式原型链(__proto__)等于其构造函数的显示原型链(prototype)




// var foo = {}, F = function(){};

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a) // valA
// console.log(foo.b) // undefined
// console.log(F.a)  // valA
// console.log(F.b) // valB



// function people (name){
//     this.name = name
//     // return {}
//     // return 666
// }
// let o = new people('wn')
// console.log(o)

// 构造函数是不需要返回值的，使用new来创建对象时，
// 如果return的是非对象类型，会忽略返回值，如果return的是对象，则返回该对象
// （若return null也会忽略返回值）

// function Person(name){
//     this.name = name
// }
// function Student(){

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// console.log(s instanceof Person) // true



// for(var i = 0;i<10;i++){
//     (function(i){
//         setTimeout(() => {
//             console.log(i) 
//         }, 0);
//     })(i)
// }
// var i 时，十个十 10 10...
// let i 时，0~9
// var 每次循环会覆盖掉上一次的作用域  用闭包解决



// var arr = [1,4,5,6,2,3];

// for(let index of arr){  // index 获得 arr 的值
//     console.log(index)
// }
// for(let index in arr){  // index 获得 arr 所有值的下标
//     console.log(arr[index])
// }

// for in 
// 1. index 是字符串类型的 arr索引 
// 2. 遍历顺序有可能不是数组内部顺序进行
// 3. 使用for in 会遍历数组所有可枚举的属性，包括原型链，所以for in 更适合遍历对象

// for of遍历的只是数组的元素，不包括数组原型属性和索引
// for in 遍历的是数组的索引


let gArr = [1,2,[3,4],5,[2,4,5,[3,4]]]
// 1 2 3 4 5 2 4 5 3 4  

function output(arr){
    let res = []
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res = res.concat(output(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
console.log(output(gArr))