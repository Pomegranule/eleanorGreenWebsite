let collapseButtons = document.getElementById("collapseTabButtons");
collapseButtons.addEventListener("click", showTabButtons);

function showTabButtons(){
    let tabButtons = document.getElementsByClassName("tabButtons");
    
    for(let loop=0; loop<tabButtons.length; loop++){
        let displayState = tabButtons[loop].style.display;
        if(displayState === "none"){
            tabButtons[loop].style.display = "flex";
        } else {
            tabButtons[loop].style.display = "none";
        }
    }
}