var menu= document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll', function(){
  if (window.pageYOffset > 15) {
	menu.classList.add('stick');
  } else {
    menu.classList.remove('stick')
  }
})