console.log("Script Load");
(function ($) {
    $(document).ready(function () {
        console.log('jQuery Ready');
        const $animation = $('.animation');
        const $util = $('.util');
        const $btnControl = $util.find('a');

        // 이미지 갯수
        const max = 25;
        const col = 5;
        const row = 5;

        let timer;
        let cuFrame = 0;
        let isReverse = false;

        // 이미지 전체 해상도 
        const imgWidth = 1600;
        const imgHeight = 1163;


        // 프레임별 영역 해상도
        let itemWidth = null;
        let itemHeight = null;


        function init() {
            setting();
            addEvent();
            reset();
        }

        function setting() {
            // itemwidth, height 계산
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

            const type = $el.attr('href').replace('#', ''); // href링크의 기준값 공통 # 삭제
            console.log(type);
            switch (type) {
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

        // 플레이 기능
        function playFrame() {
            stopFrame();
            isReverse = false;
            timer = setInterval(progressFrame, 60); //0.06초
        }

        // 거꾸로 플레이
        function reverseFrame() {
            stopFrame();
            isReverse = true;
            timer = setInterval(progressFrame, 60); //0.06초
        }

        // 중지 기능
        function stopFrame() {
            clearInterval(timer); // 중지
        }

        // 리셋
        function resetFrame(){
            stopFrame();
            // 프레임 강제로 0번으로 맞춘 후
            cuFrame = 0;
            isReverse =false;
            // 프레임 제자리로 돌아오도록 호출
            updateFrame();
        }

        // 프레임을 관리하는 기능.
        function progressFrame() {
            // cuFrame += 1; //0.06초동안 오름

            // reverse이면 -1 reverse 아니면 +1
            if (!isReverse) {
                cuFrame += 1;
            } else {
                cuFrame -= 1;
            }

            // 역순일 때 0이되면 stop
            if(cuFrame <= 0){
                cuFrame = 0;
                if(isReverse){
                    stopFrame();
                } 
            }

            // 역순아닐 때 max보다 커지면 stop
            if (cuFrame >= max -1) { //0~11
                cuFrame = max - 1;
                if(!isReverse){
                    stopFrame();
                }
                stopFrame(); // 중지
            }
            updateFrame();
        }

        // 프레임 움직임
        function updateFrame() {
            // sprite Sheet에서의 현재 프레임(cuFrame)에 따른 X좌표, Y좌표
            let posX = 0;
            let posY = 0;

            /*
            (0,0)(1,0)(2,0)(3,0)
            (0,1)(1,1)(2,1)(3,1)
            (0,2)(1,2)(2,2)(3,2)
            */

            posX = cuFrame % col * itemWidth * -1;
            posY = Math.floor(cuFrame / col) * itemHeight * -1; // math.floor - 소수점 버리기
            console.log(`(${cuFrame}, ${posX},${posY})`);
            $animation.css({ 'background-position': `${posX}px ${posY}px` });
        }

        function reset() {

        }

        init();
    });
})(jQuery);