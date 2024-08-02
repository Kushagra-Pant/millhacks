function load(){
  document.getElementsByClassName("title")[0].style.innerHTML = screen.height + "x" + screen.width;
  if(screen.height > screen.width){
    /*scaleUp()*/
  }
}

function scaleUp(){
  btns = document.getElementsByClassName("navbutton");
  for(i = 0; i < btns.length; i++){
    btns[i].style.display = "inline-block";
    btns[i].style.float = "none";
  }
  
  document.getElementById("titlepage").style.backgroundImage = "url(squarebg.png)";
  document.getElementsByTagName("nav")[0].style.transform = "scale(2)";
  document.getElementsByClassName("title")[0].style.transform = "scale(2)";
  document.getElementsByClassName("interestbutton")[0].style.transform = "scale(2)";
  document.getElementsByClassName("interestbutton")[1].style.transform = "scale(2)";
  
  btns = document.getElementsByClassName("btn");
  for(i = 0; i < btns.length; i++){
    btns[i].style.transform = "scale(2)";
  }
  
  l = document.getElementsByClassName("card-body");
  for(i = 0; i < l.length; i++){
    l[i].style.transform = "scale(2)";
  }
  
  headers = document.getElementsByTagName("h2");
  for(i = 0; i < headers.length; i++){
    headers[i].style.transform = "scale(2)";
  }
}
