let isDarkMode = false;
document.getElementById("tema").addEventListener('click',() => {
  if (isDarkMode) {
    // Change to light theme
    document.getElementById("fon").style.backgroundColor = "#ffffff";
    document.getElementById("fon").style.background = "linear-gradient(0deg, rgba(255,255,255,0.3253676470588235), rgba(7,255,98,1))";
    document.getElementById("tema").style.backgroundColor = "white";
    document.getElementById("zed").style.color.black;
    isDarkMode = false;
  } else {
    // Change to dark theme
    document.getElementById("fon").style.backgroundColor = "#000000";
    document.getElementById("fon").style.background = "linear-gradient(0deg, rgba(0,0,0,0.3253676470588235), rgba(7,7,7,1)";
    document.getElementById("tema").style.backgroundColor = "grey";
    document.getElementById("zed").style.color.grey;
    isDarkMode = true;
  }
});
document.getElementById("closeButton").addEventListener('click',() => {
    document.getElementById("fon").style.filter = 'blur(0px)';
    document.getElementById("git").style.display = 'none';
});