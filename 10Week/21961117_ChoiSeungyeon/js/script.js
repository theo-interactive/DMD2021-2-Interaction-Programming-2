console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');

        // const max = 12;
        // const col = 4;
        // const row = 3;

        const max = 48;
        const col = 7;
        const row = 7;

        let timer;
        let cuFrame = 0;
        let isReverse = false;

        // 이미지 전체 해상도
        // const imgWidth = 576;
        // const imgHeight = 432;
        // (1x) 576 × 432
        // (retina @2x) 1152 × 864

        const imgWidth = 1008;
        const imgHeight = 1008;

        // 프레임별 영역 해상도
        let itemWidth = null
        let itemHeight = null

        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            itemWidth = imgWidth / col;
            itemHeight = imgHeight / row;
        }

        function addEvent() {
            $btnControl.on('click', handleClickBtnControl);
        }

        function handleClickBtnControl(e) {
            e.preventDefault();
            const $el = $(this);
            // 1.
            // const type = $el.attr('class').replace('btn-', '');
            // 2.
            const type = $el.attr('href').replace('#', '');
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
            if (type === 'play') {
            } else if (type === 'reverse') {
            } else if (type === 'stop') {
            } else if (type === 'reset') {
            }
        }
        
        function playFrame() {
            stopFrame();
            isReverse = false;
            timer = setInterval(progressFrame, 60);
        }

        function reverseFrame() {
            stopFrame();
            isReverse = true;
            timer = setInterval(progressFrame, 60);
        }

        function stopFrame() {
            clearInterval(timer)
        }

        function resetFrame() {
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            updateFrame();
        }

        // 프레임을 관리하는 기능.
        function progressFrame() {
            if (!isReverse) {
                cuFrame += 1
            } else {
                cuFrame -= 1
            }
            if (cuFrame <= 0) {
                cuFrame = 0
                if (isReverse) {
                    stopFrame();
                }
            }
            if (cuFrame >= max - 1) {
                cuFrame = max - 1;
                if (!isReverse) {
                    stopFrame();
                }
            }
            updateFrame();
        }

        function updateFrame() {
            // Sprite Sheet 에서의 현재 프레임(cuFrame) 에 따른 X 좌표, Y 좌표
            let posX = 0;
            let posY = 0;
            /*
            (0,0) (1,0) (2,0) (3,0)
            (0,1) (1,1) (2,1) (3,1)
            (0,2) (1,2) (2,2) (3,2)
            */
            posX = cuFrame % col * itemWidth * -1;
            posY = Math.floor(cuFrame / col) * itemHeight * -1;
            console.log(`${cuFrame}, (${posX}, ${posY})`);
            $animation.css({'background-position': `${posX}px ${posY}px`});
        }

        function reset() {
        }

        init();
    });
})(jQuery);