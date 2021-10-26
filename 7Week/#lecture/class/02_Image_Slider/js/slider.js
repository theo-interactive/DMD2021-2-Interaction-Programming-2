console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // const _this = this;

        // Current Index
        let cuId = 0;
        let exId = 0;
        let max = void 0 // undefined

        // Selector.
        const $banner = $('.banner');
        // banner
        const $wrap = $banner.children('.banner-wrap');
        const $container = $wrap.children('.banner-container');
        const $items = $container.children('.banner-item');

        // Dot Nav
        const $dotNav = $banner.children('.dot-nav');
        const $dot = $dotNav.find('span');

        // Paddle Nav
        const $paddleNav = $banner.children('.paddle-nav');
        const $btnPaddle = $paddleNav.find('button.arrow');
        const $btnPaddlePrev = $paddleNav.find('button.arrow.prev');
        const $btnPaddleNext = $paddleNav.find('button.arrow.next');

        // 초기화
        function init() {
            // layout();
            setting();
            addEvent();
            reset();
        }

        // Selector 찾아서 요소 확인
        // function layout() {
        //     _this.$banner = $('.banner');
        //     // banner
        //     _this.$wrap = _this.$banner.children('.banner-wrap');
        //     _this.$container = _this.$wrap.children('.banner-container');
        //     _this.$item = _this.$container.children('.banner-item');

        //     // Dot Nav
        //     _this.$dotNav = _this.$banner.children('.dot-nav');
        //     _this.$dot = _this.$dotNav.find('span');

        //     // Paddle Nav
        //     _this.$paddleNav = _this.$banner.chindren('.paddle-nav');
        //     _this.$btnPaddle = _this.$paddleNav.find('button.arrow');
        //     _this.$btnPaddlePrev = _this.$paddleNav.find('button.arrow.prev');
        //     _this.$btnPaddleNext = _this.$paddleNav.find('button.arrow.next');
        // }

        // 초기값 세팅
        function setting() {
            cuId = 0;
            exId = cuId;
            max = $items.length;
        }

        // 이벤트 연결
        function addEvent() {
            $btnPaddle.on('click' , handleClickPaddle)
            $dot.on('click', handleClickDot)
        }

        // const handleClickPaddle = () => {}
        function handleClickPaddle(e) {
            e.preventDefault();
            // console.log('paddle');
            // $(this) // 현재 이벤트가 발생된 요소를 찾아온다.
            // $(e.currentTarget)
            // console.log($(this));
            // console.log($(e.currentTarget));
            const $el = $(e.currentTarget);
            // prev, next 버튼이 클릭되는 상황.
            // 1) hasClass()
            // if ($el.hasClass('prev')) {
            //     // prev 버튼일 때.
            //     console.log('이전 버튼');
            // } else if ($el.hasClass('next')) {
            //     // next 버튼일 때.
            //     console.log('다음 버튼');
            // }
            // 2) is()
            if ($el.is($btnPaddlePrev)) {
                // console.log('이전 버튼')
                cuId -= 1;
                if (cuId < 0) {
                    cuId = 0;
                }
            } else if ($el.is($btnPaddleNext)) {
                // console.log('다음 버튼')
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

        // 초기값 재설정
        function reset() {

        }

        init();
    });
})(jQuery);