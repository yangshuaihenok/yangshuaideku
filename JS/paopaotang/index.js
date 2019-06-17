//多个玩家
//类
//JSON object
//首字母大写的函数 构造函数
//一个函数首字母大写约束，区别于普通函数
//运行的方式 new ，构造函数
function Player(name){
    console.log(this);
    this.name=name;
    this.enemy=null;
}
Player.prototype.win=function(){
    console.log(this.name+"win");
}
Player.prototype.lose=function(){
    console.log(this.name+"lose");
}
// Player();
//将类实例化 类是抽象的概念， 对象可以new出来
var player1=new Player("皮蛋");
console.log(player1.name+"上线了");
var player2=new Player("鸡蛋");
console.log(player2.name+"上线");
 
player1.enemy=player2;
player2.enemy=player1;

player1.win();
player2.lose();
// console.log(player1.name);

// console.log(player2.name); 