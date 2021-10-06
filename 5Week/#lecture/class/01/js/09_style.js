console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // console.log($('li').css())
        const $li = $('li');
        // $li.css('color', '#ff00ff');
        // $li.css('border', '10px solid #ff00ff');
        // $li.css({
        //     'border': '10px solid #0000ff',
        //     'background-color': '#666666',
        //     'padding': '30px'
        // });
        // $li.css({'border': '10px solid #0000ff'});

        const $result1 = $('.result').eq(0)
        $li.click((e) => {
            console.log('click')
            const $el = $(e.currentTarget);
            // console.log($el);
            //console.log($(this))
            const bgColor = $el.css('background-color');
            console.log(bgColor);
            // $result1.append(`color: ${bgColor}`)
            const template = `<span>color: ${bgColor}</span><br/>`
            $result1.append(template);
        });


        const $box = $('.box');
        console.log($box);

        // $box.css({
        //     'margin': '30px',
        //     'border': '10px solid #000000'
        // });

        // console.log($box.width(), $box.height());
        // console.log($box.innerWidth(), $box.innerHeight());
        // console.log($box.outerWidth(), $box.outerHeight()); // + 20
        // console.log($box.outerWidth(true), $box.outerHeight(true)); // + 60

        let margin = 0;
        let padding = 0;
        $box.click(function() {
            // console.log(this);
            // console.log($(this));
            const $el = $(this);
            // $el.width('+=100');
            // $el.width('-=10');
            $el.height('+=10');
            margin += 10;
            padding += 10;
            $el.css({
                'margin': `${margin}px`,
                'padding': `${padding}px`
            });
        });
        // const timer = setInterval(() => {
        //     if ($box.height() < 500) {
        //         $box.height('+=20');
        //     } else {
        //         clearInterval(timer);
        //     }
        // }, 500);
        // const timer = setInterval(() => {
        //     if ($box.width() < 500 && $box.height() < 500) {
        //         $box.width('+=1').height('+=1');
        //     } else {
        //         clearInterval(timer);
        //     }
        // }, 10);


        const $box1 = $('.box-1');
        let count = 0;
        $box1.click(function() {
            const $el = $(this);
            switch(count) {
                case 0:
                    $el.width(200).height(200);
                    break;
                case 1:
                    $el.innerWidth(200).innerHeight(200);
                    break;
                case 2:
                    $el.outerWidth(200).outerHeight(200);
                    break;
                case 3:
                    $el.outerWidth(200, true).outerHeight(200, true);
                    break;
                default:
                    break
            }
            count++;
            if (count > 3) {
                count = 0;
            }
        });
        // $box1.next('.result');
        // $('.result').eq(1)


        // $element.position(), offset()

        const $box2 = $('.box-2');
        const position = $box2.position();
        // { top: number, left: number }
        const offset = $box2.offset();
        // { top: number, left: number }
        
        // 구조 할당 / 분해.
        const { top: posY, left: posX } = $box2.position();
        const { top: offY, left: offX } = $box2.offset();

        // console.log($box2.position());
        // console.log($box2.offset());
        console.log(position, offset)
        console.log(posX, posY, offX, offY);

        const $result2 = $('.result').eq(2);
        const result2 = 
        `<span>posX : ${posX}, posY : ${posY}</span>
        <br/>
        <span>offX : ${offX}, offY : ${offY}</span>`;
        $result2.html(result2);

        // scrollTop(), scrollLeft()
        const $box4 = $('.box-4');
        console.log($box4.scrollTop());
        console.log($box4.scrollLeft());

        const $button = $('button');
        const $result4  = $button.next('.result');
        $button.click(function() {
            const scrollX = $box4.scrollLeft();
            const scrollY = $box4.scrollTop();
            $result4.html(`scrollX : ${scrollX}, scrollY : ${scrollY}`)
            console.log($box4.scrollTop());
            console.log($box4.scrollLeft());
        });

        const $win = $(window);
        // 브라우저의 스크롤 좌표
        console.log($win.scrollTop());
        console.log($win.scrollLeft());

        $win.scroll(function() {
            const $el = $(this);
            const scrollY = $el.scrollTop();
            console.log(scrollY);
            // console.log($el.scrollTop());
        });
    });
})(jQuery);