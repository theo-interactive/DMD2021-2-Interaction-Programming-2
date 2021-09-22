var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        const $liEl = $('li');
        // console.log($liEl);
        $liEl.addClass('active');
        // console.log($liEl);

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        const $aEl = $('a.type-2');
        // console.log($aEl);
        $aEl.addClass('current');
        // console.log($aEl);

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        const $liEl3 = $('li');
        const $itemlEl3 = $liEl3.eq(0);
        $itemlEl3.addClass('zero');
        // console.log($itemlEl3);
     
        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        const $aEL2 =$('a').has('span');
        $aEL2.addClass('inner');
        // console.log($aEL2);

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        const $liEL5 = $('li')
        .prev('[data-role=link]');
        $liEL5.addClass('role ');
        // console.log($liEL5);


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        let $radioEl = $('#radio-list');
        let $radioElRoll =$radioEl.children.length;
        console.log("Answer 6 :" +$radioElRoll);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        let $Q7El = $('.type-2').parent();
        // console.log($Q7El);
        let $Q7 = $Q7El.index();
        console.log("Answer 7 :" + $Q7);

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        let $Q8 = $('#radio-1').val(); //아이디로 찾기
        console.log( "Answer 8 :"+ $Q8);
        let $Q8Input = $('input#radio-1').val();//input속성 으로 찾기
        console.log( "Answer 8 :" + $Q8Input);
        let $Q8Name = $('input[name=radio]').val();//input 속성중 name으로 찾기
        console.log("Answer 8 :" + $Q8Name);
    
        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        let $Q9 = $('a:contains("Menu 7")');
        console.log($Q9);

        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        let $Q10 = $('input').parents();//input속성의 모든부모 찾기
        let $Q10El = $Q10.children('label');//label 속성 찾기
        $Q10El.addClass('emphasis');
        // console.log($Q10El);


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        let $SUlast = $('li.sub-last').parents('.last');
        let $SUlastEl =$SUlast.children('a');
        $SUlastEl.addClass('emphasis');
        let $SUlastAll = $SUlast.children().find('a');
        $SUlastAll.addClass('bold');
        



       

    });
})(jQuery);