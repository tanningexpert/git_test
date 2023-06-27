//DISPLAY ORDER NOW BUTTON WHEN USER HOVERS OVER DIV
//CREATE VARIABLE AND LINK TO DOM ELEMENT
const orderBtn = document.getElementsByClassName("orderBtn");
const gridDiv = document.getElementsByClassName("imageWrapper");
console.log(orderBtn);
//ADD EVENT LISTENER FOR HOVER; document.addEventListener("click", myFunction);

gridDiv[0].addEventListener("mouseover", () => {
    orderBtn.style.display = "block";
});
//CHANGE ELEMENT DISPLAY TO VISIBLE 
