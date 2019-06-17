function binary_search(arr,data){
    // 不停地二分
    //不能再分就停止 min>max
    let min = 0,
        max = arr.length-1,
        mid;
    while(min<=max){
        // mid = parseInt((max + min)/2);
        // mid = parseInt(max>>1)   //需要移位的数字 << 移位的次数  (符号是移位的方向)
        mid = min + parseInt((max - min)/2);//向下取整
        if(arr[mid]>data){
            //取左
            max = mid-1;
        }else if(arr[mid]<data){
            min = mid + 1;
        }else{
            return mid;
        }
    }
    return -1;
}
// console.log(binary_search([1,4,7,9,23,34],9));

let arr = [];
for(let i = 0;i<100000000;i++){
    arr.push(i);
}
console.log(binary_search(arr,2019));