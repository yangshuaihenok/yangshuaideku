构造函数 constructor
原型     prototype
实例     instance


JS 没有类，只有对象，都是通过原型得到

通过构造函数Person 生成了person这个实例，
同时我们在Person的原型Person.prototype上定义了getName方法

构造函数运行 new Person() this->新的实例，空对象Person{}.name

实例怎么拿到原型对象的方法或属性？
1. 任何对象都有__proto__私有属性，这个对象的出处是哪？实例和类之间没有血缘关系，
2. 构造函数有prototype属性
3. 原型对象上有constructor属性指向构造函数

JS 面向对象是基于原型 