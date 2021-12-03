
var Key_Phrase = ["c","y","b","e","r","t","r","u","c","k"].reverse();
var Current_Letter = "c";
var Character_Index = 0; 

function Disable_Touch(){
  let Touchable_Keyboard_Keys = document.getElementsByClassName("Keyboard_Keys");
  for(Index = 0; Index < Touchable_Keyboard_Keys.length; Index++){
    Touchable_Keyboard_Keys[Index].style.pointerEvents = "none";
    Touchable_Keyboard_Keys[Index].children[0].style.pointerEvents = "none";
  }
}

function Hot_Key_Pressed(e){
console.log("Typed");
let Typed_Letter = String(e.key).toLowerCase();
let Keyboard = document.getElementsByClassName("Keyboard_Keys");
var Scanned_Letter = ""
if(Typed_Letter == Current_Letter){
  for(Index = 0; Index < Keyboard.length; Index++){
    Scanned_Letter = Keyboard[Index].children[0].innerHTML.toLowerCase();
    if(!Keyboard[Index].classList.contains("Key_Toggled")){
    if(Scanned_Letter == Current_Letter){
      let Target_Key = Keyboard[Index];
      Target_Key.classList.add("Key_Toggled");
      Target_Key.children[0].style.color = "white";
      Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
      break;
    }
  }
  }
}
Toggle_Count = Update_Key_Phrase();
if(Toggle_Count == 0){
  Show_Unlock_Slider();
}
}

function Hot_Key_Clicked(){
console.log("Touched");
let Target_Key = this;
Target_Key.classList.add("Key_Toggled");
Target_Key.children[0].style.color = "white";
Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
Toggle_Count = Update_Key_Phrase();
if(Toggle_Count == 0){
  Show_Unlock_Slider();
}
}

function Update_Key_Phrase(){
  let Updated_Phrase = [];
  let Keyboard = document.getElementsByClassName("Keyboard_Keys");
  let Toggle_Count = 0;
  for(Index = 0; Index < Keyboard.length; Index++){
    if(!Keyboard[Index].classList.contains("Key_Toggled")){      
      Updated_Phrase.push(String(Keyboard[Index].children[0].innerHTML.toLowerCase()));
      Toggle_Count = Toggle_Count + 1;
    }
  }
Key_Phrase = Updated_Phrase.reverse();
Current_Letter = Key_Phrase.pop(); 
return parseInt(Toggle_Count);
}


function Keypad_Listening(){
  Current_Letter = Key_Phrase.pop();
  document.addEventListener("keydown",Hot_Key_Pressed);
  let Keyboard_Caps = document.getElementsByClassName("Keyboard_Keys");
  for(Index = 0; Index < Keyboard_Caps.length; Index++){
    Keyboard_Caps[Index].addEventListener("touchstart",Hot_Key_Clicked, false);
  }
  
}

function Highlight_Key(Target_Key){
  Target_Key.classList.add("Key_Toggled");
  Target_Key.children[0].style.color = "rgba(255,255,255,0.9)";
  Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
}


function Show_Unlock_Slider(){
  let Keyboard = document.getElementsByClassName("Keyboard_Keys");
  let Target_Key = Keyboard[Keyboard.length - 1];
  Target_Key.classList.add("Key_Toggled");
  Target_Key.children[0].style.color = "rgba(255,255,255,0.9)";
  Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
  Highlight_Key(Target_Key);
  let Prompt_Label = document.getElementById("Prompt");
  Prompt_Label.classList.add("Prompt_Vanish");

  let Slide_To_Unlock_Switch = document.getElementById("Slide_Cavity_Background");
  Slide_To_Unlock_Switch.style.top = "calc(100% - var(--Height) - var(--Bottom_Spacer) + var(--Padding)/2)";
  Slide_To_Unlock_Switch.style.opacity = "1";
  let Slider_Switch = document.getElementById("Slide_Cavity");
  Slider_Switch.style.opacity = "1";
  setTimeout(function () {
    Slider_Switch.style.transition = "0s";
    Slide_To_Unlock_Switch.style.transition = "0s";
  }, 1000);
  
  setTimeout(function () {
    var Keyboard_Keys = document.getElementsByClassName("Keyboard_Keys");
    Keyboard_Keys[0].classList.add("Fade_Down_0");
    Keyboard_Keys[1].classList.add("Fade_Down_1");
    Keyboard_Keys[2].classList.add("Fade_Down_2");
    Keyboard_Keys[3].classList.add("Fade_Down_3");
    Keyboard_Keys[4].classList.add("Fade_Down_4");
    Keyboard_Keys[5].classList.add("Fade_Down_5");
    Keyboard_Keys[6].classList.add("Fade_Down_6");
    Keyboard_Keys[7].classList.add("Fade_Down_7");
    Keyboard_Keys[8].classList.add("Fade_Down_8");
    Keyboard_Keys[9].classList.add("Fade_Down_9");
  }, 50);
  document.removeEventListener("keydown",Hot_Key_Pressed);
  document.getElementById("Cybertruck_Model_Container").style.opacity = 1;
}


