console.log('JavaScript Loaded');

// ### Quest 1.
// 1. selectors 라는 이름을 가진 객체를 생성합니다.
// 2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
// 3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
// 4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
// 5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
// 6. selectors 객체의 string 속성을 삭제합니다.
// 7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.

// selectors라는 이름을 가진 객체 생성.
var selectors = new Object();
// number 속성을 추가하며 값으로 number type 2를 삽입.
selectors = {number: 2};
// string 속성을 추가하고 빈 문자열 ''을 할당.
selectors.string = '';
// dom 속성을 추가하고 'header' 문자열 원소값을 가진 배열을 할당.
selectors.dom = ['header'];
// dom 속성 배열에 'main', 'footer' 라는 문자열을 'header' 원소의 뒤에 순서대로 추가.
selectors.dom.push('main');
selectors.dom.push('footer');
// string 속성 삭제.
delete selectors.string;
// console.log 메서드를 이용해 selectors 객체 출력.
console.log(selectors);

//-----
// ### Quest 2.
// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.

// cars 배열 선언과 동시에 값 할당.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// cars 배열 문자열이 역순으로 들어갈 빈 배열 carsReverse 생성.
var carsReverse = [];
// 반복문을 통해 carsReverse 배열을 역순으로 변경.
// 변수 i를 cars 배열의 index(3)로 값 할당.
// i가 0보다 크거나 같을 동안 i를 1씩 감소시키며 반복.
for (var i = cars.length - 1; i >= 0; i--) {
  // index가 3, 2, 1, 0 순으로 전개되기에
  // 순서대로 carsReverse 배열에 push 메서드를 이용해 삽입하면
  // 역순으로 입력됨.
  carsReverse.push(cars[i]);
}
// cars 배열에 carsReverse 배열 대입.
cars = carsReverse;
// console.log 메서드를 이용해 역순으로 변경된 cars 배열 출력.
console.log(cars);

//-----
// ### Quest 3.
// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
// 2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”

// orders 객체 선언과 동시에 값 할당.
var orders = {name: ['김채영'], coffee: ['아메리카노', '에스프레소', '카페라떼']};
// 반복문을 이용하여 (3)의 문자열 출력.
// 변수로 i를 0으로 선언하고.
// i가 orders.coffee.length(커피 메뉴의 개수)보다 작은동안 반복하여
// i를 1씩 증가시킴.
for (var i = 0; i < orders.coffee.length; i++) {
  // name은 동일하게 반복되므로 orders.name으로,
  // coffee는 각 index별로 반복되어야 하기에 index를 이용해 각 coffee명이 출력되도록 함.
  console.log(`${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다.`);
}

//-----
// ### Quest 4.
// 1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
// 2. 자신의 소개를 합니다.

// 자기소개 작성
// 안녕하세요, 저는 22061034 2학년 D반 김채영입니다.
// 저는 초밥, 냉면, 냉모밀, 샐러드, 애호박전, 파스퇴르 우유, 쏘야볶음을 좋아하고
// 견과류, 가지, 건포도, 할라피뇨를 싫어하는 퍼블리셔입니다.
// 졸업 후 웹 퍼블리셔로 취업하여 프론트엔드 개발자가 되는 게 꿈입니다.

// 학번, 학년, 반, 이름을 객체로 생성.
var introduce = {
  number: 22061034,
  grade: 2,
  class: 'D',
  name: '김채영'
}

// 자주 사용되는 '입니다'와 줄바꿈을 변수로 지정.
var end = '입니다.';
var enter = '\n';

// 첫번째 꿈과 두번째 꿈을 변수로 지정.
var firstDream = '웹 퍼블리셔';
var secondDream = '프론트엔드 개발자';

// 좋아하는 것과 싫어하는 것을 배열로 생성.
var loveThings = ['초밥', '냉면', '냉모밀', '샐러드', '애호박전', '파스퇴르 우유', '쏘야볶음'];
var hateThings = ['견과류', '가지', '건포도', '할라피뇨'];

// 자기소개를 console.log 메서드로 출력하는 함수를 생성.
function introduceMyself () {
  console.log(`안녕하세요, 저는 ${introduce.number} ${introduce.grade}학년 ${introduce.class}반 ${introduce.name}${end}${enter}저는 ${loveThings}을 좋아하고${enter}${hateThings}를 싫어하는 퍼블리셔${end}${enter}졸업 후 ${firstDream}로 취업하여 ${secondDream}가 되는 게 꿈${end}`);
}
introduceMyself();
