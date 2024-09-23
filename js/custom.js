(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })

    $('.owl-courses').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });
    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });
    // VIDEO HIGHLIGHT YOUTUBE
    

    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

    // CONTENT
    // SLIDER PROFILE STAF SEKOLAH
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 5,
          nav: true,
          autoplay: true,
          autoplayTimeout: 9500, // 9,5 detik
          autoplayHoverPause: false, // Pause saat hover
          responsive: {
              0: {
                  items: 1
              },
              300: {
                items: 2
              },
              600: {
                items: 3
              },
          },
          smartSpeed: 800 // Transisi smooth
      });
      // Carousel Kegiatan Sekolah
    $(document).ready(function(){
      $(".custom-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          autoplay: true,
          autoplayTimeout: 9500,
          autoplayHoverPause: true,
          animateOut: 'fadeOut',
          smartSpeed: 800, // Adjust speed for smoother animation
        });
    });
    
      // JAM //
      function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
    
        // Add leading zeros to time values
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        var timeString = hours + ":" + minutes + ":" + seconds;
        
        // Update the clock's display
        document.getElementById('clock').innerText = timeString;
        document.getElementById('clock').textContent = timeString;
    }
    
    // Initial call to display the time immediately
    updateClock();
    
    // Update the clock every second
    setInterval(updateClock, 1000);
    // DATE & TIME //
    function updateDateTime() {
      const now = new Date();
  
      // Get the date in a readable format
      const date = now.toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
  
      // Get the time in a readable format
      const time = now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
      });
  
      // Update the date and time in the HTML
      document.getElementById('date').textContent = date;
      document.getElementById('clock').textContent = time;
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display immediately on load
  updateDateTime();
  function toggleDropdown() {
        var content = document.getElementById("dropdown-content");
        if (content.classList.contains("show")) {
            content.classList.remove("show");
        } else {
            content.classList.add("show");
        }
    }

  });
const images = document.querySelectorAll('.image-slider img, .image-slider-1 img');
const eventDate = document.getElementById('event-date');
const eventName = document.getElementById('event-name');
const eventTitle = document.getElementById('event-title');
const eventDescription = document.getElementById('event-description');

const events = [
    {
        image: 'images/P BALAP BOSSSSSSSSSS.jpg',
        date: '25 / 9 / 2024',
        name: 'Kegiatan 17 Agustus ke 79',
        title: 'Lomba Balap Karung',
        description: 'Lomba Karung ini memperingati Kemerdekaan Indonesia ke 79.'
    },
    {
        image: 'images/Lomba Kaligrafi.jpg',
        date: '26 / 9 / 2024',
        name: 'Kegiatan 26 September',
        title: 'Lomba Kaligrafi',
        description: 'Lomba Kaligrafi 17 Agustus 2024: Mengukir keindahan seni tulisan dengan semangat kemerdekaan..'
    },
    {
        image: 'images/1723688608717 (1).jpg',
        date: '27 / 9 / 2024',
        name: 'Kegiatan 27 September',
        title: 'Lomba Adzan',
        description: 'Lomba Adzan 17 Agustus 2024: Mengumandangkan panggilan suci dengan semangat kemerdekaan.'
    },
    {
        image: 'images/Puskesmas Lempake (1).jpeg',
        date: '26 / 9 / 2024',
        name: 'Kegiatan 26 September',
        title: 'Lomba Kaligrafi',
        description: 'Lomba Kaligrafi 17 Agustus 2024: Mengukir keindahan seni tulisan dengan semangat kemerdekaan..'
    },
    {
        image: 'images/Puskesmas Lempake (2).jpeg',
        date: '27 / 9 / 2024',
        name: 'Kegiatan 27 September',
        title: 'Lomba Adzan',
        description: 'Lomba Adzan 17 Agustus 2024: Mengumandangkan panggilan suci dengan semangat kemerdekaan.'
    }
];

let currentIndex = 0;

function changeEvent() {
    // Update image source dynamically
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.src = events[currentIndex].image;
            img.classList.add('active');
        }
    });

    // Update event details
    eventDate.textContent = events[currentIndex].date;
    eventName.textContent = events[currentIndex].name;
    eventTitle.textContent = events[currentIndex].title;
    eventDescription.textContent = events[currentIndex].description;

    // Move to the next event
    currentIndex = (currentIndex + 1) % events.length;
}

// Call changeEvent initially to set the first event
changeEvent();

// Change event every 3 seconds
setInterval(changeEvent, 4000);

})(jQuery);
