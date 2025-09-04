// Remove the emailjs.init() from here since it's already in HTML
function sendMail(event) {
  // Prevent form submission
  if (event) {
    event.preventDefault();
  }
  
  let params = {
    name: document.getElementById("fullName").value, // Changed to match HTML ID
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  // Check if fields are not empty
  if (!params.name || !params.email || !params.message) {
    alert("Please fill in all fields");
    return false;
  }

  emailjs.send("service_biq0c5q", "template_553k5tp", params)
    .then(function(response) {
      alert("Message sent successfully!");
      // Clear the form after successful send
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    });
    
  return false; // Prevent form submission
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
