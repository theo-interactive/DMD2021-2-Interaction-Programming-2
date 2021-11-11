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
            const { width, height } = window
            $horizontal.outerHeight(horizontalMax * height);
            $horizontalWrap.outerWidth(horizontalMax * width);
            $horizontalItem.outerWidth(width);
        }

        function handleScrollWindow() {
            // scrollY = $win.scrollTop();
            const { scrollY } = window
            console.log(scrollY);
            
        }

        function reset() {
            $win.trigger('resize').trigger('resize');
            $wrap.removeClass('inactive');
        }

        init();
    });
})(jQuery);