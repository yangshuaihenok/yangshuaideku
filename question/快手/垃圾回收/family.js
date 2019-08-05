function marry(man,woman){
    woman.husban = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
}
let family = marry({
    name: 'yang'
},{
    name:'shuai'
})

//         global 
//            |
//         Object(family)
//      |                  |
// Object(father) <=>  Object(mother)