document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('whatsappBtn');

  // Reemplazá por tu número sin el +
  const PHONE = '5493875120099'; // ej: 54911xxxxxxx
  const TEXT = encodeURIComponent('Hola, quiero registrarme y obtener el bono en mi primer depósito.');

  btn.href = `https://wa.me/${PHONE}?text=${TEXT}`;

  // animación sutil de pulso
  btn.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-6px)' },
    { transform: 'translateY(0)' }
  ], { duration: 2800, iterations: Infinity });
});
