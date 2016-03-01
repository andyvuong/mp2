// Write any custom javascript functions here
$(document).ready(function(){

    /**
     * Enable carousel code 
     */
    $(".one-time").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../data/pics/left-chevron.svg'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../data/pics/right-chevron.svg'>"
    });

    /**
     * Disable button submit 
     */
    $(".success").click(function(e) {
        e.preventDefault();
        return false;
    })

    /*
    * Detects where to top of the scroll bar is and resizes the nav bar based on that
    */
    $(document).on('scroll', function() {
        val = $(window).scrollTop();
        //console.log(val);
        if (val < 50) {
            $("#main-menu").css("font-size", "1.2em");
        }
        else if (val > 50 ) {
            $("#main-menu").css("font-size", "0.75em");
        }
    });
    

});