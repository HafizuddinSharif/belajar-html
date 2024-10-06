// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const form = document.querySelector('form[action="/submit"]');

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Create a string to hold the form data
    let formDataString = "";

    // Iterate through the form data and add it to the string
    for (let [key, value] of formData.entries()) {
      formDataString += `${key}: ${value}\n`;
    }

    // Alert the user that the form is being sent and show the form data
    alert("Maklumat yang dihantar:\n" + formDataString);

    // Send the form data to the server using fetch
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // You can add additional success handling here
      })
      .catch((error) => {
        console.error("Error:", error);
        // You can add additional error handling here
      });
  });
});
