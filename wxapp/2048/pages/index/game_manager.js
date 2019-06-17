const Grid = require("./grid.js");

function GameManager(size,startTitles=2){
  this.size = size;
  this.startTitles = startTitles;
}

GameManager.prototype={
  setup:function(){
    this.grid=new Grid(this.size);
    this.addStartTitles();
    return this.grid.cells;
  },
  addStartTitles(){
    for(let tile=0;tile<this.startTitles;tile++){
      this.addRandomTitles();
    }
  },
  addRandomTitles(){
    if(this.grid.cellAvailable()){
      const value = Math.random() < 0.9 ? 2 : 4;
      //随机位置
      const cell = this.grid.randomAvailableCell();
      const tile = {
        x:cell.x,
        y:cell.y,
        value:value
      }
      //插入
      this.grid.insertTile(tile);
    }
    
  }
}

module.exports = GameManager;