import burgerImage from '../Assests/Selbstgemachte Pommes_ So werden sie perfekt _ Stories _ Kitchen Stories.jpg';
import './style.css';

export function home() {
  const divContent = document.querySelector("#content");

  const textDiv = document.createElement("div");
  textDiv.id = "text";
  textDiv.innerHTML = `
    <h1>
      Burger Made With Love in Kansas City
    </h1>
  `;

  const imgDiv = document.createElement("div");
  imgDiv.id = "image";
  imgDiv.innerHTML = `
    <img src="${burgerImage}" alt="Burger-Picture">
  `;

  divContent.appendChild(textDiv);
  divContent.appendChild(imgDiv);
}
