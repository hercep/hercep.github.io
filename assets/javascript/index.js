'use strict';
'use strict';

$(document).ready(function ($) {
  headerScroll();
});

function headerScroll() {
  $(window).scroll(function () {
    var siteHeader = $('.site-header');
    var about = $('#about');
    if ($(this).scrollTop() > 116) {
      siteHeader.addClass("fixed-header");
      about.addClass('fixed-header-about');
    } else {
      siteHeader.removeClass("fixed-header");
      about.removeClass('fixed-header-about');
    }
  });
}
//# sourceMappingURL=index.js.map
