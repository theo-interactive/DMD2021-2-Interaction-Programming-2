console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');

        const max = 16;
        const col = 8;
        const row = 2;

        let timer;
        let cuFrame = 0;
        let isReverse = false;

        const imgWidth = 864;
        const imgHeight = 280;

        // 프레임별 영역 해상도
        let itemWidth = null;
        let itemHeight = null;

        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            itemWidth = imgWidth / col;
            itemHeight = imgHeight / row;

            console.log(itemWidth, itemHeight);
        }

        function addEvent() {
            $btnControl.on('click', handleClickBtnControl);
        }

        function handleClickBtnControl(e) {
            e.preventDefault();
            const $el = $(this);

            const type = $el.attr('href').replace('#', '');
            console.log(type);

            // 조건문으로 작성해도 ok
            switch(type) {
                case 'play':
                    playFrame();
                    break;
                case 'reverse':
                    reverseFrame();
                    break;
                case 'stop':
                    stopFrame();
                    break;
                case 'reset':
                    resetFrame();
                    break;
                default:
                    break;
            }
        }

        // 프레임을 시작하는 기능.
        function playFrame () {
            stopFrame();
            isReverse = false;
            timer = setInterval(progressFrame, 60);
        }

        // 프레임을 역순으로 움직이는 기능.
        function reverseFrame() {
            stopFrame();
            isReverse = true;
            timer = setInterval(progressFrame, 60);
        }

        // 프레임을 멈추는 기능.
        function stopFrame() {
            clearInterval(timer);
        }

        // 프레임 순서를 초기화하는 기능.
        function resetFrame() {
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            updateFrame();
        }

        // 프레임을 관리하는 기능.
        function progressFrame() {
            if (!isReverse) {
                cuFrame += 1;
            } else {
                cuFrame -= 1;
            }

            if (cuFrame < 0) {
                cuFrame = 0;
                if (isReverse) {
                    stopFrame();
                }
            }
            if (cuFrame > max - 1) {
                cuFrame = max - 1;
                stopFrame();
            }
            
            updateFrame();
        }

        function updateFrame() {
            // Sprite Sheet 에서의 현재 프레임(cuFrame)에 따른 X좌표, Y좌표
            let posX = 0;
            let posY = 0;

            // 나머지 값을 구하는 식을 사용하여 x 위치 확인
            posX = cuFrame % col * itemWidth * -1;
            // cuFrame / col의 소수값 제외 정수값으로 y 위치 확인
            // Math.floor: 소수점 제거
            posY = Math.floor(cuFrame / col) * itemHeight * -1;
            console.log(`${cuFrame}, (${posX}, ${posY})`);
            $animation.css({'background-position' : `${posX}px ${posY}px`});
        }
        
        function reset() {
            
        }

        init();
    });
})(jQuery);