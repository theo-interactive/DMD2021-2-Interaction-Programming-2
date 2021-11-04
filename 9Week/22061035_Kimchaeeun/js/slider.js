// console.log("Script Load");

(function($) {
    $(document).ready(function() {
        // console.log('jQuery Ready');

        // 애니메이션 완료 이전에 클릭되는 것을 방지
        let isAni = false;

        let cuId = 0;
        let exId = 0;
        let max = void 0
        let bannerWidth = 0;
        let bannerHeight = 0;

        const _this = this;

        const $section = $('section>div.area');

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
            $win.on('resize', handleResizeBanner).trigger('resize');

            $btnPaddle.on('click' , handleClickPaddle);
            $dot.on('click', handleClickDot);
        }

        // 브라우저 리사이즈시마다 요소들 너비와 
        function handleResizeBanner() {
            bannerWidth = $section.width();
            bannerHeight = $section.height();

            $banner.width(bannerWidth).height(bannerHeight);
            $container.width(bannerWidth * max);
            $items.width(bannerWidth);
            $images.width(bannerWidth).height(bannerHeight);

            slideAnimation(true);
        }

        // function. (event handler)
        function handleClickPaddle(e) {
            e.preventDefault();

            // 애니메이션 중일 때 하단의 코드들을 무시하고 메소드 이탈
            if (isAni) {
                return;
            }

            const $el = $(this);
            // const $el = $(e.currentTarget);
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

            if(!isResize) {
                // 애니메이션 기능 (isResize = false)
                if (!isAni) {
                    isAni = true;
                }
    
                paddleActive();
                dotSelect();
    
                const duration = 500 + 100 * Math.abs(cuId - exId);
                const easing = 'easeOutSine';
                // Math.abs : 절댓값

                // 속성명과 변수명이 일치하면 앞의 key 값을 생략해도 ok
                $container.stop(true).animate({left}, { duration, easing, complete: function() {
                    // 애니메이션이 끝난 후 애니메이션 상태 해제, 이전 순서 동기화
                    isAni = false;
                    exId = cuId;
                }});
            } else {
                // 리사이즈 기능 (isResize = true)
                isAni = false;
                $container.stop(true).css({left});
                exId = cuId;
            }
        }

        function handleClickDot(e) {
            e.preventDefault();

            // 애니메이션 중일 때 하단의 코드들을 무시하고 메소드 이탈
            if (isAni) {
                return;
            }

            // const $el = $(this);
            const idx = $dot.index(this);
            if (exId !== idx) {
                console.log('change');
                cuId = idx;
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