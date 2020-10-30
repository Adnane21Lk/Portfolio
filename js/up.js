const scrollup = document.querySelector("#scrollbtn");
window.addEventListener("scroll",scrollfunction; 
function scrollfunction(){
  if (window.pageYOffset > 1200){
    scrollup.style.display = "block";

  }else{
    scrollup.style.display = "none";
  }
}
  