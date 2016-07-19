$.fn.linkScroller = function (settings) {
    this.click(function () {
        var target = $($(this).attr('href'));
        var offset = (settings.offset) ? settings.offset : 0;
        if (typeof settings.getOffset === "function")
            offset = settings.getOffset();
        $(document.body).animate({
            scrollTop: target.offset().top + offset
        }, 'slow');

        return false;    
    });

    return this;
};