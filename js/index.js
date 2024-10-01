//Write your Javascript code here
console.log("Shoppinglist")
document.getElementById("addButton").addEventListener('click',addGoods);

let elementInput = document.getElementById('newGoods');

function addGoods(e){
    console.log("In the addgoods function");
    let inputText = (elementInput).value;
    console.log("the input text is : " + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy");
    let newLi = document.createElement('li');
    let newText = document.createTextNode(inputText)
    newLi.appendChild(newText);
    newLi.setAttribute('class','unhealthy');

    listUnhealthy.appendChild(newLi);
}

let listUnhealthy = document.getElementById("listUnhealthy");

let newelement = CreateNewElement("hot","Five","Banan")
listUnhealthy.append(newelement)

//
function CreateNewElement(classvalue, idvalue, content){

    let newLielement = document.createElement("li")
    newLielement.setAttribute("class",classvalue)
    newLielement.setAttribute("id",idvalue)

    let newTextelement = document.createTextNode(content)

    newLielement.append(newTextelement)

    return newLielement

}


