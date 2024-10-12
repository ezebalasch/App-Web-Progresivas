import { getImages } from "./api.js";


let cardContainer = document.querySelector("#menu_container");

export function createCards() {
    getImages().then((data) => {
      data.map((image) => {
        
          let card = 
`       <div style="display: flex; justify-content: center;">
          <div class="card shadow-sm" style="width:75vw;heigth:60vw; max-width:600px">
            <img style="object-fit:cover; " src="${image.imagen}" alt="logo principal">

            <div class="card-body">
              <p class="card-text">${image.titulo}</p>
                <small class="text-body-secondary">${new Date(image.fecha).toLocaleDateString('es-ES')}</small>
              </div>
            </div>
          </div>
        </div>`;
  
  
        cardContainer.innerHTML += card;
      
      });
    });
    
  }
  createCards();
