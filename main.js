const slideList = [{
    img: "images/img1.jpg",
    text: 'Góra'
   },
   {
    img: "images/img2.jpg",
    text: 'Rzeka'
   },
   {
    img: "images/img3.jpg",
    text: 'Las'
   }];
   
   const image = document.querySelector('img.slider');
   const h1 = document.querySelector('h1.slider');
   const dots = [...document.querySelectorAll('.dots span')]

   const time = 4000;
   let active = 0;
   

   
   const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
   }
   
   
   const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
   }
   
   let interval = setInterval(changeSlide, time);
   
   const keyChangeSlide = (e) => {
       clearInterval(interval);
       if(e.keyCode === 37 || e.keyCode === 39){
           e.keyCode === 37 ? active-- : active++;
           if(active === slideList.length) {
               active = 0;
           } else if(active < 0) {
               active =slideList.length - 1;
           }
           image.src = slideList[active].img;
           h1.textContent = slideList[active].text;
           changeDot()
           interval = setInterval(changeSlide, time);
       }
   } 
   
   
   
   
   
   

   window.addEventListener('keydown', keyChangeSlide);