function err(msg){
    throw new Error(msg)
}

function num(a=err('第一个空'),b=err('第二个空')){
    return a+b;
}
console.log(num(1,2));    //3
console.log(num(undefined,2));    //报错  第一个为空
console.log(num(2));    //报错  第二个为空
//不允许改写函数体