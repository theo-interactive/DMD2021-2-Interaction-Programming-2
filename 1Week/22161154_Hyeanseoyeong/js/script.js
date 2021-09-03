console.log('script load');

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    // window.alert('jQuery 로드가 완료되었습니다.');
    window.alert('22161154 현서영');
    console.log('많은 것들을 배워갈 수 있도록 최선을 다하겠습니다.');
});
// $(document).ready(() => {
// });

// 함수.
// ES 5
function hello1() {
    console.log('hello1');
}

// ES 6 ~
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();