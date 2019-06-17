// S 5
// A 3
// B 2
// C 1
// D 

let stratigies={
    'S':salary=>salary*5,
    'A':salary=>salary*3,
    'B':salary=>salary*2,
    'C':salary=>salary*1,
    'D':salary=>salary,
    // 'S':function(salary){
    //     return salary*5;
    // },
    // 'A':function(salary){
    //     return salary*3;
    // },
    // 'B':function(salary){
    //     return salary*2;
    // },
    // 'C':function(salary){
    //     return salary*1;
    // },
    // 'D':function(salary){
    //     return salary;
    // }
}

function calculate(level,salary){
    return stratigies[level](salary);
    // if(level==='S'){
    //     return salary*5;
    // }else if(level==='A'){
    //     return salary*3;
    // }else if(level==='B'){
    //     return salary*2;
    // }else if(level==='C'){
    //     return salary*1;
    // }else if(level==='D'){
    //     return salary*0;
    // }
}
console.log(calculate('S',10000))