document.addEventListener("DOMContentLoaded", () => {
  setupContactDetails();
  renderCards("hotels", "hotelsGrid");
  renderCards("yachts", "yachtsGrid");
  renderCards("cars", "carsGrid");
});

function setupContactDetails() {
  const phoneNumber = phone.replace(/\D/g, "");
  const formattedPhone = phone.replace(/^\+971(\d{2})(\d{3})(\d{4})$/, "+971 $1 $2 $3");

  document.querySelectorAll(".contact-phone").forEach(element => {
    element.textContent = formattedPhone;
  });

  document.querySelectorAll("[data-whatsapp-message]").forEach(link => {
    const message = link.dataset.whatsappMessage;
    link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  });
}

function renderCards(type, gridId) {
  const grid = document.getElementById(gridId);

  DATA[type].sort((a, b) => a.rank - b.rank).forEach(item => {
    const imageLink = "images/" + type + "/" + item.rank + ".jpg";
    const summary = item.city || item.location || "";
    grid.innerHTML += `
      <div class="card"
        role="button"
        tabindex="0"
        onclick="goToDetails(${item.rank}, '${type}')"
        onkeypress="if(event.key==='Enter'){goToDetails(${item.rank}, '${type}')}">

        <div class="card-img">
          <img src="${imageLink}" alt="${item.name}">
        </div>

        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${summary}</p>
        </div>
      </div>
    `;
  });
}


function goToDetails(id, type) {
  window.location.href = `details.html?id=${id}&type=${type}`;
}

function goTo(page) {
  window.location.replace(`index.html#${page}`);

}



