var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        console.log('answer1');
        const $all_li = $('li'); //모든 요소 선택
        $all_li.addClass('active'); //active 클래스 추가.
        console.log($all_li); //style.css를 통해 배경색이 붉어진 것을 확인


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        console.log('answer2');
        const $hastype2 = $('a.type-2'); //type-2 클래스를 가진 menu2가 선택되었다.
        $hastype2.addClass('current'); //current 클래스 추가
        console.log($hastype2); //menu 2의 글자 배경색이 초록색으로 된 것을 확인

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        console.log('answer3');
        let $q3_li = $('li');
        let $index0 = $q3_li.children().eq(0);
        $index0.addClass('zero');
        
        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        console.log('answer4');
        const $a_hasspan = $('a').has('span'); //has선택자 이용, a요소 중 span 요소를 포함한 노드를 선택
        $a_hasspan.addClass('inner'); //inner 클래스 추가
        console.log($a_hasspan); //menu 2, 4, sub menu 10-2의 배경색이 분홍색이 된 것을 확인

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        console.log('answer5');
        const $li_rolelink = $('li[data-role]');
        $li_rolelink.addClass('role');
        console.log($li_rolelink);
        

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        let $radio = $('#radio-list').children().length;
        console.log($radio); //3 출력


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        let $typeparent = $('type-2').parent();
        console.log($typeparent.index()); //-1 출력


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        //$selector.val();
        const $radioinput = $('#radio-1').val();
        console.log($radioinput); //1 출력


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        const $menu7_a = $('a:contains("Menu 7")');
        console.log($menu7_a);



        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        const $notradioinput = $('input[name="radio"]').not('#radio-2').parents(); //부모 노드 찾기
        $notradioinput.children('label').addClass('emphasis');



        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.

        const $a_emphasis = $('li.sub-last').parents('.last');
        $a_emphasis.children('a').addClass('emphasis');
        
        const $a_bold = $('li.sub-last').parents('.last');
        $a_bold.find('a').addClass('bold');

        

    });
})(jQuery);