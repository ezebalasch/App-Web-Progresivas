const apiUrl = 'https://66ff18222b9aac9c997e3f80.mockapi.io/imagenes';


export function getImages() {
    return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.reverse();
    })
    .catch(error => {
      console.error('Error al obtener datos:', error);
    });  
}