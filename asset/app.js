window.onload = ()=>{
    const MENU = document.querySelector('.menu')
    const ACTIVE_MENU = document.querySelector('.activeMenu')
    const CLOSE_MENU = document.querySelector('.closeMenu')
    const LINKS = document.querySelectorAll('.menu a')

   
    ACTIVE_MENU.addEventListener('click', (e)=>{
        MENU.classList.toggle('menuVisible')
    })

    CLOSE_MENU.addEventListener('click', (e) => {
        MENU.classList.toggle('menuVisible')
    })

    LINKS.forEach(link => {
        link.addEventListener('click', (e) => {
            MENU.classList.toggle('menuVisible')
        })
    }
    )

    
}