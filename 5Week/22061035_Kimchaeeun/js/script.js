(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.
        const $banner = $('.banner');
        $banner.css('overflow', 'hidden');


        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        const $bannerWrap = $('.banner-wrap');
        $bannerWrap.width($banner.width()).height($banner.height());


        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.
        const $bannerItem = $('.banner-item');
        const $bannerContainer = $('.banner-container');

        $bannerContainer.width($bannerWrap.width() * $bannerItem.length).height('100%');


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        $bannerItem.css({
            'float' : 'left',
            'width' : `${$bannerWrap.width()}`,
            'height' : '100%'
        });


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        $bannerItem.find('img').width('100%');


        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        const $nav = $('.paddle-nav')
        $nav.find('.arrow.prev').css('left', '18px');
        // $('.arrow.prev').css('left', '18px');


        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.
        $nav.find('.arrow.next').css('right', '18px');
        // $('.arrow.next').css('right', '18px');


        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        $('.dot-nav').css('bottom', '20px');
        

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.
        // 0 값을 갖는 _id 변수 선언 (추후 감소 및 추가될 것을 고려하여 let으로 선언)
        let _id = 0;
        // slideLeft 함수 생성
        function slideLeft() {
            // slideLeft 함수 실행될 때마다 _id 변수의 값을 .banner-item의 width만큼 감소
            _id -= $bannerItem.eq(0).width();
            
            // .banner-container의 right 값을 _id 변수 만큼 적용
            $bannerContainer.animate({
                right: `${_id}px`
            }, function () {
                dotSelect();
                paddleCheck(); });
            // Quest 12. dotSelect 함수 콜백으로 실행
            // Quest 13. paddleCheck 함수 콜백으로 실행

            // console.log('left click', _id);
        }


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.
        // slideRight 함수 생성
        function slideRight() {
            // slideLeft 함수 실행될 때마다 _id 변수의 값을 .banner-item의 width만큼 증가
            _id += $bannerItem.eq(0).width();

            // .banner-container의 right 값을 _id 변수 만큼 적용
            $bannerContainer.animate({
                right : `${_id}px`
            }, function () {
                dotSelect();
                paddleCheck(); });
            // Quest 12. dotSelect 함수 콜백으로 실행
            // Quest 13. paddleCheck 함수 콜백으로 실행

            // console.log('right click', _id);
        }


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        // click() 메소드 내 함수 기입시 () 생략할 것

        // .arrow.prev 노드 클릭시 slideLeft() 실행
        // $('button.arrow.prev').click(slideLeft);
        const $prevArrow = $('button.arrow.prev');
        $prevArrow.on('click', slideLeft);

        // .arrow.next 노드 클릭 시 slideRight() 실행
        // $('button.arrow.next').click(slideRight);
        const $nextArrow = $('button.arrow.next');
        $nextArrow.on('click', slideRight);


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.
        // .dot-nav의 자식요소 span 리스트를 $spans 변수에 저장
        let $spans = $('.dot-nav').find('span');

        // dotSelect 함수 생성
        function dotSelect() {
            // $spans의 길이 만큼 실행되는 반복문 작성
            $.each($spans, function(idx, value) {
                // 현재 순서값 * 1000 = 현재 .banner-container의 right 값이므로
                // idx * 1000 == _id일 때 조건문으로 클래스 추가 및 제거 진행
                if (idx * 1000 == _id) {
                    // 현재 순서의 span이 selected 클래스가 없을경우 해당 span에 selected 클래스 추가
                    if (!$spans.eq(idx).hasClass('selected')) {
                        $spans.eq(idx).addClass('selected');
                    }

                    // 현재 순서의 이전 span에 selected 클래스가 존재할 경우 해당 span에 selected 클래스 제거
                    if ($spans.eq(idx - 1).hasClass('selected')) {
                        $spans.eq(idx - 1).removeClass('selected');
                    }

                    // 현재 순서의 다음 span에 selected 클래스가 존재할 경우 해당 span에 selected 클래스 제거
                    if ($spans.eq(idx + 1).hasClass('selected')) {
                        $spans.eq(idx + 1).removeClass('selected');
                    }
                    
                }
            });
        }

        // dotSelect();


        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.

        // paddleCheck 함수 생성
        function paddleCheck() {
            // _id 값이 0인 경우 .arrow.prev노드에 'disabled' 클래스 추가
            if(_id == 0) {
                $prevArrow.addClass('disabled');
            }

            // _id 값이 보여지는 이미지의 마지막인 경우 .arrow.prev노드에 'disabled' 클래스 추가
            // img들의 마지막 순서 번호: element.length에서 1을 뺀 값
            if (_id == ($('.image-area>img').length - 1) * 1000) {
                $nextArrow.addClass('disabled');
            }

            // _id 값이 0이나 마지막이 아닐경우 .arrow 노드의 'disabled' 클래스 모두 삭제
            if (0 < _id && _id < ($('.image-area>img').length - 1) * 1000) {
                $('.arrow').removeClass('disabled');
            }
        }

        // DOM이 준비되면 paddleCheck 함수 실행
        $(document).ready(paddleCheck);

    });
})(jQuery);