console.log("script load");

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// 문서 준비가 완료되었을 때.
$(document).ready(function() {
    window.alert('안녕하세요 21755074 전형욱입니다 !');
    console.log('교수님 안녕하세요. 저번 학기에는 발췌한 소스들의 이해와 직접적인 마크업에 입혀지는 자바스크립트의 기초적인 이해에 다가가 갔다면,');
    console.log('이번 학기에는 vue.js, anime.js 등 저희가 현재 상황에서 졸업작품 포트폴리오를 제작하기에 접근이 쉬운 라이브러리 위주로 좋은 이해를 이끌어주시면 감사하겠습니다! 한 학기 잘 부탁드립니다.');
});

// $(document).ready(() => {

// });

// 함수.
// ES S
function hello1() {
    console.log('hello1');
}

// ES 6 ~ 
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();