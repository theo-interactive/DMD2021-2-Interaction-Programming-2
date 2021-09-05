console.log("script load");

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function () { 
    // window.alert('jQuery 로드가 완료되었습니다.');
    console.log('jQuery 로드가 완료되었습니다.');
    console.log('22061035 김채은');
 });

// $(document).ready(() => { 
    
// });

// ES 5
function hello1() { 
    console.log('hello1');
 }

// ES 6~
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();

// hello들이 먼저 출력되는 이유: jQuery 로드와 학번 이름은 문서가 로드(ready)된 이후에 출력하기 때문