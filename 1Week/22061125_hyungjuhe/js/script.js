console.log("script load");

// jQUery => $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때 
$(document).ready(function() {
    // window.alert('jQuery 로드가 완료되었습니다.');
    console.log('jQuery 로드가 완료되었습니다.');
    window.alert('22061125 형주희');
    console.log('안녕하세요 디미디 프로그래밍반 22061125 형주희 입니다.');
    console.log('이번 학기에 스크롤에 따른 다양한 애니메이션을 배우고 싶습니다!');
    console.log('이번 학기에도 잘부탁드립니다~');
});
// $(document).ready(() => {

// });

// 함수
//  es 5
function hello1(){
    console.log('hello1');
}

// es 6~
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();