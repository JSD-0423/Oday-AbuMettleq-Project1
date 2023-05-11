const articles = [
  {
    image: "./assets/logos/accessibility.png",
    title: "HTML",
    author: "Sarah smith",
  },
  {
    image: "./assets/logos/css.webp",
    title: "CSS",
    author: "David Lee",
  },
  {
    image: "./assets/logos/jquery.png",
    title: "jQuery",
    author: "John Johnson",
  },
  {
    image: "./assets/logos/angular.png",
    title: "Angular",
    author: "Jessica Davis",
  },
  {
    image: "./assets/logos/react.webp",
    title: "React",
    author: "Olivia Martinez",
  },
  {
    image: "./assets/logos/flask.webp",
    title: "Flask",
    author: "Ethan Thompson",
  },
  {
    image: "./assets/logos/sql.png",
    title: "SQL",
    author: "Madison Davis",
  },
  {
    image: "./assets/logos/nosql.png",
    title: "NoSQL",
    author: "Isabella Wilson",
  },
  {
    image: "./assets/logos/restapi.jpeg",
    title: "REST APIs",
    author: "Jacob Garcia",
  },
  {
    image: "./assets/logos/graphql.png",
    title: "GraphQL",
    author: "Mia Brown",
  },
  {
    image: "./assets/logos/oauth.png",
    title: "OAuth",
    author: "Evelyn Nguyen",
  },
  {
    image: "./assets/logos/json.png",
    title: "JSON",
    author: "Lian Hernandez",
  },
  {
    image: "./assets/logos/ajax.gif",
    title: "AJAX",
    author: "Avery Perez",
  },
  {
    image: "./assets/logos/wai.jpeg",
    title: "WebSockets",
    author: "Victoria Kim",
  },
  {
    image: "./assets/logos/responsive.gif",
    title: "Responsive Design",
    author: "Ryan Jones",
  },
  {
    image: "./assets/logos/accessibility.png",
    title: "Accessibilty",
    author: "Samantha Martin",
  },
  {
    image: "./assets/logos/ux.jpeg",
    title: "User Experience(UX)",
    author: "Luke Davis",
  },
  {
    image: "./assets/logos/ux.jpeg",
    title: "User Interface (UI)",
    author: "Grace Wilson",
  },
  {
    image: "./assets/logos/design-systems.jpeg",
    title: "Design Systems",
    author: "Noah Martinez",
  },
  {
    image: "./assets/logos/performance.png",
    title: "Performance Optimization",
    author: "Chloe Taylor",
  },
  {
    image: "./assets/logos/cross-browser.jpeg",
    title: "Cross-Compatibility",
    author: "David Lee",
  },
  {
    image: "./assets/logos/web-security.jpeg",
    title: "Web Security",
    author: "Gabriel Hernandez",
  },
  {
    image: "./assets/logos/testing.jpeg",
    title: "Testing and Debugging",
    author: "Avery Perez",
  },
  {
    image: "./assets/logos/ci-cd.jpeg",
    title: "Continuous Integration",
    author: "Madison Davis",
  },
  {
    image: "./assets/logos/devops.png",
    title: "DevOps",
    author: "Isabella Wilson",
  },
  {
    image: "./assets/logos/cloud.jpeg",
    title: "Cloud Computing",
    author: "Jacob Garcia",
  },
  {
    image: "./assets/logos/docker.png",
    title: "Docker",
    author: "Mia Brown",
  },
  {
    image: "./assets/logos/microservices.png",
    title: "MicroServices",
    author: "Evelyn Nguyen",
  },
  {
    image: "./assets/logos/pwa.png",
    title: "Progressive Web Apps",
    author: "Lian Hernandez",
  },
  {
    image: "./assets/logos/wai.jpeg",
    title: "Web Accessibility Initiaive",
    author: "Avery Perez",
  },
  {
    image: "./assets/logos/cms.png",
    title: "Content Mangment Systems",
    author: "Victoria Kim",
  },
  {
    image: "./assets/logos/analytics.png",
    title: "Web Analytics",
    author: "Ryan Jones",
  },
];

function createArticles() {
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
