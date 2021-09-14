//Answer 3.

// let orders = {name = '이교영'};
// let coffees =[];
// for(let coffee in orders){
//     coffees['아메리카노']
//     coffees.push(orders[coffee]);
// }
// console.log(coffees)

// ### Quest 1.

// 1. selectors 라는 이름을 가진 객체를 생성합니다.
// 2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
// 3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
// 4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
// 5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
// 6. selectors 객체의 string 속성을 삭제합니다.
// 7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.


// let selectors = 2; // 새로운 객체를 생성.
// selectors = { 
//     string : ''
// };
// selectors.dom = 'header';
// console.log(selectors);
// // selectors.dom = 'main','footer';
// // console.log(selectors);
// delete selectors[1];
// console.log(selectors);

let selectors = new Object();
// console.log(selectors);
selectors = {
    number: 2,
    string: ''
};
// let dom = new Array();
// dom = ['header'];
// dom.push('main','footer');
// console.log(dom);
selectors.dom = ['header'];
selectors.dom.push('main','footer');
delete selectors.string;
console.log(selectors);

// ### Quest 2.

// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.

let cars = new Array();
cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];

for(let i=cars.length-1; i>=0; i--){
    cars.push(cars[i]);
}
cars.splice(0,4);
console.log(cars);

// ### Quest 3.

// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
// 2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”

// let orders = new Object();
// orders.name = ['이교영']
// orders.coffee = ['아메리카노','에스프레소','카페라떼'];

let orders = {
    name : ['이교영'],
    coffee : ['아메리카노','에스프레소','카페라떼']
};
// console.log(orders);
const order = () => {
    for(i = 0; i < orders.coffee.length; i++){
        console.log(`${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다`);
    }
};
order();

// ### Quest 4.

// 1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
// 2. 자신의 소개를 합니다.

// let me = new Object();
// me.name = ['이교영'];
// me.age = ['25']
// me.hobby = ['야구','농구','축구'];
// me.family = ['아빠','엄마','누나'];

var me = {
    name : ['이교영'],
    age : ['25'],
    hobby : ['야구','농구','축구'],
    family : ['아빠','엄마','누나']
};

const intro = () => {
    var myfamily;
    var sum;
    for(var i = 0; i < me.family.length; i++){
        myfamily = me.family[i];
        sum += myfamily + ',';
    }
    console.log(sum);
    console.log(`안녕하세요 저의 이름 ${me.name}이고, 저의 나이는 ${me.age}입니다. 저의 취미는 ${me.hobby}입니다그리고 저의 가족관계는 ${sum}입니다`);
};
intro();