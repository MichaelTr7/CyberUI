
var Key_Phrase = ["c","y","b","e","r","t","r","u","c","k"].reverse();
var Current_Letter = "c";
var Character_Index = 0; 

function Keypad_Listening(){
  Current_Letter = Key_Phrase.pop();
  // Listen for CYBERTRUCK characters  
  document.addEventListener("keydown",Hot_Key_Pressed);

}

function Hot_Key_Pressed(e){
    if(Key_Phrase != ""){
      let Key = e.key;
      if(Key == Current_Letter || Key == Current_Letter.toUpperCase()){
          Current_Letter = Key_Phrase.pop();
          let Keyboard = document.getElementsByClassName("Keyboard_Keys");
          let Target_Key = Keyboard[Character_Index];
          Highlight_Key(Target_Key);
          Character_Index++;
        }
      }else{
        console.log("Unlock it");
        let Keyboard = document.getElementsByClassName("Keyboard_Keys");
        let Target_Key = Keyboard[Keyboard.length - 1];
        console.log(Target_Key);
        Target_Key.style.backgroundColor = "rgba(255,255,255,0.9)";
        Target_Key.children[0].style.color = "rgba(255,255,255,0.9)";
        Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
        Highlight_Key(Target_Key);
        let Prompt_Label = document.getElementById("Prompt");
        Prompt_Label.classList.add("Prompt_Vanish");
      
        let Slide_To_Unlock_Switch = document.getElementById("Slide_Cavity_Background");
        Slide_To_Unlock_Switch.style.top = "calc(100% - var(--Height) - var(--Bottom_Spacer) + var(--Padding)/2)";
        Slide_To_Unlock_Switch.style.opacity = "1";
        let Slider_Switch = document.getElementById("Slide_Cavity");
        // Slider_Switch.style.top = "calc(100% - var(--Height) - var(--Bottom_Spacer))";
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

      }
}

function Highlight_Key(Target_Key){
  console.log(Target_Key);
  Target_Key.style.backgroundColor = "rgba(255,255,255,0.9)";
  Target_Key.children[0].style.color = "rgba(255,255,255,0.9)";
  Target_Key.children[0].style.backgroundColor = "rgb(70,70,70)";
}





