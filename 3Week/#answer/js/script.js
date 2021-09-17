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
// let selector = new Object();
let selectors = {
    number: 2
};
selectors.string = '';
selectors.dom = ['header'];
// selectors.dom.splice(1, 0, 'main', 'footer');
// 구조 할당 (배열)
// selectors.dom = [ ...selectors.dom, 'main', 'footer' ];
selectors.dom = [ ...selectors.dom, ...['main', 'footer'] ];
// selectors.dom = [ 'main', 'footer', ...selectors.dom ];
// selectors.dom = [ ...['main', 'footer'], ...selectors.dom ];
delete selectors.string;
console.log(selectors);

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
let cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// cars.reverse();
// console.log(cars);

let newCars = [];
for(let i = 0; i < cars.length; i++) {
    const idx = cars.length - i - 1;
    // console.log(idx);
    // newCars.push(cars[idx]);
    newCars = [ ...newCars, cars[idx] ];
}
console.log(newCars);

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.
const orders = { name : ['김용원'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
orders.coffee.forEach((menu) => {
    // console.log(menu);
    console.log(`${orders.name[0]} 님, 주문하신 ${menu} 1잔 나왔습니다.`);
    // const message = `${orders.name[0]} 님, 주문하신 ${menu} 1잔 나왔습니다.`;
    // console.log(message);
});

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.


