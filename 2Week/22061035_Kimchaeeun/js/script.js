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

// 1-1 ~ 1-2) number 속성의 2 원소값 갖고 있는 selectors 객체 생성
let selectors = {
    number: 2
};
// console.log(typeof selectors.number);

// 1-3) selectors 객체에 string 속성의 빈 문자열 '' 원소값 추가
selectors['string'] = '';

// 1-4) selectors 객체에 dom 속성의 'header'문자열 원소값 추가
selectors['dom'] = ['header'];

// 1-5) selectors 객체의 dom 속성 배열에 'main', 'footer' 문자열 원소값을 'header' 원소값 뒤에 순서대로 추가
selectors['dom'] = ['header', 'main', 'footer'];

// 1-6) selectors 객체의 string 속성 삭제
delete selectors.string;

// 1-7) console.log 메서드 이용해서 selectors 객체 출력
console.log(selectors);



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

// 1-1) cars 배열 선언 후 ‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’ 문자열 원소 할당
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];

// 1-2) cars 배열 문자열 원소를 역순으로 출력하는 반복문 작성
// 역순을 세는 반복문을 작성
// 원래의 원소값을 재배치할 것이 아니라면 원래의 원소값을 지우고 역순의 원소값을 새로 삽입해야함
// 배열 뒤에 원소를 역순으로 추가함과 동시에 직전 원소를 지워야 함 (같은 원소값 중복을 방지)
// 지우는 원소의 순서가 어긋나면 원소를 역순으로 추가할 수 없음 (새 배열에 담는 것이 아닌 원래의 배열을 바탕으로 추가하는 것이기 때문)
// ==> 3부터 0까지 역순으로 세는 for 반복문 선언
// ==> 반복문 안에 배열 cars 뒤에 역순으로 원소값 추가하기 위해 cars.push(cars[i]) 선언
// ==> 같은 원소값 중복 방지 위해 직전 원소 지워야 하므로 cars.splice(i, 1) 선언
for (i = 3; i >= 0; i--) {
    cars.push(cars[i]);
    cars.splice(i, 1);
    // console.log(cars);
}

// 1-3) console.log 메서드를 이용해서 cars 출력
console.log(cars);



/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

// 3-1) orders 객체 선언 후 name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] 배열 원소값 할당
var orders = { name : ['김채은'], coffee : ['아메리카노', '에스프레스', '카페라떼'] };

// 3-2) orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 “name 님, 주문하신 coffee 1잔 나왔습니다.”의 문자열로 console.log 통해 출력
// 각 커피들의 주문 내역이 나와야 함
// 주문자는 한 명이므로 orders 객체의 coffee 배열 내 원소값 개수만큼 반복문 실행되어야 함
// ==> orders.coffee로 orders 객체 내 coffee 배열 찾기
// ==> forEach 사용하여 coffee 배열 개수만큼 문자열 반복하여 console.log 통해 출력시키기

orders.coffee.forEach((item) => {
    console.log(`${orders.name}님, 주문하신 ${item} 1잔 나왔습니다.`);
});



/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

// 기본 정보를 담은 객체
let info = {
    number: 22061035,
    name: "김채은",
    major: "디지털미디어디자인"
}

// 꿈과 지식의 상한수치, 지식을 담아둘 배열, 지식으로 옮겨질 꿈 배열을 변수로 선언
let max = 5;
let know = Array(max);
let dream = ['Interaction Programming', 'Web Publishing', 'Web Designing', 'Media Programming', 'Front End Developing'];

// 기본 정보를 담은 객체의 값을 받아와 자기소개를 하는 함수 생성
function hello(number, name, major) {
    console.log(`안녕하세요? 저는 ${major}을 전공하고 있는 ${number} 학번 ${name}입니다.`);
    console.log(`이 빈 값들로 구성된 배열 하나가 보이시나요?`, know);
    console.log(`마지막 학기 인터랙션 프로그래밍 수업을 통해 막 채워나가는 상태인 제 코딩 경험을 꿈으로 채워나가고 싶습니다.`);
    for(i = 0; i < max; i++) {
        know[i] = dream[i];
        console.log(know);
    }
    console.log('마지막 학기 또한 잘 부탁드립니다, 교수님!');
}

hello (info.number, info.name, info.major);


