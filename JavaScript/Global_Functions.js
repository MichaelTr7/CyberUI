
function Get_CSS_Property(Element_Name,Property_Name){
  let ID_Token = Element_Name.charAt(0);
  let CSS_Object = (ID_Token == "#") ? document.getElementById(Element_Name.substring(1)) : document.getElementsByClassName(Element_Name.substring(1))[0];
  let Property_Value = window.getComputedStyle(CSS_Object).getPropertyValue(Property_Name);
  return Property_Value
}

