var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        let liEl = $('li');
        liEl.addClass('active');


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        let type2AEl = $('a[class="type-2"]');
        type2AEl.addClass('current');


        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        liEl.eq(0).addClass('zero');


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        let aSpan = $('a').has('span');
        aSpan.addClass('inner');


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        let liLink = $('li[data-role="link"]');
        liLink.addClass('role');


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        const $radioli = $('#radio-list');
        const $radioC = $radioli.children().length;
        console.log($radioC);


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        const $type = $('.type-2');
        const $typeP = $type.parent();
        console.log($typeP.index());


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        // Hint.
        // $input.val(); // value
        // $input[0] js | attribute - value
        const $radio1 = $('#radio-1').val();
        console.log($radio1);


        
        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        let menu7 = $('a').eq(6);
        console.log(menu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        let $radio2 = $('input[name="radio"]').not('#radio-2').parents();
        $radio2.children('label').addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        // const subLast = $('li.sub-last');
        // subLast = subLast.parents('.last');
        // subLast = subLast.children('a');
        // subLast.addClass('emphasis');
        // let subLastA = $('li.sub-last').find('a');
        // subLastA = subLastA.addClass('bold');

        const $subLast = $('li.sub-last').parents('.last')
        const $subLastA = $subLast.children('a').addClass('emphasis');
        console.log($subLastA);
        let subLastA = $('li.sub-last').find('a');
        subLastA = subLastA.addClass('bold');
        console.log($subLastA);

    });
})(jQuery);