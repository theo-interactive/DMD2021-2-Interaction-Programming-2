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

    alert('22061035 / 김채은');
    console.log('안녕하세요 김용원 교수님! 이번에도 인터랙션 프로그래밍 수업 교수님과 함께 진행할 수 있어 기쁩니다. 이번 수업에서 보다 심화된 인터랙션 응용 및 여려가지를 공부해 제 것으로 만들어나가고 싶습니다. 한 학기 동안 잘 부탁드립니다!');
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