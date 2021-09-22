var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        const $item = $('li');
        // console.log($item);
        $item.addClass('active');


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        const $aType2 = $('a.type-2');
        // console.log($aType2);
        $aType2.addClass('current');


        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        const $itemFirst = $item.eq(0);
        // console.log($itemFirst);
        $itemFirst.addClass('zero');


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        const $aSpan = $('a:has(span)');
        // console.log($aSpan);
        $aSpan.addClass('inner');


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        const $itemLink = $('li[data-role="link"]');
        // console.log($itemLink);
        $itemLink.addClass('role');


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        const $radioList = $('#radio-list').children();
        // console.log($radioList); // 3
        console.log($radioList.length); // 3


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        const $type2 = $('.type-2');
        // console.log($type2); // a.type-2.current.inner
        const $type2Parent = $type2.parent();
        // console.log($type2Parent); // li.prev.active
        console.log($type2Parent.index()); // 1


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        // $input.val();
        // val() utility 이용하면 input일 때 value 값 찾을 수 있음.
        // $input[0] js | attribute - value 속성 찾기.
        const $radio1 = $('input#radio-1');
        // console.log($radio1);
        console.log($radio1.val()); // 1


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        let $aMenu7 = $('a').eq(6);
        console.log($aMenu7);

        $aMenu7 = $radio1.parents('html').find('li a').eq(6);
        console.log($aMenu7);

        $aMenu7 = $('a:contains("Menu 7")');
        console.log($aMenu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        const $notRadio2 = $('input').not('#radio-2');
        // console.log($notRadio2);
        const $notRadio2Parent = $notRadio2.parent();
        // console.log($notRadio2Parent);
        $notRadio2Parent.children('label').addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        const $subLast = $('li.sub-last');
        // console.log($subLast);
        const $parentsLast = $subLast.parents('.last');
        // console.log($parentsLast);
        const $lastChildA = $parentsLast.children('a');
        // console.log($lastChildA);
        $lastChildA.addClass('emphasis');
        $lastChildA.addClass('bold');


    });
})(jQuery);