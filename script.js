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