(function($) {
  var self = {
    init: function() {
      self.pageScroll();
    },
    pageScroll: function() {
      $('.l-main').onepage_scroll();
    }
  };

  $(document).ready(self.init);
}(jQuery));