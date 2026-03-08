document.addEventListener("DOMContentLoaded", () => {
  renderCards("hotels", "hotelsGrid");
  renderCards("yachts", "yachtsGrid");
  renderCards("cars", "carsGrid");
});

function renderCards(type, gridId) {
  const grid = document.getElementById(gridId);

  DATA[type].sort((a, b) => a.rank - b.rank).forEach(item => {
    imageLink = "images/" + type + "/" + item.rank + ".jpg";
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
          <p>${item.city}</p>
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



