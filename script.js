document.getElementById("bookingForm").addEventListener("submit", function (e) {
  const carType = document.getElementById("carType").value;
  const pickup = document.getElementById("pickup").value;
  const dropoff = document.getElementById("dropoff").value;
  const price = carType === "Regular" ? 3500 : 5000;

  const summary = `Booking confirmed! \nType: ${carType}, \nPickup: ${pickup}, \nDrop-off: ${dropoff}, \nPrice: From KES ${price}`;
  document.getElementById("bookingResult").innerText = summary;
});

document.getElementById("driverForm").addEventListener("submit", function (e) {
  const name = document.getElementById("driverName").value;
  const model = document.getElementById("carModel").value;
  const year = parseInt(document.getElementById("year").value);
  const phone = document.getElementById("phone").value;

  if (year < 2017) {
    alert("❌ Car year must be 2017 or newer.");
    e.preventDefault();
    return;
  }

  const summary = `Thank you ${name}, your ${model} (${year}) is under review. We will contact you on ${phone}.`;
  document.getElementById("registrationResult").innerText = summary;
});
