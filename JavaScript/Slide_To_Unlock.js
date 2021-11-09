
function Slide_To_Unlock_Callback(){
  document.getElementById('Slide_Cavity').value = "0";
  document.getElementById('Slide_Cavity').addEventListener("input",Check_Full_Slide);
  document.getElementById('Slide_Cavity').addEventListener("change",Snap_Back);
  let Unlock_Slider = document.getElementById("Slide_Cavity_Background");
  Unlock_Slider.classList.add("Hidden");
}

function Snap_Back(){
  let Slide_To_Unlock_Label = document.getElementById("Slide_To_Unlock_Label");
  Slide_To_Unlock_Label.classList.remove("Fade_In_Snap_Animation");
  void Slide_To_Unlock_Label.offsetWidth;
  if(parseInt(this.value) < 100){
      this.value = 0;
      var Root = document.querySelector(':root');
      this.style.backgroundColor = "transparent";
      Slide_To_Unlock_Label.classList.add("Fade_In_Snap_Animation");
  }else{
    let Unlock_Modal = document.getElementById('Unlock_Modal');
    Unlock_Modal.classList.add('Unlock_It');
    setTimeout(function () {
      Unlock_Modal.remove();
      let Slider = document.getElementById('Slide_Cavity');
    }, 1000);
  }
}

function Check_Full_Slide(){
  let Slide_To_Unlock_Label = document.getElementById("Slide_To_Unlock_Label");
  Slide_To_Unlock_Label.classList.remove("Fade_In_Snap_Animation");
  void Slide_To_Unlock_Label.offsetWidth;
  let Slider_Value = parseInt(this.value);
  let Opacity = Math.pow((100 - Slider_Value)/100,3.5);
  Slide_To_Unlock_Label.style.opacity = Opacity; 

  if(Slider_Value ==  100){
    this.style.backgroundColor = "white";
  }else{
    var Root = document.querySelector(':root');
    this.style.backgroundColor = "transparent";
  }
}

