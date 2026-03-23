function sortNames(namesArray){
    return namesArray.sort((a,b)=> b.localeCompare(a))
}

let names = ["Alice" , "Dwipraj" , "Bob"]

console.log(sortNames(names))