const images = document.querySelectorAll('.container a');
const container2 = document.getElementById('container2');
const container = document.getElementById ('container');
const closebtn = document.getElementById('close');
const body = document.getElementById('body');
const fullArrow= document.getElementById('fullar');



  

images.forEach(image => {
  image.addEventListener('click', () => {
    container.style.transform = 'translateX(-6.5%)';
    container.style.width = '80vw';
    container.classList.add('gap')
    event.preventDefault();
    container2.style.display = 'block'; // Show container2
    container2.style.width = '370px'; // Fade in 
    closebtn.style.display = 'block';
    body.classList.add('over')
   
    

  });
});

closebtn.addEventListener('click' , () => {
    container2.style.width = '0px';
    container.style.transform = 'translateX(0%)';
    container.classList.remove('gap');
    container.style.width = '100vw';
    closebtn.style.display = 'none';
    body.classList.remove('over');
})

fullArrow.addEventListener('click' , () => {
  alert('hi')
})
