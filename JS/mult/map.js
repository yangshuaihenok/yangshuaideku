const googleMap = {
    show(){
        console.log('开始渲染谷歌地图');
    }
}
const baiduMap = {
    show(){
        console.log('开始渲染百度地图');
    }
}
const gaodeMap = {
    show(){
        console.log('开始渲染高德地图');
    }
}
const renderMap =(map)=>{
    //检测 map
    if(map.show && typeof map.show ==='function'){
        map.show();
    }

}

renderMap(baiduMap);
renderMap(googleMap);