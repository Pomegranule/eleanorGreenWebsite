let homeTabButton = document.getElementById("homeTabButton");
homeTabButton.addEventListener("click", homeTabClick);

function homeTabClick(){
    let tabContent = document.getElementsByClassName("tabContent");
    let homeTabContent = document.getElementById("homeTab");
    let homeTabContentStatus = homeTabContent.style.display;
    if(homeTabContentStatus === "none"){
        //If homeTabContentStatus is equal to "none", cycle through the tabContent class and set them to none;
        //set "homeTab" to "flex".
        for(let loop=0; loop<tabContent.length; loop++){
            let tabContentStatus = tabContent[loop].style.display;
            tabContentStatus === "none";
        }
        homeTabContentStatus === "flex";
    }
}