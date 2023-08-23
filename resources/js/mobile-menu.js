const burgerButton = document.querySelector('.burger-menu')
const burgerMenu = document.querySelector('.mobile-menu-dfs')
const menuContents = document.querySelectorAll('.menu-content')

let toggle = false

burgerButton.addEventListener('click', () => {
  toggle = !toggle
  toggleMenu()
})

burgerMenu.style.width = "0px"
burgerMenu.style.transition = "width 0.5s ease-out"

menuContents.forEach((menuContent) => {
  menuContent.style.visibility = 'hidden'
})

const toggleMenu = () => {
  if(toggle) {
    burgerMenu.style.top = "80px"
    burgerMenu.style.right = "0px"
    burgerMenu.style.width = "90vw"
    burgerMenu.style.zIndex = "3"
    burgerMenu.style.transition = "width 0.3s ease-out"

    menuContents.forEach((menuContent) => {
      menuContent.style.visibility = 'visible'
      menuContent.style.transition = 'visibility 0.2s ease-out'
    })

  } else {
    burgerMenu.style.width = '0px'
    menuContents.forEach((menuContent) => {
      menuContent.style.visibility = 'hidden'
      menuContent.style.transition = 'visibility 0.2s ease-out'
    });
    burgerMenu.style.transition = "width 0.3s ease-out"

  }
}
