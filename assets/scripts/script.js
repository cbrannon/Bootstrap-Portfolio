$( document ).ready(function() {
  var oldLogoSources = ["assets/images/github_square_black.png",
                      "assets/images/linkedin_square_color.png",
                      "assets/images/overflow.png"];

  var newLogoSources = ["assets/images/github_square_white.png",
                      "assets/images/linkedin_square_white.png",
                      "assets/images/overflow-white.png"];

  /*function swapLogos(logoArray) {
    if ($( this ).is("#github")) {
      $( this ).attr('src', logoArray[0]);
    } else if ($( this ).is("#linkedin")) {
      $( this ).attr('src', logoArray[1]);
    } else {
      $( this ).attr('src', logoArray[2]);
    }
  }

  $(".logo").on({
    mouseenter: function () {
      swapLogos(newLogoSources);
    },
    mouseleave: function () {
      swapLogos(oldLogoSources);
    }
  });*/

  // I know I shouldn't repeat myself. Working on it above ^ //
  $(".logo").on({
    mouseenter: function () {
      if ($( this ).is("#github")) {
        $( this ).attr('src', newLogoSources[0]);
      } else if ($( this ).is("#linkedin")) {
        $( this ).attr('src', newLogoSources[1]);
      } else {
        $( this ).attr('src', newLogoSources[2]);
      }
    },
    mouseleave: function () {
      if ($( this ).is("#github")) {
        $( this ).attr('src', oldLogoSources[0]);
      } else if ($( this ).is("#linkedin")) {
        $( this ).attr('src', oldLogoSources[1]);
      } else {
        $( this ).attr('src', oldLogoSources[2]);
      }
    }
  });
});
