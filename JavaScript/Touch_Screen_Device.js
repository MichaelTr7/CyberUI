
function Detect_Touch_Screen(){  
  if(window.matchMedia("(pointer: coarse)").matches) {
    // touchscreen
    console.log("Touch screen detected");
  }
  
}