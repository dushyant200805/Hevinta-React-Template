
$(document).ready(function() {
      $(window).scrollTop(0);
      var tempcust = true;
      /* Preloader */
      setTimeout(function(){
        $('.preloader').hide();
      }, 1800);
    });

// offcanvas menu close
$('.nav-link').on( "click", function(){
  $('.close').click(); 
});

// dark & light mode
    const togButton = document.getElementById("btnSwitch");
    let currThemeMode = localStorage.getItem("dark") === "true";
  // Set initial theme
    setTheme(currThemeMode);
    togButton.addEventListener("click", () => {
      currThemeMode = !currThemeMode;
      setTheme(currThemeMode);
      localStorage.setItem("dark", currThemeMode);
    });
    function setTheme(isDark) {
      if (isDark) {
        document.documentElement.setAttribute("data-hevinta-theme", "dark");
        togButton.innerHTML = `<i class="fa fa-sun dark-text"></i>`;
      } else {
        document.documentElement.setAttribute("data-hevinta-theme", "light");
        togButton.innerHTML = `<i class="fa fa-moon dark-text"></i>`;
      }
    }




    // Banner JS
    if($('#banner-slider').length > 0){
   document.addEventListener('DOMContentLoaded', function () {
  new Splide('#banner-slider', {
    type      : 'loop',
    perPage   : 1,
    autoplay  : true,
    interval  : 4000,
    perMove: 1, 
    speed     :  1500, // transition speed in milliseconds
    arrows    : true,
    pagination: false,
    pauseOnHover: false,
  }).mount();
});
}
 
 if($('#testimonial-slider').length > 0){
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonial-slider', {
    type   : 'loop',
    perPage: 3,
      perMove: 1,   
    autoplay: true,
    interval: 2000,
    arrows : false,
     speed: 1000,   
    pagination: false, 
    pauseOnHover: false,
    gap: 20,
    breakpoints: {
      768: { // Mobile and small screens
        perPage: 1,
      },
      1024: { // Tablet screens
        perPage: 2,
      },
    } 
  }).mount();
});
 }

 $(function(){
    $('.star-rating').each(function(){
      let $c = $(this), r = parseFloat($c.data('rating'));
      for(let i=1;i<=5;i++) $c.append('<span class="star">&#9733;</span>');
      $c.find('.star').each(function(i){
        if(i+1 <= r) $(this).addClass('filled');
        else if(i < r) $(this).addClass('half');
      });
    });
  });

// Counter Section
if($('.counter-section').length > 0){
const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector(".counter-section"); // <-- Add your section class

let hasRun = false; // To prevent running multiple times

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
            hasRun = true; // Run only once
            counters.forEach(counter => {
                let target = +counter.getAttribute("data-target");
                let speed = target / 180; // Adjust speed
                let count = 0;

                let updateCounter = () => {
                    count += speed;
                    if (count < target) {
                        counter.innerText = Math.floor(count) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target + '+'; // Ensure final value matches
                    }
                };

                updateCounter();
            });
        }
    });
}, { threshold: 1.0 }); // Trigger when 30% of section is visible

observer.observe(counterSection);
}

//   back to top
    var btn = $('#backtotop');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function scrollToTop(e){
        window.scrollTo(0, 0);
    });

     // scroll active menu change
    $('#nav_ul').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 25,
      scrollThreshold: 0.5, 
      filter: '',
      offset: 90,
      easing: 'swing'
    }); 
    // current year
        $(document).ready(function() {
        var year = new Date().getFullYear();
        $('#currentyear').text(year);
      });


  // newsletter Form validate  
    $("#contactform").validate({
      rules:{
        // if any
      },
      messages:{
      //  if any
      },
      errorElement: 'div'
    });

    $("#newsletter").validate({
      rules:{
        // if any
      },
      messages:{
      //  if any
      },
      errorElement: 'div'
    });

     // email success/fail message
  window.onload = function () {
    var successMessage = localStorage.getItem("successMessage");
    var errorMessage = localStorage.getItem("emailfailed");

    if (successMessage) {
        // Display the success message in a Bootstrap alert
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg z-3';
        alertDiv.role = 'alert';
        alertDiv.innerHTML = successMessage +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
        document.body.prepend(alertDiv);

        // Remove the success message from localStorage after displaying it
        localStorage.removeItem("successMessage");
    }
    else if(errorMessage) {
      // Display the success message in a Bootstrap alert
      var alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-danger alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg z-3';
      alertDiv.role = 'alert';
      alertDiv.innerHTML = errorMessage +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
      document.body.prepend(alertDiv);

      // Remove the success message from localStorage after displaying it
      localStorage.removeItem("emailfailed");
    }
  };

    var header = $('header');  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        header.addClass('fix');
        
      } else {
        header.removeClass('fix');
      }
    });

     AOS.init();