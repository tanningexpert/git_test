
////window.addEventListener("DOMContentLoaded", (event) => {
    
//DISPLAY ORDER NOW BUTTON WHEN USER HOVERS OVER DIV
//CREATE VARIABLE AND LINK TO DOM ELEMENT
const orderBtns = document.getElementsByClassName("component-cta-btn");
const gridDivs = document.getElementsByClassName("pokeyourway-item");
const menuImages = document.getElementsByClassName("pokeyourway-item-image")
console.log(orderBtns);
console.log("gridDivs", gridDivs);
console.log(menuImages)

//FOR EACH ELEMENT ADD EVENT LISTENER FOR HOVER; 
//array1.forEach(element => console.log(element));
//document.addEventListener("click", myFunction);
console.log("gridDivs.length", gridDivs.length)
for (let i = 0; i < gridDivs.length; i++) {
    //console.log(i)
    //console.log("gridDivs[i]", gridDivs[i])

    gridDivs[i].addEventListener("mouseover",() =>{
       orderBtns[i].style.display = "inline-block";
       menuImages[i].style.width = "110%"
       menuImages[i].style.height = "auto"

    })
    gridDivs[i].addEventListener("mouseout",() =>{
        orderBtns[i].style.display = "none";
        menuImages[i].style.width = "90%"
        menuImages[i].style.height = "auto"

     })
};



//gridDiv[0].addEventListener("mouseover", () => {
//});
//CHANGE ELEMENT DISPLAY TO VISIBLE 


//});