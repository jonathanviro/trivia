
const imagen_regalo = document.querySelector('#imagen-regalo');

const premiacion = (tipo) => {
    $('#modal-container').removeAttr('class').addClass('one');
    $('body').addClass('modal-active');

    switch (tipo) {
        case 'WIN':
            imagen_regalo.src = './src/img/ganaste.png';
            break;
        case 'LOSER':
            imagen_regalo.src = './src/img/perdio.png';
            break;
    }
};

$('#modal-container').click(function () {
    $(this).addClass('out');
     startNewGame();
    $('body').removeClass('modal-active');
});
