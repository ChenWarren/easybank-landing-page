
// Mobile menu toggle function
let iconGroup = document.getElementById('icon-group')
let hamburgerIcon = document.getElementById('hamburger-icon')
let closeIcon = document.getElementById('close-icon')
let popupMenu = document.getElementById('tablet-menu')
let menuBackground = document.getElementById('menu-background')
let mainBody = document.getElementById('home-main')

iconGroup.onclick = () => {
    if (popupMenu.style.display === 'flex') {
        popupMenu.style.display = 'none'
        menuBackground.style.display = 'none'
        hamburgerIcon.style.display = 'flex'
        closeIcon.style.display = 'none'
        mainBody.style.filter = 'brightness(100%)'
    } else {
        popupMenu.style.display = 'flex'
        menuBackground.style.display = 'flex'
        hamburgerIcon.style.display = 'none'
        closeIcon.style.display = 'flex'
        mainBody.style.filter = 'brightness(50%)'
    }
}