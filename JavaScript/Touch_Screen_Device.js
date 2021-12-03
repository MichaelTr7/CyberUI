
function Detect_Touch_Screen(){  
  let Is_Touch_Screen = window.matchMedia("(pointer: coarse)").matches;
  if(Is_Touch_Screen) {
    console.log("Touch screen detected");
    let Prompt = document.getElementById("Prompt");
    Prompt.innerHTML = "Tap Letters to Unlock";
  }else{
    // console.log("Not a touch screen");  
  }
  

}






