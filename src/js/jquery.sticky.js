$.fn.sticky = function (settings) {
    var nav = this;
    var $window = $(window);

    $window.scroll(function () {
        var beyondThreshold = $window.scrollTop() > settings.start;
        if (nav.hasClass(settings.class)) {
            if (!beyondThreshold) {
                nav.removeClass(settings.class);
                if (typeof settings.unstick === "function")
                    settings.unstick();
            }

        } else {
            if (beyondThreshold) {
                nav.addClass(settings.class);
                if (typeof settings.stick === "function")
                    settings.stick();
            }
        }
    });
};