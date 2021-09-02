console.log("script load");

//jQuery -> $

console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    window.alert('21961053 배정현');
    console.log('안녕하세요 21961053 배정현입니다.');
    console.log('이번 학기에 복학해서 코드가 오랜만이라 조금 낯설어졌지만 열심히 따라가 보겠습니다!');
    console.log('이번 수업에서 다양한 jQuery의 활용을 배우고 싶습니다 감사합니다! ');
});

//    $(document).ready((){
//   });

// 함수.
// ES 5
function hello1() {
    console.log('hello1');
}

// ES 6 ~
const hello2 = ( ) => {
    console.log('hello2');

}

hello1();
hello2();