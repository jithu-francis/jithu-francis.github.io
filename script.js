var mixer = mixitup('.project-gallery');

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach((link) => {
                link.classList.remove("active");
                let activeLink = document.querySelector("header nav a[href*='" + id + "']");
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading, .input-group-2, .service-top', {origin: 'top'});
ScrollReveal().reveal('.home-content h1, .main-text, .service-left, .timeline-left', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .social-icons, .btn-group, .skill-left h3, .timeline-right, .service-right, .filter-buttons, .form-btn', {origin: 'right'});
ScrollReveal().reveal('.home-img, .skill-bar, .project-box, .input-group, .service-bottom', {origin: 'bottom'});


// $('#gform').on('submit', function(e) {
//     e.preventDefault();
//     $.ajax({
//       url: $(this).attr('action'),
//       method: $(this).attr('method'),
//       data: $(this).serialize(),
//       success: function(response) {
//           // Clear all input values
//           $('#gform')[0].reset();
//         alertbox.render({
//           alertIcon: 'success',
//           title: 'Thank You!',
//           message: 'Your message has been sent successfully.',
//           btnTitle: 'Ok',
//           themeColor: '#000000',
//           btnColor: '#7CFC00'
//         });
//       },
//       error: function() {
//         alertbox.render({
//           alertIcon: 'error',
//           title: 'Error',
//           message: 'There was an error sending your message. Please try again later.',
//           btnTitle: 'Ok',
//           themeColor: '#000000',
//           btnColor: '#FF0000'
//         });
//       }
//     });
//   });

$(document).ready(function() {
    $('#gform').on('submit', function(e) {
        e.preventDefault();

        // Clear previous error messages
        $('.error-text').hide();

        // Form validation
        let isValid = true;

        // Validate Full Name
        if ($('#name').val().trim() === '') {
            $('.error-name').show();
            isValid = false;
        }

        // Validate Email
        if ($('#email').val().trim() === '') {
            $('.error-email').show();
            isValid = false;
        }

        // Validate Phone Number
        if ($('#phone').val().trim() === '') {
            $('.error-phone').show();
            isValid = false;
        }

        // Validate Subject
        if ($('#subject').val().trim() === '') {
            $('.error-subject').show();
            isValid = false;
        }

        // Validate Message
        if ($('#message').val().trim() === '') {
            $('.error-message').show();
            isValid = false;
        }

        // If the form is valid, proceed with the AJAX request
        if (isValid) {
            // Disable the submit button to prevent multiple submissions
            $('.form-btn').attr('disabled', true);

            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),
                success: function(response) {
                    // Clear all input values
                    $('#gform')[0].reset();

                    // Re-enable the submit button
                    $('.form-btn').attr('disabled', false);

                    // Show success message
                    alertbox.render({
                        alertIcon: 'success',
                        title: 'Thank You!',
                        message: 'Your message has been sent successfully.',
                        btnTitle: 'Ok',
                        themeColor: '#000000',
                        btnColor: '#7CFC00'
                    });

                    // Reload the page after 3 seconds
                    // setTimeout(function() {
                    //     window.location.reload();
                    // }, 3000);
                },
                error: function() {
                    // Re-enable the submit button
                    $('.form-btn').attr('disabled', false);

                    // Show error message
                    alertbox.render({
                        alertIcon: 'error',
                        title: 'Error',
                        message: 'There was an error sending your message. Please try again later.',
                        btnTitle: 'Ok',
                        themeColor: '#000000',
                        btnColor: '#FF0000'
                    });
                }
            });
        }
    });
});
