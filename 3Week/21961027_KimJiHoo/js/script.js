var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        const $li = $('li'); // 문서 내의 모든 li 요소를 찾아옴.
        // console.log($li);

        $li.addClass('active'); // li 요소에 active 클래스를 추가(전부 추가됨)
        console.log($li); // 출력된 로그를 통해 active가 모든 li에 추가됨을 확인할 수 있음, 문제 해결!


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        const $a_2 = $('a.type-2'); //a를 가진 li중에 type-a클래스가 붙은 요소가 찾아짐
        // console.log($a2);

        $a_2.addClass('current');
        console.log($a_2); // current 클래스가 붙은 요소 = 연두색이 됨, 문제 해결!
        
        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        const $li_2 = $('li');
        $li_2.eq(0).addClass('zero'); // eq는 index(0에서부터 시작하는 순번)를 통해 요소를 찾아낼 수 있음, 
        // $li_2.first(); << 이렇게 풀 수도 있음!
        console.log($li_2); // li의 index의 0번째에 zero가 추가됨을 확인(하늘색이 됨), 문제 해결!

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        const $a_span = $('a').has('span').addClass('inner');
        // a 요소에 > span클래스를 가진 요소에 > inner 클래스를 추가. 
        console.log($a_span); // inner 클래스가 붙은 요소 = 핑크색이 됨, 문제 해결!

        // $('a:has(span)') << 이렇게 찾을 수도 있다.
        
        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        const $li_dataRole = $('li[data-role="link"]').addClass('role');
        // li 요소들 중 data-role = link(<li data-role="link">)인 요소를 찾아서 > role 클래스를 추가.
        console.log($li_dataRole); // role 클래스가 붙은 요소 = 바탕색이 파란색이 됨, 문제 해결!

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        const $radio = $('#radio-list'); // radio-list 아이디(#)를 가진 요소를 모두 찾아옴
        console.log($radio); // 라디오를 담은 부모요소 하나만 찾아짐
        
        const $radiolist = $radio.children(); // 위에서 찾은 요소를 담은 상수의 자식요소를 전부 찾아옴
        console.log($radiolist.length); // 자식요소의 길이(몇개인지)를 출력, 문제 해결!

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle); // (원래 있던 코드)

        const $type_2 = $('.type-2'); // type-2 클래스가 붙은 요소를 전부 찾음(현재 문서 내에서는 2번 문제에서 찾은 요소밖에 없음)
        console.log($type_2);

        const $type_2Parent = $type_2.parent(); // 위에서 찾은 요소를 담은 상수의 부모요소를 찾아옴 - 바로 상위 요소만 찾아옴.(li속의 a 요소에서 찾는 것이므로 li요소가 찾아짐)
        console.log($type_2Parent);
        console.log($type_2Parent.index()); // 그 부모요소의 index값을 출력, 문제 해결!


         //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle); // (원래 있던 코드)

        // 1. val() 을 통해 가져오기

        const $radio_1 = $('#radio-1'); // radio-1 아이디가 붙은 요소를 찾아옴
        // $('input#radio-1') 로 찾아왔어야 한다...
        console.log($radio_1);

        const $radio_1Value = $radio_1.val();// 위에서 찾은 요소의 value값을 찾아옴
        console.log($radio_1Value); // value(1)가 출력됨을 확인, 문제 해결! 

        // 2. for문을 통해 value를 가져오기

        for(i = 0; i < $radio_1.length; i++){
            // console.log("한바퀴!"); // 반복문이 한 바퀴 돎을 확인.
            console.log($radio_1[i].value); // 위와 같은 값이 출력됨을 확인, 문제 해결!
        }

        // 3. attribute를 통해.

        // let radioValue = $radio_1.val();
        // radioValue =  $radio_1.attr('value'); 
        // radioValue = $radio_1[0].getAttribute('value');
        // radioValue = $radio_1[0].value;


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle); // (원래 있던 코드)


        // 1. a 요소들을 중에서, "Menu 7" 텍스트가 포함된 것만 출력

        const $a_txt = $('a:contains("Menu 7")');
        console.log($a_txt); // Menu 7이 적힌 요소가 선택됨, 문제 해결!

        // 2. 그 다음은 모르겠습니다.....

        // let $aMenu7 = $('a:contains(Menu 7)'); // contains를 통해 찾기. ""는 넣지 않아도 됨.

        // $aMenu7 = $('.gnb')
        // .children('li')
        // .eq(6)
        // .children('a');  // 경로를 이용해 찾기. gnb의 li의 6번째 자식요소의 a
       
        
        

        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.


        const $radio_not2 = $('[type = radio]').not('#radio-2'); // 라디오 요소를 모두 찾아오고, radio-2 아이디가 붙지 않은 것만 필터링해서 가져옴.
        console.log($radio_not2);

        const $radio_not2_Parent =$radio_not2.parent().children('label').addClass('emphasis'); // 위에서 찾은 요소의 부모요소(바로 상위)를 찾고, 그 자식 요소 label에 클래스 추가.
        // console.log($radio_not2_Parent); // emphasis 클래스가 붙은 요소 = 바탕이 노란색, 문제 해결! 
        


        const $inputNotRadio2 = $('input').not('#radio-2');
        const $parent = $inputNotRadio2.parent(); // 부모 노드를 찾고, 
        const $label = $parent.find('label'); // 그것의 자식 노드를 찾고 그 속에서 label을 "찾음".
        // console.log($inputNotRadio2);
        $label.addClass('emphasis');

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.

        const $sub_last = $('li.sub-last').parents('.last'); // li 요소들 중 sub-last 클래스를 가진 요소를 모두 찾고, 부모 요소들 중에서 last 클래스를 가진 것을 찾음
        // console.log($sub_last);

        const $sub_a = $sub_last.children('a').addClass('emphasis'); // 자식 노드 a 요소에 클래스 추가
        console.log($sub_a); // emphasis 클래스가 붙은 요소 = 바탕이 노란색, 문제 해결!  
        
        const $sub_bold = $sub_last.children().addClass('bold'); // 모든 자식 노드 요소에 bold 클래스 추가
        console.log($sub_bold); // 서브 메뉴 글자들이 bold해 지는 것을 확인 가능, 문제 해결!


        // children과 find의 차이:
        // 이 둘의 차이점이라면 children()은 부모 요소의 바로 아래 단계인 자식요소만 선택할 수 있으나, find()는 부모 태그의 모든 하위 요소의 자식을 선택하여 가져올수 있다는 점이 차이점이다.(인터넷 펌)


    });
})(jQuery);