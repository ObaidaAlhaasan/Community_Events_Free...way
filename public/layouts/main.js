$(document).ready(function () {

$("button").hover(function () {
        // over
        $(this).addClass("animated infiniti jello");
    }, function () {
        // out
        $(this).removeClass("animated infiniti jello");
        
    }
);


$(".btn").hover(function () {
    // over
    $(this).addClass("animated infinite  pulse");
}, function () {
    // out
    $(this).removeClass("animated infinite  jello");
    
}
);

 // nice scroll

 $("html").niceScroll({
    cursorcolor:"skyblue",
    cursorwidth:"11px",
    cursorborder:"none",
});

});

   