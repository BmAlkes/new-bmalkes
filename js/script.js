// navBar Stick effect code
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("home").className = "sticky";
  } else {
    document.getElementById("home").className = "";
  }
}

// hamburguer code

document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".navigation").classList.toggle("active");
});

wow = new WOW({
    boxClass:'wow',
    animationClass:"animated",
    offset:0,
    mobile:true,
    live:true,

});

wow.init();



class ScrollSuave{
  constructor(links, options){
    this.linksInterno = document.querySelectorAll(links);
    if(options === undefined){
      this.options ={behavior : 'smooth', block: 'start'}
    }else{
      this.options = options
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options)
  }
  addLinkEvent(){
    this.linksInterno.forEach((link)=>{
      link.addEventListener('click', this.scrollToSection)
    })
  }
  init(){
    if(this.linksInterno.length){
      this.addLinkEvent()
    }
    return this;
  }
}

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()