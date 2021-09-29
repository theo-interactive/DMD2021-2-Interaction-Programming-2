(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        // hello 아이디를 가진 div 노드의 첫 번째 자식노드로 span 요소 생성 => append() 사용
        $('#hello').append('<span id="my-name">제 이름은 김채은입니다.</span>');
        console.log($('#hello'));


        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];

        // 방법 1
        // 1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소 생성 (banner-container 클래스를 갖는 div 노드에 추가)
        // $.each(images, (idx, item) => {
        //     // 2. images 배열의 원소를 src 속성으로 갖는 img 노드 생성 후 1 에서 생성한 div 노드에 추가
        //     $('.banner-container').eq(0).append(`<div class="banner-item"><img src=${item}></div>`);
        // });

        // 방법 2
        $.each(images, (idx, item) => {
            // 1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소 생성 (3. banner-container 클래스를 갖는 div 노드에 추가)
            let $bannerItem = $('<div class="banner-item"></div>');
            $('div.banner-container').eq(0).append($bannerItem);

            // 2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고 div.banner-container 노드에 추가
            let $bannerImg = $('<img>');
            $bannerImg.attr('src', item).appendTo($bannerItem).eq(idx);
        });


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        // 1. p.move-top 노드를 body의 최상단으로 이동
        // p.move-top 노드를 최상단으로 이동
        $('body').eq(0).prepend($('p.move-top'));
        // 2-1. p.move-top 노드에 move 클래스 추가
        $('p.move-top').addClass('move');
        // 2-2. 노드 안의 내용을 '위로 이동했습니다.'로 변경
        $('p.move-top').text('위로 이동했습니다.');

        // console.log($('p.move-top'));


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        // 1. p.move-bottom 노드를 body의 최하단으로 이동
        // p.move-bottom 노드를 최하단으로 이동
        $('body').eq(0).append($('p.move-bottom'));
        // 2-1. p.move-botttom 노드에 move 클래스 추가
        $('p.move-bottom').addClass('move')
        // 2-2. 노드 안의 내용을 '아래로 이동했습니다.'로 변경
        $('p.move-bottom').text('아래로 이동했습니다.');



        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').remove();
        // $('p.error').empty();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        $('p.modify').text('수정되었습니다.');


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $('p.modify').remove();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        // ul.list-1의 첫번 째 li 자식노드 뒤에 li 요소들을 생성 ==> append();
        // 반복문을 이용하여 li 요소들을 생성 ==> for() 안의 append();
        for(let i = 0; i < 3; i++) {
            $('ul.list-1').append(`<li>리스트 ${i + 2}</li>`);
        }


        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        // ul.list-2의 첫 번째 li 자식노드의 앞에 반복문을 사용하여 li 요소 생성
        // html 문서에 존재하는 리스트 5 이전에 리스트 1을 추가한 이후로 리스트 2, 리스트 3, 리스트 4를 순차적으로 추가해야 하므로
        // 리스트 1을 prepend();으로 ul.list-2 요소 안에 추가한 이후 나머지 요소를 리스트 1 뒤에 after();으로 추가
        for(let i = 0; i < 4; i++) {
            if(i <= 0) {
                $('ul.list-2').prepend(`<li>리스트 ${i + 1}</li>`);
            }

            else {
                $('ul.list-2').children().eq(i - 1).after(`<li>리스트 ${i + 1}</li>`);
            }
        }

        // console.log($('ul.list-2').children().eq(0));


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        // 500 이상을 달성하였을 때 true, 0이 되었을 때 false로 width +- 여부 결정
        // 500에 도달하지 못했을 때의 true: width - 100
        // 500에 도달하지 못했을 때의 false: width + 100
        // css();를 사용하여 div.box-1의 width 제어

        // button.btn-1 요소와 div.box-1 요소 전역변수로 선언하여 제어
        const $btn = $('button.btn-1');
        const $box = $('div.box-1');

        // width와 토글 변수 전역변수로 선언하여 조건 따라 제어
        let boxWidth = 100;
        let isBoxBig = false;
        // $box.css({'width': `${boxWidth}px`});

        $btn.click(() => {
            if (boxWidth >= 500) {
                isBoxBig = true;
                boxWidth = boxWidth - 100;
                $box.css({'width': `${boxWidth}px`});
            }

            else if (boxWidth < 500) {
                if (boxWidth <= 0) {
                  isBoxBig = false;
                }
                if (isBoxBig == true) {
                    boxWidth = boxWidth - 100;
                }
                if (isBoxBig == false) {
                   boxWidth = boxWidth + 100;
                }
                $box.css({'width': `${boxWidth}px`});
            }
            // console.log(boxWidth, isBoxBig);
        });

        // console.log($box);


    });
})(jQuery);