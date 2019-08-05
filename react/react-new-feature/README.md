## 
    以前 async mode 现在 concurrent mode 
    目的：让react整体渲染有一个优先级的排比
    1. js 是单线程的 
    2. 浏览器是多线程的
        ui 渲染线程
        js 解析
        HTTP
    3. js 线程和 ui 是互斥的，js可以操作dom
    4. 卡顿，js执行占据了很大的空间，导致ui得不到响应
