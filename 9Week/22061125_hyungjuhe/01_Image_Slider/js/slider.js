console.log("Script Load");

// const IMAGE_WIDTH = 1069;

(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        let isAni = false;
        let cuId = 0;
        let exId = 0;
        let max = void 0;
        let bannerWidth = 0;
        let bannerheight = 0;

        const _this = this;

        const $win = $(window);
        const $banner = $('.banner');
        const $wrap = $banner.children('.banner-wrap');
        const $container = $wrap.children('.banner-container');
        const $items = $container.children('.banner-item');
        const $images = $items.find('img');
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
            $win.on('resize', handleResizeWindow).trigger('resize');
            $btnPaddle.on('click' , handleClickPaddle)
            $dot.on('click', handleClickDot)
        }

        function handleResizeWindow() {
            bannerWidth = $win.width()
            bannerheight = $win.height();
            $banner.width(bannerWidth).height(bannerheight);
            $container.width(bannerWidth * max);
            $items.width(bannerWidth);
            $images.width(bannerWidth).height(bannerheight);
            slideAnimation(true);
        }

        function handleClickPaddle(e) {
            e.preventDefault();
            if (isAni) {
                return;
            }
            const $el = $(this);
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
            if (exId !== cuId) {
                slideAnimation();
            }
        }

        function slideAnimation(isResize = false) {
            const left = `${(bannerWidth * cuId) * -1}px`;
            if (!isResize) {
                //애니메이션 기능.
                if (!isAni) {
                    isAni = true;
                }
                paddleActive();
                dotSelect();
                const duration = 300 + 100 * Math.abs(cuId - exId);
                const easing = 'easeInSine'
                $container.stop(true).animate({ left }, { duration, easing, complete: function() {
                    isAni = false;
                    exId = cuId;
                }});
            } else {
                // 리사이즈 기능.
                isAni = false;
                $container.stop(true).css({ left });
                exId = cuId;
            }
        }

        function handleClickDot(e) {
            e.preventDefault();
            if (isAni) {
                return;
            }
        
            const idx = $dot.index(this);
            if (exId !== idx) {
                cuId = idx
                slideAnimation();
            }
        }

        function paddleActive() {
            $btnPaddlePrev.removeClass('disabled');
            $btnPaddleNext.removeClass('disabled');
            if (cuId === 0) {
                $btnPaddlePrev.addClass('disabled');
            } else if (cuId === max - 1) {
                $btnPaddleNext.addClass('disabled');
            }
        }

        function dotSelect() {
            $dot.removeClass('selected');
            $dot.eq(cuId).addClass('selected');
        }

        function reset() {
            isAni = false;
            paddleActive();
            dotSelect();
        }

        init();
    });
})(jQuery);