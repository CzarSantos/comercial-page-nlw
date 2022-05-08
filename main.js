
window.addEventListener('scroll', onScroll)

function onScroll(){
 showNav()
 showBackToTopButton()
 activteMenu(home)
 activteMenu(services)
 activteMenu(about)
 activteMenu(contact)
}



function activteMenu(section){
  const targetLine = scrollY + innerHeight / 2

  //dados necessssarios

  const sectionTop = section.offsetTop //pega topo 
  const sectionHeight = section.offsetHeight //pega o tamanho

  // top chegou ou ultrapassssou
  const sectionTopPassed = targetLine >= sectionTop


  //verifica se esta abaixo da linha

  //sseção termina?
  //soma o top do scrol mais a altura do elemento
  const sectionEnd = sectionTop + sectionHeight


  //finalda seção passou da linha
  const sectionEndPassed = sectionEnd <= targetLine

  //limites da section
// ! negando
  const sectionB = sectionTopPassed && !sectionEndPassed


  //pega elemento
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


  menuElement.classList.remove('active')
//se for verdadeiro
if(sectionB){
  menuElement.classList.add('active')
}


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



