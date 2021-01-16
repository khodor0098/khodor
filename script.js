const serviceItems = document.querySelector(".service-items");
  const popup = document.querySelector(".popupbox")
  const popupCloseBtn = popup.querySelector(".btn-popup-close-btn");
  const popupCloseIcon = popup.querySelector(".popup-close-icon");

  serviceItems.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h2 = item.querySelector("h2").innerHTML;
       const readMoreCont = item.querySelector(".readmore").innerHTML;
       popup.querySelector("h1").innerHTML = h2;
       popup.querySelector(".popupbody").innerHTML = readMoreCont;
       popupBox();
    }

  })

  popupCloseBtn.addEventListener("click", popupBox);
  popupCloseIcon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }