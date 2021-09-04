console.log("script loaded")

//jQuery -> $. 축약형으로 쓰임

console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>

// ready = 문서의 준비가 완료되었을 때.(로딩이 끝났을 때)
$(document).ready(function(){
    //window.alert('페이지 준비끗');

    window.alert('21961027 김지후');
    console.log('배운 것을 잊어버리지 않도록 힘내겠습니다');
});

$(document).ready(() => {

});

//함수 작성법 / 호출법. 호출법은 별반 다를 것 없음.
//es 5
function hello1(){
    console.log('hello1');
}

//ex 6~
const hello2 = () => {
    console.log('hello2');
}

hello1();
hello2();
