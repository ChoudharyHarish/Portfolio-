const toggleBackground = function(){
    const getClass = document.getElementsByTagName("BODY")[0].classList ; //Grabbing the body's classlist
    const nav = document.getElementsByClassName("navbar")[0].classList;

    for(let i = 0; i < 2; i++){
    const darkButton = document.querySelectorAll(".iconDark")[i].classList;
    const lightButton = document.querySelectorAll(".iconLight")[i].classList;
    darkButton.toggle("iconToggle");
    lightButton.toggle("iconToggle2");
    }

    getClass.toggle("toggleClass");
    nav.toggle("toggleClass");
   
    for (let i = 0; i < 5; i++) {
        const element = document.getElementsByClassName("navigationLink")[i].classList;
        element.toggle("toggleClass");
    }

    for (let i = 0; i < 6; i++) {
    const socialDarkButton = document.querySelectorAll(".socialDark")[i].classList; 
    const socialLightButton = document.querySelectorAll(".socialLight")[i].classList;
        
     console.log(socialDarkButton);
    socialDarkButton.toggle("iconToggle");
    socialLightButton.toggle("iconToggle2");
        
    } 

}


let skillCategoryName = "";

//One by one sare skill card pe event listener lagae and remember event object sirf event listener ke through milta h
for (let i = 0; i < 3; i++) {
    const element = document.getElementsByClassName("skills_content")[i];
    element.addEventListener("click",function(event){
        skillCategoryName = event.target.innerText;
        if (skillCategoryName === "FrontEnd Development") {
            const element = document.getElementsByClassName("uil-angle-down")[0];
            element.classList.toggle("skills_animation_down");
            const skillCard = document.getElementsByClassName("skills_hide")[0].classList;
            skillCard.toggle("skills_show");
        } 
        else if(skillCategoryName === "BackEnd Development"){
            const element = document.getElementsByClassName("uil-angle-down")[1];
            element.classList.toggle("skills_animation_down");
            const skillCard = document.getElementsByClassName("skills_hide")[1].classList;
            skillCard.toggle("skills_show");
        }
        else if(skillCategoryName === "Some other Tools"){
            const element = document.getElementsByClassName("uil-angle-down")[2];
            element.classList.toggle("skills_animation_down");
            const skillCard = document.getElementsByClassName("skills_hide")[2].classList;
            skillCard.toggle("skills_show");
        }
    })
    
}
