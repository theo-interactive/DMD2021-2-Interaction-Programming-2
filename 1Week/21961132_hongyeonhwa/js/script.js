console.log('script load');

// jQuery -> $
//제이퀄 라이브러리 추가
console.log(document);
console.log(document.documentElement); // <html> 요소를 불러온다 
console.log(document.body); // <body> 요솔르 불러온다

$(document).ready(function() {
    window.alert('21961132 홍연화 입니다 ');
    console.log('안녕하세요 프로그래밍반 홍연화 입니다');
    console.log('요번 막학기도 잘 부탁드립니다!');
});


function name() {
    console.log('홍연화');
}
const age = () => {
    console.log('24');
}

name();
age();
