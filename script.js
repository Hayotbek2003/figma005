let panel = document.querySelector(".panel")
function menuFunc(state){
   if(state == "click"){
    panel.style.display = "block"
   }
   else if(state == "cencel"){
    panel.style.display = "none"
   }
}