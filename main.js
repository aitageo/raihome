    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        const botonReserva = document.querySelector(".reservas");

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            botonReserva.style.display = "block";
        } else {
            header.classList.remove("scrolled");
            botonReserva.style.display = "none";
        }
    });