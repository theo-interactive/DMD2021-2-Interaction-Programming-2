(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        // const divHello = $('#hello');
        // #my-name span 요소 생성.
        const spanMyName = $('<span>제 이름은 이은서입니다.</span>').attr('id', 'my-name');
        // #hello 의 첫 번째 자식 노드로 추가.
        spanMyName.eq(0).appendTo('#hello');
        // console.log(spanMyName);



        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        
        // img 노드 생성 후 div.banner-item 에 추가.
        $(images).each((idx, el) => {
            // images 배열의 원소 수만큼 div.banner-item 요소 생성.
            const divBannerItem = $('<div class="banner-item"></div>');

            // images 배열의 원소를 src 속성으로 가지는 img 노드 생성 후 div.banner-item 에 추가.
            $(`<img src="${el}">`).appendTo(divBannerItem);

            // div.banner-item 를 div.banner-container 에 추가.
            divBannerItem.appendTo('div.banner-container');

            // 3개 출력.
            // console.log(divBannerItem);
        });
        // console.log(images);
        


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        const pMoveTop = $('p.move-top');
        // p.move-top 최상단으로 이동.
        pMoveTop.prependTo('body');
        // p.move-top 에 move 클래스 추가.
        pMoveTop.addClass('move');
        // p.move-top 내용 수정.
        pMoveTop.text('위로 이동했습니다.');
        // console.log(pMoveTop);



        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        const pMoveBtm = $('p.move-bottom');
        // p.move-bottom 최하단으로 이동.
        pMoveBtm.appendTo('body');
        // p.move-bottom 에 move 클래스 추가.
        pMoveBtm.addClass('move');
        // p.move-bottom 내용 수정.
        pMoveBtm.text('아래로 이동했습니다.');
        // console.log(pMoveBtm);



        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        const pError = $('p.error');
        // p.error 삭제.
        pError.remove();
        // 삭제 전에는 노드가 찾아졌으나 삭제 후에는 현재 페이지에서 노드를 찾을 수 없다는 안내 노출.
        // console.log(pError);



        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        const pModify = $('p.modify');
        // p.modify 내용 수정.
        pModify.text('수정되었습니다.');
        // console.log(pModify);



        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        // p.modify 내용 비우기.
        pModify.empty();
        // 문서 내에 존재하지만 내용은 비어있는 상태.
        // console.log(pModify);

        // p.modify 삭제.
        pModify.remove();
        // 삭제 후 현재 페이지에서 노드를 찾을 수 없음.
        // console.log(pModify);



        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        const list1FirstItem = $('ul.list-1').children().eq(0);
        // console.log(list1FirstItem);
        // 첫 번째 리스트 아이템 뒤에 추가되는지 테스트.
        // $(`<li>리스트 n</li>`).insertAfter(list1FirstItem);

        // 반복문 작성.
        for (let i = 4; i > 1; --i) {
            // i 자리에 4, 3, 2 값이 출력.
            $(`<li>리스트 ${i}</li>`).insertAfter(list1FirstItem);
        }



        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        const list2FirstItem = $('ul.list-2').children().eq(0);
        // console.log(list2FirstItem);
        // 첫 번째 리스트 아이템 앞에 추가되는지 테스트.
        // $(`<li>리스트 n</li>`).insertBefore(list2FirstItem);

        // 반복문 작성.
        for (let i = 1; i < 5; ++i) {
            // i 자리에 1, 2, 3, 4 값이 출력.
            $(`<li>리스트 ${i}</li>`).insertBefore(list2FirstItem);
        }



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

        // ㅡㅡ......모르겠다

        // 100, 200(클릭 1회), 300(클릭 2회), 400(클릭 3회), 500(클릭 4회), 400(클릭 5회), 300(클릭 6회), 200(클릭 7회), 100(클릭 8회), 0(클릭 9회), 100(클릭 10회), 200(클릭 11회), ... 를 반복

        // boolean 값이 true 이고 width 값이 500px보다 크거나 같으면 -> -100px. false.
        // boolean 값이 false 이고 width 값이 0px보다 작거나 같으면 -> +100px. true.

        const btn1 = $('button.btn-1');
        // console.log(btn1);

        const divBox1 = $('div.box-1');
        // console.log(divBox1);

        // width 값의 초기 값은 100(px)임을 확인.
        // console.log(divBox1.width());


        // 특정 값에 도달했는지를 판단해줄 boolean의 초기 값은 true로 설정.
        // let isPlus = true;

        let currentWidth = 100;
        let targetWidth = 500;

        btn1.click(() => {  

            // if (!isPlus && widthPx >= 500) {
            //     isPlus = true;
            //     widthPx -= 100;
            //     divBox1.css('width', `${widthPx}`);
            // } else if (isPlus && widthPx <= 0) {
            //     isPlus = false;
            //     widthPx += 100;
            //     divBox1.css('width', `${widthPx}`);
            // }

            // 500이 되었을 때 -> 목표를 0으로 변경.
            if (currentWidth >= targetWidth) {
                targetWidth = 0;
                currentWidth -= 100;
            }
            if (currentWidth <= targetWidth) { // 0이 되었을 때 -> 목표를 500으로 변경.
                targetWidth = 500;
                currentWidth += 100;
            }

            divBox1.css('width', `${currentWidth}`);
            console.log(currentWidth, targetWidth);
        });
    });
})(jQuery);