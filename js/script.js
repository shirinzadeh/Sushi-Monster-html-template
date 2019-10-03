$(document).ready(function(){/*ancaq doc yuklenende, hazir olanda ready olsun*/
    //toggler button
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  })

  //sticky navbar less padding
  $(window).scroll(function(){

    let position = $(this).scrollTop();

    if(position>= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');

    }
    else{
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  //smooth scroll
  $('nav-item a, .header-link, #back-to-top' ).click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body'). stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000 )

  })


  //back to top
  $(window).scroll(function(){

    let position = $(this).scrollTop();

    if(position>= 718){
      $('#back-to-top').addClass('scrollTop');
    }
    else{
      $('#back-to-top').removeClass('scrollTop');

    }
  })

 

    //ripples
    $("#header, .info").ripples({ //selectora hara efekti vermek isteyirikse yaziriq
        dropRadius: 25,           //dropradius perturbance reqemleri githubda kodu goturlen yerde yazilib
        perturbance: 0.6,
        
      });
    /*$(selector).ripples({
        dropRadius: ...,
        perturbance: ...,
        ...
      });*/

      // magnific popup
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery:{
            enabled:true
        }
        // other options
      });

    //view more
    $("#toggle-vm").click(function() {
      var elem = $("#toggle-vm").text();
      if (elem == "View More") {
        //Stuff to do when btn is in the read more state
        $("#toggle-vm").text("View Less");
        $("#menu-displaynone").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle-vm").text("View More");
        $("#menu-displaynone").slideUp();
      }
    });

    $("#aboutbtn").click(function(){
      var el = $("#aboutbtn").text();
      if(el == "Hide"){
        $(".about-image").hide();
      }
      else if(el == "Learn More"){
        $(".about-image").show();
      }
      
      
    });
    
});
//about learn more button

let aboutimg = document.getElementsByClassName("about-image");
let abouttxt = document.querySelector(".about-text");

abouttxt.addEventListener("mouseover",mouseOver);
abouttxt.addEventListener("mouseout", mouseOut);
function mouseOver(){
  
  abouttxt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas accusamus odit quos voluptatum recusanda.Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. "
  aboutimg[0].classList.add("img-1js");
  aboutimg[1].classList.add("img-2js");
  aboutimg[2].classList.add("img-3js");
  aboutimg[3].classList.add("img-4js");
  aboutimg[4].classList.add("img-5js");
    
    
  }

function mouseOut(){
  
  abouttxt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas accusamus odit quos voluptatum recusanda ..."
  aboutimg[0].classList.remove("img-1js");
  aboutimg[0].classList.add("img-1");
  aboutimg[1].classList.remove("img-2js");
  aboutimg[1].classList.add("img-2");
  aboutimg[2].classList.remove("img-3js");
  aboutimg[2].classList.add("img-3");
  aboutimg[3].classList.remove("img-4js");
  aboutimg[3].classList.add("img-4");
  aboutimg[4].classList.remove("img-5js");
  aboutimg[4].classList.add("img-5");
}

  

//modal js
const openModalButtons = document.querySelectorAll('[data-modalbox-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalbox = document.querySelector(button.dataset.modalboxTarget)
    openModal(modalbox)
  })
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modalbox.active')
  modals.forEach(modalbox => {
    closeModal(modalbox)
  } )
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalbox = button.closest('.modalbox')
    closeModal(modalbox)
  })
});

function openModal(modalbox){
  if(modalbox == null) return
  modalbox.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modalbox){
  if(modalbox == null) return
  modalbox.classList.remove('active')
  overlay.classList.remove('active')
}

