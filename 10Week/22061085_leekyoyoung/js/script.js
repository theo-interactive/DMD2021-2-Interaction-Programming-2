console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');
        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');

        const max = 12;
        const col = 4;
        const row = 3;
        // png 이미지안에 있는 총 이미지수 12장과
        // 가로 4줄
        // 세로 3줄

        let timer;
        let cuFrame= 0
        let isReverse = false;
        

        const imgWidth = 576;
        const imgHeight = 432;
        // 이미지 해상도

        let itemWidth = null;
        let itemHeight = null;


        function init(){
            setting();
            addEvent();
        }
        // 함수들을 실행 시키기 위한 init

        function setting(){
            itemWidth = imgWidth / col;
            itemHeight = imgHeight / row;
            console.log(itemHeight,itemWidth)
        }

        function addEvent(){
            $btnControl.on('click',handleClickBtnControl);
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
            // 타이머를 정지 후 isReverse가 false로 정의를 한후 60프레임으로 timer에 입력해줌
            // 숫자가 높아질수록 재생이 길어짐
        }
        function reverseFrame(){
            stopFrame()
            isReverse = true;
            timer = setInterval(progressFrame, 100);
            // reverse 경우 isReverse가 true가 됨
            // 100프레임의 속도로 재생됨
        }

        function stopFrame(){
            clearInterval(timer)
            // 타이머를 정지
        }

        function resetFrame(){
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            undateFrame();
            // 타이머를 정지 후 현재 프레임의 값을 0으로 되돌림
            // isRevese의 값이 false가 ㄱ됨
            // backgroung-position을 0,0으로 되돌림
        }

        function progressFrame(){

            if(!isReverse){
                cuFrame+=1
                // isReverse가 false인 경우 
                // cuFrame의 값이 1씩 증가함
            }else{
                cuFrame -= 1;
                // isReverse가 true인 경우 
                // cuFrame의 값이 1씩 감소함
                // Reverse시 사용됨
            }


            if(cuFrame<=0){
                cuFrame = 0;
                if(isReverse){
                    stopFrame();
                }
            }
            // cuframe의 값이 0보다 작아지면 
            // 0으로 정의해줌
            // isRevese가 trueㅇ인 경우 정지

            if(cuFrame > max-1){
                cuFrame = max-1;
                if(!isReverse){
                    stopFrame();

                }
            }
            undateFrame();
            // cuframe의 값이 max-1보다 커지면 
            // max-1으로 정의해줌
            // isRevese가 false인 경우 정지
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