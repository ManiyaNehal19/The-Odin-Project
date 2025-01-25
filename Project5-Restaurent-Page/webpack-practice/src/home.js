
import burgerImage from '../Assests/Selbstgemachte Pommes_ So werden sie perfekt _ Stories _ Kitchen Stories.jpg';
import './style.css';
export function home() {
  const divContent = document.querySelector("#content");
  divContent.innerHTML = ``;
  const textDiv = document.createElement("div");
  textDiv.id = "text";
  textDiv.innerHTML = `
    <h1>
      Burger Made With Love in Karachi City
    </h1>
  `;
  Object.assign(textDiv.style, {
    fontSize:"68px",
    width: "50%",
    height: "100%",
    color: "#fff",
    
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
}
