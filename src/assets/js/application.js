(function($) {
  var self = {
    init: function() {
      self.pageScroll();
      self.formSend();
      self.bringTo();
      self.headerReplace();
      self.charts();
    },
    pageScroll: function() {
      $('.l-main').onepage_scroll({
         updateURL: true
      });
    },
    formSend: function() {

    },
    bringTo: function() {
      var $button = $('.l-prepage').find('.m-button');

      $button.on('click', function(event) {
        event.preventDefault();

        $('body').addClass('is-active');
      });
    },
    headerReplace: function() {
      var $title = $('.l-banner h1'),
          $chartPieFirst = $('.l-banner .pie-chart--first'),
          $chartPieSecond = $('.l-banner .pie-chart--second'),
          $sections = $('.l-main > section'),
          $wrap = $('.l-main');

      $(document).on('onepagescroll.animation.started', $wrap, function(){
        $sections.each(function() {
          if($(this).hasClass('active')) {
            var $titleData = $(this).data('title'),
                $percentFirstData = $(this).data('options').chartfirst,
                $percentSecondData = $(this).data('options').chartsecond;

            $title.text($titleData);
            $chartPieFirst.data('percent', $percentFirstData);
            $chartPieSecond.data('percent', $percentSecondData);
          }
        });
        $chartPieFirst.easyPieChart({
          animate: 2000,
          size: 90,
          barColor: '#eca352',
          trackColor: 'transparent',
          scaleColor: 'transparent',
          onStep: function(value) {
            this.$el.find('span').text(~~value);
          }
        });
        $chartPieSecond.easyPieChart({
          animate: 2000,
          size: 90,
          barColor: '#d84735',
          trackColor: 'transparent',
          scaleColor: 'transparent',
          onStep: function(value) {
            this.$el.find('span').text(~~value);
          }
        });
      });
    },
    charts: function() {
      new Morris.Donut({
        element: 'm-chart--pie--work-and-school',
        data: [
          {
            label: 'Ja',
            value: 90,
            color: '#eca352'
          },
          {
            label: 'Nein',
            value: 28,
            color: '#d84735'
          }
        ]
      });
      new Morris.Donut({
        element: 'm-chart--pie--event',
        data: [
          {
            label: 'Ja',
            value: 74,
            color: '#eca352'
          },
          {
            label: 'Nein',
            value: 44,
            color: '#d84735'
          }
        ]
      });
      new Morris.Donut({
        element: 'm-chart--pie--tv',
        data: [
          {
            label: 'Ja',
            value: 43,
            color: '#eca352'
          },
          {
            label: 'Nein',
            value: 75,
            color: '#d84735'
          }
        ]
      });
      new Morris.Donut({
        element: 'm-chart--pie--do-overview',
        data: [
          {
            label: 'Fernsehen',
            value: 90,
            color: '#eca352'
          },
          {
            label: 'Essen',
            value: 72,
            color: '#d84735'
          },
          {
            label: 'Lernen',
            value: 42,
            color: '#f6f1d7'
          },
          {
            label: 'Sport',
            value: 27,
            color: '#69caf2'
          }
        ]
      });
      new Morris.Donut({
        element: 'm-chart--pie--notification',
        data: [
          {
            label: 'Ja',
            value: 38,
            color: '#eca352'
          },
          {
            label: 'Nein',
            value: 80,
            color: '#d84735'
          }
        ]
      });
      new Morris.Donut({
        element: 'm-chart--pie--situation',
        data: [
          {
            label: 'Ja',
            value: 73,
            color: '#eca352'
          },
          {
            label: 'Nein',
            value: 45,
            color: '#d84735'
          }
        ]
      });
    }
  };

  $(document).ready(self.init);
}(jQuery));