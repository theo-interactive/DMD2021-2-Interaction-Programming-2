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

// var selectors = { number: 2 };
// selectors.string = '';
// selectors.dom = ['header'];
// console.log(selectors.dom);
// delete selectors.string;
// console.log(selectors);


/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

// var cars = new Array();
// cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; // 4
// // console.log(cars);
var i = 0;
// for(i = cars.length - 1; i > -1; --i) { // 3 2 1 0
//     // console.log(i);
//     console.log(cars[i]);
// }

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

// var order = {
//     name: ['JHK'],
//     coffe: ['아메리카노', '에스프레소', '카페라떼']
// };
// console.log(order.coffe);
// console.log(order.coffe[0]);
// for(i = 0; i < 3; i++) {
//     var result = order.name + "님, 주문하신 " + order.coffe[i] + " 1잔 나왔습니다."; 
//     console.log(result);
// }

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

// var movie = ['나이브스 아웃','매트릭스', '가타카','벤자민 버튼의 시간은 거꾸로 간다'];
// // console.log(move);

// var info = {
//     name: 'JHK',
//     age: 23
// };

// const introduction = () => {
//    var movieSum = '';

//    for(i = 0; i < movie.length; i++) {
//        if(i > 0) {
//            movieSum += ',';
//        }
//         movieSum += movie[i];
//    }
// //    console.log(movieSum);

//    console.log(`안녕하세요 저는 ${info.name}입니다. 저는 ${info.age}살 입니다. 최근 영화 보는걸 좋아하게 돼서 여러가지 영화를 보았는데 ${movieSum} 등을 보았습니다.`);
// }
// introduction();
