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
            $("#main-menu").css("font-size", "1.35em");
        }
        else if (val > 50 ) {
            $("#main-menu").css("font-size", "0.95em");
        }
    });

    /**
     * Responsive JS handle footer
     */
     $(window).on('resize', function(){
        footerRes()
     });

    function footerRes() {
        var footer = $(".footer ul li:not(:nth-child(n+5))");
        var original = footer.css("display");
        if (!Foundation.MediaQuery.atLeast('medium')) {
            if (footer.css("display").toLowerCase() !== "none") {
                footer.css("display", "none");
            }
        }
        else {
            if (footer.css("display").toLowerCase() === "none") {
                footer.css("display", "");
            }
        }  
    }

    // call once to handle reloads
    footerRes();

});