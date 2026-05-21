// GET STARTED BUTTON

document.getElementById("whatsappBtn")
.addEventListener("click", () => {

    const phone = "918109944185";

    const message =
    "Hello, I want to join your gym. Please send me the plans and timings.";

    const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});