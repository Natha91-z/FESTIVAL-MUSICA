document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {

    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1 = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG')
        imagen.scr = 'src/img/gallery/full/${i}.jpg'
        imagen.alt = 'Imagen Galeria'

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(1)
        }
        
        galeria.appendChild(imagen)
    }

}
function mostrarImage(i) {
    const imagen = document.createElement('IMG')
    imagen.scr = 'src/img/gallery/full/${i}.jpg'
    imagen.alt = 'Imagen Galeria'

    // Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    // Boton cerrar modal 
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'x'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(cerrarModalBtn)
    modal.appendChild(imagen)

    // agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    
    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
    
}