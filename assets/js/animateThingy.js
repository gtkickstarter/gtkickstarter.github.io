$(function() {
  var $window = $(window);
  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    $(".revealOnScroll1:not(.animated)").each(function () {
      var $this = $(this),
        offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated fadeInUp');
          }, parseInt($this.data('timeout'), 10));
        } else {
          $this.addClass('animated fadeInUp');
        }
      }

    });
  }

  revealOnScroll();
});