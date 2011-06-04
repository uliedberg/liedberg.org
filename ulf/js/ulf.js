
var ulf = (function()  {

    return {
        setup: setup
    };

    function setup() {
        var widgetDiv = $('#twitter-widget-ulf');
        setupTwitterWidget();
        $(window).resize(resizeTwitterWidget);

        function setupTwitterWidget() {
            insertTwitterWidget(widgetDiv.width(), widgetDiv.height());
            widgetDiv.css('width', 'auto');
            widgetDiv.css('height', 'auto');
        }

        function resizeTwitterWidget() {
            resizeTwitterWidget.widgetDoc = resizeTwitterWidget.widgetDoc || widgetDiv.find('.twtr-doc');
            resizeTwitterWidget.widgetTimeLine = resizeTwitterWidget.widgetTimeLine || widgetDiv.find('.twtr-timeline');

            widgetDiv.css('width', '');
            if (widgetDiv.width() != resizeTwitterWidget.oldSize.width) {
                widgetDiv.css('height', '');
                resizeTwitterWidget.oldSize = {width: widgetDiv.width(), height: widgetDiv.height()};
                resizeTwitterWidget.widgetDoc.css('width', widgetDiv.width());
                resizeTwitterWidget.widgetTimeLine.css('height', widgetDiv.height());
                widgetDiv.css('height', 'auto');
            }
            widgetDiv.css('width', 'auto');
        }
        resizeTwitterWidget.oldSize = {width: 0, height: 0};
    }

    // Added id & footer properties to the standard copy n paste from twitter
    function insertTwitterWidget(widthInPx, heightInPx) {
        new TWTR.Widget({
          version: 2,
          type: 'profile',
          id: 'twitter-widget-ulf',
          rpp: 4,
          interval: 60000,
          width: widthInPx,
          height: heightInPx,
          footer: '',
          theme: {
            shell: {
              background: 'lightgray',
              color: '#ffffff'
            },
            tweets: {
              background: '#ffffff',
              color: '#000000',
              links: '#eb5707'
            }
          },
          features: {
            scrollbar: false,
            loop: false,
            live: true,
            hashtags: true,
            timestamp: true,
            avatars: false,
            behavior: 'all'
          }
        }).render().setUser('uliedberg').start();
    }
})();
