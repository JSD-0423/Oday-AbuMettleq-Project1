function createArticles() {
  articles.sort((a, b) => 0.5 - Math.random());
  let gridContainer = document.querySelector(".grid-container");

  let html = "";

  for (let i = 0; i < articles.length; i++) {
    let ratingStars = "";

    for (let j = 0; j < 4; j++) {
      ratingStars += `<ion-icon name="star" class="rate-star"></ion-icon>`;
    }

    ratingStars += `<ion-icon name="star-half-outline" class="rate-star"></ion-icon>`;

    html += `<article class="grid-item">
    <img src="${articles[i].image}" alt="${articles[i].title}">
    
      <section>
      
        <div>
          <h3>${articles[i].category}</h3>
          <h2>${articles[i].title}</h2>
        </div>
  
        <div class="rating">${ratingStars}</div>
        <h3 class="author">Author: ${articles[i].author}</h3>
  
      </section>
    </article>`;
  }

  gridContainer.innerHTML = html;
}

const popupButton = document.querySelector(".favorite-btn");
const popupContainer = document.querySelector(".favorites");

popupButton.addEventListener("click", function () {
  popupContainer.classList.toggle("active");
});
createArticles();
