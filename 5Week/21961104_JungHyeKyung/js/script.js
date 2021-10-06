(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.
        // let $banner = $('.banner');
        // // console.log($banner);
        // $banner.css('overflow', 'hidden');

        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        // let $bannerWrap = $('.banner-wrap');
        // // // console.log($banner.width());
        // // // console.log($banner.height());
        // let $width = $banner.width();
        // let $height = $banner.height();
        // // // console.log($width);
        // // // console.log($height);
        // // console.log($bannerWrap.height($height));
        // // console.log($bannerWrap.width($width));
        // $bannerWrap.width($width);
        // $bannerWrap.height($height);
        
        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.***
        // let $bannerContainer = $('.banner-container');
        // let $bannerItem = $('.banner-item');
        // // console.log($bannerItem);
        // $bannerContainer.width($bannerItem.length);
        // $bannerContainer.height('100%');


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.***
        // const $bannerWrapWidth = $bannerWrap.width();
        // $bannerItem.width($bannerWrapWidth);


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        // console.log($bannerItem.children());
        // let $bannerItemChidren = $bannerItem.children();
        // // console.log($bannerItemChidren);
        // // console.log($bannerItemChidren.children('img'));
        // let $bannerItemImg = $bannerItemChidren.children('img').width('100%');
        // // console.log($bannerItemImg.width());

        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        // let $paddleNav = $('.paddle-nav').children();
        // // console.log($paddleNav.children());
        // let $paddleLi = $paddleNav.children();
        // // console.log($paddleLi.children('.arrow.prev'));
        // let $paddleLeft = $paddleLi.children('.arrow.prev');
        // $paddleLeft.css('left', '18px');

        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.
        // let $paddleNavLi = $paddleNav.children();
        // // console.log($paddleNavLi);
        // let $paddleNavLiRight = $paddleNavLi.children('.arrow.next');
        // // console.log($paddleNavLiRight);
        // $paddleNavLiRight.css('right','18px');

        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        // let $dotNav = $('.dot-nav').css('bottom','20px');
        // console.log($dotNav);
        
        
        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.***
        // let _id = 0;
        // let $itemWidth = $bannerContainer.children('.banner-item').width();
        // // console.log($itemWidth);
        // function slideLeft() {
        //     console.log('함수');
        //     _id--;
        // }
        // slideLeft();
       

        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.***
        // function slideRight() {
        //     _id++;
        // }
        // slideRight();

        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        // let $arrowPrev = $('.arrow.prev');
        // $arrowPrev.click(function(e){
        //     e.preventDefault();
        //     slideLeft();
        // });
        // // console.log($arrowPrev);
        // let $arrowNext = $('.arrow.next');
        // $arrowNext.click(function(e){
        //     e.preventDefault();
        //     slideRight();
        // });
        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.
        // function dotSelect() {
        //     const $spanSelected = $('.dot-nav').children();
        //     // console.log($spanSelected);
        //     let $selected = $spanSelected.find('span');
        //     // console.log($selected);
        //     // console.log($selected.hasClass('selected'));
        //     // if($selected.hasClass('selected')) {
        //     //     // console.log('selected 있음')
        //     //     $selected.removeClass('selected');
        //     // } else {
        //     //     // console.log('selected 없음')
        //     //     $selected.addClass('selected');
        //     // }
        //     $selected.toggleClass('selected');
        // }
        // dotSelect();


        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.***
        // function paddleCheck() {
        //     if(_id <= 0) {
        //         $arrowPrev.addClass('disabled');
        //     } else if() {
        //         $arrowNext.addClass('disabled');
        //     }  else {
        //         $arrowPrev.removeClass('disabled');
        //         $arrowNext.removeClass('disabled');
        //     }
        // }

    });
})(jQuery);