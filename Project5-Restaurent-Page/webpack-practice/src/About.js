import './style.css';
import burgerImage from '../Assests/30 People Who Sadly Lost The Food Lottery And Shared Their Unfortunate Pics Online.jpg';

export function about() {
    const divContent = document.querySelector("#content");
    divContent.innerHTML = ``;

    const textDiv = document.createElement("div");
    textDiv.id = "text";
    textDiv.innerHTML = `
      <h3>
      A local Karachi-made burger joint brings a unique blend of flavors, combining traditional spices with classic burger recipes. Popular for its affordability and bold taste, it attracts food lovers across the city. With fresh ingredients, vibrant sauces, and a welcoming ambiance, it’s a must-visit spot for authentic Karachi street food vibes.
      </h3>
    `;
    Object.assign(textDiv.style, {
      fontSize: "30px",
      lineHeight: "2", 
      width: "50%",
      height: "100%",
      color: "#fff",
      textAlign: "center"
    });

    const imgDiv = document.createElement("div");
    imgDiv.id = "image";
    imgDiv.innerHTML = `
    <img 
    src="${burgerImage}" 
    alt="Burger Picture" 
    style="
      max-width: 100%; 
      max-height: 90%; 
      object-fit: cover; 
      border-radius: 12px; 
      transform: rotate(4deg);
    "
  >
    `;
    Object.assign(imgDiv.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      height: "100%",
    });

    Object.assign(divContent.style, {
      display: "flex",
      flexDirection: "row",
      height: "90vh",
      width: "100%",
      backgroundColor: "#d94539",
    });

    divContent.appendChild(textDiv);
    divContent.appendChild(imgDiv);
};
