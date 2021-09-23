console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // append() // 안에 요소 삽입.
        // 요소 html 을 만들어서 끝나는 부분에 추가.
        // appendTo()
        // $('p').eq(0).append('<span>Hello</span>');
        $('p').eq(0).append($('strong').eq(0));
        // $('<span>World</span>').appendTo('.say-1');
        $('span').eq(0).appendTo('.say-1');

        // prepend() // 안에 요소 삽입.
        // 요소 html 을 만들어서 시작 부분에 추가.
        // prependTo()
        $('p').eq(1).prepend($('strong').eq(1));
        $('span').eq(1).prependTo('.say-2');

        // HTML 구문을 받아오기.
        // console.log($('span').eq(2).html());
        // const template = $('span').eq(2).html();
        // $('div').html(template);
        // $('div').html('<span>~~Hello~~</span>');
        // 요소가 교체되거나 삭제 후 추가.

        // 해당 요소 안의 문자열 받아오기.
        console.log($('p').eq(2).text());
        const text = $('p').eq(2).text();
        $('p').eq(3).text(text);

        $('#wrap').text(text);

    });
})(jQuery);