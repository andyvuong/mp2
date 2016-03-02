// Write any custom javascript functions here
$(document).ready(function(){

    /**
     * Enable carousel code 
     */
    $(".one-time").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 400,
        mobileFirst: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: true,
                    autoplay: false,
                    dots: true,
                    infinite: true,
                    speed: 400,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    slidesToShow: 1
                }
            }
        ]
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
     * Executes code on the detection of a resize event. The code that run is used to handle the responsiveness
     * of the footer, the resizing of the screen for the menu, and the opener (square information box)
     */
    $(window).on('resize', function() {
        footerRes();
        hideOpener();
        rightRes();
    });

    // Removes elements to make mobile menu responsive
    function rightRes() {
        var right = $("#main-menu .top-bar-right");
        var left = $("#main-menu .top-bar-left ul li:last-child");
        var leftFirst = $("#main-menu .top-bar-left ul li:first-child");
        var leftHome = $("#main-menu .top-bar-left ul li:nth-child(2) a");

        var original = right.css("display");
        if (!Foundation.MediaQuery.atLeast('medium')) {
            if (right.css("display").toLowerCase() !== "none") {
                right.css("display", "none");
                left.css("display", "none");
                leftFirst.css("display", "none");
                leftHome.text("Le Chef");
            }
            $(".sticky-container").css("height", $("#main-menu .top-bar-left").height()+25);
        }
        else {
            if (right.css("display").toLowerCase() === "none") {
                right.css("display", "");
                left.css("display", "");
                leftFirst.css("display", "");
                leftHome.text("Home");
            }
            $(".sticky-container").css("height", $("#main-menu .top-bar-left").height()+25);
        }  
    }

    // handle responsive height of menu bar
    function resizeSticky() {
        if ($("#main-menu").hasClass("is-anchored")) {
            if (Foundation.MediaQuery.current === "medium") {
                console.log(23);
                $(".sticky-container").css("height", $("#main-menu .top-bar-left").height() + $("#main-menu .top-bar-right").height());
            }
            else { // anything else
                $(".sticky-container").css("height", $("#main-menu .top-bar-left").height());
            }
        }
    }

    /**
     * Executes when a resize event ends, execute the stickyFix function to handle the weird foundation resizing problem with the menu.
     * Also executes the resizing fix for the responsive menu.
     * (just sets a small delay before running the callback)
     */
    var timer;
    $(window).on('resize', function() {
        clearTimeout(timer); // passing an invalid ID has no effect
        timer = setTimeout(function() {
            stickyFix();
            resizeSticky();
        }, 250);
    });

    // hide the opener
    function hideOpener() {
        var opener = $("#opener");
        if (!Foundation.MediaQuery.atLeast('large')) {
            if (opener.css("display").toLowerCase() !== "none") {
                opener.css("display", "none");
            }
        }
        else {
            if (opener.css("display").toLowerCase() === "none") {
                opener.css("display", "");
            }
        }
    }

     // fix the sticky nav
     function stickyFix() {
        if (!Foundation.MediaQuery.atLeast('medium')) {
            $("#main-menu").css("max-width", "inherit");
        }
     }

     // Removes lists elements so the footer acts more responsive and is clean.
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
    stickyFix();
    hideOpener();
    rightRes();
});