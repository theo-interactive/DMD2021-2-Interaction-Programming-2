var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        const $li = $('li');
        $li.addClass('active');
        console.log($li);

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        const $aHasType2 = $('a.type-2');
        $aHasType2.addClass('current');
        console.log($aHasType2);

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        const $li0Index = $('li');
        $li0Index.eq(0).addClass('zero');
        console.log($li0Index.eq(0));

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        const $aHasSpan = $('a').has('span');
        $aHasSpan.addClass('inner');
        console.log($aHasSpan);

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        
        const $liLink = $('li[data-role="link"]');
        $liLink.addClass('role');
        console.log($liLink);

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        const $radioListChild = $('#radio-list').children().length;
        console.log($radioListChild);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);

        const $type2Parent = $('.type-2').parent();
        console.log($type2Parent.index());

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        // $input.val(); // value
        // $input[0] js | attribute - value

        const $radio1Value = $('input#radio-1').val();
        console.log($radio1Value);
        const $radio1Value2 = $('label[for="radio-1"]').prev().val();
        console.log($radio1Value2);
        const $radio1Value3 = $('.radio-item').children('#radio-1').val();
        console.log($radio1Value3);

        

        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);

        const $aHasMenu7 = $('a:contains("Menu 7")');
        $aHasMenu7.addClass('1');
        console.log($aHasMenu7);
        const $aHasMenu7_2 = $('li').children('a:contains("Menu 7")');
        $aHasMenu7_2.addClass('2');
        console.log($aHasMenu7_2);
        const $aHasMenu7_3 = $('a:contains("Menu 8")').parent('li').prev().children('a');
        $aHasMenu7_3.addClass('3');
        console.log($aHasMenu7_3);

        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.

        const $radioNot2 = $('input[name="radio"]').not('#radio-2').parent().children('label');
        $radioNot2.addClass('emphasis');
        console.log($radioNot2);

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        
        const $subLast = $('li.sub-last');
        console.log($subLast);
        const $last = $subLast.parents('.last');
        console.log($last);
        const $lastA = $last.children('a');
        $lastA.addClass('emphasis');
        console.log($lastA);
        const $aFind = $last.find('a');
        $aFind.addClass('bold');
        console.log($aFind);


    });
})(jQuery);