'use strict';
"use strict";

$(document).ready(function ($) {
  headerFix();
});

function headerFix() {
  var header = $("#header");

  header.on("scroll", function (e) {

    if (this.scrollTop > 147) {
      header.addClass("fixed-header");
    } else {
      header.removeClass("fixed-header");
    }
  });
}
//# sourceMappingURL=index.js.map
