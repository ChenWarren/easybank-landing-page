
// Mobile menu toggle function
let menuIconGroup = document.getElementById('menu-icon-group')
let hamburgerIcon = document.getElementById('hamburger-icon')
let closeIcon = document.getElementById('close-icon')
let popupMenu = document.getElementById('tablet-menu')
let menuBackground = document.getElementById('menu-background')
let mainBody = document.getElementById('home-main')

menuIconGroup.onclick = () => {
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

// Social media icon on click function
let facebookIcon = document.getElementById('facebook-icon')
let youtubeIcon = document.getElementById('youtube-icon')
let twitterIcon = document.getElementById('twitter-icon')
let pinterestIcon = document.getElementById('pinterest-icon')
let instagramIcon = document.getElementById('instagram-icon')

facebookIcon.onclick = () => {
    window.open('https://www.facebook.com/')
}

youtubeIcon.onclick = () => {
    window.open('https://www.youtube.com/')
}

twitterIcon.onclick = () => {
    window.open('https://twitter.com/')
}

pinterestIcon.onclick = () => {
    window.open('https://www.pinterest.com/')
}

instagramIcon.onclick = () => {
    window.open('https://www.instagram.com/')
}
