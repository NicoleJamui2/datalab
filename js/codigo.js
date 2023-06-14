document.getElementById('menu').addEventListener('click', function () {

    document.getElementById('navega').classList.toggle('mostrar');


})



lightbox.option({
    'wrapAround': true,
    'albumLabel': "Imagen %1 de %2",
    'fadeDuration': 2000,
    'maxWidth': 350,
    'maxHeight': 350
})



document.getElementById('boton').addEventListener('click', function () {
  if(document.getElementById('miVideo').paused)
   document.getElementById('miVideo').play();
else
   document.getElementById('miVideo').pause();

})

