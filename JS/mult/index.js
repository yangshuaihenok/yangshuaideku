// 缓存计算结果 不要重复计算
let cache = {};
function mult (){
    // 参数数量是不定的
    let a=1;
    let key = Array.prototype.join.call(arguments,',');
    if(cache[key]){
        console.log('缓存中取');
        return cache[key];
    }
    for (var i=0,l=arguments.length;i<l;i++){
        a = a*arguments[i];//函数传进的参数以数组的形式存在arguments
    }
    cache[key] = a ;
    return a;
      
}
console.log(mult(1,2,3));
console.log(mult(1,2,3));
