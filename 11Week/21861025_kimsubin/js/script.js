console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        let horizontalMax = 0;

        const $win = $(window);
        const $wrap = $('#wrap');
        const $section1 = $('#section-1');
        const $section1Image = $section1.find('img');

        const $sticky = $('.section-sticky');
        const $horizontal = $('.section-horizontal');
        const $horizontalWrap = $horizontal.children('.section-wrap');
        const $horizontalItem = $horizontalWrap.children('.section-item');
        
        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            horizontalMax = $horizontalItem.length;
        }

        function addEvent() {
            $win.on('resize', handleResizeWindow).on('scroll', handleScrollWindow);
        }

        function handleResizeWindow() {
            const { innerWidth: width, innerHeight: height } = window
            $horizontal.outerHeight(horizontalMax * height);
            $horizontalWrap.outerWidth(horizontalMax * width);
            $horizontalItem.outerWidth(width);
        }

        function handleScrollWindow() {
            horizontalScroll();
        }

        function horizontalScroll() {
            const { scrollY, innerWidth: width, innerHeight: height } = window
            let posX = 0;
            const horizontalWidth = horizontalMax * width
            const horizontalHeight = horizontalMax * height;

            const startY = $horizontal.offset().top
            const endY = startY + horizontalHeight;

            if (scrollY >= startY && scrollY < endY) {

                if (scrollY < endY - height) {

                    x = (horizontalWidth - width) * (scrollY - startY) / (horizontalHeight - height) * -1;

                    $horizontal.addClass('fixed');
                    $horizontal.removeClass('fixed-end');
                } else {

                    $horizontal.removeClass('fixed');
                    $horizontal.addClass('fixed-end');
                    x = (horizontalWidth - width) * -1;
                }
            } else {
                $horizontal.removeClass('fixed');
                if (scrollY < startY) {

                    x = 0;
                    $horizontal.removeClass('fixed-end');
                }
            }
            gsap.set($horizontalWrap, { x });

            const boundY = $horizontal[0].getBoundingClientRect().top
            if (boundY <= 0 && boundY > $horizontal.outerHeight() * -1) {

            }
        }

        function reset() {
            $win.trigger('resize').trigger('scroll');
            $wrap.removeClass('inactive');
            animation();
            animation2Reset();
            animation2Start();
        }

        function animation() {
            
            gsap.set($section1Image, { autoAlpha: 0, scale: 1.05, y: 20, skewX: 5 });

            gsap.to($section1Image, { 
                autoAlpha: 1, 
                scale: 1,
                y: 0,
                skewX: 40,
                duration: 0.6,
                delay: 0.2,
            
                ease: 'power3.inOut',
            });
        }

        init();
    });
})(jQuery);