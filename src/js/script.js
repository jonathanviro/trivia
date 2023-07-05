const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.container-suggestions');
const contentContainer = document.querySelector('.content-container');
const btnJugar = document.querySelector('#btnJugar');


const searchLink = document.querySelector('a');

inputSearch.onkeyup = (e) => {
    let userData = e.target.value;
    let matchList = [];
    if (userData) {
        matchList = suggestions.filter((data) => {
            return data.description.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
        });

        matchList = matchList.map((data) => {
            return (data = `<li onclick='select(${data.id})'>${data.description}</li>`);
        });
        searchContainer.classList.add('active');
        showSuggestions(matchList);
    } else {
        searchContainer.classList.remove('active');
    }
};

function select(idStand) {
    let selectUserData = idStand.textContent;
    inputSearch.value = selectUserData;

    // Ocultar el contenedor de búsqueda y mostrar el contenido principal
    searchContainer.style.display = 'none';
    contentContainer.display = 'block';

    // Crear un elemento <img> para mostrar la imagen
    let imageElement = document.createElement('img');
    imageElement.src = `./src/img/ruta_2/${idStand}.png`;
    imageElement.alt = 'Imagen de ruta pantalla completa';
    imageElement.classList.add('img-pantalla-completa');

    // Crear un botón para regresar a la vista anterior
    let backButton = document.createElement('img');
    backButton.src = './src/img/salir.png';
    imageElement.alt = 'boton salir';
    backButton.classList.add('back-button');

    // Agregar un evento de clic al botón para volver a la vista anterior
    backButton.addEventListener('click', () => {
        // Mostrar nuevamente el contenedor de búsqueda y ocultar el contenido principal
        searchContainer.style.display = 'block';
        contentContainer.style.display = 'none';

        // Vaciar el campo de entrada
        inputSearch.value = '';
        searchContainer.classList.remove('active');

        // Eliminar la imagen y el botón de la ventana actual
        document.body.removeChild(imageElement);
        document.body.removeChild(backButton);
    });

    // Agregar la imagen y el botón al cuerpo del documento
    document.body.appendChild(imageElement);
    document.body.appendChild(backButton);
}

const showSuggestions = (list) => {
    let listData;
    if (!list.length) {
        // userValue = inputSearch.value;
        // listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join(' ');
    }
    boxSuggestions.innerHTML = listData;
};

 btnJugar.addEventListener('click', () => {
     window.location.href = './src/views/trivia.html';
 });