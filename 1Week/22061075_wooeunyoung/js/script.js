console.log("script load");

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    window.alert('22061075 우은영');
    console.log('안녕하세요 1학기에는 어렵다는 생각이 많이 들었지만 2학기에는 더 열심히 하겠습니다.');
    console.log('2학기에는 잘 이해해서 좋은 결과물을 제작하도록 하겠습니다.');
});
// $(document).ready(() => {
//})

// 함수.
// ES 5
function hello1 () {
    console.log('hello1');
}

// ES 6 ~
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();