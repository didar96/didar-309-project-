


window.onload=function(){
    const button = document.querySelector("#myButton")
    button.addEventListener('click', makeNote);
  }



function makeNote(e) {
    e.preventDefault();
    
    Timestamp().displayNote("#myText", "#displayItems", "#myVideo");
}