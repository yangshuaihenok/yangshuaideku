function bubbleSort (arr){
    var len = arr.length;
    var temp;
    for (var i = 0; i < len; i++){
        for(var j = 0; j < len-1-i; j++){
            if(arr[j+1] < arr[j]){
                
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort([5,1,3,8,9,4,5]))