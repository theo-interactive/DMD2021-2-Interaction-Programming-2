var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        // 모든 li 요소를 찾기 위해 jQuery를 이용해 li 요소를 찾아 liEl에 대입.
        let liEl = $('li');
        // li 요소가 대입된 liEl 변수에 addClass 메서드를 이용해 active 클래스 추가.
        liEl.addClass('active');

    //----
        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        // 문서 내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하여 type2AEl 변수에 대입.
        let type2AEl = $('a[class="type-2"]');
        // 해당 요소에 current 클래스 추가.
        type2AEl.addClass('current');

    //----
        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        // 위에서 li 요소를 찾아 대입한 liEl에 eq 메서드를 이용해
        // 문서내의 li 요소들 중 0 index에 위치한 노드를 선택하여
        // zero 클래스 추가 
        liEl.eq(0).addClass('zero');

    //----
        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        // 문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 has 메서드를 이용해 선택하여 aSpan 변수에 대입.
        let aSpan = $('a').has('span');
        // inner 클래스 추가.
        aSpan.addClass('inner');

    //----
        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.

        // 문서내의 li 요소들 중 data-role 속성이 link인 노드를 필터링을 통해 선택하여 liLink 변수에 대입.
        let liLink = $('li[data-role="link"]');
        // role 클래스 추가
        liLink.addClass('role');

    //----
        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
       
        // radio-list 아이디를 가지고 있는 요소의 자식 노드를 찾아 변수 radioListChilEls에 대입.
        let radioListChilEls = $('#radio-list').children();
        // length를 이용해 자식 노드들의 길이를 구하여 radioListChilEls에 대입.
        radioListChilEls = radioListChilEls.length;
        // console.log 메서드를 이용해 출력.
        console.log(radioListChilEls);
        console.log("%c Answer 6." + radioListChilEls);

    //----
        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.

        // type-2 클래스를 가지고 있는 요소를 찾고 parents 메서드를 이용해 해당 요소의 부모 노드를 찾아 type2ParentEls 변수에 대입.
        let type2ParentEls = $('.type-2').parents();
        // index 메서드를 이용해 index값을 구한 뒤 type2ParentEls에 대입.
        type2ParentEls = type2ParentEls.index();
        // console.log 메서드를 이용해 출력.
        console.log("%c Answer 7." + type2ParentEls);

    //----
        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.

        // 1. id가 radio-1인 input radio 요소를 찾아 radio1El 변수에 대입.
        let radio1El1 = $('#radio-1');
        // val 메서드를 이용해 아이디가 radio-1 인 input radio 요소의 value를 radio1El 변수에 대입. 
        radio1El1 = radio1El1.val();
        console.log(radio1El1);

        // 2. input 요소를 찾아 inputEl 변수에 대입.
        let inputEl = $('input');
        // 그 중 id가 radio-2, radio-3 이 아닌 것만 찾음.
        inputEl = inputEl.not('#radio-2, #radio-3');
        // val 메서드를 이용해 value 값을 찾아 변수에 대입.
        inputEl = inputEl.val();
        console.log(inputEl);

        // 3. radio-list의 자식 요소 중 첫번째 div를 찾아 radioListChil 변수에 대입.
        let radioListChil = $('#radio-list').children('div').eq(0);
        // div 자식 요소의 input 자식 요소를 찾아 radioListChil 변수에 대입.
        radioListChil = radioListChil.children('input');
        // input 자식 요소를 val 메서드를 이용해 value 값을 찾아 radioListChil 변수에 대입.
        radioListChil = radioListChil.val();
        console.log(radioListChil);

        // 4. radio-list의 자식 요소 중 두번째 div를 찾아 radioListChil2 변수에 대입.
        let radioListChil2 = $('#radio-list').children('div').eq(1);
        // prev 메서드를 이용해 해당 요소 이전의 요소를 찾아 자식 요소인 input을 찾아 radioListChil2 변수에 대입.
        radioListChil2 = radioListChil2.prev().children('input');
        // val 메서드를 이용해 value 값을 찾아 radioListChil2 변수에 대입.
        radioListChil2 = radioListChil2.val();
        console.log(radioListChil2);

        console.log("%c Answer 8." + radioListChil2);
        // Hint.
        // $input.val(); // value
        // $input[0] js | attribute - value

    //----
        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        
        // 1. eq 메서드를 이용해 a 요소 중 7번째에 위치하는 요소를 찾음.
        let menu7El = $('a').eq(6);
        // addClass 메서드를 이용해 제대로 찾아졌는지 확인.
        menu7El.addClass('bold')
        console.log(menu7El);
        console.log("%c Answer 9." + menu7El);

    //----
        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.

        // name이 radio인 input 요소를 찾은 뒤 그 중 아이디가 radio-2가 아닌, 요소의 부모 노드를 찾음.
        let inputRadio = $('input[name="radio"]').not('#radio-2').parents();
        // 해당 요소의 자식 노드 label 요소에 emphasis 클래스 추가.
        inputRadio = inputRadio.children('label');
        inputRadio.addClass('emphasis');

    //----
        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        
        // li 요소 중 sub-last 클래스를 가진 요소를 찾아 subLastLiEl 변수에 대입.
        let subLastLiEl = $('li.sub-last');
        // 해당 요소의 부모 노드 중 last 클래스를 가진 노드를 찾음.
        subLastLiEl = subLastLiEl.parents('.last');
        // 자식노드 a 요소에 emphasis 클래스 추가.
        subLastLiEl = subLastLiEl.children('a');
        subLastLiEl.addClass('emphasis');
        // li 요소 중 sub-last 클래스를 가진 요소 중 모든 a 요소를 찾아 subLastAllA 변수에 대입.
        let subLastAllA = $('li.sub-last').find('a');
        // 해당 요소에 bold 클래스 추가.
        subLastAllA = subLastAllA.addClass('bold');

    });
})(jQuery);