document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById("whatsappBtn");

  // CAMBIÁ ESTE NÚMERO POR EL TUYO
  const telefono = "549xxxxxxx"; // sin el +

  const mensaje = "Hola, quiero registrarme y obtener el bono.";
  btn.href = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
});
