
window.addEventListener('scroll', onScroll)

function onScroll(){
 showNav()
 showBackToTopButton()
}

function showNav(){
  const nav = document.querySelector('#navigation')
  nav.classList.toggle('scroll', scrollY > 0 ) 
}


function showBackToTopButton(){
  const btn = document.querySelector('#backToTopButton')
  btn.classList.toggle('show', scrollY > 1250 ) 
}




/* ================================================ */






function openMenu(){
  document.body.classList.add('menu-expended')
}

function closeMenu(){
  document.body.classList.remove('menu-expended')
}




ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .box, 
#services header,
#services .card,
#about,
#about header,
#about .content`);



