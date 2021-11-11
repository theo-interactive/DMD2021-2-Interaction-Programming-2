console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        let horizontalMax = 0;
        // let scrollY = 0;

        const $win = $(window);
        const $wrap = $('#wrap');
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
            // const width = $win.width();
            // const height = $win.height();
            // window.innerWidth -> width
            // window.innerHeight -> height
            const { innerWidth: width, innerHeight: height } = window
            $horizontal.outerHeight(horizontalMax * height);
            $horizontalWrap.outerWidth(horizontalMax * width);
            $horizontalItem.outerWidth(width);
        }

        function handleScrollWindow() {
            // scrollY = $win.scrollTop();
            // const { scrollY } = window
            // console.log(scrollY);
            horizontalScroll();
        }

        function horizontalScroll() {
            const { scrollY } = window
            // 요소와 스크롤을 비교하는 방법 1.
            // console.log($horizontal.offset(), $horizontal.offset().top, scrollY);
            const startY = $horizontal.offset().top
            const endY = startY + $horizontal.outerHeight();
            // 스크롤이 고정되는 시점 ~ 허용 지점까지 (조건)
            if (scrollY >= startY && scrollY < endY) {
                // 스크롤 값에 따라서 가로 영역으로 움직이는 인터랙션.
            }
            // 요소와 스크롤을 비교하는 방법 2.
            // 바닐라JS
            const boundY = $horizontal[0].getBoundingClientRect().top
            if (boundY <= 0 && boundY > $horizontal.outerHeight() * -1) {
                // 스크롤 값에 따라서 가로 영역으로 움직이는 인터랙션.
            }
        }

        function reset() {
            $win.trigger('resize').trigger('resize');
            $wrap.removeClass('inactive');
        }

        init();
    });
})(jQuery);