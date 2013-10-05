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
      $('.l-main').onepage_scroll();
    },
    formSend: function() {
      var validator = function() {
        $('form').validate({
          rules: {
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            textarea: {
              required: true
            }
          },
          messages: {
            name: {
              required: "Bitte Namen eintragen."
            },
            email: {
              required: "Bitte Email eintragen.",
              email: "Bitte gib eine richtige Mail-Adresse an."
            },
            textarea: {
              required: "Schreiben sie uns etwas."
            }
          },
          submitHandler: function() {
            $.ajax({
              url: '',
              type: 'POST',
              dataType: 'json',
              json: 'json',
              data: $('form').serialize(),

              success: function(data) {
                alert('yea');
              }
            });
          }
        });
      }()
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

      // Check network at work or school (Example: .l-nighty)
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

      // Event (Example: .l-train)
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

      // TV
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

      // Do things (Example: .l-room)
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

      // Notification (Example: .l-bar)
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

      // Situation (Example l-bar)
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

      // Job-Overview
      new Morris.Bar({
        element: 'm-chart--bar--job',
        barColors: function (row, series, type) {
          if (type === 'bar') {
            return '#1a9af3';
          }
        },
        gridLineColor: '#508dcc',
        gridStrokeWidth: .5,
        gridTextColor: '#fff',
        data: [
          {
            label: 'Angestellter',
            value: 76
          },
          {
            label: 'Schüler/Student',
            value: 16
          },
          {
            label: 'Freelancer',
            value: 12
          },
          {
            label: 'Sonstiges',
            value: 14
          }
        ],
        xkey: 'label',
        ykeys: ['value'],
        labels: ['Personen'],
        barRatio: 0.4,
        xLabelAngle: 28
      });

      // Networks-Overview
      new Morris.Bar({
        element: 'm-chart--bar--social',
        barColors: function (row, series, type) {
          if (type === 'bar') {
            return '#1a9af3';
          }
        },
        gridLineColor: '#508dcc',
        gridStrokeWidth: .5,
        gridTextColor: '#fff',
        data: [
          {
            label: 'Facebook',
            value: 108
          },
          {
            label: 'GooglePlus',
            value: 88
          },
          {
            label: 'Twitter',
            value: 79
          },
          {
            label: 'Instagram',
            value: 51
          },
          {
            label: 'Pinterest',
            value: 41
          },
          {
            label: 'Foursquare',
            value: 38
          }
        ],
        xkey: 'label',
        ykeys: ['value'],
        labels: ['Personen'],
        barRatio: 0.4,
        xLabelAngle: 35
      });

      // Devices-Overview
      new Morris.Donut({
        element: 'm-chart--bar--device',
        backgroundColor: '#1f5ba4',
        labelColor: '#fff',
        data: [
          {
            label: 'Smartphone',
            value: 68,
            color: '#1a9af3'
          },
          {
            label: 'PC/Mac',
            value: 42,
            color: '#1d79cc'
          },
          {
            label: 'Tablet',
            value: 8,
            color: '#508dcc'
          }
        ]
      });

      // Gender-Overview
      new Morris.Donut({
        element: 'm-chart--bar--gender',
        backgroundColor: '#1f5ba4',
        labelColor: '#fff',
        data: [
          {
            label: 'Männlich',
            value: 75,
            color: '#1a9af3'
          },
          {
            label: 'Weiblich',
            value: 37,
            color: '#1d79cc'
          }
        ]
      });
    }
  };

  $(document).ready(self.init);
}(jQuery));