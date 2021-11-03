// console.log("Script Load");
(function($){
    $(document).ready(function() {
        // console.log('jQuery Ready');

        const $win = $(window);
        const $gnEl = $('#global-nav').find('a');

        const $content = $('.content');
        const $section = $content.children('.section');

        function init() {
            addEvent();
        }

        function addEvent() {
            $win.on('scroll', handleScrollWindow).trigger('scroll');
            $gnEl.on('click', clickGlobalNavigation);
        }

        function handleScrollWindow() {
            // console.log('scroll');
            const scrollY = $win.scrollTop();
            // console.log('scroll', scrollY);

            $.each($section, (idx, el) => {
                // console.log(idx, el);
                const $el = $(el);
                const start = $el.offset().top;
                const end = start + $el.innerHeight();
                const add = $win.height() * 0.3;

                // 브라우저 높이의 반절 정도를 땡겨주는 이유: 뷰포트 내 content 파악을 용이하게 하기 위해
                if (scrollY >= start - add && scrollY < end - add) {
                    // console.log(idx);

                    if (!$gnEl.eq(idx).hasClass('active')) {
                        $gnEl.removeClass('active');
                        $gnEl.eq(idx).addClass('active');
                    }
                }
            });
            // $section.forEach()
        }

        function clickGlobalNavigation() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        }

        init();
    });
})(jQuery);