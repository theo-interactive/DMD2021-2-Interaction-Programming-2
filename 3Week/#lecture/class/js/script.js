console.log('script loaded');

$(document).ready(() => {
    console.log('Document loaded');
    let $list = $('ul');
    console.log($list);
    $list = $('#list');
    console.log($list);
    $list = $('.list');
    console.log($list);
    // console.log($ul.index());
    const $item = $list.children('li'); // 바로 하위의 경로만
    const $itemA = $list.children('li.item__a');
    const $item4 = $list.children().eq(3);
    console.log($item);
    console.log($item4);
    console.log($item.index($item4)); // 3.
    console.log($itemA.index($item4)); // 2.

    const $list2 = $item4.parent(); // 바로 상위의 경로만
    // const $list2 = $item4.parent('div');
    console.log($list2);

    // const $body = $item4.parents();
    const $body = $item4.parents('body');
    console.log($body);

    let $item3 = $item4.prev(); // 바로 앞의 요소.
    console.log($item3);
    // const $item3Prevs = $item4.prevAll(); // 앞의 모든 요소 (같은 경로에서)
    // const $item3Prevs = $item4.prevAll(':not(.item__a)');
    // const $item3Prevs = $item4.prevAll('.item__a');
    // const $item3Prevs = $item4.prevAll(':has(a.link)');
    // console.log($item3Prevs);
    $item3 = $item4.prevAll().first();
    console.log($item3);

    const $item5 = $item4.next(); // 바로 뒤의 요소
    console.log($item5);
    const $item5Nexts = $item4.nextAll(); // 뒤의 모든 요소 (같은 경로에서)
    console.log($item5Nexts);

    let $h1 = $item4.parent('ul').prev('h1');
    $h1 = $item4.parents('body').children('h1');
    $h1 = $item4.parents('html').find('h1');
    console.log($h1);
    const $span = $item4.parents('html').find('span#span');
    console.log($span);
    // let $aSpan = $item4.parents('html').find('a').find('span');
    let $aSpan = $item4.parents('html').find('a span');
    console.log($aSpan);
    $aSpan = $('ul li a span');
    console.log($aSpan);
});