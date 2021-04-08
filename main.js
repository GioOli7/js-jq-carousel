$(document).ready( function() {
    // ref
    var prev = $('.slider-wrapper .prev');
    var next = $('.slider-wrapper .next');

    prev.click( function() {
        slider('prev');
    })

    next.click( function() {
        slider('next');
    })


})

/****************************************************************
 *  FUNCTIONS
 ****************************************************************/

function slider(direction){
    // inserisco in una variabile l'immagine che è active
    activeImage = $('.images .active')

    // a prescindere dalla direzione, elimino la classe active alla img attuale
    // in modo che, applicandola alla img successiva, non rimanga active anche l'attuale
    activeImage.removeClass('active');

    // in base alla direzione, quindi alla freccia che ho premuto (prev o next),
    //sposto la classe active alla img precedente o successiva.
    // se next
    if (direction == 'next') {
        // verifico innanzitutto se abbiamo raggiunto la fine dello Slider
        // in quel caso applico la classe active alla prima img dello slider
        if (activeImage.hasClass('last')){
            $('.images img.first').addClass('active') //seleziono il primo elemento e gli applico la classe active
        } else { //altrimenti sposto la classe active all elemento successivo
            activeImage.next('img').addClass('active');
        }
    // in modo analogo faccio con il prev
    } else if (direction == 'prev') {
        if (activeImage.hasClass('first')){
            $('.images img.last').addClass('active') 
        } else {
            activeImage.prev('img').addClass('active');
        }
    }
}