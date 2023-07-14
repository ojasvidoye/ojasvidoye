// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function loadModal(title, thumb, body, launchLink) {
  // Reference modal elements
	var modalTitle = document.querySelector(".modal-title");
	var modalThumb = document.querySelector(".modal-thumb img");
	var modalBody = document.querySelector(".modal-body");
	var modalFooterLink = document.querySelector(".modal-footer a");

  // Dynamically fill content of modal with function call
  modalTitle.innerHTML = title;
  modalThumb.src = "img/portfolio-screen-shots/" + thumb;
  modalBody.innerHTML = body;
  modalFooterLink.setAttribute("href", launchLink);
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Send the form data using EmailJS
    emailjs.sendForm("your-service-id", "your-template-id", this)
        .then(function(response) {
            // Display a success message
            alert("Message sent successfully!");
            // Reset the form after submission
            document.getElementById("contact-form").reset();
        }, function(error) {
            // Display an error message
            alert("Error sending message. Please try again later.");
        });
});