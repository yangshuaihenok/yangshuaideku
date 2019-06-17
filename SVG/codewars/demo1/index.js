function generateHashtag(str){
    return (str.length>140||str==='')?flase:'#'+str.split(' ').map(capitalize).join(' ');

    // if(str.length>140){
    //     return false;
    // }
    // if(str===''){
    //     return false;
    // }
    // str='#'+str;
    //     return str;
    
}
function capitalize(w){
    console.log(w);
    return w.charAt(0).toUpperCase()+w.slice(1);    
}

console.log(generateHashtag('How are you?'));