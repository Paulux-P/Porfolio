let projectsContainer = document.getElementById("projects-container");
function openLink(link){
    window.open(link, '_self');
}

function scrollToRight(value) {
    projectsContainer.scrollBy({
        left: value, 
        behavior: 'smooth'
    })
}

function scrollToLeft(value) {
    projectsContainer.scrollBy({
        left: -value, 
        behavior: 'smooth' 
    })
}
/*===============================3D effect card ===============================*/

const cardDeco = document.querySelectorAll(".cardDeco");
const card = document.querySelectorAll(".card");

cardDeco.forEach( el => {
    el.addEventListener("mousemove", e => {

        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        //rotation que si on est sur la partie basse de la carte avec la souris
        let angleRotate;
        if ((y > midCardHeight*1.1)) {
            angleRotate = - angleY * (y%(midCardHeight*1.1) /50)/10;
        }else {
            angleRotate = 0;
        }

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1) rotate(${angleRotate}deg)`;

        //let posSouris = document.getElementById("posSouris");

        //posSouris.textContent ="X: " + x  + "  |   Y: " + y + " | angleX: " + angleX + "   |   angleY: " + angleY + "  " + midCardHeight;
        
        
    } );

    el.addEventListener("mouseleave", () => {

        setTimeout(() => {
            el.children[0].style.transform = "rotateX(0) rotateY(0)";
            posSouris.textContent ="";}, 400);
        
    });
});

card.forEach( el => {
    el.addEventListener("mousemove", e => {

        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        //rotation que si on est sur la partie basse de la carte avec la souris
        let angleRotate;
        if ((y > midCardHeight*1.1)) {
            angleRotate = - angleY * (y%(midCardHeight*1.1) /50)/10;
        }else {
            angleRotate = 0;
        }

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05) rotate(${angleRotate}deg)`;

        //let posSouris = document.getElementById("posSouris");

        //posSouris.textContent ="X: " + x  + "  |   Y: " + y + " | angleX: " + angleX + "   |   angleY: " + angleY + "  " + midCardHeight;
        
        
    } );

    el.addEventListener("mouseleave", () => {

        setTimeout(() => {
            el.children[0].style.transform = "rotateX(0) rotateY(0)";}, 400);
        
    });
});

/*==============================================================================*/

function hoverEffect(id) {
    const container = document.getElementById('projects-container');
    let projet = document.getElementById(id);

    if ( projet.classList.contains('project-visible')) {
        setTimeout(() => {
            if (!isElementFullyVisibleRight(id)) {

                let value = getHiddenPixelsRight(id) + 11;
                setTimeout(() => {scrollToRight(value);}, 10); 

            }else if (!isElementFullyVisibleLeft(id)) {
                let value = (getHiddenPixelsLeft(id) + 11);
                
                setTimeout(() => {scrollToLeft(value - 2);}, 10);
            };
        }, 50);  
    }
}


function isElementFullyVisibleRight(id) {
    const container = document.getElementById('projects-container');
    const element = document.getElementById(id);
    // Obtenir les dimensions et positions de l'élément et du conteneur
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Vérifier si l'élément est complètement visible horizontalement dans le conteneur
    
    const isFullyVisible = (
        elementRect.right <= containerRect.right 
    );

    

    return isFullyVisible;
}

function isElementFullyVisibleLeft(id) {
    const container = document.getElementById('projects-container');
    const element = document.getElementById(id);
    // Obtenir les dimensions et positions de l'élément et du conteneur
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Vérifier si l'élément est complètement visible horizontalement dans le conteneur
    
    const isFullyVisible = (
        elementRect.left >= containerRect.left 
    );

    

    return isFullyVisible;
}

function isElementFullyVisible(id) {
    const container = document.getElementById('projects-container');
    const element = document.getElementById(id);
    // Obtenir les dimensions et positions de l'élément et du conteneur
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Vérifier si l'élément est complètement visible horizontalement dans le conteneur
    
    const isFullyVisible = (
        elementRect.left >= containerRect.left &&
        elementRect.right <= containerRect.right
    );

    

    return isFullyVisible;
}


function getHiddenPixelsRight(id) {
    const container = document.getElementById('projects-container');
    const element = document.getElementById(id);
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    let hiddenPixelsRight = 0;

    // Vérifie si une partie de l'élément est cachée à droite
    if (elementRect.right > containerRect.right) {
        hiddenPixelsRight = elementRect.right - containerRect.right;
    }

    return hiddenPixelsRight;
}

function getHiddenPixelsLeft(id) {
    const container = document.getElementById('projects-container');
    const element = document.getElementById(id);
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    let hiddenPixelsLeft = 0;

    // Vérifie si une partie de l'élément est cachée à droite
    if (elementRect.left < containerRect.left) {
        hiddenPixelsLeft = containerRect.left - elementRect.left;
    }

    return hiddenPixelsLeft;
}

function loadVisibleProject() {
    let projects = document.getElementById('projects-container').children;
    setTimeout(() => {
        for (let i = 0; i < projects.length; i++) {
            if (isElementFullyVisible(projects[i].id) && !projects[i].classList.contains('project-visible')) {

                projects[i].classList.add('project-visible');

            }else if (!isElementFullyVisible(projects[i].id)) {

                projects[i].classList.remove('project-visible');
            }

        }
    }, 250);
}


function canScroll() {
    const container = document.getElementById('projects-container');
    const projects = container.children;
    let positionLast = projects[projects.length-1].getBoundingClientRect();

    let scrollableRight = true;

    if (positionLast.right <= container.getBoundingClientRect().right) {
        scrollableRight = false;
    }else{
        scrollableRight = true
    }
    
    let scrollableLeft = container.scrollLeft > 0;

    return { scrollableLeft, scrollableRight };
}

function updateScrollButton() {
    const buttonLeft = document.getElementById('scrollProjectLeft');
    const buttonRight = document.getElementById('scrollProjectRight');

    setTimeout(() => {
        let { scrollableLeft, scrollableRight } = canScroll();

        buttonLeft.disabled = !scrollableLeft; // Désactive le bouton si on ne peut pas scroller à gauche
        buttonRight.disabled = !scrollableRight; // Désactive le bouton si on ne peut pas scroller à droite
    }, 250);

}


let timeout;
window.addEventListener('resize', function() {
    clearTimeout(timeout);
    timeout = setTimeout(updateSize(), 200);
});

function updateSize() {
    loadVisibleProject();
    updateScrollButton();
}


function displayProject(id, projectName) {
    
    if (isElementFullyVisible(id)) {
        let projetDejaAfficher = document.getElementsByClassName('displayProject');

        if (projetDejaAfficher.length !=0) {
            for (let i = 0; i < projetDejaAfficher.length; i++) {
                projetDejaAfficher[i].classList.remove('displayProject');
                
            }
        }

        let contentProjetDejaAfficher = document.getElementsByClassName('ContentProject-visible');

        if (contentProjetDejaAfficher.length !=0) {
            for (let i = 0; i < contentProjetDejaAfficher.length; i++) {
                contentProjetDejaAfficher[i].classList.remove('ContentProject-visible');
            }
        }

        let project = document.getElementById(id);
        let contentProject = document.getElementById(projectName);

        project.classList.add('displayProject');
        contentProject.classList.add('ContentProject-visible');
    }
    
}

function triggerAction() {
    // Définir une commande dans le stockage local
    localStorage.setItem("triggerApparition", "true");
}

// Vérifier le stockage local
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("triggerApparition") === "true") {
        displayProject('lastProject', 'MyRally');
      // Nettoyer le stockage local pour éviter les déclenchements ultérieurs
      localStorage.removeItem("triggerApparition");
    }
  });


function displayExperiences(id) {
    let content = document.getElementById(id);
    let parent = content.parentElement;

    
    for(let i = 0; i  < parent.children.length; i++ ) {
        parent.children[i].style.display = "none";
    }

    content.style.display = "flex";

    parent.style.border = "2px solid rgba(115, 115, 115)"
}



const inputNom = document.getElementById('nom');
const labelNom = document.getElementById('labelNom');

const inputPrenom = document.getElementById('prenom');
const labelPrenom = document.getElementById('labelPrenom');

const inputEmail = document.getElementById('email');
const labelEmail = document.getElementById('labelEmail');

const inputSubject = document.getElementById('mailSubject');
const labelSubject = document.getElementById('labelMailSubject');


const inputs =[];

inputs.push(inputNom, inputPrenom, inputEmail, inputSubject);

const mapInputs = new Map();
mapInputs.set(inputNom,labelNom);
mapInputs.set(inputPrenom,labelPrenom);
mapInputs.set(inputEmail,labelEmail);
mapInputs.set(inputSubject,labelSubject);

if (inputNom !=null) {





    inputs.forEach(element => {
        element.addEventListener('click', (event) => {
            let input = event.target;
            label = mapInputs.get(input);
            
            
            if (input.value == "" && document.activeElement == input) {
                label.style.transform = 'translateY(-20px)';
                label.style.color = '#fbb10a';
                label.style.fontSize = '17px';
                input.style.borderColor = '#fbb10a';
            }
            
        });
    
        element.addEventListener('blur', (event) => {
            let input = event.target;
            label = mapInputs.get(input);
            
            
            if (input.value == "" ) {
                label.style.transform = 'translateY(0)';
                label.style.color = 'white';
                label.style.fontSize = '25px';
                input.style.borderColor = 'rgb(82, 82, 82)';
            }
    
            if (!input.checkValidity() && input.value != ""  ) {
                input.style.borderColor = 'red';
                label.style.color = 'red';
            }
            
        });
    });
}



const portfolioTitle = document.getElementById('deco-portfolio');
const effectCircle = document.getElementById('effectCircle');


if (portfolioTitle != null) {
    portfolioTitle.addEventListener('mousemove', e => {
    
        effectCircle.style.animation ="apparitionCircle 0.30s ease-in-out forwards";

        let circleH = effectCircle.offsetHeight;
        let circleW = effectCircle.offsetWidth ;

        let elRect = portfolioTitle.getBoundingClientRect();
    
        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;


        
    
        // effectCircle.style.top = `${y -circleH/2}px`;
        // effectCircle.style.left = `${x - circleW/2}px`;
        effectCircle.style.transform =`translateX(${x - circleW/2}px) translateY(${y -circleH/2}px)`;
        console.log(circleH, " ", circleW);
    });

    portfolioTitle.addEventListener('mouseleave', e => {
        
        effectCircle.style.animation ="disparition 0.30s ease-in-out forwards";
        
        setTimeout(() => {
            effectCircle.style.transform =`translateX(0px) translateY(0px)`;

        }, 301);

    });
}
