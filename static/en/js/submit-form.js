document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(this);

    // Use fetch to send the data to the backend API
    fetch("http://localhost:8000/submit-form", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            start: formData.get("start"),
            end: formData.get("end"),
            name: formData.get("name"),
            mail: formData.get("mail"),
            title: formData.get("title"),
            message: formData.get("message")
        })
    })
    // Assuming the API returns JSON response
    // .then(response => response.json()) 
    // Redirect to 'Thank you' page
    .then(data => window.location.href = "/thank-you")
    .catch(error => {
        console.error("Error:", error);
        window.location.href = "/booking-error"
    });
});
