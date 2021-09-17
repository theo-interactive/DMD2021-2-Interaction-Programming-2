console.log('JavaScript loaded');

// Loop - 반복.
// for, while, for .. in, for .. of, forEach.

/*
for(초기화; 조건; 증감|감소) {
    // 반복 실행할 코드
}
*/

let i = 0;
// for(i = 0; i < 10; i++) {
for(i = 0; i < 10; ++i) {
    // console.log(i);
    // document.write('for loop ' + i + '<br/>');
    document.write(`for loop ${i} <br/>`);
}

const buttonEls = document.getElementsByClassName('button');
// console.log(buttonEls);
for(i = 0; i < buttonEls.length; ++i) {
    buttonEls[i].innerHTML = `<span>Button ${i + 1}</span>`;
    buttonEls[i].innerHTML = '<span>Button ' + (i + 1) + '</span>';
    // buttonEls[i].innerHTML = '<span>Button ${i}</span>';
}

// for 중첩
let max;
for(i = 0, max = 10; i < max; ++i) {
    // console.log(i);
    for(let j = 0; j < max; ++j) {
       // console.log(`i: ${i}, j: ${j}`) ;
       for(let k = 0; k < max; ++k) {
            // console.log(`i: ${i}, j: ${j}, k: ${k}`) ;
       }
    }
}

let sum = 0;
for(i = 0; i < max; ++i) {
    sum += i;
}
console.log(sum) // 0 ~ 9 모두 더한 값.

sum = 0;
for(i = 1; i <= max; ++i) {
    sum += i;
}
console.log(sum) // 1 ~ 10 모두 더한 값.

// [...Array(10).keys()]
// [undefined,u,u,u,u,u,u,u,u,u] length 10
// .keys() [0,1,2,3,4,5,6,7,8,9,10]
// [...0,1,2,3,4,5,6,7,8,9,10]
// [ {}, {}, {}, {}]
sum = [...Array(11).keys()].reduce((prev, current) => {
    return prev + current;
}, 0);
console.log(sum);

// for .. in
// for .. of
let cars = { tesla: '테슬라', hyundai: '현대', audi: '아우디' };
let names = [];
for(let name in cars) {
    // cars['hyundai']
    // console.log(cars[name]);
    names.push(cars[name]);
}
console.log(names);

names = [];
cars = ['tesla', 'hyundai', 'audi'];
for(let name of cars) {
    names.push(name);
}
console.log(names);

// Function. 함수.
// Method. 메서드.
// 함수 정의.
getName();
function getName() {
    console.log('kim yong won');
}
// 함수 호출.
getName();

// getName2();
const getName2 = function() {
    console.log('kim yong won 2');
    return false;
}
getName2();

// 화살표 함수.
const getName3 = () => {
    console.log('kim yong won 3');
}
getName3();

// 함수 반환 (return)
const getCoffee = () => {
    let name = '아메리카노';
    name = `아이스 ${name}`;
    return name;
    name = '메뉴 변경'; // 반환이 이뤄지고 난 후에는 코드 진행이 되지 않는다.
}

const getCoffee2 = () => {
    const name = '아메리카노';
}

const getCoffee3 = (menu) => `메뉴는 ${menu}입니다.`;

const coffee = getCoffee();
console.log(coffee);
const coffee2 = getCoffee2();
console.log(coffee2); // 함수 반환의 기본값은 undefined
const coffee3 = getCoffee3('라떼');
console.log(coffee3);

const getOrder = function(name, menu, cups) {
    return `${name} 고객님, 주문하신 ${menu} ${cups}잔이 나왔습니다.`;
}

const getOrder2 = (name = '김용원', menu = '아메리카노', cups = 1) => `${name} 고객님, 주문하신 ${menu} ${cups}잔이 나왔습니다.`;
const order = getOrder2('kim yong won', '초코', 10, '감사합니다.');
console.log(order);

// Scope.
let name1 = 'tesla'; // 전역 범위. (Global)
const changeName = () => {
    let name1 = 'audi'; // 지역 범위 (Local)
    // name1 = 'audi';
}
changeName();
console.log(name1);