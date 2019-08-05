// 一个页面从输入url到加载显示完成 这个过程有什么？

// 1、浏览器的地址栏输入URL并按下回车。
// 2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
// 3、DNS解析URL对应的IP。
// 4、根据IP建立TCP连接（三次握手）。
// 5、HTTP发起请求。
// 6、服务器处理请求，浏览器接收HTTP响应。
// 7、渲染页面，构建DOM树。
// 8、关闭TCP连接（四次挥手）。

const a = {
    b:1
}
function B(){
    console.log('a变了',a.b)
}

function bindData(){
    // Object.keys() 会返回一个由一个给定对象的自身可枚举属性的数组
    Object.keys(a).map(key => {
        let v = a[key]
        Object.defineProperty(a,key,{ // defineProperty直接在一个对象上新增属性或者修改原有属性并返回最新的对象
            get(){ // 读取属性时调用的方法
                console.log('正在读取a的值');
                return v
            },
            set(newa){ // 写入属性时调用的方法
                v = newa;
                B();
            }
        })
    })
}
bindData();
a.b=10;