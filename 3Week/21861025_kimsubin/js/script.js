var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        const $li1 = $('li');
        // console.log($li1);
        $li1.addClass('active');

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        const $a2 = $('a.type-2');
        // console.log($a2);
        $a2.addClass('current');

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        const $li3 = $('li');
        $li3.eq(0).addClass('zero');

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        const $a4 = $('a')
            .has('span')
            .addClass('inner');

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        const $li5 = $('li[data-role="link"]')
            .addClass('role');

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        const $radio6 = $('#radio-list'); // radio-list 아이디를 찾음
        console.log($radio6);
        
        const $radiolist6 = $radio6.children(); // 해당 아이디 안의 자식을 찾음
        console.log($radiolist6);


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);

        const $type7 = $('.type-2'); // type-2 클래스를 찾음
        console.log($type7);

        const $typeParent7 = $type7.parent(); // $type7의 상위(부모) 요소
        console.log($typeParent7);
        console.log($typeParent7.index());


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        // $input.val(); // value 값 찾기
        // $input[0] js | attribute - value

        const $input8 = $('#radio-1'); // 아이디 radio-1 찾기
        console.log($input8);

        const $inputVal = $input8.val(); // 해당요소의 value 값
        console.log($inputVal);

        // 줄이기
        const $input8_ = $('#radio-1').val();
        console.log($input8_);

        // 검토
        // const $input82 = $('#radio-2');
        // console.log($input82);

        // const $inputVal2 = $input82.val();
        // console.log($inputVal2);

        // const $input8_2 = $('#radio-2').val();
        // console.log($input8_2);

        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);

        const $Menu9 = $('ul.gnb');
        console.log($Menu9);
        const $MenuChildern9 = $Menu9.children('li');
        console.log($MenuChildern9);
        
        console.log($MenuChildern9.eq(6)); // class="gnb"의 자식요소 중 6번 항목

        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        const $radio10 = $("#radio-2");
        // console.log($radio10);
        $radio10Parents = $radio10.parent();
        // console.log($radio10Parents);
        // $parents10label = $radio10Parents.children().eq(1);
        $parents10label = $radio10Parents.find("label");
        // console.log($parents10label);
        $parents10label.addClass('emphasis');
        console.log($parents10label);

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        const $sublast11 = $('li.sub-last');
        // console.log($sublast11);
        const $last11 = $sublast11.parents('.last');
        // console.log($last11);
        $last11.children('a').addClass('emphasis');
        $last11.find('a').addClass('bold');

    });
})(jQuery);