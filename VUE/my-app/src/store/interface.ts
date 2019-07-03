// 约束一个对象 必须拥有哪个属性或者方法
export interface movie{
    name:string;
    title:string;
    id:string;
}
export interface State {
    movieList: movie[]
}

// let numArr:number[] = [1,2,3];