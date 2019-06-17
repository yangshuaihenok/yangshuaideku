- 链表linklist 指针

- 算法
- 数据结构  链表
- webpack 运行

给定一个链表（实现一个），和一个特定值x,对链表进行分隔，使所有小于x的节点都在大于或等于x的节点之前,保证原来的顺序
Linklist (n)LinklistNode 
存储数据可以不连续 
head->next->nodel->..node->tail->next=null

head = 1->4->3->2->5->2   x=3

1->2->2->4->3->5 符合条件就让尾指针指向满足的头指针 不符合就跳过 next->null

利用while循环