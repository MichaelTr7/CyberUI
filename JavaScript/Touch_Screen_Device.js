
function Detect_Touch_Screen(){  
  let Is_Touch_Screen = window.matchMedia("(pointer: coarse)").matches;
  if(Is_Touch_Screen) {
    console.log("Touch screen detected");
    let Prompt = document.getElementById("Prompt");
    Prompt.innerHTML = "Tap Letters to Unlock";
    let Keyboard_Keys = document.getElementsByClassName('Keyboard_Keys');
    for(Index = 0; Index < Keyboard_Keys.length; Index++){
      Keyboard_Keys[Index].style.transition = "0s";
    }
  }else{
    console.log("Not a touch screen"); 
  }
  

}






