console.log("Script Load");

// 절대 변하지 않는 값
const IMAGE_WIDTH = 1280;

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
            const $el = $(this);
            // console.log($el)
            // $el = btnpaddle의 각각 요소(prev next)
            if ($el.is($btnPaddlePrev)) {
                // 만약 $el이 btnPaddlePrev가 눌리면
                cuId -= 1; 
                //cuId의 값이 -1씩 감소한다
                if (cuId < 0) {
                    cuId = 0;
                }
                // 만약 cuId가 0보다 작아지면 cuId의 값은 0으로 정의한다
            } else if ($el.is($btnPaddleNext)) {
                //  만약 $el이 btnPaddleNext 눌리면
                cuId += 1;
                // cuId의 값은 1씩 증가한다
                if (cuId > max - 1) {
                    cuId = max - 1;
                    // cuId가 max -1d의 값보다 커지면 값을 max-1로 정의한다
                }
            }
            if (exId !== cuId) {
                slideAnimation();
            }
        }

        function slideAnimation() {
            paddleActive();
            dotSelect();
            const left = `${IMAGE_WIDTH * cuId * -1}px`;
            $container.stop(true).animate({left : left}, 200);

            exId = cuId;
        }

        function handleClickDot(e) {
            e.preventDefault();
            const idx = $dot.index(this);
            if (exId !== idx) {
                // idx의 값이 exId의 요소와 같지 않으면
                // cuId를 idx값으로 정의해준다.
                cuId = idx;
                slideAnimation();
            }
        }

        function paddleActive() {
            $btnPaddlePrev.removeClass('disabled');
            $btnPaddleNext.removeClass('disabled');
            // btnpaddle에 disabled의 클래스를 모두 삭제해준다
            if (cuId === 0) {
                $btnPaddlePrev.addClass('disabled');
                // 만약 cuId의 값이 0이면 이전버튼에 disabled를 추가해준다
                // 뒤로가기 버튼 막기
            } else if (cuId === max - 1) {
                $btnPaddleNext.addClass('disabled');
                // 만약 cuId의 값이 max - 1이면 다음버튼에 disabled를 추가해준다
                // 앞으로가기 버튼 막기
            }
        }

        function dotSelect() {
            $dot.removeClass('selected');
            $dot.eq(cuId).addClass('selected');
            // dot에 selected를 초기화 해준다
            // 현재 값에 selected 클래스를 추가해준다.
        }

        function reset() {
            paddleActive();
            dotSelect();
        }

        init();
    });
})(jQuery);