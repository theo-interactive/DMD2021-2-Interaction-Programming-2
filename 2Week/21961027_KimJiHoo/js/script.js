/*

### Quest 1.

1. selectors 라는 이름을 가진 객체를 생성합니다.
2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6. selectors 객체의 string 속성을 삭제합니다.
7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.

*/

// Answer1.
var selectors = new Object(); // 객체 생성
selectors = {
    number: 2
}; 

selectors['string'] = ''; // 객체 내에 'string' 속성 추가.
console.log(selectors);

selectors.dom = ['header']; // 객체 내에 'dom' 배열 속성 추가, 'header' 속성값 추가.
console.log(selectors);

selectors.dom.push('main', 'footer'); // dom 배열 뒤에 'main'과 'header' 순서대로 추가

delete selectors.string; // delete를 이용해 selectors 객체 내의 string 속성을 삭제.
console.log(selectors); // 출력. 문제 해결!


/*

### Quest 2.

1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.

*/


// Answer2.

var cars = ['Hyundai', 'Kia', 'Samsung', 'GM']; // 배열 선언 후 값 할당.
cars.reverse(); // reverse(); 를 이용해 배열을 역순으로 정렬.

console.log(cars); // cars를 출력. 문제 해결!


/*

### Quest 3.

1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”


*/

var orders = { // 객체를 선언하고 name과 coffee 배열을 속성과 속성값으로 할당.
    name : ['김지후'],
    coffee : ['아메리카노', '에스프레소', '카페라떼'],
}

for(let drink in orders.coffee){ // orders객체의 coffee배열 내부의 원소를 전부 가져옴
    // drinks는 index값임
    console.log(`${orders.name} 님, 주문하신 ${orders.coffee[drink]} 1잔 나왔습니다.`);
}

// 하나씩 출력됨을 확인, 문제 해결!


/*


### Quest 4.

1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.


*/

//Answer4.

var myIfo = {
    name: '김지후',
    favorite: '게임 만들기',
    wishList: ['건강하기', '무사히 졸업하기', '돈 많이 벌기'],
};

let info = ''; // 반복문 결과를 담을 변수

function Info(){ // 문자열을 만들 함수.
    for(i = 0; i < myIfo.wishList.length; i++){
        info +=  myIfo.wishList[i];

        if(i < myIfo.wishList.length - 1){
            info += ','; // 마지막 요소가 아니면 어미에 ,를 추가
        }
    }

    console.log(`안녕하세요 저는 ${myIfo.name}입니다. 좋아하는 것은 ${myIfo.favorite}이고, 당장의 소원 세 가지는 ${info}입니다. `);
}


Info(); // 결과 출력, 문제 해결!











