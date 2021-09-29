(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’
         의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
       const $spanEl = $('span:first').clone().text(`제 이름은 홍연화입니다.`).attr('id','my-name');//span 요소 
       const $MynameEl = $('div#hello').prepend($spanEl);
       console.log($MynameEl);
        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        const $divEl0 = $('div:last').clone().addClass('banner-item').text('').removeClass('box-1');
        const $divEl1 = $divEl0.clone();
        const $divEl2 = $divEl1.clone();
        $('div:last').after($divEl0,$divEl1,$divEl2);
        // const $imgEl = $('img');
        // console.log($imgEl);
        const $imgEl0 = $('<img>').appendTo('body').attr('src',`${images[0]}`);
        const $imgEl1 = $('<img>').appendTo('body').attr('src',`${images[1]}`);
        const $imgEl2 = $('<img>').appendTo('body').attr('src',`${images[2]}`);
        $divEl0.append($imgEl0);
        $divEl1.append($imgEl1);
        $divEl2.append($imgEl2);
        $('div.banner-container').append($divEl0,$divEl1,$divEl2);

        //const $divEl0_ = $('body').append(`<div></div>`).addClass('banner-item').text('');
        
    


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        $('p.move-top').prependTo('body');//innertBefore 은 body 위로 
        $('p.move-top').addClass('move').text('위로 이동했습니다.');
       // $('p.move-top').prependTo('body').addClass('move').text('위로 이동했습니다.');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        $('p.move-bottom').appendTo('body');
        $('p.move-bottom').addClass('move').text('아래로 이동했습니다.');
        //$('p.move-bottom').appendTo('body').addClass('move').text('아래로 이동했습니다.');



        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').remove();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        $('p.modify').text('수정되었습니다')
        // $('p.modify').html('<span>수정</span>되었습니다')//html


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $(' p.modify ').text('').remove();



        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 
        ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        let count = 1;
        for(var i = 0; i < 3; i++){
            //0,1,2
            count++;//2,3,4
            console.log(`리스트${count}`);//리스트 2 ,리스트 3 ,리스트 4
            const $liEl = $('ul.list-1').append(`<li>리스트${count}</li>`); 
        }
        // const $liEl = $('li').clone().text(`리스트${count}`);//<li>리스트2</li>
        // $('ul.list-1').append($liEl);
        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 
        ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        let count2 = 5;
        for(var i = 0; i < 4; i++){
            count2--;//1,2,3,4
            console.log(`리스트${count2}`);//리스트4,리스트3,리스트2,리스트1,
            const $liEl2 = $('ul.list-2').prepend(`<li>리스트${count2}</li>`);
        
        }
        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 
        아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.
        //모르겠습니다 ㅜㅜ!
        var widthPx = 0;
        let widthPlus = 100;
        let widthMinus =500;
        $('div.box-1').css('width','100px');
        $('button.btn-1').click((e)=>{
            $('div.box-1').each((idx,el)=>{
                // console.log(idx,el);
            if( widthPx <= 3){
                //0 ,1,2,3,4,5
                widthPx++;//1
                console.log(widthPx);
                widthPlus += 100;
                $('div.box-1').css('width',`${widthPlus}px`);
            }
            else if( widthPx > 3){
                widthPx++;
                widthMinus -=100;
                console.log(widthPx);
                $('div.box-1').css('width',`${widthMinus}px`);
            }
         
            
        });


    });
});
})(jQuery);