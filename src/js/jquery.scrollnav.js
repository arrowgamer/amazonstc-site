$.fn.scrollNav = function (settings) {
    var links = this;
    var $window = $(window);
    var offset = (settings.offset) ? settings.offset : 0;

    $window.scroll(function () {
        this.requestAnimationFrame(function () {
            links.removeClass('active');
            $(links.get().reverse()).each(function () {
                var currentItem = $(this);
                var target = $(currentItem.attr('href'));
                if ((target.offset().top + settings.offset) <= $window.scrollTop()) {
                    currentItem.addClass('active');
                    return false;
                }
            });
        });
    });

    $(function () {
        $window.trigger('scroll');
    });

    return links;
};