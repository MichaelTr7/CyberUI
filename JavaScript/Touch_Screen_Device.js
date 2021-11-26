
function Detect_Touch_Screen(){  
  let Is_Touch_Screen = window.matchMedia("(pointer: coarse)").matches;
  if(Is_Touch_Screen) {
    console.log("Touch screen detected");
    let Prompt = document.getElementById("Prompt");
    Prompt.innerHTML = "Tap Letters to Unlock";
  }
  let Keyboard_Keys = document.getElementsByClassName("Keyboard_Keys");
  for(Index = 0; Index < Keyboard_Keys.length; Index++){
    Keyboard_Keys[Index].addEventListener("mousedown",Key_Tapped);
  }  
}

function Key_Tapped(){
  Target_Key = this;
  Target_Key.classList.add("Key_Toggled");
  Target_Key.children[0].style.color = "white";
  Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
  let Keyboard_Keys = document.getElementsByClassName("Keyboard_Keys");
  Count = 0; 
  for(Index = 0; Index < Keyboard_Keys.length; Index++){
    if(Keyboard_Keys[Index].classList.contains("Key_Toggled")){
      Count = Count + 1
    }
  }
  if(Count == 10){
    Show_Unlock_Slider();
  }
}




