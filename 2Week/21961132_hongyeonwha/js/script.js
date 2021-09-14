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
//console.log(selectors); //{} selectors 라는 이름을 가진 객체

selectors = {number : 2 };
//console.log(selectors);
selectors.string =''; //속성추가 .
//console.log(selectors);
selectors.dom = ['header'];
//console.log(selectors);
selectors.dom.push('main');
selectors.dom.push('footer');
//console.log(selectors);
// selectors.dom = ['main', 'footer'];//header 는 삭제되고 2개가 됨
// console.log(selectors);
delete selectors.string;
console.log(selectors);



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.
carsRe = [];
var cars = ['Hyundai', 'Kia;', 'Samsung', 'GM'];
for (var i = cars.length-1; i >= 0; --i){
    //3,2,1,0
    //console.log(i);
    carsRe.push(cars[i]);
    //console.log(carsRe);
}
cars = carsRe;
console.log(cars);



/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.
var orders = { name : ['홍연화'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };

for ( var i = 0; i < orders.coffee.length; ++i){
    //console.log(i);//0,1,2
    if(i = 2){
        //console.log(orders.name + '님 , 주문하신 ' + orders.coffee[i] + ' 1잔 나왔습니다');
        console.log(`${orders.name} 님 , 주문하신 ${orders.coffee[i]}  1잔 나왔습니다`);
    }
}




/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.
const My = (name , year , classs) => `안녕하세요 ${year} 학번 ${classs} 반 ${name}입니다.`;
const coffee3 = My('홍연화' ,19, '프로그래밍');
console.log(coffee3);

let self = ['일러스트 ','포토샵 ','에프터이펙트 ','자바스크립트 ','제이커리'];
let selfSkill = [];
let selfSkill2 = [];
for( let i = 0; i < self.length; ++i){
    //0,1,2,3,4
    if(i < 3){
        selfSkill += self[i];
    }
    else if(i >= 3){
        selfSkill2 += self[i];
    }
}
console.log(`저는 ${selfSkill}다룰줄 알고 지금은 ${selfSkill2} 배우는 중 입니다  `);

function getName() {
    console.log('열심히 하겠습니다!');
}
getName();



