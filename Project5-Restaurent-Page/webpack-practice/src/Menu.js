

import './style.css';
import bur1 from '../Assests/Smash burger.jpg';
import bur2 from '../Assests/Vance Studios.jpg';
import bur3 from '../Assests/인스파이어 SC 영상컨셉.jpg';

export function menu() {
  const divContent = document.querySelector("#content");
  divContent.innerHTML = "";

  const createBurgerCard = (image, title) => {
    const card = document.createElement("div");
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    const contentDiv = document.createElement("div");
    const heading = document.createElement("h3");
    const button = document.createElement("button");

    img.src = image;
    heading.textContent = title;
    button.textContent = "Add to Cart";
    Object.assign(card.style, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      height: "400px",
      backgroundColor: "#f1e7db",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      padding: "20px",
      textAlign: "center",
    });

    Object.assign(imgDiv.style, {
      width: "100%",
      height: "200px",
      overflow: "hidden",
      borderRadius: "8px",
    });

    Object.assign(img.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    });

    // Apply styles to content
    Object.assign(contentDiv.style, {
      marginTop: "10px",
    });

    Object.assign(heading.style, {
      margin: "10px 0",
      fontSize: "18px",
      fontWeight: "bold",
    });

    Object.assign(button.style, {
      padding: "10px 20px",
      fontSize: "14px",
      border: "none",
      backgroundColor: "#ff6347",
      color: "#fff",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    });

    imgDiv.appendChild(img);
    contentDiv.appendChild(heading);
    contentDiv.appendChild(button);
    card.appendChild(imgDiv);
    card.appendChild(contentDiv);
    return card;
  };

  const burger1 = createBurgerCard(bur1, "Double Beef Burger");
  const burger2 = createBurgerCard(bur2, "Crispy Zinger Burger");
  const burger3 = createBurgerCard(bur3, "Crispy Fry Burger");
  divContent.appendChild(burger1);
  divContent.appendChild(burger2);
  divContent.appendChild(burger3);

  Object.assign(divContent.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    height: "90vh",
    width: "100%",
  });
}
