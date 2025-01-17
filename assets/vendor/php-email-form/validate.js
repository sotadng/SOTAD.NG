document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const form = e.target;
    const formData = new FormData(form);

    // Show loading indicator
    const loadingDiv = document.querySelector(".loading");
    const sentMessageDiv = document.querySelector(".sent-message");
    const errorMessageDiv = document.querySelector(".error-message");

    loadingDiv.style.display = "block";
    sentMessageDiv.style.display = "none";
    errorMessageDiv.style.display = "none";

    // Send the form data using fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        loadingDiv.style.display = "none"; // Hide loading indicator

        if (response.ok) {
          // Show success message
          sentMessageDiv.style.display = "block";
          form.reset(); // Reset the form
        } else {
          // Show error message
          errorMessageDiv.style.display = "block";
        }
      })
      .catch(() => {
        // Hide loading indicator and show error message on failure
        loadingDiv.style.display = "none";
        errorMessageDiv.style.display = "block";
      });
  });