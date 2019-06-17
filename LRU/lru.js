// 不用每次都去硬盘找  直接在内存缓存
var LRUCache = function(capacity){
    this.capacity = capacity;
    this.obj = {};
    this.arr = [];
}
LRUCache.prototype.get=function(key){

}
LRUCache.prototype.set=function(key,value){
    if(this.obj[key]){
        this.obj[key] = value;
        this.arr.unshift(key);
    }
    // 有key，返回
    // 没有，两种可能
    // 内存满了 内存还有
}