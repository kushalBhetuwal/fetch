const array =[{name:"kushal", age:14}, {name:"sharan", age:24}]

const filter = array.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes('')
})

console.log(filter)