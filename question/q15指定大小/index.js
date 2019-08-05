// [1,4,56,34,22]
var arr = [1,4,56,34,22]
//1
function aa(a,b){
    return b-a
}
console.log(arr.sort(aa)[2-1])

//2
function findK (nums,k){
    return nums.sort((a,b)=>b-a)[k-1]
}
console.log(findK(arr,2))