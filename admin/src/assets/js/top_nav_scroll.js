// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("top-bar").style.top = "0";
//   } else {
//     document.getElementById("top-bar2").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


var setHeader = function() {
    scrolled = $(window).scrollTop();

    if(scrolled >= topBarHeight) {
        $body.addClass('sticky-layout');
    } if (scrolled <= topBarHeight) {
        $body.removeClass('sticky-layout');
    }
}