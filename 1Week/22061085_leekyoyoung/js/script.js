console.log('script load')

// jQuery -> $
console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body) // <body>

//문서 준비가 완료 되었을 떄.
$(document).ready(function(){
    // window.alert('jQuery 로드가 완료되었습니다.');
    console.log('jQuery 로드가 완료되었습니다.');
    console.log('22061085 이교영')
    
});

// $(document).ready(() => {

// });
// 함수.
// es 5
function hello1(){
    console.log('hello1')
}

// es 6 ~
const hello2 = () => {
    console.log('hello2')
}

hello1();
hello2();

(function($){
    $(document).ready(function(){
        console.log("안녕하세요 교수님 1학기보다 더 열심히 참여하겠습니다. 잘부탁드립니다");
        alert('22061085/이교영');
    });
})(jQuery);
