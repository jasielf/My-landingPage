var menu= document.getElementById('menu');
var altura = menu.offsetTop;

var bmenu = $('.icon-movil-menu');
var togMenu = $('ul');

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 15) {
	menu.classList.add('stick');
  } else {
    menu.classList.remove('stick')
  }
})

bmenu.on('click', function(){
  if(togMenu.hasClass('movil-menu')) {
    togMenu.removeClass('movil-menu');
  } else {
    togMenu.addClass('movil-menu');
  }
})

togMenu.on('click', function(){
  togMenu.parent().siblings().find('enla');
  togMenu.removeClass('movil-menu');
})
