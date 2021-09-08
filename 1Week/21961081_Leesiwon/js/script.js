console.log("script load");

// jquery -> $ (요소셀렉터.
console.log(document);
console.log(document.documentElement); 
console.log(document.body);

//문서준비가 완료되었을 때.
$(document).ready(function() {
    console.log('제이쿼리 로드완료');
    window.alert("21961081/이시원");
    console.log("안녕하세요, 열심히 하겠습니다.");
    console.log("많이 잊어버린 것 같습니다... 조금씩 1학기때의 내용을 복습시켜 주시면 정말 감사하겠습니다 ㅠ_ㅠ")

});

/*
$(document).ready(() => {

});


//es 5
function hello1() {
    console.log('hello1');

}

//es 6~

const hello2 = () => {  
    console.log('hello2');
}

hello1();
hello2();
*/
