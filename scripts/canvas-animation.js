


const rocket = document.querySelector('.rocket');
const servicesSection = document.querySelector('.services-section');
const solutions = document.querySelector('.solutions');

let rotate = true;
window.addEventListener('scroll',(e) =>{
  const rocketPos = rocket.getClientRects()[0];
  const solutionPos = solutions.getClientRects()[0];
  if(!rocketPos || !solutionPos) return;
  if( rocketPos.y < solutionPos.y){
    rocket.style.left = '400px'

    rocket.style.transform = `rotate(270deg)`;

    setTimeout(() => {
      rocket.style.transform = `rotate(360deg)`;
    }, 1000);
  }else{
    rocket.style.left = '2000px'
  }
 
})












const mobileBtn = document.querySelector('.mobile-btn');
const rotateSpan = document.querySelector('.rotate-span');
const mobileNav = document.querySelector('.mobile-nav');
let cliecked = true;

function myFunction(x) {
  if (x.matches  ) { // If media query matches
    mobileNav.style.display = "none";

  } else {
    mobileNav.style.display = "flex";

  }
}
const mainImg = document.querySelector('.main-img');
mobileBtn.addEventListener('click',(e) =>{
  const x = window.matchMedia("(min-width: 781px)")
  myFunction(x);

  x.addEventListener("change", function() {
    myFunction(x);
  });
  if(cliecked){
  rotateSpan.style.transform = "rotate(120deg)";
  cliecked = !cliecked;
  document.body.style.overflowY = "hidden";
  mobileNav.style.display = "flex";
  mainImg.style.display = "none";
}else{
  rotateSpan.style.transform = "rotate(0)";
    cliecked = !cliecked;
    document.body.style.overflowY = "scroll";
    mobileNav.style.display = "none";
    mainImg.style.display = "block";

  }
})
function scrollBody(){
  document.body.style.overflowY = "scroll";
  mobileNav.style.display = "none";
}

class Hexagon{

  constructor(c,d){
    this.hexagons = c;
    this.testimonial = d;
  }

  scroll () {
    const rowSolutions = document.querySelector('.row-solutions');
    const contact = document.querySelector('.contact-container .middle-text')
    let lastScrollTop = 0;
    const testimonialPos = this.testimonial.offsetTop; 

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.scrollY;
   
      this.testimonial.style.position = "static";
      
      if(currentScrollTop < testimonialPos - 10) {
        this.hexagons.map((item) => item.style.display = "none");
        return;
      };
      const rowSolutionsY = rowSolutions.getClientRects()[0].y;
      
      const contactY = contact.offsetTop;

      if(currentScrollTop > rowSolutionsY && contactY > currentScrollTop){
        this.testimonial.style.position = "fixed";
        this.testimonial.style.top = "20px"; 
      }
     
     
      this.hexagons.map((item) => item.style.display = "block");
      const lastElementPosition = this.hexagons[2].getClientRects()[0].x;

      if(lastElementPosition < -400 ){
        this.testimonial.style.position = "static";

      }

      const top = 3100 - lastScrollTop;
      if(currentScrollTop > lastScrollTop) {

        this.hexagons[0].style.left = 100 + top  + "px";
        this.hexagons[1].style.left = 650 + top  + "px";
        this.hexagons[2].style.left = 1200 + top  + "px";


      } else {
        this.hexagons[0].style.left = 100 + top  + "px";
        this.hexagons[1].style.left = 650 + top  + "px";
        this.hexagons[2].style.left = 1200 + top  + "px";
        

      }
      lastScrollTop = currentScrollTop;
    });
  }

}


function start(){
  const hexagon = document.querySelector(".hexagon-container");
  const hexagon2 = document.querySelector(".hexagon-container2");
  const hexagon3 = document.querySelector(".hexagon-container3");

  const hexagons = [hexagon,hexagon2,hexagon3];
  const testimonial = document.querySelector(".testimonial-container .middle-text");
  const ob1 = new Hexagon(hexagons,testimonial);
  ob1.scroll();
}
start();