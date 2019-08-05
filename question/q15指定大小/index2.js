function findK (nums,k){
    const arr = quick_sort(nums);
    return arr[k-1];
}
function quick_sort(arr){
    if(arr.length<=1) return arr;
    var basse = Math.round(arr.length/2),
        left = [],
        right = [],
        arrS = arr.splice(basse,1)[0]; //切出来一个 
        
    for(let i=0 ; i<arr.length ;i++){
        if(arr[i]>arrS){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quick_sort(left).concat([arrS],quick_sort(right))
}
console.log(findK([1,3,2,4,7],2))
a=[1,2,3,4,5]
console.log(a.splice(1,1)[0])
console.log(a)