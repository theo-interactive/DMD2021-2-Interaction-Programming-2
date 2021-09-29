(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        $('<span id="my-name">제 이름은 김수빈입니다.</span>').appendTo('div#hello').eq(0);

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        // 1
        // const ImagesDiv = $('<div class="banner-item"></div>') // 1번
        // const ImageSrc = $('<img>', {'src' : `${value}`}); // 2번
        // ImageSrc.appendTo(ImagesDiv).eq(0); // 2번

        // // 2번으로 만든 요소를 반복문으로 images 갯수만큼 진행 // 2번항목에서 에러발생
        // for(var i = 0; i < images.length; i++){ // images 배열의 수보다 i가 작으면 반복
        //     ImagesDiv.appendTo('div.banner-container').eq(0);
        // };

        // 2

        // $(selector).each(function(index, item){

        // })

        $.each(images, function(idx, value){ // $.each 배열에 사용할 수 있는 반복 함수 (객체이름, 함수(index, item))
            // console.log(value);
            const ImagesDiv = $('<div class="banner-item"></div>'); // 1번
            const ImageSrc = $('<img>', {'src' : `${value}`}); // 2번
            ImageSrc.appendTo(ImagesDiv).eq(0); // 2번
            ImagesDiv.appendTo('div.banner-container').eq(0); // 3번
        });

        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        $('p.move-top').prependTo($('body').eq(0)); // p.move-top를 body기준 처음에서 0번 요소로
        // $('p.move-top').addClass('move');
        // 노드 안? p.move-top 안에? 문자열 텍스트로 작성
        // $('p.move-top').addClass('move').text('위로 이동했습니다.');
        $('p.move-top').addClass('move').html('위로 이동했습니다.');

        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        $('p.move-bottom').appendTo($('body').eq(0)); // p.move-bottom를 body 기준 끝에서 0번 요소로
        $('p.move-bottom').addClass('move').html('아래로 이동했습니다.');

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        // const pRemove = $('p.error');
        // pRemove.remove();
        $('p.error').remove();

        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        // const pModify = $('p.modify');
        // pModify.html('수정되었습니다.')
        $('p.modify').html('수정되었습니다.');
        // $('p.modify').text('수정되었습니다.');

        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $('p.modify').html('').remove();

        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        // $('ul.list-1').children('li').eq(0).after('<li>리스트 2</li>'); // 반복문을 활용해서 다시
        // console.log($('ul.list-1').children('li').length);
        for(let i = 4; i >= $('ul.list-1').children('li').length - 1; i--){
            $('ul.list-1').children('li').eq(0).after(`<li>리스트 ${i}</li>`);
        };
        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        for(let i = 4; i >= $('ul.list-2').children('li').length - 3; i--){
            $('ul.list-2').children('li').eq(0).before(`<li>리스트 ${i}</li>`);
        };

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
        // $('div.box-1').css({width : "100px"});
        let widthBox = 100; // 기준값
        const width100 = 100; // 100씩 더해줄 값
        const width500 = 500; // 500 기준
        const width0 = 0; // 0 기준
        // $('div.box-1').css({width : width100+'px'});
        const Box = $('div.box-1');
        Box.css({width : widthBox+'px'});

        console.log(widthBox); // 100

        Box.click((e) => {
            // 500이상이 될때까지
            if(widthBox < width500){ // 기준값이 500보다 작거나 같을때
                Box.width(widthBox+width100); // Box의 width 값은 기준값 + 100px
                widthBox = widthBox+width100; // 기준값은 기준값 + 100px 으로 변함
            };
            console.log(widthBox); // 클릭후 기준값의 수치 확인

            // // 0이 될때까지
            // if(widthBox > width0){ // 기준값이 0보다 크거나 같을때
            //     Box.width(widthBox-width100); // Box의 width 값은 기준값 + 100px
            //     widthBox = widthBox-width100; // 기준값은 기준값 + 100px 으로 변함
            // };
            // console.log(widthBox); // 클릭후 기준값의 수치 확인

            // 반대로 할경우 500이상과 0이 될때까지의 조건이 서로 겹쳐서 확장과 동시에 축소
        });

        // if(widthBox < width500){ // 기준값이 500보다 작거나 같을때
        //     Box.click((e) => {
        //         Box.width(widthBox+width100); // Box의 width 값은 기준값 + 100px
        //         widthBox = widthBox+width100; // 기준값은 기준값 + 100px 으로 변함
        //         console.log(widthBox); // 클릭후 기준값의 수치 확인
        //     });
        // };
        // 클릭 이벤트를 조건문 안에 적었을 경우엔 조건 후에도 계속 이벤트 발생

    });
})(jQuery);