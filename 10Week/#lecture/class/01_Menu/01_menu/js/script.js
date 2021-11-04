console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $win = $(window);
        const $gn = $('#global-nav');
        const $gnEl = $gn.find('a');
        const $content = $('.content');
        const $section = $content.children('.section');
        const $scroll = $('html, body');

        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
        }

        function addEvent() {
            $win.on('scroll', handleScrollWindow).trigger('scroll');
            $gnEl.on('click', handleClickGNEl);
        }

        function handleScrollWindow() {
            const scrollY = $win.scrollTop();
            $.each($section, (idx, el) => {
                const $el = $(el);
                const start = $el.offset().top;
                const end = start + $el.innerHeight();
                const add = $win.height() * 0.3;
                if (scrollY >= start - add && scrollY < end - add) {
                    if (!$gnEl.eq(idx).hasClass('active')) {
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                    
                }
            })
        }

        function handleClickGNEl(e) {
            e.preventDefault();
            const $el = $(this);
            // const $el = $(e.currentTarget);
            const id = $el.attr('href');
            const $cuSection = $(id);
            const top = $cuSection.offset().top;
            // window.scrollTo(0, posY);
            // window.scrollTo({ top, behavior: 'smooth' });
            // animate()
            $scroll.stop(true).animate({ scrollTop: top }, { duration: 500, easing: 'easeInOutQuad' });
        }

        function reset() {
        }

        init();
    });
})(jQuery);