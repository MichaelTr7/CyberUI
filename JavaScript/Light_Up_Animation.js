

function Light_Up_Animation_Callbacks(){
  let Drive_Tabs = document.getElementsByClassName('Drive_Selectors');
  let Menu_Tabs = document.getElementsByClassName('Tabs');
  let Sidebar_Tabs = document.getElementsByClassName('Sidebar_Icons');
  let Light_Tabs = document.getElementsByClassName('Lights_Buttons');
  let Weight_Tabs = document.getElementsByClassName('Weight_Buttons');
  let Tonneau_Tabs = document.getElementsByClassName('Tonneau_Buttons');
  let Light_Toggle_Buttons = document.getElementsByClassName('Lights_Buttons');
  let Weight_Toggle_Buttons = document.getElementsByClassName('Weight_Buttons');
  let Independent_Light_Toggles = document.getElementsByClassName('Independent_Light_Toggles');
  
  for(Index = 0; Index < Drive_Tabs.length; Index++){
    Drive_Tabs[Index].addEventListener("click",Drive_Tab_Clicked);
  }
  
  for(Index = 0; Index < Menu_Tabs.length; Index++){
    Menu_Tabs[Index].addEventListener("click",Menu_Tab_Clicked);
  }

  for(Index = 0; Index < Sidebar_Tabs.length; Index++){
    Sidebar_Tabs[Index].addEventListener("click",Sidebar_Tab_Clicked);
  }

  for(Index = 0; Index < Light_Tabs.length; Index++){
    Light_Tabs[Index].addEventListener("click",Light_Tab_Clicked);
  }

  for(Index = 0; Index < Weight_Tabs.length; Index++){
    Weight_Tabs[Index].addEventListener("click",Weight_Tab_Clicked);
  }
  
  for(Index = 0; Index < Tonneau_Tabs.length; Index++){
    Tonneau_Tabs[Index].addEventListener("click",Tonneau_Tab_Clicked);
  }
  
  for(Index = 0; Index < Light_Toggle_Buttons.length; Index++){
    Light_Toggle_Buttons[Index].addEventListener("click",Toggle_Car_Lights);
  }
  
  for(Index = 0; Index < Weight_Toggle_Buttons.length; Index++){
    Weight_Toggle_Buttons[Index].addEventListener("click",Toggle_Car_Weight);
  }
  
  for(Index = 0; Index < Independent_Light_Toggles.length; Index++){
    Independent_Light_Toggles[Index].addEventListener("click",Toggle_Light_Function);
  }
  
  /*Initial States*/
  Drive_Tabs[3].classList.add('Highlight_Button');
  Menu_Tabs[0].classList.add('Highlight_Button');
  Sidebar_Tabs[1].classList.add('Highlight_Button');
  Light_Tabs[1].classList.add('Highlight_Button');
  Weight_Tabs[1].classList.add('Highlight_Button');
}

function Drive_Tab_Clicked(){
  let Drive_Tabs = document.getElementsByClassName('Drive_Selectors');
  for(Index = 0; Index < Drive_Tabs.length; Index++){
    Drive_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button');
}

function Menu_Tab_Clicked(){
  let Menu_Tabs = document.getElementsByClassName('Tabs');
  for(Index = 0; Index < Menu_Tabs.length; Index++){
    Menu_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button'); 
}

function Sidebar_Tab_Clicked(){
  let Sidebar_Tabs = document.getElementsByClassName('Sidebar_Icons');
  for(Index = 0; Index < Sidebar_Tabs.length; Index++){
    Sidebar_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button');     
}

function Light_Tab_Clicked(){
  let Menu_Tabs = document.getElementsByClassName('Lights_Buttons');
  for(Index = 0; Index < Menu_Tabs.length; Index++){
    Menu_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button');     
}

function Weight_Tab_Clicked(){
  let Weight_Tabs = document.getElementsByClassName('Weight_Buttons');
  for(Index = 0; Index < Weight_Tabs.length; Index++){
    Weight_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button');     
}

function Tonneau_Tab_Clicked(){
  let Tonneau_Tabs = document.getElementsByClassName('Tonneau_Buttons');
  for(Index = 0; Index < Tonneau_Tabs.length; Index++){
    Tonneau_Tabs[Index].classList.remove('Highlight_Button');
  }
  this.classList.toggle('Highlight_Button');     
}

function Toggle_Car_Lights(){
  let Functions = ["AUTO","ON","OFF","BED"];
  let Index = parseInt(String(this.id).split("Lights_Button_")[1]) - 1;
  let Light_Function = Functions[Index];
  let Front_Headlights = document.getElementsByClassName('Headlights')[0];
    switch(Light_Function) {
    case "AUTO":
      break;
    case "ON":
      break;
    case "OFF":
      // Front_Headlights.style.filter = "blur(0vw);";
      // Front_Headlights.style.transform = "translateY(-100vh)";
      break;
    case "BED":
      break;  
    default:  
  }
}

function Toggle_Car_Weight(){
  let Functions = ["LOW","STANDARD","HIGH"];
  let Index = parseInt(String(this.id).split("Lights_Button_")[1]) - 1;
  let Weight_Function = Functions[Index];
}

function Toggle_Light_Function(){
}










