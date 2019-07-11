function bubbleSort (arr){
    var len = arr.length;
    var minIndex,temp;
    // for (let i=0;i<len-1;i++){
    //     for(let j = i+1;j<len;j++){
    //         if(arr[i]<arr[j]){
    //             let a=arr[j];
    //             arr[j]=arr[i];
    //             arr[i]=a;
    //         }
    //     }
    // }
    for (let i=0;i<len-1;i++){
        minIndex=i;
        for(let j = i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr;
}
console.log(bubbleSort([5,1,3,8,9,4,5]))

