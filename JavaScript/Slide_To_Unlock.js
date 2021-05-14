
function Slide_To_Unlock_Callback(){
  document.getElementById('Slide_Cavity').addEventListener("input",Check_Full_Slide);
  document.getElementById('Slide_Cavity').addEventListener("change",Snap_Back);
  
}

function Snap_Back(){
  if(parseInt(this.value) < 100){
      this.value = 0;
      var Root = document.querySelector(':root');
      this.style.backgroundColor = getComputedStyle(Root).getPropertyValue('--Secondary_Gray');
  }else{
    console.log("UNLOCK");
    let Unlock_Modal = document.getElementById('Unlock_Modal');
    Unlock_Modal.classList.add('Unlock_It');
    setTimeout(function () {
      Unlock_Modal.remove();
    }, 1000);
  }
}

function Check_Full_Slide(){
  if(parseInt(this.value) ==  100){
    this.style.backgroundColor = "white";
  }else{
    var Root = document.querySelector(':root');
    this.style.backgroundColor = getComputedStyle(Root).getPropertyValue('--Secondary_Gray');
  }
}

