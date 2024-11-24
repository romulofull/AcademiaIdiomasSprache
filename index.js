
document.addEventListener("DOMContentLoaded", function() {
  
  var slider = tns({
    container: ".slider",                
    items: 3,                             
    slideBy: 1,                     
    speed: 500,                         
    mouseDrag: true,                      
    autoplay: false,                 
    center: true,                       
    loop: true,                        
    nav: false,                      
    controls: false,                      
    controlsContainer: "#custom-control", 
    controlsPosition: "bottom",          
  });

  document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');  
  });

  document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');  
  });
});
