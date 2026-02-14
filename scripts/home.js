document.addEventListener("DOMContentLoaded", () => {
  renderCards("hotel", "hotelsGrid");
  renderCards("yacht", "yachtsGrid");
  renderCards("car", "carsGrid");
});

function renderCards(type, gridId) {
  const grid = document.getElementById(gridId);

  DATA[type].forEach(item => {
    grid.innerHTML += `
      <div class="card"
        role="button"
        tabindex="0"
        onclick="goToDetails(${item.id}, '${type}')"
        onkeypress="if(event.key==='Enter'){goToDetails(${item.id}, '${type}')}">

        <div class="card-img">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${item.location}</p>
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
