//Code pour le menu deroulant (menuBurger)
const burgerMenuButton = document.querySelector('.burgerMenuButton')
        const burgerMenuButtonIcon = document.querySelector('.burgerMenuButton  i')
        const burgerMenu = document.querySelector('.burgerMenuButtonCACHE')

        burgerMenuButton.onclick = function(){
            burgerMenu.classList.toggle('Open')
            const isOpen = burgerMenu.classList.contains('Open')
            burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
        }

//code pour l'animation d'apparition sur les blocs
const ratio = 0.01

const options = {
    root : null,
    rootMargin : '0px',
    thershold: ratio
}

const handleIntersect =  function (entries, observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveler-Visible')
    console.log('Visible')  
    observer.unobserve(entry.target) 
}
})
}

const observer = new IntersectionObserver(handleIntersect, options)

document.querySelectorAll('[class*="reveler-"]').forEach(function(r){
    observer.observe(r)
})

//Pourla modal

const modalContainer = document.querySelector(".modal-Container");
const modalDeclencheur = document.querySelectorAll(".modal-declencheur");

modalDeclencheur.forEach(trigger => trigger.addEventListener("click",togglecontenuDeLaModal))

function togglecontenuDeLaModal() {
    modalContainer.classList.toggle("active");
}