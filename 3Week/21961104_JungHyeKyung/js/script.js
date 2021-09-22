var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        // const $li = $('li');
        // // console.log($li);
        // $li.addClass('active');

        //Quest 2. 
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        // let $aType2 = $('a.type-2');
        // console.log($aType2);
        // $aType2.addClass('current');

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        // let $lis = $('li');
        // console.log($lis);
        // let $zeroLi = $lis.eq(0);
        // console.log($zeroLi);
        // $zeroLi.addClass('zero');

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        // let $aHasSpan = $('a').has('span');
        // console.log($aHasSpan); 
        // $aHasSpan.addClass('inner');
        // console.log($aHasSpan);

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5. ***

        let $lisDatarole = $('li');
        console.log($lisDatarole);
       
        
    
        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        // let $radioListId = $('#radio-list').children();
        // console.log($radioListId);
        // console.log($radioListId.length);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7. 
        console.log("%c Answer 7.", logStyle);

        // let $typeTwo = $('.type-2').parent().index();
        // console.log($typeTwo);
        

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8. 
        console.log("%c Answer 8.", logStyle);
        // $input.val(); // value 값을 찾는
        // input[0] js | attribute - value

        // let $idRadio = $('#radio-1').val();
        // console.log($idRadio);


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9. 
        console.log("%c Answer 9.", logStyle);

        // let $aMenu7 = $("a:contains('Menu 7')");
        // console.log($aMenu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10. 

        // let $inputRadios = $('input').not('#radio-2');
        // console.log($inputRadios);
        // let $radioParent = $inputRadios.parent();
        // console.log($radioParent);
        // let $radioChidren = $radioParent.children('label');
        // console.log($radioChidren);
        // $radioChidren.addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.

        // let $subLast = $('.sub-last').parents('.last');
        // console.log($subLast);
        // let $subLastA = $subLast.children('a');
        // console.log($subLastA);
        // $subLastA.addClass('emphasis');
        // let $subLastAll = $subLast.find('a');
        // console.log($subLastAll);
        // $subLastAll.addClass('bold');

    });
})(jQuery);