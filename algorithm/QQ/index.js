// 数组是最廉价的数据结构
let enc_qq = [1,2,3,4,5,6,7,8,9],
    qq=[];//真正的
    head=0;
    tail=9;
           //移除第一个数
    while(head<tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail]=enc_qq[head];
    head++;
    tail++;
    }
    //enc_qq.shift();
    console.log(qq);
    

// enc_qq.push(0);插入最后一个
// console.log(enc_qq);


// enc_qq.pop();移除最后一个
// console.log(enc_qq);

// enc_qq.unshift(0);插入第一个
// console.log(enc_qq);

// enc_qq.shift();移除第一个
// console.log(enc_qq);



// 字符串可以相当数组
// console.log(enc_qq.length,enc_qq[0]);



