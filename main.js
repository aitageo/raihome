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

const buttons = document.querySelectorAll(".reservas");
const modal = document.querySelector(".modal");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
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
  const mensaje = `Hola, mi nombre es ${nombre}.
  Quisiera consultar disponibilidad para una ${habitacion}.
  Llegada: ${llegada}
  Salida: ${salida}
  Huéspedes: ${huespedes}
${solicitud ? `Solicitud adicional: ${solicitud}` : ""}`;
  const telefono = "573005743054";
  const mensajeWhatsApp = encodeURIComponent(mensaje);
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tu consulta será enviada por WhatsApp",
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(() => {
    const modal = document.getElementById("reservaModal");
    const modalBootstrap = bootstrap.Modal.getInstance(modal);
    modalBootstrap.hide();
    document.getElementById('formReserva').reset();
    window.location.href = `https://wa.me/${telefono}?text=${mensajeWhatsApp}`;
  }, 1500);
});
