const Menu = document.querySelectorAll('.menu')
const subProfile = document.querySelector('.sub__profile')
const profile = document.querySelector('.profile__con')

profile.addEventListener('click', ()=>{
    subProfile.classList.toggle('display_flex')
})

Menu.forEach(Menu => {
    Menu.addEventListener('click', ()=>{
        Menu.classList.toggle('active')
    })
})

const sideBar = document.querySelector('.side__bar')
const mainBar = document.querySelector('.main__bar')
const toggleMenu = document.querySelector('.menuToggle')

toggleMenu.addEventListener('click', ()=>{
    if(sideBar.classList.contains('activeBar')){
        sideBar.classList.remove('activeBar')
        mainBar.classList.remove('activeMain')
        mainBar.classList.add('margin__left')
    }else{
        sideBar.classList.add('activeBar')
        mainBar.classList.add('activeMain')
        mainBar.classList.remove('margin__left')
    }
})


