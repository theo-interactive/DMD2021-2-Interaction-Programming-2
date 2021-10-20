(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        $('<span id="my-name">‘제 이름은 현서영입니다.’</span>').appendTo('div#hello').eq(0);

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        const images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        // for(let i = 0; i < images.length; i++) {
        //     console.log(i);
        //     const $bannerItem = $('<div class="banner-item"></div>');
        //     // const $img = $('<img />');
        //     // $img.attr('src', images[i]);
        //     const $img = $(`<img src="${images[i]}" />`);
        //     console.log($img);
        //     $bannerItem.append($img);
        //     console.log($bannerItem);
        //     $('.banner-container').append($bannerItem);
        // };

        // images.forEach((image, idx) => {
        //     console.log(image, idx);
        //     // let template = '';
        //     // template += '<div class="banner-item"></div>';
        //     const template = `
        //     <div class="banner-item">
        //         <img src="${image}" />
        //     </div>`;
        //     $('.banner-container').append(template);
        // });

        let template = '';
        images.forEach((image, idx) => {
            // console.log(image, idx);
            template += `<div class="banner-item"><img src="${image}" /></div>`;
            console.log(template);
        });
        $('.banner-container').html(template);

        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        // console.log($('p.move-top'));
        $('p.move-top')
            .prependTo('body')
            .addClass('move')
            .text('위로 이동했습니다.');
        // $('body').prepend('p.move-top');

        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        $('p.move-bottom')
            .appendTo('body')
            .addClass('move')
            .text('아래로 이동했습니다.');

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').remove();
        // $('p.error').detach();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        const $pModify = $('p.modify');
        $pModify.text('수정되었습니다.');

        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $pModify
            .empty()
            .detach();

        $pModify
            .html('')
            .remove();

        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        console.log($('ul.list-1').children('li'));
        console.log($('ul.list-1').children('li').eq(0));
        const $list1Li = $('ul.list-1').children('li').eq(0);
        // for(let i = 0; i < 3; i++) {
        //     const $item = $('<li></li>');
        //     $item.text(`리스트 ${i + 2}`);
        //     $list1Li.after($item);
        //     // $(`<li>리스트 ${i + 2}</li>`).insertAfter($list1Li);
        // }
        for(let i = 2; i >= 0; i--) {
            const $item = $('<li></li>');
            $item.text(`리스트 ${i + 2}`);
            $list1Li.after($item);
            // $(`<li>리스트 ${i + 2}</li>`).insertAfter($list1Li);
        }

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        const $list2Li = $('ul.list-2').children('li').eq(0);
        for(let i = 0; i < 4; i++) {
            const $item = $('<li></li>');
            $item.text(`리스트 ${i + 1}`);
            $list2Li.before($item);
            // $(`<li>리스트 ${i + 1}</li>`).insertBefore($list2Li);
        }


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px 씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        const $btn1 = $('button.btn-1');
        const $box1 = $('div.box-1');
        // $btn1.click(() => {
        // });
        $box1.width(100);
        let isDirect = false;
        $btn1.click(function() {
            let width = $box1.width();
            // if (!isDirect) {
            //     width += 100;
            // } else {
            //     width -= 100;
            // }
            width = !isDirect ? width + 100 : width - 100;
            $box1.width(width);
            if (width >= 500) {
                isDirect = true;
            }
            if (width <= 0) {
                isDirect = false;
            }
        });
    });
})(jQuery);