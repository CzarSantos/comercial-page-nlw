
const nav = document.querySelector('#navigation')

function onScroll(){
  nav.classList.toggle('scroll', scrollY > 0 ) 
/*   if(scrollY > 0){
    navigation.classList.add('scroll')

  }else{
    navigation.classList.remove('scroll')
  } */
}


window.addEventListener('scroll', onScroll)


function openMenu(){
  document.body.classList.add('menu-expended')
}

function closeMenu(){
  document.body.classList.remove('menu-expended')
}