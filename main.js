$(document).ready( function() {
    // ref
    var prev = $('.slider-wrapper .prev');
    var next = $('.slider-wrapper .next');
    var leftArrow = 37;     //keyCode leftArrow
    var rightArrow = 39;    //keyCode rightArrow

    // click alle freccette dello slider
    prev.click( function() {
        slider('prev');
    })

    next.click( function() {
        slider('next');
    })

    //click alle frecce della keyboard
    $( document ).keydown( function(e){
        if(e.keyCode == leftArrow){
            slider('prev');
        } else if(e.keyCode == rightArrow){
            slider('next');
        }
    })



})  //end document ready

/****************************************************************
 *  FUNCTIONS
 ****************************************************************/

function slider(direction){
    // inserisco in una variabile il riferimento alla img active
    activeImage = $('.images .active')
    // e il pallino dello slider
    activeDot = $('.nav .active')

    // a prescindere dalla direzione, elimino la classe active alla img attuale
    // in modo che, applicandola alla img successiva, non rimanga active anche l'attuale
    activeImage.removeClass('active');      //immagine
    activeDot.removeClass('active');        //pallino

    // in base alla direzione, quindi alla freccia che ho premuto (prev o next),
    //sposto la classe active alla img precedente o successiva.
    // se next
    if (direction == 'next') {
        // verifico innanzitutto se abbiamo raggiunto la fine dello Slider
        // in quel caso applico la classe active alla prima img dello slider
        if (activeImage.hasClass('last')){
            $('.images img.first').addClass('active');  //seleziono il primo elemento e gli applico la classe active
            $('.nav i.first').addClass('active');       //uguale per il pallino
        } else { //altrimenti sposto la classe active all elemento successivo
            activeImage.next('img').addClass('active');     //immagine
            activeDot.next('i').addClass('active');         //pallino
        }
    // in modo analogo faccio con il prev
    } else if (direction == 'prev') {
        if (activeImage.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeDot.prev('i').addClass('active');
        }
    }
}

$( ".nav i" ).click(function() {
    var images = $('.images img');

    activeImage = $('.images .active');
    activeImage.removeClass('active');
    
    var index = $( ".nav i" ).index( this );
    console.log(`indice pallino: ${index}`);
    // console.log(images[index]);
    $(images[index]).addClass('active')
    
    // var image = images[index]
    // console.log(image);
    // $(image).addClass('active')
    
    //images è un object, index() sembra non funzionare
    
    // for (var i = 0; i < images.length; i++){
    //     console.log(images[i]);
    // }


});