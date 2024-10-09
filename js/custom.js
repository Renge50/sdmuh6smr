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
<<<<<<< HEAD
  const slider4Images = document.querySelectorAll('.image-slider-3 img');
=======
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
  const eventDate = document.getElementById('event-date');
  const eventName = document.getElementById('event-name');
  const eventTitle = document.getElementById('event-title');
  const eventDescription = document.getElementById('event-description');
  
  const events = [
<<<<<<< HEAD
    {
        slider1Image: 'images/P BALAP BOSSSSSSSSSS.jpg',
        slider2Image: 'images/Puskesmas Lempake (1).jpeg',
        slider3Image: 'images/vaksin (1).JPG',
        slider4Image: ['images/IMG_4224.JPG', // New image for slider 4
        'images/20241005083904_IMG_4342.JPG',
        'images/20241005084049_IMG_4343.JPG'],
        date: '25 / 9 / 2024',
        name: 'Kegiatan 17 Agustus ke 79',
        title: 'Lomba Balap Karung',
        description: 'Lomba Karung ini memperingati Kemerdekaan Indonesia ke 79.'
    },
    {
        slider1Image: 'images/Lomba Kaligrafi.jpg',
        slider2Image: 'images/Puskesmas Lempake (2).jpeg',
        slider3Image: 'images/vaksin (2).JPG',
        slider4Image: 'images/IMG_4066.JPG', // New image for slider 4
        date: '26 / 9 / 2024',
        name: 'Kegiatan 26 September',
        title: 'Lomba Kaligrafi',
        description: 'Lomba Kaligrafi 17 Agustus 2024: Mengukir keindahan seni tulisan dengan semangat kemerdekaan.'
    },
    {
        slider1Image: 'images/1723688608717 (1).jpg',
        slider2Image: 'images/Puskesmas Lempake (3).jpeg',
        slider3Image: 'images/vaksin (3).JPG',
        slider4Image: 'images/20241005094333_IMG_4415.JPG', // New image for slider 4
        date: '27 / 9 / 2024',
        name: 'Kegiatan 27 September',
        title: 'Lomba Adzan 17 Agustus ke 79',
        description: 'Lomba Adzan 17 Agustus 2024: Mengumandangkan panggilan suci dengan semangat kemerdekaan.'
    }
];

=======
      {
          slider1Image: 'images/P BALAP BOSSSSSSSSSS.jpg',
          slider2Image: 'images/Puskesmas Lempake (1).jpeg',
          slider3Image: 'images/vaksin (1).JPG',
          date: '25 / 9 / 2024',
          name: 'Kegiatan 17 Agustus ke 79',
          title: 'Lomba Balap Karung',
          description: 'Lomba Karung ini memperingati Kemerdekaan Indonesia ke 79.'
      },
      {
          slider1Image: 'images/Lomba Kaligrafi.JPG',
          slider2Image: 'images/Puskesmas Lempake (2).jpeg',
          slider3Image: 'images/vaksin (2).JPG',
          date: '26 / 9 / 2024',
          name: 'Kegiatan 26 September',
          title: 'Lomba Kaligrafi',
          description: 'Lomba Kaligrafi 17 Agustus 2024: Mengukir keindahan seni tulisan dengan semangat kemerdekaan.'
      },
      {
          slider1Image: 'images/1723688608717 (1).JPG',
          slider2Image: 'images/Puskesmas Lempake (3).jpeg', // Misalnya jika tidak ada gambar kedua
          slider3Image: 'images/vaksin (3).JPG',
          date: '27 / 9 / 2024',
          name: 'Kegiatan 27 September',
          title: 'Lomba Adzan 17 Agustus ke 79',
          description: 'Lomba Adzan 17 Agustus 2024: Mengumandangkan panggilan suci dengan semangat kemerdekaan.'
      }
  ];
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
  
  let currentIndexSlider1 = 0;
  let currentIndexSlider2 = 0;
  let currentIndexSlider3 = 0;
<<<<<<< HEAD
  let currentIndexSlider4 = 0; 
=======
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
  
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
<<<<<<< HEAD
  function changeSlider4Images() {
    const totalImages = slider4Images.length; // Total number of images (6 in this case)
    
    // Remove 'active' class from all images
    slider4Images.forEach(img => img.classList.remove('active'));

    // Update to the next image and add 'active' class
    currentIndexSlider4 = (currentIndexSlider4 + 1) % totalImages;
    slider4Images[currentIndexSlider4].classList.add('active'); // Add 'active' class to the current image
}

=======
  
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
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
<<<<<<< HEAD
  changeSlider4Images();
=======
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
  updateEventDetails();
  
  // Set intervals for each slider to change at different times
  setInterval(() => {
      changeSlider1Images();
      updateEventDetails(); // Update event details when slider 1 changes
  }, 4000); // Change every 4 seconds for slider 1
  
  setInterval(changeSlider2Images, 6000); // Change every 6 seconds for slider 2
  setInterval(changeSlider3Images, 8000); // Change every 8 seconds for slider 3
<<<<<<< HEAD
  setInterval(changeSlider4Images, 3000); // Change every 3 seconds for slider 4
=======
>>>>>>> 27722a3a9e1b2f78c187c20f0787e5512c3f1e0c
  
})(jQuery);
