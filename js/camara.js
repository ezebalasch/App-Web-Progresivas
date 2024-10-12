
const btnCapturar = document.querySelector("button#btnCapturar")
const imagen = "";
const inputCamara = document.createElement('input')
inputCamara.type = 'file'
inputCamara.id = 'inputFile'
inputCamara.accept = '.png, .jpg, .webp'
inputCamara.capture = 'environment'

inputCamara.addEventListener('change', () => {
    const imagenCaptura = URL.createObjectURL(inputCamara.files[0]);
    imagen.src = imagenCaptura;

    Swal.fire({
        title: 'Publicar Imagen',
        html: `
        <img src="${imagenCaptura}" style="max-height: 400px;max-width: 400px; object-fit: cover; width: auto; margin-top: 10px;" />
            <input id="titulo" class="swal2-input" placeholder="Título" />
            <input id="fecha" type="date" class="swal2-input" />
        `,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Publicar',
        cancelButtonText: `Cancelar`,
        cancelButtonColor: "#d33",
        preConfirm: () => {
            const titulo = document.getElementById('titulo').value;
            const fecha = document.getElementById('fecha').value;

            const data = {
                titulo: titulo,
                fecha: fecha,
                imagen: imagenCaptura
            };
            fetch('https://66ff18222b9aac9c997e3f80.mockapi.io/imagenes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la red');
                }
                return response.json();
            })
            .then(data => {
                console.log('Éxito:', data);
                Swal.fire('¡Éxito!', 'Foto publicada correctamente.', 'success').then(() => {
                    location.reload();
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire('Error', 'No se pudieron enviar los datos.', 'error');
            });
        }

    });
});

btnCapturar.addEventListener('click', ()=> inputCamara.click() );
