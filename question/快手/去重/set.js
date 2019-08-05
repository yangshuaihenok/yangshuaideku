var arr = [1,2,2,1,'1'];
function unique(arr){
    // return [...new Set(arr)];
    const seen = new Map();
    return arr.filters((a) => !seen.has(a) && seen.set(a,1));
}