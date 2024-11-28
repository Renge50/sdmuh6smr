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
          autoplay: false,
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
  const slider1Images = document.querySelectorAll('.image-slider img');
  const slider2Images = document.querySelectorAll('.image-slider-1 img');
  const slider3Images = document.querySelectorAll('.image-slider-2 img');
  const slider4Images = document.querySelectorAll('.image-slider-3 img');
  const slider5Images = document.querySelectorAll('.image-slider-4 img');
  const slider6Images = document.querySelectorAll('.image-slider-5 img');
  const eventDate = document.getElementById('event-date');
  const eventName = document.getElementById('event-name');
  const eventTitle = document.getElementById('event-title');
  const eventDescription = document.getElementById('event-description');
  
  const events = [
      {
          slider1Image: 'images/P BALAP BOSSSSSSSSSS.jpg',
          slider2Image: 'images/Puskesmas Lempake (1).jpeg',
          slider3Image: 'images/vaksin (1).JPG',
          slider4Image: 'images/anbk1.jpg',
          slider5Image: 'images/upacara3.JPG',
          slider6Image: 'images/olymp1.JPG',
          date: '25 / 9 / 2024',
          name: 'Kegiatan 17 Agustus ke 79',
          title: 'Lomba Balap Karung',
          description: 'Lomba Karung ini memperingati Kemerdekaan Indonesia ke 79.'
      },
      {
          slider1Image: 'images/Lomba Kaligrafi.JPG',
          slider2Image: 'images/Puskesmas Lempake (2).jpeg',
          slider3Image: 'images/vaksin (2).JPG',
          slider4Image: 'images/anbk2.jpg',
          slider5Image: 'images/upacara1.JPG',
          slider6Image: 'images/olymp2.JPG',
          date: '26 / 9 / 2024',
          name: 'Kegiatan 26 September',
          title: 'Lomba Kaligrafi',
          description: 'Lomba Kaligrafi 17 Agustus 2024: Mengukir keindahan seni tulisan dengan semangat kemerdekaan.'
      },
      {
          slider1Image: 'images/1723688608717 (1).JPG',
          slider2Image: 'images/Puskesmas Lempake (3).jpeg', // Misalnya jika tidak ada gambar kedua
          slider3Image: 'images/vaksin (3).JPG',
          slider4Image: 'images/anbk3.jpg',
          slider5Image: 'images/upacara2.JPG',
          slider6Image: 'images/olymp3.JPG',
          date: '27 / 9 / 2024',
          name: 'Kegiatan 27 September',
          title: 'Lomba Adzan 17 Agustus ke 79',
          description: 'Lomba Adzan 17 Agustus 2024: Mengumandangkan panggilan suci dengan semangat kemerdekaan.'
      }
  ];
  
  let currentIndexSlider1 = 0;
  let currentIndexSlider2 = 0;
  let currentIndexSlider3 = 0;
  let currentIndexSlider4 = 0;
  let currentIndexSlider5 = 0;
  let currentIndexSlider6 = 0;
  
  // Function to change images in the first slider
  function changeSlider1Images() {
      const prevIndex = currentIndexSlider1; // Track the previous image index
      currentIndexSlider1 = (currentIndexSlider1 + 1) % events.length;
  
      // Update images for slider 1
      slider1Images.forEach((img, index) => {
          img.classList.remove('active'); // Fade out all images
          if (index === currentIndexSlider1) {
              img.src = events[currentIndexSlider1].slider1Image; // Update source for slider 1
              img.classList.add('active'); // Fade in the new image
          }
      });
  }
  
  // Function to change images in the second slider
  function changeSlider2Images() {
      const prevIndex = currentIndexSlider2; // Track the previous image index
      currentIndexSlider2 = (currentIndexSlider2 + 1) % events.length;
  
      // Update images for slider 2
      slider2Images.forEach((img, index) => {
          img.classList.remove('active'); // Fade out all images
          if (index === currentIndexSlider2) {
              img.src = events[currentIndexSlider2].slider2Image; // Update source for slider 2
              img.classList.add('active'); // Fade in the new image
          }
      });
  }
  
  // Function to change images in the third slider
  function changeSlider3Images() {
      const prevIndex = currentIndexSlider3; // Track the previous image index
      currentIndexSlider3 = (currentIndexSlider3 + 1) % events.length;
  
      // Update images for slider 3
      slider3Images.forEach((img, index) => {
          img.classList.remove('active'); // Fade out all images
          if (index === currentIndexSlider3) {
              img.src = events[currentIndexSlider3].slider3Image; // Update source for slider 3
              img.classList.add('active'); // Fade in the new image
          }
      });
  }
  
  // Function to change images in the third slider
  function changeSlider4Images() {
    const prevIndex = currentIndexSlider4; // Track the previous image index
    currentIndexSlider4 = (currentIndexSlider4 + 1) % events.length;

    // Update images for slider 4
    slider4Images.forEach((img, index) => {
        img.classList.remove('active'); // Fade out all images
        if (index === currentIndexSlider4) {
            img.src = events[currentIndexSlider4].slider4Image; // Update source for slider 3
            img.classList.add('active'); // Fade in the new image
        }
    });
}

  // Function to change images in the FOURTH slider
  function changeSlider5Images() {
    const prevIndex = currentIndexSlider5; // Track the previous image index
    currentIndexSlider5 = (currentIndexSlider5 + 1) % events.length;

    // Update images for slider 4
    slider5Images.forEach((img, index) => {
        img.classList.remove('active'); // Fade out all images
        if (index === currentIndexSlider5) {
            img.src = events[currentIndexSlider5].slider5Image; // Update source for slider 3
            img.classList.add('active'); // Fade in the new image
        }
    });
}
// FIFTH
function changeSlider6Images() {
  const prevIndex = currentIndexSlider6; // Track the previous image index
  currentIndexSlider6 = (currentIndexSlider6 + 1) % events.length;

  // Update images for slider 4
  slider6Images.forEach((img, index) => {
      img.classList.remove('active'); // Fade out all images
      if (index === currentIndexSlider6) {
          img.src = events[currentIndexSlider6].slider6Image; // Update source for slider 3
          img.classList.add('active'); // Fade in the new image
      }
  });
}
  // Update event details (date, name, title, description)
  function updateEventDetails() {
      eventDate.textContent = events[currentIndexSlider1].date; // Use the current index of the first slider
      eventName.textContent = events[currentIndexSlider1].name;
      eventTitle.textContent = events[currentIndexSlider1].title;
      eventDescription.textContent = events[currentIndexSlider1].description;
  }
  
  // Call the functions initially to set the first images and event details
  changeSlider1Images();
  changeSlider2Images();
  changeSlider3Images();
  changeSlider4Images();
  changeSlider5Images();
  changeSlider6Images();
  updateEventDetails();
  
  // Set intervals for each slider to change at different times
  setInterval(() => {
      changeSlider1Images();
      updateEventDetails(); // Update event details when slider 1 changes
  }, 4000); // Change every 4 seconds for slider 1
  
  setInterval(changeSlider2Images, 6000); // Change every 6 seconds for slider 2
  setInterval(changeSlider3Images, 8000); // Change every 8 seconds for slider 3
  setInterval(changeSlider4Images, 7000); // Change every 8 seconds for slider 4
  setInterval(changeSlider5Images, 5000); // Change every 8 seconds for slider 4
  setInterval(changeSlider6Images, 7000); // Change every 8 seconds for slider 4
  
})(jQuery);
