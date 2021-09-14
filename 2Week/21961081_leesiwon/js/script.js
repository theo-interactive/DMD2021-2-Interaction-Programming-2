/*
문제 풀이.
*/

/*
Quest 1.
1. selectors 라는 이름을 가진 객체를 생성합니다.
2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6. selectors 객체의 string 속성을 삭제합니다.

7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.
*/
// Answer 1.
console.log("quest 1");
let selectors = new Object(); //객체 생성
selectors = {
    number: 2,
}

selectors.string = ''; // ' ' 할당
console.log(selectors)

selectors.dom = ['header']; //dom, 'header' 할당

selectors.dom.push('main', 'footer'); //원소 뒤에 'main, 'footer' 할당
console.log(selectors);

delete selectors.string; //string 속성 삭제
console.log(selectors); //결과 출력


/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
console.log("quest 2");
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; //배열 선언, 값 할당

for (var i = 0; i<cars.length; i++) {
    cars.reverse(); //역순으로 출력하기 위해 reverse 사용
    console.log(cars[i]); //cars 출력
    cars.reverse(); //배열 정위치
}


/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.
console.log("quest 3");
var orders = { name : ['이시원'], coffee : ['아메리카노', '에스프레소', '카페라떼'] }; //객체 선언, 값 할당

for (var i = 0; i < orders.coffee.length; i++) {
    console.log(orders.name + "님, 주문하신 " + orders.coffee[i] + " 1잔 나왔습니다.");

}


/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

var myself = {
    myname: '이시원',
    number: '21961081',
    major: '디지털미디어디자인'
    
};

function introduce (){
    console.log(`안녕하세요, ${myself.major}과 ${myself.number}학번 ${myself.myname}입니다. 잘 부탁드립니다.`);
}
introduce();
