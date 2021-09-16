console.log('script loaded');

console.log(jQuery);
console.log($);

(function($) {
    console.log($); // jQeury

    $(document).ready(() => {
        console.log('Document loaded');

        // 선택자.
        // 유사 선택자.
        const $body = $('body');
        // console.log($body);
        const $h1 = $('h1');
        console.log($h1);
    
        const $div = $('div');
        console.log($div);

        const $header = $('#header');
        console.log($header);
        console.log($header[0]);
        // $header.css({ 'background-color' : '#ff0000' });
        // $header[0].style.backgroundColor = '#000000';
        const headerEl = document.getElementById('header');
        const headerEl2 = document.querySelector('#header');
        console.log(headerEl);
        console.log(headerEl2);
        // headerEl.style.backgroundColor = '#000000';

        const $contents = $('.content');
        console.log($contents);
        // 찾은 요소의 길이(개수)
        console.log($contents.length);
        console.log($contents.eq(0)); // index
        console.log($contents.eq(1)); // index
        console.log($contents.eq(2)); // index
        console.log($contents.first()); // 첫번째 요소
        console.log($contents.last()); // 마지막 요소

        // const $a = $('a');
        const $a = $('a[href="https://google.com"]'); // 필터링을 이용한 요소 검사.
        console.log($a);

        const $content3 = $('#content-3.content');
        console.log($content3);

        $content3.addClass('red');
        $content3.removeClass('red');

        const $aHasSpan = $('a')
            .has('span')
            .not('.link');
            //.not('[target=_blank]');
        // chain
        console.log($aHasSpan);
        // $selector.has('요소'); 
        // has에 기입된 값이 자식요소로 포함되있는 경우만 찾아온다.
        // not - 해당 필터값을 제외한 요소만 찾겠다.

        // css 필터
        const $a2 = $('a:has(span):not(.link)');
        console.log($a2);

        const $divVisible = $('div:visible');
        const $divHidden = $('div:hidden');
        console.log($divVisible);
        console.log($divHidden);

    });
})(jQuery);