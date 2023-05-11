function createArticles() {
   articles.sort((a, b) => 0.5 - Math.random());
  var gridContainer = document.querySelector(".grid-container");

  for (let i = 0; i <= articles.length; i++) {
    let article = document.createElement("article");
    article.classList.add("grid-item");

    let image = document.createElement("img");
    image.src = articles[i].image;
    image.alt = articles[i].title;

    let section = document.createElement("section");
    let h3_1 = document.createElement("h3");
    h3_1.textContent = "Web Development Languages";
    let h2 = document.createElement("h2");
    h2.textContent = articles[i].title;
    let rating = document.createElement("div");
    rating.classList.add("rating");

    for (let i = 0; i < 4; i++) {
      let icon = document.createElement("ion-icon");
      icon.setAttribute("name", "star");
      icon.classList.add("rate-star");
      rating.appendChild(icon);
    }
    let icon = document.createElement("ion-icon");
    icon.setAttribute("name", "star-half-outline");
    icon.classList.add("rate-star");
    rating.appendChild(icon);
    let author = document.createElement("h3");
    author.classList.add("author");
    author.textContent = `Author: ${articles[i].author}`;

    section.appendChild(h3_1);
    section.appendChild(h2);
    section.appendChild(rating);
    section.appendChild(author);

    article.appendChild(image);
    article.appendChild(section);

    gridContainer.appendChild(article);
  }
}

createArticles();
