document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    // El siguiente forEach convierte el objeto formData en un objeto de JavaScript
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // El siguiente fetch envía los datos al servidor local
    fetch("http://localhost:3000/contact_data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject)
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById("message");
        messageElement.textContent = data.message;
    });
});
