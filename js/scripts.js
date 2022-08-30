$(document).ready(function(){
    $( function() {
        $( "#dialog" ).dialog({
            width: 940,
            autoOpen: false,
            show: {
                effect: "bounce",
                duration: 1000
            },
            hide: {
                effect: "drop",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            834:{
                items:2
            },
            820:{
                items:2
            },
            800:{
                items:2
            },
            768:{
                items:2
            },

            1000:{
                items:3
            }
        }
    });
});