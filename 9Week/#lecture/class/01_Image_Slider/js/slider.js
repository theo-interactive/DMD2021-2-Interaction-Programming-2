console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        let cuId = 0;
        let exId = 0;
        let max = void 0

        const $banner = $('.banner');
        const $wrap = $banner.children('.banner-wrap');
        const $container = $wrap.children('.banner-container');
        const $items = $container.children('.banner-item');
        const $dotNav = $banner.children('.dot-nav');
        const $dot = $dotNav.find('span');
        const $paddleNav = $banner.children('.paddle-nav');
        const $btnPaddle = $paddleNav.find('button.arrow');
        const $btnPaddlePrev = $paddleNav.find('button.arrow.prev');
        const $btnPaddleNext = $paddleNav.find('button.arrow.next');

        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            cuId = 0;
            exId = cuId;
            max = $items.length;
        }

        function addEvent() {
            $btnPaddle.on('click' , handleClickPaddle)
            $dot.on('click', handleClickDot)
        }

        function handleClickPaddle(e) {
            e.preventDefault();
            const $el = $(e.currentTarget);
            if ($el.is($btnPaddlePrev)) {
                cuId -= 1;
                if (cuId < 0) {
                    cuId = 0;
                }
            } else if ($el.is($btnPaddleNext)) {
                cuId += 1;
                if (cuId > max - 1) {
                    cuId = max - 1;
                }
            }
            console.log(cuId);
        }

        function handleClickDot(e) {
            e.preventDefault();
            console.log('dot');
        }

        function reset() {
        }

        init();
    });
})(jQuery);