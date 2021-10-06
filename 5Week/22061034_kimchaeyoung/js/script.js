(function ($) {
    $(document).ready(function () {
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.
        // .banner를 찿아서 banner 변수에 대입.
        const banner = $('.banner');
        // css 메서드를 이용해 overflow 속성을 hidden으로 변경.
        banner.css('overflow', 'hidden');


        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        //.banner의 width와 height를 구하기 위해 width, height 메서드를 이용하여 구한 뒤,
        // 변수에 대입.
        const bannerWidth = banner.width();
        const bannerHeight = banner.height();

        const bannerWrap = $('.banner-wrap');
        // bannerWrap에 위에서 구한 .banner의 width와 height를 대입.
        bannerWrap.width(bannerWidth);
        bannerWrap.height(bannerHeight);


        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.
        // .banner-item의 개수를 구하기 위해 length 메서드를 이용.
        const bannerItem = $('.banner-item');
        const bannerItemLength = bannerItem.length;

        // bannerWrap의 width를 메서드를 이용해 구한 뒤, 변수에 대입.
        const bannerWrapWidth = bannerWrap.width();

        const bannerContainer = $('.banner-container');
        // bannerWrapWidth * bannerItemLength를 bannerContainer의 너비값으로 적용.
        bannerContainer.width(bannerWrapWidth * bannerItemLength);
        bannerContainer.height('100%');


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        // bannerItem의 float 속성을 left로 변경.
        bannerItem.css('float', 'left');
        // width를 bannerWrap의 width와 동일하게.
        bannerItem.width(bannerWrapWidth);
        // heigth를 100%로 설정.
        bannerItem.height('100%');


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        // bannerItem의 자식노드인 img 요소를 찾아 bannerItemImg 변수에 대입.
        const bannerItemImg = bannerItem.find('img');
        // bannerItemImg의 width를 100%로 지정.
        bannerItemImg.width('100%');


        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        // .paddle-nav의 .arrow.prev 노드를 찾아 arrowPrev 변수에 대입.
        const arrowPrev = $('.paddle-nav .arrow.prev');
        // arrowPrev의 left 속성을 18px로 지정.
        arrowPrev.css('left', '18px');


        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.
        // .paddle-nav의 .arrow.next 노드를 찾아 arrowNext 변수에 대입.
        const arrowNext = $('.paddle-nav .arrow.next');
        // arrowNext의 right 속성을 18px로 지정.
        arrowNext.css('right', '18px');


        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        // .dot-nav 노드를 찾아 dotNav 변수에 대입.
        const dotNav = $('.dot-nav');
        // dotNav의 bottom 속성을 20px로 지정.
        dotNav.css('bottom', '20px');


        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.
        // _id 변수를 선언 후, 0 대입.
        let _id = 0;
        // move 변수를 선언 후, 0 대입
        // _id를 이용해 bannerContainer를 움직일 변수
        let move = 0;
        // bannerItem의 width값을 메서드를 이용해 구한 뒤 변수 bannerItemWidth에 대입.
        const bannerItemWidth = bannerItem.width();

        // slideLeft 함수 생성.
        function slideLeft() {
            // _id를 증감 메서드를 이용해 누를 때마다 1씩 증가
            _id++;
            // 그에 bannerItemWidth를 곱해서 css에 변화값으로 적용되도록 함
            move = _id * bannerItemWidth;

            // console창으로 각 변수값 확인.
            console.log(_id, "왼쪽");
            console.log(move);

            // bannerContainer의 left가 move만큼 이동되도록 css 메서드 이용.
            bannerContainer.css('left', move);
            paddleCheck();
            dotSelect();
        };


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.
        // slideRight 함수 생성.
        function slideRight() {
            // _id를 증감 메서드를 이용해 누를 때마다 1씩 감소
            _id--;
            // 그에 bannerItemWidth를 곱해서 css에 변화값으로 적용되도록 함
            move = _id * bannerItemWidth;
            
            // console창으로 각 변수값 확인.
            console.log(_id, "오른쪽");
            console.log(move);

            // bannerContainer의 left가 move만큼 이동되도록 css 메서드 이용.
            bannerContainer.css('left', move);
            paddleCheck();
            dotSelect();
        };


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        // arrowPrev 클릭 시, slideLeft 실행.
        arrowPrev.on('click', slideLeft);
        // arrowNext 클릭 시, slideRight 실행.
        arrowNext.on('click', slideRight);


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.
        // .dot-nav span을 찾아 navSpan 변수에 대입.
        const navSpan = $('.dot-nav span');

        // 아래 dotSelect 함수의 내용을 반복문을 이용해 만들 수 있을 것 같아서 시도해봤지만
        // 생각처럼 안돼서 하나하나 지정해줬습니다.
        // 원래 생각했던 내용은 _id와 별도로 버튼이 눌릴 때마다 증가될 count 변수를 생성해 기준값으로 잡으려 했습니다.
        // let count = 0;

        // dotSelect 함수 생성.    
        function dotSelect() {
            // 그 후, 함수가 실행될 때마다 count가 1씩 증가되고
            // count++;
            // count 변수를 기준으로 반복문이 실행될 수 있도록 하고자 했습니다.
            // if (_id == count * -1) {
            //     $('span').removeClass('selected');
            // eq의 변수에 count도 넣어보고 _id도 넣어봤지만 생각대로 실행되지 않아서 원래 작성했던대로 뒀습니다.
            //     navSpan.eq(_id*-1).addClass('selected');
            // }

            if (_id == 0) {
                $('span').removeClass('selected');
                navSpan.eq(0).addClass('selected');
            } else if (_id == -1) {
                $('span').removeClass('selected');
                navSpan.eq(1).addClass('selected');
            } else if (_id == -2) {
                $('span').removeClass('selected');
                navSpan.eq(2).addClass('selected')
            } else if (_id == -3) {
                $('span').removeClass('selected');
                navSpan.eq(3).addClass('selected')
            } else if (_id == -4) {
                $('span').removeClass('selected');
                navSpan.eq(4).addClass('selected')
            }
        };


        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.
        // paddleCheck 함수 생성.
        function paddleCheck () {
            // _id가 0일 때
            if (_id == 0) {
                // arrowPrev에 disabled 클래스 추가.
                arrowPrev.addClass('disabled');
                // _id가 bannerItemLength에서 1을 뺀 것에서 * -1을 한 것과 같을 때
                // = 마지막 이미지가 보여질 때
            } else if (_id == (bannerItemLength - 1) * -1) {
                // arrowNext에 disabled 클래스 추가.
                arrowNext.addClass('disabled');
                // 그 외에는
            } else {
                // 모든 arrow 노드에 disabled 클래스 제거.
                $('.arrow').removeClass('disabled');
            }
        };
        paddleCheck();
    });
})(jQuery);