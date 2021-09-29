console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $p = $('p');
        $('button').click(() => {
            // console.log($p);
            $p.each((idx, el) => {
                const $el = $(el);
                console.log($el.parent().is('div'));
                if (!$el.parent().is('div')) {
                    $el.wrap('<div></div>');
                } else {
                    $el.unwrap();
                }
            });
        });
        // $('p').wrap('<div></div>');

        // $('span').wrapAll('<div><div><a></a></div></div>');
        
        // const $span = $('span').eq(0);
        // $span.wrapAll($('.double.hidden'));
        // $span.parents('.double').removeClass('hidden');

        $('.double.hidden div').wrapInner($('span').eq(0)).parent().removeClass('hidden');

        // console.log($span.parents('.double'));
        // console.log($span);
    });
})(jQuery);