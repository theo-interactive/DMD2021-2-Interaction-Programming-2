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
let selectors = {}; // 1. 객체 생성.
selectors = {
    number: 2, // 2. number 속성: 값 2.
    string: '' // 3. string 속성: 빈 문자열 ‘ ’.
};
// console.log(selectors);

selectors.dom = ['header']; // 4. dom 속성 추가. ‘header’ 원소 가진 배열 할당.
// console.log(selectors);

selectors.dom.push('main', 'footer'); // 5. dom 속성 배열에 ‘main’, ‘footer’ 원소 추가.
// console.log(selectors);

delete selectors.string; // 6. string 속성 삭제.
console.log(selectors); // 7. 객체 출력.




/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
const cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; // 1. 배열 선언 및 할당.
// console.log(cars);

// 2-1. reverse() 함수 이용
// cars.reverse(); // 2. 배열 원소 역순 정렬.
// console.log(cars); // 3. 배열 출력.

// 2-2. 반복문 이용
for(let i = cars.length - 1; i >= 0; --i) { // 2. 배열 원소 역순 정렬.
    cars.push(cars[i]); // 배열에 역순으로 원소 추가.
}
cars.splice(0, 4); // 기존 배열 원소 삭제.
console.log(cars); // 3. 배열 출력.



/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.
const orders = { // 1. 객체 선언 및 할당.
    name: ['이은서'],
    coffee: ['아메리카노', '에스프레소', '카페라떼']
};
// console.log(orders);

for(let menu of orders.coffee) { // 2. 반복문 작성.
    // console.log(menu); // 아메리카노, 에스프레소, 카페라떼
    console.log(`${orders.name} 님, 주문하신 ${menu} 1잔 나왔습니다.`); // 3. 문자열 출력.
}



/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.
const info = {
    name: '이은서',
    id: 21961089,
    class: ''
};
info.class = '프로그래밍';
info.food = ['피자'];
info.food.push('버블티', '카스테라');
// console.log(info);

const introduce = () => console.log(`안녕하세요. 저는 ${info.class} 전공 ${info.name}입니다.\n제가 좋아하는 음식은 ${info.food}입니다.\n마지막 학기에도 열심히 수업에 임하겠습니다. 감사합니다!`);
introduce();


