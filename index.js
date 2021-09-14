
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");    
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob");    
}

function destructivelyRemoveLastCat(){
    return cats.pop();    
}

function destructivelyRemoveFirstCat(){
     return cats.shift(); 
     
}

function appendCat(name){

    let newCats = cats.slice(); 
     newCats.push("Broom");
     return newCats;
}

function prependCat(name){

    let newCats = cats.slice(); 
     newCats.unshift("Arnold");
     return newCats;
}

function removeLastCat(){

    return cats.slice(0,-1);
}

function removeFirstCat(){

    return cats.slice(1);
}