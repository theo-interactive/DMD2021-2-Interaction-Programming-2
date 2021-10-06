(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.
        // .banner의 overflow 속성 값 변경.
        const $banner = $('.banner');
        $banner.css('overflow', 'hidden');
        // console.log($($banner));


        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        // .banner 크기 값 확인.
        console.log($banner.width(), $banner.height()); // 1000 380

        // .banner-wrap 크기 값 확인.
        const $bannerWrap = $('.banner-wrap');
        console.log($bannerWrap.width(), $bannerWrap.height()); // 1000 510
        // -> 가로 크기는 같지만 세로 크기가 다른 것을 확인.

        // .banner-wrap의 세로 크기를 .banner의 크기와 동일하게 적용.
        $bannerWrap.css('height', `${$banner.height()}`);
        console.log($bannerWrap.width(), $bannerWrap.height()); // 1000 380


        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.
        // .banner-container 선언.
        const $bannerContainer = $('.banner-container');
        // console.log($bannerContainer);

        // .banner-item 개수 확인.
        const $bannerItem = $('.banner-item');
        // console.log($bannerItem.length); // 5

        // .banner-container 크기 값 변경.
        $bannerContainer.css({
            'width': $bannerWrap.width() * $bannerItem.length,
            'height': '100%'
        });
        // console.log($bannerContainer.width()); // 5000


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        // .banner-item 속성 값 변경.
        $bannerItem.css({
            'float': 'left',
            'width': $bannerWrap.width(),
            'height': '100%'
        });


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        // .banner-item의 자식 중 img 요소 찾기.
        const $bannerItemImg = $bannerItem.children().find('img');

        // .banner-item 크기 값 변경.
        $bannerItemImg.css('width', '100%');
        // console.log($bannerItemImg);


        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        // .paddle-nav 선언.
        const $paddleNav = $('.paddle-nav');
        // console.log($paddleNav);
        
        // .paddle-nav의 자식 중 .arrow.prev 요소 찾기.
        const $arrowPrev = $paddleNav.children().find('.arrow.prev');
        // console.log($arrowPrev);

        // .arrow.prev 위치 값 변경.
        $arrowPrev.css('left', '18px');


        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.
        // .paddle-nav의 자식 중 .arrow.next 요소 찾기.
        const $arrowNext = $paddleNav.children().find('.arrow.next');
        // console.log($arrowNext);

        // .arrow.next 위치 값 변경.
        $arrowNext.css('right', '18px');


        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        // .dot-nav 선언.
        const $dotNav = $('.dot-nav');
        // console.log($dotNav);

        // .dot-nav 위치 값 변경.
        $dotNav.css('bottom', '20px');     
        

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.
        const $bannerItemWidth = $bannerItem.width();
        let _id = 0;
        const slideLeft = () => {
            // 함수 실행 시 _id 값을 1씩 감소.
            _id -= 1;
            // console.log(_id);
            
            // 애니메이션을 위한 animate()
            // $("요소선택").animate({스타일속성} , 적용시간 , 가속도, 콜백함수);
            
            // 왼쪽으로 이동하는 애니메이션.
            $bannerContainer.animate({
                'left': `${_id * -$bannerItemWidth}px`}, // 속성
            function(){ // 콜백 함수
                dotSelect();
                paddleCheck();
            });
        }


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.
        const slideRight = () => {
            // 함수 실행 시 _id 값을 1씩 증가.
            _id += 1;
            // console.log(_id);

            // 오른쪽으로 이동하는 애니메이션.
            $bannerContainer.animate({
                'left': `${_id * -$bannerItemWidth}px`},
            function(){
                dotSelect();
                paddleCheck();
            });
        }


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        // 클릭 이벤트 추가.
        $arrowPrev.on('click', slideLeft);
        $arrowNext.on('click', slideRight);


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.
        const $span = $('span');
        const dotSelect = function(){
            // 해당 순서가 아닌 요소에서 클래스 제거.
            $span.not(_id).removeClass('selected');
            // 해당 순서 요소에 클래스 추가.
            $span.eq(_id).addClass('selected');
        }


        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.
        const paddleCheck = function(){
            if (_id == 0){ // _id 값이 0일 경우.
                $arrowPrev.addClass('disabled');
            } else if (_id == $bannerItemImg.length - 1){ // _id 값이 마지막일 경우.
                $arrowNext.addClass('disabled');
            } else { // _id 값이 0이나 마지막이 아닐 경우.
                $arrowPrev.removeClass('disabled');
                $arrowNext.removeClass('disabled');
            }
            console.log(_id);
        }
        // paddleCheck 함수 실행.
        paddleCheck();
    });
})(jQuery);