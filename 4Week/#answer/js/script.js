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


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        const $aType2 = $('a.type-2');
        $aType2.addClass('current');


        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        // const $li0 = $li.eq(0);
        const $li0 = $li.first();
        $li0.addClass('zero');


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        // const $aHasSpan = $('a:has(span)');
        const $aHasSpan = $('a').has('span');
        $aHasSpan.addClass('inner');


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        // const $liLink = $('li[data-role=link]');
        const $liLink = $('li[data-role="link"]');
        $liLink.addClass('role');


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        const $radioList = $('#radio-list');
        const $radioItem = $radioList.children();
        const radioMax = $radioItem.length;
        console.log(radioMax);

        
        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        const $type2 = $('.type-2');
        const $type2Parent = $type2.parent();
        console.log($type2Parent.index());


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        const $radio1 = $('input#radio-1');
        let radioValue = $radio1.val();
        console.log(radioValue);
        radioValue = $radio1.attr('value');
        console.log(radioValue);
        radioValue = $radio1[0].getAttribute('value');
        console.log(radioValue);
        radioValue = $radio1[0].value;
        console.log(radioValue);


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        let $aMenu7 = $('a:contains(Menu 7)');
        console.log($aMenu7);
        $aMenu7 = $('.gnb')
            .children('li')
            .eq(6)
            .children('a');
        console.log($aMenu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        const $inputNotRadio2 = $('input').not('#radio-2');
        const $parent = $inputNotRadio2.parent();
        const $label = $parent.find('label');
        $label.addClass('emphasis');
        

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        const $subLast = $('li.sub-last');
        const $parents = $subLast.parents('.last');
        const $a = $parents.children('a');
        const $aAll = $parents.find('a');
        $a.addClass('emphasis');
        $aAll.addClass('bold');

        
    });
})(jQuery);