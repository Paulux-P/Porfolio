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
    setTimeout(() => {
        if (!isElementFullyVisible(id)) {
            let value = getHiddenPixelsRight(id) + 12;
            setTimeout(() => {scrollToRight(value);}, 10); 
        };
    }, 40);


    
}


function isElementFullyVisible(id) {
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