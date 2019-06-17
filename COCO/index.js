//右移运算符
//二进制表达
// console.log(11>>1);
// console.log(11<<1);
//通过位移运算，做到/2 或者*2 的操作（看位移了几位）

// N挂香蕉 每挂数量不一样  
// 有N个数 每个数大小不一样 
// [3,5,7,9,14]   H小时吃完  每小时吃几根。 
//   限定一小时吃mid根 一次只吃一把 一小时最少吃几根  可以在H小时吃完

/**
 * @desc 最少吃香蕉的速度 在规定的时间吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function minEatingSpeed(piles,H){
    let lo = 1;
    hi = Math.max(...piles);
    while(lo<=hi){   // 1, 11
        // lo++;
        let mid =lo+((hi-lo) >> 1)//
        if(canEatAllBananas(piles,H,mid)){
            hi = mid -1;
        }else{
            lo=mid+1;
        }
    }
    return lo;
}
/**
 * @desc 判断能否吃完
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles,H,mid){
    let h = 0
    for (let pile of piles){
        h +=Math.ceil(pile/mid);//向上取整 吃完总把数所需要的时间
    }
    return h<=H;
}

let piles = [3,6,7,11];
// console.log(canEatAllBananas(piles, 8, 6));
console.log(minEatingSpeed([3, 6, 7, 11], 8));

// - 目标 H小时内吃完香蕉
// - 最小的数