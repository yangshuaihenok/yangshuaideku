- 二分查找 binary_search
    加速查找
    有序数组，折半排序，查找的时间复杂度从N->log2 N.
    无序数组要先 .sort（） 

- JS heap out of memory
    一亿数相加  CPU物理空间不够
    for没有问题
    ---- 取中间值时，一亿和1先相加得一亿零一再除二，五千万和一亿相加得一亿五千万在除二....
         此时越后面相加时得到的数越大 下标越大 CPU符合越大，
         - mid = parseInt(max>>1)   //需要移位的数字 << 移位的次数  (符号是移位的方向)
         - mid = min + parseInt((max - min)/2);//取整