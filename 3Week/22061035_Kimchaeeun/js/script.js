var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        let listEls = $('li');
        let activeListEls = $(listEls).addClass('active');
        // console.log(activeListEls);


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        let currentAEl = $('a[class="type-2"]').addClass('current');
        // console.log(currentAEl);


        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        let zeroLiEl = $(listEls.eq(0)).addClass('zero');
        // console.log(zeroLiEl);


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        let spanAEl = $('a').has('span').addClass('inner');
        // console.log(spanAEl);



        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        let roleLiEl = $('li[data-role="link"]').addClass('role');
        // console.log(roleLiEl);


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        let radioListChildren = $('#radio-list').children().length;
        console.log(radioListChildren);


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        let type2parent = $('.type-2').parent('li');
        console.log(type2parent.index());


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        // 1) jQuery로 아이디를 찾아 출력
        const $firstRadio = $('#radio-1');
        console.log($firstRadio.val());
        // 2) javascript로 아이디를 찾아 출력
        const firstRadio = document.getElementById('radio-1');
        console.log(firstRadio.value);
        // 3) radio-1인 input radio 요소의 경로를 찾아 출력 1
        console.log($('#radio-list').children('.radio-item').children('#radio-1').val());
        // 4) radio-1인 input radio 요소의 경로를 찾아 출력 2
        console.log($('#radio-list').find('#radio-1').val());
        // 5) radio-1인 input radio 요소의 경로를 찾아 출력 3
        console.log($(document).find('#radio-1').val());



        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        // 1) ul.gnb 상의 순서로 찾아 출력 (jQuery)
        console.log($('ul.gnb').find('a')[6]);
        // 2-1) ul.gnb 상의 순서로 찾아 출력 (javascript)
        // 2-2) childNodes의 경우 #text까지 자식요소에 포함됨
        console.log(document.getElementsByClassName('gnb')[0].childNodes[13].childNodes[0]);
        // 3) ul.gnb의 다른 자식 요소(menu1)에서 찾아 출력 1
        console.log($('#menu-1').parent('li').parent('.gnb')[0].children[6].children[0]);
        // 4) ul.gnb의 다른 자식 요소(menu1)에서 찾아 출력 2
        console.log($('#menu-1').parents('.gnb').find('a')[6]);
        // 5) 'Menu 7' 텍스트를 포함하고 있는 a 요소의 경로를 찾아 출력
        console.log($(document).find('.gnb').find('a')[6]);
        // 6) eq() 메서드를 사용해 출력
        console.log($('.gnb>li>a').eq(6)[0]);



        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        let emphasisLabel = $('input[type="radio"]').not('#radio-2').parent().children('label');
        emphasisLabel.addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        let emphasisLi = $('li.sub-last').parents('.last');
        emphasisLi.children('a').addClass('emphasis'); 
        emphasisLi.find('a').addClass('bold');
        

    });
})(jQuery);