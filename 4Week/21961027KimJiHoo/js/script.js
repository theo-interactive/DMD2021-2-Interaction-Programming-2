(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.

        var $hello = $('div#hello'); // hello 아이디를 가진 div를 찾고
        // console.log($hello);

        $hello.append('<span id="my-name">제 이름은 김지후입니다.</span>').eq(0); // 그것의 첫 번째 자식노드로 추가, 문제 해결!


        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img b노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];

        $.each(images, function(index, value) { // images의 길이만큼 반복문 돌림
            // console.log(value);

            const $bannerItem = $('<div class="banner-item"></div>'); 
            // banner-item 클래스를 가지는 div 요소를 생성 - 3개가 생성됨

            const $bannerImage = $('<img>', {'src' : `${value}`});
            // 들어갈 이미지(노드)를 생성

            $bannerImage.appendTo($bannerItem).eq(0); 
            // bannerItem 노드에 bannerImages노드를 추가

            $bannerItem.appendTo('div.banner-container').eq(0);
            // 위의 결과물을 banner-container class를 가진 div 노드에 추가, 문제 해결!
        });

        // ※html상에서 이미지는 img scr = "url"로 불러옴



        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.

        const $p_Movetop = $('p.move-top');
        $p_Movetop.prependTo($('body')); // p.move-top노드를 body의 가장 위로 이동
        $p_Movetop.addClass('move'); // move class 추가 = 바탕이 까맣게 변함
        $p_Movetop.html('위로 이동했습니다.'); // 내용을 변경
        

        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.

        const $p_Movebottom = $('p.move-bottom');
        $p_Movebottom.appendTo($('body')); // p.move-bottom노드를 body의 가장 아래로 이동
        $p_Movebottom.addClass('move'); // move class 추가하고
        $p_Movebottom.html('아래로 이동했습니다.'); // 내용 변경, 문제 해결!

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.

        const  $p_Error = $('p.error');
        $p_Error.remove(); // 노드 삭제, 문제 해결!


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.

        const $p_Modify = $('p.modify');
        $p_Modify.html('수정되었습니다.'); // 내용 변경, 문제 해결!


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.

        $p_Modify.empty(); // 내용을 비우기(노드는 남아있음)
        $p_Modify.remove(); // 노드 삭제.


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.


        const $ul_List1 = $('ul.list-1').children('li').eq(0); // 요소 찾아옴
        // console.log($ul_List);

        for(let listCount1 = 2; listCount1 < 5; listCount1++){ // 반복문이 3번 반복되도록 초기화
            const $clone = $ul_List1.clone().text(`리스트 ${listCount1}`);
            // console.log(listCount1);
            // $ul_List.eq(0).after($clone);
            $clone.appendTo($ul_List1.parent('ul'));
            // 요소를 복제 후 텍스트를 바꾸고 ul에 추가(li에 추가하면 li 노드속에 li가 들어가 버림)
        }


        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.

        const $ul_List2 = $('ul.list-2').children('li').eq(0); // 요소 찾아옴

        for(let listCount2 = 4; listCount2 > 0; listCount2--){ 
            console.log(listCount2);
            $clone.prependTo($ul_List2.parent('ul'));
            // 8번과 풀이 방식은 같으나 반복문만 반대로 돌려줌
        }

        // 리스트가 추가되는 것을 확인 가능. 문제 해결!



        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.


    });
})(jQuery);