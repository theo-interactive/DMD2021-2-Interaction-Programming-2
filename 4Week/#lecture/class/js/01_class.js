console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        $('p').addClass('red');
        $('div.red').addClass('green').removeClass('red');
        $('p.blue').toggleClass('blue').toggleClass('blue');
        $('p').eq(2).addClass('under').removeClass('red');
        $('p').children('span').addClass('highlight');

        // console.log($('p.highlight'), $('p.highlight').hasClass('blue'));
        $('p.highlight').each((idx, el) => {
            const $el = $(el);
            console.log($el);
            if (!$el.hasClass('red')) {
                $el.addClass('red');
            } else {
                $el.removeClass('red');
            }
            // console.log(idx, $(el).hasClass('blue'));
            // console.log(el, idx);
        });

        $('p').click((e) => {
            // console.log(e.currentTarget);
            // e.currentTarget.classList.add('blue');
            // e.currentTarget.classList.remove('blue');
            // e.currentTarget.classList.contains('blue'); // boolean.
            const $el = $(e.currentTarget);
            console.log($el);
            if (!$el.hasClass('blue')) {
                $el.addClass('blue');
            } else {
                $el.removeClass('blue');
            }
        })
        // Array.forEach((item, idx) => {})
        // if ($('p.highlight').hasClass('blue')) {
        // }
    });
})(jQuery);