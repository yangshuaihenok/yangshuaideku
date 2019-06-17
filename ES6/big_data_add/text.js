// let str = '123';
// let str2 = '456';
// console.log(+str+(+str2));

var num1 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
var num2 = '99958321098765432102222223333211112222222222222222222';

function addTwoNumbers(num1,num2){
    // 字符串不能相加
    // 新的数据结构方法 [], 储存每一位的相加，进位
    //
    let carry = 0,  //是否有进位
    l1 = num1.length, //数的长度
    l2 = num2.length,
    arr = [];  //位相加的储存

    var max = Math.max(l1,l2);
    for(let i = l1-1,j=l2-1,n=max-1;n>=0;n--,i--,j--){
        var sum = (+num1[i]||0)+((+num2[j])||0) + carry;
        if(sum>=10){
            carry = 1;
            arr.push(sum-10);
        }else{
            carry=0;
            arr.push(sum);
        }
    }
    if(carry>0){
        arr.push(carry);
    }

    return arr.reverse().join('');//push 将数从后面放入arr ，reverse将数组arr倒置
}
console.log(addTwoNumbers(num1,num2));