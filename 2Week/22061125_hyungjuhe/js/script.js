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
let selectors = new Object();
selectors = { 
    number : 2,
};
selectors.string = '';
selectors.dom = ['header']; 
selectors.dom.push('main', 'footer');
delete selectors.string;
console.log(selectors);

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
var carReverse = []; // 역순 넣을 배열 생성
for ( var i = 3; i >= 0; i--){ // cars 길이 = 3, 3,2,1,0까지 들어와야하니 i가 0과 같을때까지 반복, i--
    carReverse.push(cars[i]); // carReverse에 cars의 역순 삽입
}
cars = carReverse; // cars에 carReverse(cars 역순) 대입
console.log(cars); 

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.
var orders = { name : ['형주희'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
for (var i = 0; i < orders.coffee.length; i++){
    console.log(`${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다.`);
}

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.
// 객체
var me = {
    name : '형주희',
    hakbun : '22061125',
    class : '디지털미디어디자인과 D',
    major : '프로그래밍'
}

// 배열
var age = [3, 20];
var dream = ['웹디자이너', '웹퍼블리셔'];

// 반복문
var sum = 0;
for (var i = 0; i < 2; i++){
    sum += age[i];
}
age = sum;

// 함수
function aboutMe(){
    console.log(`안녕하세요. 저는 ${me.class}반 ${me.major}전공 ${age} ${me.hakbun} ${me.name}입니다. 저의 꿈은 ${dream}입니다.`);
}
aboutMe();

