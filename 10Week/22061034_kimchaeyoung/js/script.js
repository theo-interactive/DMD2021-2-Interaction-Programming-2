console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');
        
        const max = 10;
        const col = 5;
        const row = 2;

        let timer;
        let cuFrame = 0;
        let isReverse = false;

        const imgWidth = 588;
        const imgHeight = 279;

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
            console.log('click');
            const $el = $(this);

            const type = $el.attr('href').replace('#', '');
            console.log(type);
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
            } else if ( type === 'reverse') {
            } else if ( type === 'stop') {
            } else if ( type === 'reset') {
            }

        }

        function playFrame () {
            stopFrame();
            isReverse = false;
            timer = setInterval(progressFrame, 60);
        }
        
        function reverseFrame() {
            stopFrame();
            isReverse = true;
            timer = setInterval(progressFrame, 60);
        }

        function stopFrame () {
            clearInterval(timer)
        }

        function resetFrame () {
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            updateFrame();
        }

        // 프레임을 관리하는 기능.
        function progressFrame () {
            if (!isReverse) {
                cuFrame += 1;
            } else {
                cuFrame -= 1;
            }
            if (cuFrame <= 0) {
                cuFrame = 0;
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
            let posX = 0;
            let posY = 0; 

            posX = cuFrame % col * itemWidth * -1;
            posY = Math.floor(cuFrame / col) * itemHeight * -1;
            console.log(`(${posX}, ${posY})`);
            $animation.css({'background-position': `${posX}px ${posY}px`});
        }

        function reset() {

        }

        init();

    });
})(jQuery);