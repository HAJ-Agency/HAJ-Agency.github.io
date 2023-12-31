const burgerButtons = document.querySelectorAll('.burger-menu')
const burgerMenu = document.querySelector('.mobile-menu-dfs')
const menuContents = document.querySelectorAll('.menu-content')
const backdrop = document.querySelector('.backdrop')

let toggle = false

burgerButtons.forEach(burgerButton => {
  burgerButton.addEventListener('click', () => {
    toggle = !toggle
    toggleMenu()
  })
})

backdrop.addEventListener('click', () => {
  toggle = !toggle
  toggleMenu()
})

burgerMenu.style.width = "0px"
burgerMenu.style.transition = "width 0.5s ease-out"
backdrop.style.display = 'none'

menuContents.forEach((menuContent) => {
  menuContent.style.visibility = 'hidden'
})

const toggleMenu = () => {
  if(toggle) {
    burgerMenu.style.top = "92px"
    burgerMenu.style.right = "0px"
    burgerMenu.style.width = "90vw"
    burgerMenu.style.zIndex = "3"
    burgerMenu.style.transition = "width 0.3s ease-out"
    backdrop.style.display = 'block'
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
    backdrop.style.display = 'none'

  }
}
