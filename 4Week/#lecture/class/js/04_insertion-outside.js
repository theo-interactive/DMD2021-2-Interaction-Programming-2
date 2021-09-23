console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // after.
        // insertAfter.
        $('p').eq(0).after($('b').eq(0))
        $('p').eq(2).insertAfter('.say-1');

        // before.
        // insertBefore.
        $('p').eq(1).before($('b').eq(1))
        $('p').eq(3).insertBefore('.say-2');
    });
})(jQuery);