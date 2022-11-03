let movenavbarButton = document.getElementById("move-navbar");
let navBar = document.getElementById("navbar");

movenavbarButton.onclick = ()=>{
    navBar.classList.toggle("move")
}
let toTopButton = document.getElementById("to-top-button");
let aboutSection = document.getElementById("about-section");
let aboutBoxes = document.querySelectorAll(".about-container-content .about-box")

let servicesSection = document.getElementById("services-section");
let servicesBoxes = document.querySelectorAll(".container .serv-box");

let projectssSection = document.getElementById("projects-section");
let projectsBoxes = document.querySelectorAll(".container .project-box");
window.onscroll = ()=>{


    if(window.scrollY >= aboutSection.offsetTop) {

        toTopButton.style.transition = "1s";
        toTopButton.style.right = "15px";
        toTopButton.style.opacity = 1;

        aboutBoxes.forEach((aboutBox)=>{
            aboutBox.style.opacity = 1;
            aboutBox.style.transform = "translateX(0)";
            
        })
    }else {
        toTopButton.style.right = "-100px";;
        toTopButton.style.opacity = 0;
    }
    if(window.scrollY >= servicesSection.offsetTop) {
        servicesBoxes.forEach((servBox)=>{
            servBox.style.transitionDelay = servBox.getAttribute("transition-delay");
            servBox.style.opacity = 1;
            servBox.style.transform = "translateY(0)";
        })
    }

    if(window.scrollY >= projectssSection.offsetTop) {
        projectsBoxes.forEach((projectBox)=>{
            projectBox.style.transition = projectBox.getAttribute("transition");
            projectBox.style.left = 0;
            projectBox.style.opacity = 1;

            if(projectBox.style.opacity >= 1) {

                filter();

            }

        })
        
    }

}



let filterProjectsButtons = Array.from(document.querySelectorAll(".filter-brojects .filter-div"));
let allProjects = Array.from(document.querySelectorAll(".container .project-box"));


function filter() {

    filterProjectsButtons.forEach((btn)=>{
        btn.onclick = ()=>{

            filterProjectsButtons.forEach((btn)=>{
                btn.classList.remove("active");
            })
            btn.classList.add("active");
            allProjects.forEach((project)=>{
                project.classList.remove("active")
            })

            let clasess = document.querySelectorAll(btn.dataset.filter);
                clasess.forEach(cla=>{
                    cla.classList.add("active")
                })

        }
    })

}



