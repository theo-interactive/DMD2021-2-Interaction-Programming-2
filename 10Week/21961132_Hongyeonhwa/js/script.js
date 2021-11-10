console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $animation = $('.animation');//애니메이션 이미지
        const $util = $('.util');//동작기능
        const $btnControl = $util.find('a');

        let timer;
        let cuFrame= 0
        let isReverse = false;

        const max = 114;
        const col = 12;
        const row = 10;
        const imgWidth = 834;
        const imgHeight =715;
        // 이미지 해상도
        let itemWidth = null;
        let itemHeight = null;
    
        function init(){
            setting();
            addEvent();
        }

        function setting(){
            itemWidth = imgWidth / col;//576 나누기 4
            itemHeight = imgHeight / row;//432 나누기 3
            console.log(itemHeight,itemWidth)
        }

        function addEvent(){
            $btnControl.on('click',handleClickBtnControl);//동작버튼 클릭
        }
        function handleClickBtnControl(e){
            e.preventDefault();
            const $el = $(this);
            const type = $el.attr('href').replace('#','');
            switch(type){
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

        function playFrame(){
            stopFrame()
            isReverse=false;
            timer = setInterval(progressFrame, 100);
        }
        function reverseFrame(){
            stopFrame()
            isReverse = true;
            timer = setInterval(progressFrame, 100);
        }
        function stopFrame(){
            clearInterval(timer)
        }
        function resetFrame(){
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            undateFrame();
        }

        function progressFrame(){

            if(!isReverse){
                cuFrame+=1;//프레임 1씩 증삭
            }else{
                cuFrame -= 1;
                // isReverse가 true인 경우 1씩 감소
            }


            if(cuFrame<=0){
                cuFrame = 0;
                if(isReverse){
                    stopFrame();
                }
            }

            if(cuFrame > max-1){
                cuFrame = max-1;
                if(!isReverse){
                    stopFrame();

                }
            }
            undateFrame();
        }
        function undateFrame(){
            let posX = 0;
            let posY = 0;
            posX = cuFrame % col * itemWidth * -1;
            posY = Math.floor(cuFrame / col) * itemHeight * -1;
            console.log(cuFrame,`(${posX},${posY})`);
            $animation.css({'background-position':`${posX}px ${posY}px`})
        }
        init();
    });
})(jQuery);