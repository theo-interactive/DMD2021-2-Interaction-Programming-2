console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');


        // 문제발생
        // 호버시에는 모든 프레임별로 애니메이션이 진행되지만
        // 컨트롤 버튼으로 진행 시에는 row 기준의 이미지로만 프레임이 구성됨
        
        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');

        // 이미지 전체 해상도
        // const imgWidth = 582;
        // const imgHeight = 497;
        // max : 40 / cal : 6 / row : 7

        const max = 40;
        const col = 6;
        const row = 7;

        let timer;
        let cuFrame = 0;
        let isReverse = false;

        const imgWidth = 582;
        const imgHeight = 497;

        // 프레임별 해상도
        let itemWidth = null
        let itemHeight = null


        function init(){
            setting();
            addEvent();
            reset();
        }

        function setting(){
            itemWidth = imgWidth / col;
            itemHeight = imgHeight / row;
            // console.log(itemWidth, itemHeight);
        }

        function addEvent(){
            $btnControl.on('click', handleClickBtnControl);
        }

        function handleClickBtnControl(e){
            e.preventDefault();
            // console.log('click');
            const $el = $(this);

            // 1.
            // const type = $el.attr('class').replace('btn-', '');

            // 2.
            const type = $el.attr('href').replace('#', '');
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

            // 위와 동일하지만 코드가 길어질 경우 가독성이 낮음

            // if(type === 'play'){
            // }
            // else if(type === 'reverse'){
            // }
            // else if(type === 'stop'){
            // }
            // else if(type === 'reset'){
            // }
            console.log(type);
        }

        function playFrame(){
            stopFrame();
            isReverse = false;
            timer = setInterval(progressFrame, 60);
        }

        function reverseFrame(){
            stopFrame();
            isReverse = true;
            timer = setInterval(progressFrame, 60);
        }

        function stopFrame(){
            clearInterval(timer)
        }

        function resetFrame(){
            stopFrame();
            cuFrame = 0;
            isReverse = false;
            updateFrame();
        }

        // 프레임을 관리하는 기능
        function progressFrame(){

            if(!isReverse){
                cuFrame += 1
            }
            else{
                cuFrame -= 1
            }
            // console.log(cuFrame);

            if(cuFrame <= 0){
                cuFrame = 0
                if(isReverse){
                    stopFrame();
                }
            }

            if(cuFrame >= max - 1){
                cuFrame = max -1;
                if(!isReverse){
                    stopFrame();
                }
            }
            // console.log(cuFrame);
            updateFrame();
        }

        function updateFrame(){
            // Sprite Sheet 에서의 현재 프레임 ( cuFrame ) 에 따른 X 좌표, Y좌표
            let posX = 0;
            let posY = 0;

            /*
            (0,0) (1,0) (1,1) (1,2)
            (0,1) (1,1) (2,1) (3,1)
            (0,2) (1,2) (2,2) (3,2)
            */

            posX = cuFrame % row;
            posY = Math.floor(cuFrame / col) * itemHeight * -1;
            console.log(`${cuFrame}, (${posX}, ${posY})`);
            $animation.css({'background-position': `${posX}px ${posY}px`});
        }

        function reset(){

        }

        init();
    });
})(jQuery);