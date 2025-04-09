jQuery(document).ready(function ($) {
    // 	3d slider 
    var slider = tns({
        container: ".my-3d-slider",
        items: 6,
        gutter: 11,
        slideBy: 1,
        controlsPosition: "bottom",
        navPosition: "bottom",
        nav: false,
        mouseDrag: true,
        autoplay: false,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-control",
        responsive: {
            1200: {
                items: 6,
                gutter: 11
            },
            1024: {
                items: 4,
                gutter: 10
            },
            980: {
                items: 2,
                gutter: 10
            },
            768: {
                items: 2,
                gutter: 8
            },
            767: {
                items: 1,
                gutter: 8
            },
            480: {
                items: 1,
                gutter: 5
            },
            320: {
                items: 1,
                gutter: 3
            }
        }
    });

    // Popup functionality
    $(".view-btn").on("click", function () {
        var iframeContent = $(this).data("iframe");
        console.log(iframeContent)
        $("#popup-body").html(iframeContent);
        $("#popup").fadeIn(300);
    });

    // Close the popup when clicking the close button
    $("#popup-close").on("click", function () {
        // $("#popup").css("display", "none");
        // $("#popup-body").html("");
        $("#popup").fadeOut(300, function () {
            // Clear the content after the animation is complete
            $("#popup-body").html("");
        });
    });

    // Close the popup when clicking outside the popup content
    $("#popup").on("click", function (event) {
        if ($(event.target).is("#popup")) {
            // $("#popup").css("display", "none");
            // $("#popup-body").html("");
            $("#popup").fadeOut(300, function () {
                // Clear the content after the animation is complete
                $("#popup-body").html("");
            });
        }
    });

    // 	3d page click event 
    var tab_list = $('.provided-fashion_3D-tab-list ul li'),
        tab_details = $('.fashion_3D');

    tab_list.first().addClass('active');
    tab_details.first().addClass('active');

    tab_list.click(function () {
        var tabIndex = tab_list.index($(this));

        tab_list.removeClass('active');
        tab_list.eq(tabIndex).addClass('active');

        tab_details.removeClass('active');
        tab_details.eq(tabIndex).addClass('active');
    });

});