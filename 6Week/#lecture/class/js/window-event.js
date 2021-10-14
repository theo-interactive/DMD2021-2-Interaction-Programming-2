console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $window = $(window);
        const $body = $('body');
        let winSize = {
            width: null,
            height: null
        }
        let scrollY = null;
        // console.log($window.width(), $window.height());
        // resize
        const handleResizeWindow = () => {
            console.log('resize');
            const width = $window.width();
            const height = $window.height();
            winSize = { width, height }
            console.log(winSize);
            // console.log($window.width(), $window.height());
        }
        $window.on('resize', handleResizeWindow);
        $window.trigger('resize');

        // scroll
        const handleScrollWindow = () => {
            scrollY = $window.scrollTop();
            console.log('scroll', scrollY);
            if (scrollY < 400) {
                $body.addClass('black');
            } else {
                $body.removeClass('black');
            }
        }
        $window.on('scroll', handleScrollWindow);
        $window.trigger('scroll');
    });
})(jQuery);