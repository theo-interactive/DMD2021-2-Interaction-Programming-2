(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.

        const $banner1 = $('.banner');
        //console.log($banner1);

        $banner1.css({
            'overflow' : 'hidden' // css를 객체 형태로 수정, 문제 해결!
        });


        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        const $banner_Wrap = $('.banner-wrap');
        //console.log($banner_Wrap);

        $banner_Wrap.width($banner1.width());
        $banner_Wrap.height($banner1.height());// width()와 height()로 가로 세로 값을 구해서 대입,

        console.log($banner_Wrap.width(), $banner_Wrap.height()); // 문서 상에서 style이 변경되었음을 확인 가능, 문제 해결!
        

        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.

        const $banner_Container = $('.banner-container');
        const $banner_Item = $('.banner-item');
        // console.log($banner_Container);

        $banner_Container.width($banner_Wrap.width() * $banner_Item.length);
        $banner_Container.css({
            'height' : '100%'
        }); // 문서 상에서 style이 변경되었음을 확인 가능, 문제 해결!


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        $banner_Item.css({
            'float' : 'left',
            // 'width' : $banner_Wrap.width, // css 객체 내에서 이런식으로 수정 불가능?
            'height' : '100%'
        });

        $banner_Item.width($banner_Wrap.width());

        console.log($banner_Wrap.width());
        console.log($banner_Item.width()); // 크기가 같음을 확인 가능, 문제 해결!


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.

        const $item_Img =  $banner_Item.find('img');
        // console.log($item_Img);

        $item_Img.css({
            'width' : '100%'
        }); // 이미지가 꽉 참을 확인 가능, 문제 해결!


        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.

        const $arrow_Prev = $('.paddle-nav').find('.arrow.prev')

        $arrow_Prev.css({
            'left' : '18px'
        });


        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.

        const $arrow_Next = $('.paddle-nav').find('.arrow.next')

        $arrow_Next.css({
            'right' : '18px'
        });

        // 두 화살표의 위치가 바뀜을 확인 가능, 문제 해결!



        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        
        const $dot_Nav = $('.dot-nav');

        $dot_Nav.css({
            'bottom' : '20px'
        }) // 갤러리 내비게이션 위치가 바뀜을 확인 가능, 문제 해결!


        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9. --> 이후 문제의 질문을 이해하지 못했습니다....

        let _id = 0;

        const posX = $banner_Container.children('.banner-item');
        console.log(posX);

        function sideLeft(){
            posX -= $banner_Item.width();
            console.log(posX);
        }

        // sideLeft();


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.


        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.


    });
})(jQuery);