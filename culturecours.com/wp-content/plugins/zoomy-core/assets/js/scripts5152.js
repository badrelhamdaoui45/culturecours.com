(function ($) {
    'use strict';
    $(document).ready(function () {
       $('.title-widget > span').addClass('vec-shape');
        //nice-select
        if ($('select').length) {
            $('select').niceSelect();
        }
    });
})(jQuery);