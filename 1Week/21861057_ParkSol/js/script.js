console.log("script load");

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function(){
    alert('21861057 박솔');
    console.log('안녕하세요, 박솔입니다! 수업에 성실하게 임하겠습니다!');
    console.log('jQuery를 제대로 이해해가면서 사용하는 법을 배우고 싶습니다!');
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