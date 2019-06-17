function Grid(size){
  this.size = size;
  this.cells = this.empty();
}
Grid.prototype = {
  //返回一个空的矩阵
  empty:function(){
    let cells = [];
    for(let i = 0;i<this.size;i++){
      cells[i]=[];
      for(let j=0;j<this.size;j++){
        cells[i].push(null);
      }
    }
    return cells;
  },
  //找出所有的空位置
  available(){
    var cells = [];
    for(let i=0;i<this.size;i++){
      for(let j=0;j<this.size;j++){
        if(!this.cells[i][j]){
          cells.push({
            x:i,
            y:j
          })
        }
      }
    }
    return cells;
  },
  cellAvailable(){
    return !!this.available().length;
  },
  //随机挑选位置
  randomAvailableCell(){
    const cells = this.available();
    return cells[Math.floor(Math.random()*cells.length)]
  },
  insertTile(tile){
    this.cells[tile.x][tile.y]=tile;
  }
}
//common JS
module.exports = Grid;

//ecm
//export default
