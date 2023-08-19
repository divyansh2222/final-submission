function swiperWorking(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type:"fraction"
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
  
  }
  
  swiperWorking()
 var tl=gsap.timeline()
 tl.from("#page1 svg", {
     marginTop:"-50%",
     opacity:0,
     duration:0.9,
     delay:0.1, 
     ease: Power2.easeOut,
     scrollTrigger:{
        scroller:"body",
        trigger:"#page1 svg",
        // markers:true,
        start:"top 5%",
        end:"top -5%",
        scrub:3,
        innerHeight:"20px",
        y:-100
     }
 })
 tl.from("#page1 img", {
    scale:0.5,
    duration:0.7,
    delay:-0.1,
    ease: Power2.easeOut,
    borderRadius:40
 
 })
 .from("#nav",{
     marginTop:"-50%",
     opacity:0,
     duration:0.9,
     delay:-0.4,
     ease: Power2.easeOut
 })
 var h3=document.querySelectorAll("#text h2")
 
  h3.forEach(function(elem){
     var mohit=""
     var h2=elem.textContent
     var data=h2.split("")
 
     data.forEach(function(e){  
         mohit+=`<span>${e}</span>`
     })
    
     
   elem.innerHTML=mohit
 
  })
  gsap.to("#text h2 span",{
     stagger:0.1,
     color:"#E3E3C4",
     scrollTrigger:{
         scroller:"body",
         trigger:"#text h2 span",
        //  markers:true,
         start:"top 60%",
         end:"top -5%",
         scrub:3
     }
     
  })
  gsap.to("#page2 #svg2",{
     right:0,
     duration:7,
     ease: Power0.easeNone,
     scrollTrigger:{
         scroller:"body",
         trigger:"#page2 #svg2",
         scrub:3
     }
  })
  gsap.to("#page2 #svg3",{
     right:2,
     duration:10,
     ease: Power0.easeNone,
     scrollTrigger:{
         scroller:"body",
         trigger:"#page2 #svg3",
         scrub:3
     }
  })
  var h4=document.querySelectorAll("#text2 h4")
 
  h4.forEach(function(o){
     var mohit1=""
     var p=o.textContent
     var data=p.split("")
 
     data.forEach(function(q){  
         mohit1+=`<span>${q}</span>`
     })
     
   o.innerHTML=mohit1
 
  })
  gsap.to("#text2 h4 span",{
     stagger:0.6,
     color:"#E3E3C4",
     scrollTrigger:{
         scroller:"body",
         trigger:"#text2 h4 span",
         start:"top 70%",
         end:"top 30%",
         scrub:3
     }
     
  })
  gsap.from("#img1 img",{
     y : 150,
     opacity:0,   
     scrollTrigger:{
     scroller:"body",
     trigger:"#img1 img",
     start:"top 70%",
     end:"top 30%",
     scrub:3
    }
  })
  gsap.from("#img2 img",{
     marginTop:"15%",
     opacity:0,
    scrollTrigger:{
     scroller:"body",
     trigger:"#img2 img",
     start:"top 70%",
     end:"top 30%",
     scrub:3
    }
  })
  gsap.from("#img3 img",{
     marginTop:"12%",
     opacity:0,
    scrollTrigger:{
     scroller:"body",
     trigger:"#img3 img",
     start:"top 70%",
     end:"top 30%",
     scrub:3
    }
  })
  gsap.from("#text3",{
     marginTop:"8%",
     opacity:0,
    scrollTrigger:{
     scroller:"body",
     trigger:"#text3",
     start:"top 70%",
     end:"top 30%",
     scrub:3
    }
  })
  gsap.from("#text3-1",{
     marginTop:"5%",
     opacity:0,
    scrollTrigger:{
     scroller:"body",
     trigger:"#text3-1",
     // markers:true,
     start:"top 70%",
     end:"top 30%",
     scrub:3
    }
  })
  var h6=document.querySelectorAll("#text4 h5")
 
  h6.forEach(function(ele){
     var mohit2=""
     var h5=ele.textContent
     var data=h5.split("")
 
     data.forEach(function(el){  
         mohit2+=`<span>${el}</span>`
     })
     console.log(mohit2)
     
   ele.innerHTML=mohit2
 
  })
  gsap.to("#text4 h5 span",{
     stagger:0.1,
     color:"#E3E3C4",
     scrollTrigger:{
         scroller:"body",
         trigger:"#text4 h5 span",
       //   markers:true,
         start:"top 80%",
         end:"top 10%",
         scrub:3
     }  
  })
 
  