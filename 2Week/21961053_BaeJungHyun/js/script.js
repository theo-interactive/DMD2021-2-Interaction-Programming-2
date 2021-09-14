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
// 1. selectors 라는 이름을 가진 객체를 생성합니다.

selectors = { 
    number : 2 
};
// 2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.

selectors.string = ' ';
// 3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.

selectors.dom = ['header'];
// 4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.

selectors.dom.push('main', 'footer');
// 5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.

delete selectors.string;
// 6. selectors 객체의 string 속성을 삭제합니다.

console.log(selectors);
// 7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.



/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.

for (i = cars.length -1; i >= 0; i--) {
    cars.push(cars[i]);
  } // ['Hyundai', 'Kia', 'Samsung', 'GM', 'GM', 'Samsung', 'Kia', 'Hyundai']
cars.splice(0, 4); // 0 순서부터 4개를 삭제
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.

console.log(cars);
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.



/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

var orders = { name : ['배정현'], coffee : ['아메리카노', '에스프레소', '카페라떼'] };
// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.

for (i = 0; i < orders.coffee.length; i++) {
    console.log(`"${orders.name}님, 주문하신 ${orders.coffee[i]} 1잔 나왔습니다."`);
  }
// 2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”


/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

const Introduce = (name, university, major) => `안녕하세요 제 이름은 ${name} 입니다. 저는 ${university} ${major} 2학년에 재학 중 입니다.`;
const profile = Introduce('배정현', '계원예술대학교', '디지털 미디어 디자인 학과');
console.log(profile);

var profile2 = {
    hobby : ['노래 듣기', '보드 타기', '타로 보기'],
    list : ['첫번째', '두번째', '세번째']
}
  const introduce2 = () => {
        var my = '저의 ';
        var text;
        for(i=0; i <profile2.list.length; i++) {
            text = profile2.list[i] + ' 취미는 ' + profile2.hobby[i] + ' 입니다. ';
            my += text;
        }
            console.log( my + '감사합니다!');
    };
    introduce2();

// 안녕하세요 제 이름은 배정현 입니다. 저는 계원예술대학교 디지털 미디어 디자인 학과 2학년에 재학 중 입니다.
// 저의 첫번째 취미는 노래 듣기 입니다. 두번째 취미는 보드 타기 입니다. 세번째 취미는 타로 보기 입니다. 감사합니다!