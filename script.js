document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const success = document.getElementById('successMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    const message = encodeURIComponent(
      `Hello D4D Car Wash, my name is ${name}. I would like to book a ${service} for my vehicle. My contact number is ${phone}.`
    );
    window.open(`https://wa.me/27824398370?text=${message}`, '_blank');

    success.textContent = "WhatsApp chat opened. We’ll get back to you shortly!";
    form.reset();
  });

  // set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
