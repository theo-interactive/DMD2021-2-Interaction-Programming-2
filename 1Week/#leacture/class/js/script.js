console.log('script load');

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    // window.alert('jQuery 로드가 완료되었습니다.');
    console.log('jQuery 로드가 완료되었습니다.');
    console.log('20210001 김용원');
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