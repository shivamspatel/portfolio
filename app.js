function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    // Show loading state
    loading.classList.remove("hidden");

    // Send email using EmailJS
    const response = await emailjs.sendForm(
      "service_30w9tn2",
      "template_yjhflrf",
      event.target,
      "BZkIKfL-2CYb4SPVl"
    );

    console.log("Email sent successfully:", response);

    // Reset form and show success message
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");

    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch (error) {
    console.error("Error sending email:", error);
    loading.classList.add("hidden");
    alert("Please try again later or contact me at shivam2477@gmail.com");
  }
}

// template_2rpeb3u
// service_30w9tn2
// BZkIKfL-2CYb4SPVl
