document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(this);
    const queryParams = new URLSearchParams({
        startDate: formData.get("start"),
        endDate: formData.get("end"),
        numAdults: formData.get("num-adults"),
        numChildren: formData.get("num-children"),
        numPets: formData.get("num-pets"),
        firstName: formData.get("firstname"),
        lastName: formData.get("lastname"),
        address: formData.get("address"),
        postalCode: formData.get("postal-code"),
        city: formData.get("city"),
        country: formData.get("country"),
        emailAddress: formData.get("mail"),
        messageBody: formData.get("message"),
    });

    // TODO: backend URL
    //const baseUrl = "http://localhost:8080/api/v1/reservation"
    const baseUrl = "https://gasthaus-wini.com/api/v1/reservation"
    fetch(`${baseUrl}?${queryParams.toString()}`, { method: "GET" })
        .then(response => response.json())
        .then(data => window.location.href = "/thank-you")
        .catch(error => {
            console.error("Error:", error);
            window.location.href = "/booking-error"
        });
});
