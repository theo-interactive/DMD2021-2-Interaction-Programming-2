console.log('script load');

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    // window.alert('jQuery 로드가 완료되었습니다.');
    console.log('22061051-박수민');
    console.log('안녕하세요 교수님 반갑습니다..!!');
    console.log('2학기때도 교수님 수업을 듣게되었습니다. 1학기땐 어려워서 울면서 작성했는데 2학기때는 울지 않도록 노력해보겠습니다..!');
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