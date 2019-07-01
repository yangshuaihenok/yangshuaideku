function TreeNode(val){
    this.val = val;
    this.right = this.left = null;
}

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// 层序遍历
function levelOrderTraversal(root){
    if(!root) return [];
    const items = [];     // 存放所有的节点,返回的结果
    const queue = [root,null]; // 当前所在处理层的队列
    let levelNodes = [];  // 每层的节点

    while(queue.length>0){
        const t = queue.shift(); // shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
                                 // queue[null]  
        if(t){
            //真实的节点
            levelNodes.push(t.val); // [3]
            if(t.left){
                queue.push(t.left); // [9]
            }
            if(t.right){
                queue.push(t.right); // [9,20]
            }
        }else{
            // null,层与层的分界符
            items.push(levelNodes);
            levelNodes = [];
            if(queue.length>0){
                queue.push(null)
            }
        }
    }
}