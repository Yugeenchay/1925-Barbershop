document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const barber = document.getElementById('barber').value;

    if (name && phone && date && time && barber) {
        alert('Booking Successful!\n' +
              `Name: ${name}\n` +
              `Phone: ${phone}\n` +
              `Date: ${date}\n` +
              `Time: ${time}\n` +
              `Barber: ${barber}`);
    } else {
        alert('Please fill in all fields.');
    }
});
