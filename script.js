document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    //el siguiente fetch envía los datos al servidor de json levantado localmente
    fetch("http://localhost:3000/contact_data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
})
    //el siguiente then recibe la respuesta del servidor y la muestra en el html
.then(response => response.json())
.then(data => {
    const messageElement = document.getElementById("message");
    messageElement.textContent = data.message;
    console.log(JSON.stringify(formData));
});
}
);