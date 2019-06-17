// const nums=['c','a','z','y'];
const nums2=[2,54,25,16];
// console.log(nums.sort());
console.log(nums2.sort(function(a,b){
    // console.log(a,b,a-b>0);
    return a-b;
    // console.log(a,b,'--------');
}));
