console.log("Script Load");

// 절대 변하지 않는 값
const IMAGE_WIDTH = 1069;

(function ($) {
    $(document).ready(function () {
        console.log('jQuery Ready');

        let isAni = false;
        let cuId = 0;
        let exId = 0;
        let max = void 0;
        const _this = this;

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
            $btnPaddle.on('click', handleClickPaddle)
            $dot.on('click', handleClickDot)
        }

        // arrow function. (event handler)
        // 이벤트를 연결할 때는 화살표 함수보다 기본 함수로 처리해주는게 좋다.
        // const handleClickPaddle = (e) => {
        //     console.log(this); // #document
        //     console.log(e.currentTarget); // button
        //     // jQuery로 한 번 감쌈
        //     const $el = $(e.currentTarget);
        //     console.log($el);
        // }

        // function handleClickPaddle(e) { 
        // console.log(this); // 클릭한 버튼들 출력
        //     let $el = $(this);
        //     console.log($el); // button
        //     $el = $(e.currentTarget);
        //     console.log($el); // button
        // }

        // function. (event handler)
        function handleClickPaddle(e) {
            e.preventDefault();
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

            // console.log(cuId);
        }

        function slideAnimation() {
            if (!isAni) {
                isAni = true;
            }
            paddleActive();
            dotSelect();
            const left = `${IMAGE_WIDTH * cuId * -1}px`;
            const duration = 350 + 100 * Math.abs(cuId - exId);
            const easing = 
            // 이전 아이디에 현재 아이디 반영
            // complete = 진행되는동안 다음 함수 내용 실행.
            // $container.stop(true).animate({left : left}, { duration: 400, complete: function() {
            $container.stop(true).animate({
                left
            }, {
                duration,
                complete: function () {
                    console.log('complete');
                    isAni = false;
                    exId = cuId;
                }
            });
        }

        function handleClickDot(e) {
            e.preventDefault();
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

            // console.log(idx);
            // console.log('dot');
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
            // console.log($dot, $dot.eq(cuId));
        }

        function reset() {
            isAni = false;
            paddleActive();
            dotSelect();
        }

        init();
    });
})(jQuery);