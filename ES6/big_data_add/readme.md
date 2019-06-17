- 内存 
  LRU 管理内存
  binary search 内存的优化
  内存溢出

- 大数相加
    Infinity (数值类型)，怎么确定一个数，
    用数值无法表达，就用字符串表达

    - 如果不用字符串
      数据结构加算法
      在内存之中分配空间 每位独立分，地址 val ，next=》下一个节点的地址
      节点 一段不连续的空间(new n次) 将大数的每一位用链表储存
      - 找到了储存大数的数据结构 线性表 由节点构成  不连续ListNode{val:,next:}
      - travel 这个线性表 遍历头节点  while(node){ node = node.next ;}
      - 初始化
        构建节点 指针

