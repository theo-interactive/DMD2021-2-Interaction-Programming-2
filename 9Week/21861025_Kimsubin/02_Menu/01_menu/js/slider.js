console.log("Script Load");

// 이미지 크기 설정
const IMAGE_WIDTH = 1213;

(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        let isAni = false;
        let cuId = 0;
        let exId = 0;
        let max = void 0
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
            $btnPaddle.on('click' , handleClickPaddle)
            $dot.on('click', handleClickDot)
        }

        function handleClickPaddle(e) {
            e.preventDefault();

            if(isAni){
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
            if(exId !== cuId){
                slideAnimation();
            }
        }

        function slideAnimation(){
            if(!isAni){
                isAni = true;
            }

            paddleActive();
            dotSelect();
            const left = `${(IMAGE_WIDTH * cuId) * -1}px`;
            const duration = 300 + 100 * Math.abs(cuId - exId);
            const easing = 'easeOutSine';

            // $container.stop(true).animate({ left : left },200);
            // animate({transition 스타일}, {option});
            // animate({transition 스타일}, nuber - duration 속도);
            // $container.stop(true).animate({ left },400);
            // $container.stop(true).animate({ left }, { duration: 400, complete: function(){
            $container.stop(true).animate({ left }, { duration, easing, complete: function(){
                exId = cuId;
                isAni = false;
            } });
        }

        function handleClickDot(e) {
            e.preventDefault();

            if(isAni){
                return;
            }
            const idx = $dot.index(this);
            if(exId !== idx){
                console.log('change');
                cuId = idx
                slideAnimation();
            }
        }

        function paddleActive(){
            $btnPaddlePrev.removeClass('disabled');
            $btnPaddleNext.removeClass('disabled');
            if(cuId === 0){
                $btnPaddlePrev.addClass('disabled');
            }
            else if(cuId === max - 1){
                $btnPaddleNext.addClass('disabled');
            }
        }

        function dotSelect(){
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