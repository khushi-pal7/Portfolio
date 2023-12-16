var typed = new Typed('#element', {
    strings: ['CODER.', ' FRONTEND DEVLOPER.','DANCER.','TECH ENTHUSIAST'],
    typeSpeed: 50,
  });

  const vision=document.querySelectorAll('.vision');
  vision.forEach(vision => {
    const down=vision.querySelector('.down');
    const vtext=vision.querySelector('.vtext');
    vision.addEventListener('click',()=> {

        if(down.classList.contains('active')) {
        
        down.classList.remove('active');
        
        vtext.style.maxHeight = null;
        
        } else {
        
        down.classList.add('active');
        
        vtext.style.maxHeight = vtext.scrollHeight + "px";
        
        }
  })
  });