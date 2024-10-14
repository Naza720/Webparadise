// JavaScript Document
console.log('Konsolenausgabe');

$(document).ready(function(){  //  DOM ist geladen
	
	$('.burger-icon').click(function(){
		$('#topnav').toggle('slow');
		$('.button').toggleClass('closed');
	})
	function setClickHandlers() { //funktion Menü ab 720px
        if (window.matchMedia("(min-width: 720px)").matches) {
            // Funktion für tablets & Desktop ab 720px
            $('.openDesign').off('click').on('click', function(){
                $('.dropdown_inhalt').toggleClass('show');
            });
        } else {
            // Funktion für Handy
            $('.openDesign').off('click').on('click', function(){
                $('.dropdown_inhalt').toggle('slow');
            });
        }
    }
	
	// lightbox snacks
	$('.lightbox-wrapper > div').click(function(){
			$(this).find('.lightbox').toggle('slow');
		});

		$('.close-lightbox').click(function(){
			$(this).parent('.lightbox').toggle('slow');
		});
		
	
	// Funktion beim Laden der Seite ausführen
    setClickHandlers();

    // Funktion jedes Mal ausführen, wenn die Fenstergröße geändert wird
    $(window).resize(function() {
        setClickHandlers();
    });
	
//------Scroll funktion Burger-button-color-----------------------------------
	
	
	$(window).scroll(function(){ 
		
		var gescrollt = $(window).scrollTop();
		var intro = $('#intro').height();
		var uns = $('#unsIntro').height();
		var kontakt = $('#kontakt').height();
		
		if (gescrollt >= intro || gescrollt> uns || gescrollt==kontakt) {
				$('.burger-icon span').css({backgroundColor:'#ED6F8E'});
			} else{
				$('.burger-icon span').css({backgroundColor:'white'});
			}
	})
	
//----------------------------------------------------------------------------
	
	
//----------------lightbox kontak Datenschutzerklärung----------------------
	$('#Dat_erkl').click(function(e) {
		e.preventDefault();
		$('#lightbox').fadeIn();
	});

	$('#close-lightbox').click(function() {
		$('#lightbox').fadeOut();
    });
// scrollify---------------------------------------------------
	
	$.scrollify({
			section: ".section",
			easing: "easeOutExpo",
			scrollSpeed: 1100,
			offset: 0,
			scrollbars: true,
			setHeights: true,
			overflowScroll: true,
			updateHash: true,
			touchScroll: true,
			before: function() {},
			after: function() {},
			afterResize: function() {},
			afterRender: function() {}
		});

 });

	