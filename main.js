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
    
// const elementos = document.querySelectorAll('.scroll-animate');
// const observer = new IntersectionObserver((entries) => {
//        entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//              console.log("ENTRÓ AL VIEWPORT:", entry.target);
//             entry.target.classList.add('animate__animated');
//             // entry.target.classList.add('animate__fadeInLeft');
//         }
//     });
// }, { threshold: 0.2});

// elementos.forEach((elemento) => {
//     observer.observe(elemento);
// });
});
const buttons = document.querySelectorAll(".reservas");
const modal = document.querySelector(".modal");
const habitacion = document.getElementById("habitacion");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
         habitacion.value = button.dataset.habitacion;
        const modalBootstrap = new bootstrap.Modal(modal);
        modalBootstrap.show();
    });
});
const consultar = document.getElementById("consultar");
consultar.addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const habitacion = document.getElementById("habitacion").value;
    const llegada = document.getElementById("llegada").value;
    const salida = document.getElementById("salida").value;
    const huespedes = document.getElementById("huespedes").value;
    const solicitud = document.getElementById("solicitud").value;
  if (
    nombre.trim() === "" ||
    habitacion.trim() === "" ||
    llegada.trim() === "" ||
    salida.trim() === "" ||
    huespedes.trim() === ""
  ) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor completa todos los campos obligatorios."
    });

    return;
  }
    const mensaje = `Hola, mi nombre es ${nombre}.
   Quisiera consultar disponibilidad para una ${habitacion}.
   Llegada: ${llegada}
   Salida: ${salida}
   Huéspedes: ${huespedes}
${solicitud.trim() !== "" ? `Solicitud adicional: ${solicitud}` : ""}`;
const telefono = "573332331607";
const mensajeWhatsApp = encodeURIComponent(mensaje);
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu consulta será enviada por WhatsApp",
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(() => {
        const modalReserva = document.getElementById("reservaModal");
        const modalBootstrap = bootstrap.Modal.getInstance(modalReserva);
        if (modalBootstrap) {
            modalBootstrap.hide();
        }
        document.getElementById("formReserva").reset();
        window.location.href = `https://wa.me/${telefono}?text=${mensajeWhatsApp}`;
    }, 1500);
});