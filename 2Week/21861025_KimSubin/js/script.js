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

// selectors = 2; // selectors 의 값은 2.
// console.log(typeof selectors); // selectors 값의 타입은 숫자.
// selectors = ''; // selectors 변수에 문자열 '' 추가 ( 변수의 재활용 )
// console.log(selectors.constructor.name);
let selectors = {
    number: 2,
    string: ''
};
// console.log(typeof selectors); // selectors 값의 타입은 문자.
selectors.dom = ['header'];
selectors.dom.push('main', 'footer');
// console.log(selectors); // 배열추가 확인
delete selectors.string;
console.log(selectors);

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
/*
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; // 배열 선언
cars.reverse(); // cars의 값을 reverse
console.log(cars);
// 반복문을 사용하지 않음
*/

/*
let cars = { Hyundai: 'Hyundai', Kia: 'Kia', Samsung: 'Samsung', GM: 'GM'};
// 각 배열요소의 name 할당
console.log(cars);

let names = []; // 빈배열 생성
for(let name in cars){ // cars 안에 선언되어있는 name
    names.push(cars[name]); // names 배열에 cars의 name 요소를 push (앞부터 추가)
    names.reverse(); // 추가된 배열을 거꾸로 뒤집기
}
console.log(names);
// 거꾸로 되긴 했지만 cars 배열로 뒤집은 것이 아닌 별도의 배열을 생성하여 뒤집은 상황
*/

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];

for(let i = cars.length - 1; i >= 0; i--){
  cars.push(cars[i]);
};
cars.splice(0, 4);
console.log(cars);

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

var orders = { name : ['김수빈'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };

const order = () =>{
    for(i = 0; i < orders.coffee.length; i++){
        console.log('“' + orders.name[0] + ' 님, 주문하신 ' + orders.coffee[i] + ' 1잔 나왔습니다.”');
    }
}
order();

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

var my = {
    name : ['김수빈'],
    number : ['21861025'],
    time : ['과제하기','잠자기'],
    program : ['벌거벗은 세계사 ','꼬리에 꼬리를 무는 이야기 ', '시리즈 영화 ']
};
// console.log(my);
const myit = () => {
    let mySum;
    var id = `안녕하세요. 저는 ${my.number} 학번의 ${my.name}입니다.`;
    var ne = '저는 ' + my.time[0] + ' 전에 항상 잠을 깨기 위해 ';
    for(var i = 0; i < my.program.length; i++){
        mySum = my.program[i];
        ne += mySum;
    }
    var mo = '를 틀어두고 라디오처럼 사용합니다.'

    var bo = my.time[1] + ' 전에는 항상 잔잔한 목소리의 유튜브 라디오 컨텐츠를 듣습니다.'
    var introduce = id + ne + mo + bo;
    console.log(introduce);
};
myit();