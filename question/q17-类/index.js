function Animal (name){
    this.name = name;
    this.sleep = function(){
        console.log(this.name + '睡着了')
    }
}
Animal.prototype.eat = function(food){
    console.log(this.name + '正在吃' + food)
}

// // 原型链的继承
// function Cat(){}
// Cat.prototype = new Animal()
// Cat.prototype.name = 'cat'

// var cat = new Cat()
// console.log(cat.name)//cat
// console.log(cat.eat('fish'))//cat正在吃fish

// 构造函数的继承
// function Cat(name){
//     Animal.call(this)  //只是Cat能用到Animal的属性方法
//     this.name = name || 'tom'
// }
// var cat = new Cat()
// console.log(cat.name)  // tom
// console.log(cat.sleep())  // tom睡着了
// console.log(cat instanceof Cat)  // true
// console.log(cat instanceof Animal)  //false


// 组合继承
// function Cat(name){
//     Animal.call(this) 
//     this.name = name || 'tom'
// }
// Cat.prototype = new Animal()
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)  // true
// console.log(cat instanceof Animal)  //true

//寄生组合继承
function Cat(name){
    Animal.call(this) 
    this.name = name || 'tom'
}
(function(){
    // 创建一个没有实例方法的类 不具名函数  没有构造函数
    var Super = function(){}
    Super.prototype = Animal.prototype
    Cat.prototype = new Super()
})()
var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Cat) //true
console.log(cat instanceof Animal)  //true