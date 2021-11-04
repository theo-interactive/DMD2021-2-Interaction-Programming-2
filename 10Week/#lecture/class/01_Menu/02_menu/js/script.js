console.log("Script Load");

const GN_HEIGHT = 60;

(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        let isScrolling = false;
        
        const $win = $(window);
        const $gn = $('#global-nav');
        const $gnEl = $gn.find('a');
        const $content = $('.content');
        const $section = $content.children('.section');
        const $scroll = $('html, body');

        let exScrollY = $win.scrollTop()

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
            if (scrollY > GN_HEIGHT && scrollY > exScrollY) {
                if (!$gn.hasClass('hide')) {
                    $gn.addClass('hide');
                }
            } else {
                if ($gn.hasClass('hide')) {
                    $gn.removeClass('hide');
                }
            }
            if (!isScrolling) {
                $.each($section, (idx, el) => {
                    const $el = $(el);
                    const start = $el.offset().top;
                    const end = start + $el.innerHeight();
                    const add = $win.height() * 0.3;
                    if (scrollY >= start - add && scrollY < end - add) {
                        menuActive(idx);
                    }
                })
            }
            exScrollY = scrollY
        }

        function handleClickGNEl(e) {
            e.preventDefault();
            const $el = $(this);
            // const $el = $(e.currentTarget);
            const id = $el.attr('href');
            const $cuSection = $(id);
            const idx = $section.index($cuSection);
            let top = $cuSection.offset().top - GN_HEIGHT;
            if (idx === 0) {
                top = 0;
            }
            menuActive(idx);
            menuScrollAnimation(top);
        }

        function menuActive(idx) {
            if (!$gnEl.eq(idx).hasClass('active')) {
                $gnEl.removeClass('active');
                $gnEl.eq(idx).addClass('active');
            }
        }

        function menuScrollAnimation(scrollTop) {
            isScrolling = true;
            // window.scrollTo(0, posY);
            // window.scrollTo({ top, behavior: 'smooth' });
            // animate()
            $scroll
                .stop(true)
                .animate(
                    {
                        scrollTop
                    },
                    {
                        duration: 500,
                        easing: 'easeInOutQuad',
                        complete: function() {
                            isScrolling = false;
                        }
                    }
                );
        }

        function reset() {
        }

        init();
    });
})(jQuery);