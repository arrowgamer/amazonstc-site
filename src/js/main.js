$(function (){
    var body = $("body");
    var nav = body.find(">header>nav");
    var navHeight = nav.outerHeight();
    var offset= -91;
    nav.find("li a")
        .linkScroller({ 
            offset: offset
        })
        .scrollNav({
            offset: offset
        });

    nav.sticky({
        start: nav.outerHeight() + 50,
        class: "sticky"
    });
});