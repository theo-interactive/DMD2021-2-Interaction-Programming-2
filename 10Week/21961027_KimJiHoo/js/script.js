console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');


        // opts = {
        //     max = 48,
        //     col = 7,
        //     row = 7,
        //     width = 1008,
        //     height = 1008
        //     setTime = 60 (재생 주기)
        // }

        function Sprite(el, opts){
                
            const $el = $(el); 

            const max = opts.max; // 시트 속 이미지 전체 갯수.
            const col = opts.col;
            const row = opts.row; // 행 / 열.
            
            let timer; // Interval.
            let cuFrame = 0; // 현재 프레임.

            // 이미지 전체 해상도(/2)
            const imgWidth = opts.width;
            const imgHeight = opts.height;
            // 4 x 3 , (retina @2x) 1008 x 1008 => 전체에서 반씩 줄인 크기임.


            // 프레임별 영역 해상도.
            let itemWidth = null;
            let itemHeight = null;

            let isReverse = false;

            ///


            function init(){
                setting();
                addEvent();
                reset();
            }


            function setting(){
                /// 시작 시 프레임 크기를 구함.
                itemWidth = imgWidth / col;
                itemHeight = imgHeight / row;
            }
            
            function addEvent(){
                $el.on('mouseenter', handleMouseenter);
                $el.on('mouseleave', handleMouseLeave);
            }

            function handleMouseenter(){
                playFrame();
            }

            function handleMouseLeave(){
                reverseFrame();
            }

            function playFrame(){
                stopFrame(); // 이전 timer interval를 삭제시킨 뒤,
                isReverse = false;
                timer = setInterval(progressFrame, opts.setTime);
            }

            function reverseFrame(){
                stopFrame(); // 이전 timer interval를 삭제시킨 뒤,
                isReverse = true;
                timer = setInterval(progressFrame, opts.setTime);
            }

            function progressFrame(){ // -> 실제 프레임 재생은 이곳에서 진행.
                
                if(isReverse){
                    cuFrame -= 1;
                }
                else{
                    cuFrame += 1; // 현재 프레임 갱신.
                }

                if(cuFrame <= 0){
                    cuFrame = 0;
                    if(isReverse){
                        stopFrame();
                    }

                }

                if(cuFrame >= max - 1){
                    cuFrame = max - 1;
                    if(!isReverse){
                        stopFrame(); // 재생이 끝나면 또 재생되지 못하게끔 timer interval를 삭제
                    }
                }
                

                // console.log(cuFrame);
                updateFrame();
            }

            function stopFrame(){
                clearInterval(timer);
            }


            function updateFrame(){
                // Sprite Sheet 에서의 현재 프레임(cuFrame)에 따른 X좌표, Y좌표
                let posX = 0;
                let posY = 0;

                posX = cuFrame % col * itemWidth * -1;
                posY = Math.floor(cuFrame / col) * itemHeight * -1;
                console.log(` ${cuFrame}, (${posX}, ${posY})`);

                $el.css({
                    'background-position': `${posX}px ${posY}px` 
                });
        }

        function reset(){
            updateFrame();
        }

        
        init();


        }

        // const minion = new Sprite('.minion', 
        // {
        //     max : 48,
        //     col : 7,
        //     row : 7,
        //     width : 1008,
        //     height : 1008,
        //     setTime : 60
        // });

        // const zootopia = new Sprite('.zootopia', 
        // {
        //     max : 12,
        //     col : 4,
        //     row : 3,
        //     width : 576,
        //     height : 432,
        //     setTime : 60
        // });

        const spider = new Sprite('.spider',
        {
            max : 8,
            col : 4,
            row : 2,
            width : 724,
            height : 362,
            setTime : 120
        });

    });
})(jQuery);