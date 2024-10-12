let startButton = document.getElementById("start-button");
let startButtonContents = document.getElementById("start-button-contents");


startButton.addEventListener('click', function(){
    startButton.style.boxShadow = "inset rgb(47, 47, 47) 0.15em 0.15em, inset rgb(255, 255, 255) -0.15em -0.15em ";

})
startButton.addEventListener('mouseup', function(){
    startButton.style.boxShadow = "inset rgb(47, 47, 47) -0.15em -0.15, inset rgb(255, 255, 255) 0.15em 0.15";
    startButtonContents.style.border = "dotted black 0.1em"
})
startButton.addEventListener('blur', function(){
    startButton.style.boxShadow = "inset rgb(47, 47, 47) -0.15em -0.15em , inset rgb(255, 255, 255) 0.15em 0.15em" ;
    startButtonContents.style.border = ""
})
function iconSetup(){
    let icon = document.querySelectorAll('.icon');
icon.forEach( icon => {
    let iconImg = icon.querySelector('.icon-image');
    let iconText = icon.querySelector('.icon-text');
    icon.addEventListener('click',function(){
            iconText.style.border = "dotted white 0.2em";
            iconText.style.backgroundColor = "#111155";
            iconText.style.color = "white";
            iconImg.style.filter = "sepia(100%) hue-rotate(180deg) saturate(300%)";
    });

    icon.addEventListener('blur',function(){
        iconText.style.border = "solid transparent 0.2em";
        iconText.style.backgroundColor = "";
        iconText.style.color = "black";
        iconImg.style.filter = "";
    });
});
}
function updateTime(){
    const current = new Date();
    const currentTime = current.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    const toolbarTime = document.getElementById("toolbar-time")
    toolbarTime.textContent = currentTime;
}
updateTime();
setInterval(updateTime,60000)

var divs = document.getElementsByTagName('div')
for (var i = 0, divLen = divs.length; i < divLen; i++){
    divs[i].setAttribute('tabindex', '0');
}
document.addEventListener("DOMContentLoaded",iconSetup)