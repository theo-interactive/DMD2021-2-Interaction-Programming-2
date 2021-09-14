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

let selectors = new Object(); // 1.

selectors = {number : 2}; // 2.

selectors.string = ''; // 3.

selectors.dom = ['header']; // 4.

selectors.dom.push('main', 'footer'); // 5.

delete selectors.string; // 6.

console.log(selectors); // 7.

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; // 1.

var carReverse = []; // 2-1. 역순 출력을 위한 함수 carReverse 선언.

for (var i = cars.length - 1; i >= 0; i--){ // 2-2. 반복문 선언 시작. 
    carReverse.push(cars[i]); // 2-3. cars 배열에 역순 함수를 적용한 배열을 넣어준다.
}

cars = carReverse;

console.log(cars); // 3.

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

var orders = { name : ['전형욱(본인 이름)'], coffee : ['아메리카노', '에스프레소', '카페라떼'] }; // 1.

for (var i = 0; i < orders.coffee.length; i++){ // 2.
    console.log(`${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다.`); // 3.
}

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

var about = {
    name : '전형욱',
    age : [1, 2, 3, 4, 5, 10],
    wish : ['건물주', ' No-코로나 세계관']
};

const MyProfile = () => {
    var sum = 0;
    for (var i = 0; i < about.age.length; i++){
        sum += about.age[i];
    }
    console.log(`안녕하세요. 제 이름은 ${about.name}, 나이는 ${sum}세, 제 인생의 궁극적인 목표는 ${about.wish}입니다. 짧은 자기소개 읽어주셔서 감사합니다!`);
}
MyProfile();