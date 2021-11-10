console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        function Sprite(el, opts){
            const $el = $(el);
    
            // 이미지 전체 해상도
            // const imgWidth = 582;
            // const imgHeight = 497;
            // max : 40 / cal : 6 / row : 7

            const max = opts.max;
            const col = opts.col;
            const row = opts.row;
    
            let timer;
            let cuFrame = 0;
            let isReverse = false;
    
            const imgWidth = opts.width;
            const imgHeight = opts.height;
    
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
                $el.on('mouseenter', handleMouseEnter)
                    .on('mouseleave', handleMouseLeave);
            }

            function handleMouseEnter(){
                playFrame();
            }

            function handleMouseLeave(){
                reverseFrame();
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
    
                let posX = 0;
                let posY = 0;
    
                posX = cuFrame % col * itemWidth * -1;
                posY = Math.floor(cuFrame / col) * itemHeight * -1;
                console.log(`${cuFrame}, (${posX}, ${posY})`);
                $el.css({'background-position': `${posX}px ${posY}px`});
            }
    
            function reset() {
                updateFrame();
            }
    
            init();
        }

        const sprite = new Sprite('.sprite', {
            max: 40, col: 6, row: 7, width: 582, height: 497
        });
    });
})(jQuery);