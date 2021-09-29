(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
            // hello 아이디를 가진 div 노드를 찾아 helloDiv 변수에 대입
            const helloDiv = $('div#hello');
            // appendTo 메서드를 이용해 helloDiv의 첫번째 자식노드에 span 문자열 대입
            $('<span class="my-name">제 이름은 김채영입니다.</span>').appendTo(helloDiv).eq(0);


        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
            // images 배열을 기준으로 each 메서드를 이용해 구현합니다.
            $(images).each(function (idx, value) {
                // banner-item을 클래스로 가지는 div 요소를 생성하여 bannerItem 변수에 대입합니다.
                const bannerItem = $('<div class="banner-item"></div>');
                // images 배열의 원소를 src 속성으로 가지는 img 노드를 생성하기 위해
                // 인수값으로 활용하여 img src 속성으로 들어가게끔 한 뒤 imgSrc 변수에 대입합니다.
                const imgSrc = $(`<img src = "${value}">`);
                // 그 후 imgSrc 를 bannerItem에 추가하고
                imgSrc.appendTo(bannerItem);
                // banner-container를 클래스로 가지는 div 요소를 찾아 bannerContainer 변수에 대입합니다.
                const bannerContainer = $('div.banner-container');
                // bannerItem을 bannerContaier 요소에 추가합니다.
                bannerItem.appendTo(bannerContainer);
            });


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
            // p.move-top 노드를 moveTop 변수에 대입합니다.
            const moveTop = $('p.move-top');
            // moveTop 을 body의 시작 부분에 삽입하여 가장 위로 이동되도록 합니다.
            moveTop.prependTo($('body'));
            // moveTop에 move 클래스를 추가하고
            moveTop.addClass('move');
            // 노드 안의 내용을 위로 이동했습니다. 로 변경합니다.
            moveTop.text('위로 이동했습니다.');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
            // p.move-bottom 노드를 moveBottom 변수에 대입합니다.
            const moveBottom = $('p.move-bottom');
            // moveBottom 을 body의 끝나는 부분에 삽입하여 가장 아래로 이동되도록 합니다.
            moveBottom.appendTo($('body'));
            // moveBottom에 move 클래스를 추가하고
            moveBottom.addClass('move');
            // 노드 안의 내용을 아래로 이동했습니다. 로 변경합니다.
            moveBottom.text('아래로 이동했습니다.');


        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
            // p.error 를 찾아 pError 변수에 대입합니다.
            const pError = $('p.error');
            // remove 메서드를 이용해 pError를 삭제합니다.
            pError.remove();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
            // p.modify 를 찾아 pModify 변수에 대입합니다.
            let pModify = $('p.modify');
            // pModify의 내용을 text 메서드를 이용해 '수정되었습니다.' 로 수정합니다.
            pModify.text('수정되었습니다.');


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
            // remove 메서드를 이용해 pModify의 내용을 비우고 문서에서 삭제합니다.
            pModify.remove();


        //Quest 8.
        /*
        ul.list-1 의 첫번째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
            // ul.list-1의 첫번째 li 자식노드를 찾아 list1Child 변수에 대입합니다.
            const list1Child = $('ul.list-1').eq(0).children();
            // 순서대로 추가되기 위해 4부터 1씩 감소반복하도록 합니다.
            for(let i = 4; i > 1; i--) {
                // after 메서드를 이용해 list1Child 뒤에 li 요소를 추가합니다.
                list1Child.after(`<li>리스트 ${i}</li>\n`);
            }


        //Quest 9.
        /*
        ul.list-2 의 첫번째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
            // ul.list-2의 첫번째 li 자식노드를 찾아 list2Child 변수에 대입합니다.
            const list2Child = $('ul.list-2').eq(0).children();
            // 순서대로 추가되기 위해 4부터 1씩 감소반복하도록 합니다.
            for(let i = 4; i >= 1; i--) {
                // after 메서드를 이용해 list2Child 뒤에 li 요소를 추가합니다.
                list2Child.after(`<li>리스트 ${i}</li>\n`);
            }


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
            // button.btn-1을 btn1 변수에 대입합니다.
            let btn1 = $('button.btn-1');
            // div.box-1을 box1 변수에 대입합니다.
            let box1 = $('div.box-1');
            // 기본 width값을 100으로 설정합니다.
            let width = 100;
            // 제한 width를 500으로 설정합니다.
            let limitWidth = 500;
            
            // box1의 width에 width를 대입해 100px부터 시작하도록 합니다.
            box1.css('width',width+'px');
            // click 메서드를 이용해 button.btn-1의 클릭 여부에 따라 작동되는 함수를 생성합니다.
            btn1.click(() => {
                // width가 limitWidth와 같거나 작다면
                if(width <= limitWidth) {
                    // limitWidth를 500으로 초기화해줍니다.
                    limitWidth = 500;
                    // defaultWidth에 100을 더합니다.
                    width += 100;
                    // css 메서드를 이용해 box1에 width 값을 대입합니다.
                    box1.css('width',width+'px');
                }
                // width가 limitWidth보다 커지면
                if(width > limitWidth) {
                    // limitWidth를 0으로 초기화해줍니다.
                    limitWidth = 0;
                    // defaultWidth에 100을 뺍니다.
                    width -= 100;
                    // css 메서드를 이용해 box1에 width 값을 대입합니다.
                    box1.css('width',width+'px');
                }
            });

    });
})(jQuery);