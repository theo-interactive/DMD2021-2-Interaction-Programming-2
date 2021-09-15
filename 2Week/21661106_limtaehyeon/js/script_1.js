// console.log("javaScript Loaded");

//ES 5 version
//variable.
//변수
//변할수 있는 값.
//선언.
var foo; //undefined ****
foo = 10; // number type : 10 - 값을 정의
console.log(typeof foo);//number
foo = 'hello'; //string type : hello - 변수를 재활용
console.log(typeof foo);//string


//ES 6 ~ version
//변하지 않는 값을 선언 (절대 상수)
const CAR = 'car';
const isOpen = false; //boolean ( true | false ) 참|거짓

//문법 오류
//CAR = 'plane';

//상수 선언.
//문법 오류 : 상단에 var foo로 변수가 이미 선언되었기 때문에 다시 선언할수가 없다.(휴먼에러를 방지하기 위해.)
//let foo;
let bar = 20;
bar = {
    name:'lim',
    email:'kingistae97@gmail.com'
};
console.log(typeof bar); //object

//오류
bar = [1,2,3,4];
console.log(typeof bar); //object- 배열은 객체에 포함된다.
console.log(bar.constructor); //function
//배열 타입인지 확인하는 방법
console.log(bar.constructor.name); //'Array' 
console.log(bar.constructor.name.toLowerCase()); //소문자로 변경
console.log('Array'.toLowerCase()); //'array'


//object. 객체
let obj = new Object(); //새로운 객체를 생성
console.log(obj); // {}
obj = {}; // 리터럴 객체
console.log(obj); // {}

/*object = {
    property1 (속성명): value1(속성),
    property2: value2
};
*/

let car = {
    name : 'car',
    // color : 'blue',
    drive : function(){ //method
        console.log('car driving');
    }
};
car.model = 'Type1';
console.log(car);
const isOwn = car.hasOwnProperty('color');
console.log(isOwn);
car['wheel'] = 'wheel';
console.log(car);
car.drive();
delete car.drive;
delete car.name;
console.log(car);
if (!isOwn) { //isOwn : !isOwn의 값이 false 일때 true
    car.color = 'black';
}
console.log(car);


//Array. 배열. Object보다 중요
let  items = new Array();
console.log(items); //[]
items = []; //리터럴
console.log(items); // []
items.push(1);
console.log(items); // []
items = [0,1,2,3,4];
// console.log(items);
// items[5] = 10;
// console.log(items); //[0, 1, 2, 3, 4, 10]
// items[10] = 1;
// console.log(items); //[0, 1, 2, 3, 4, 10, empty × 4, 1]
delete items[2];
console.log(items); //[0, 1, empty, 3, 4]
items.splice(0, 3); //0순서부터 3개를 삭제
console.log(items); //[3, 4]
console.log(items.length); //배열의 개수 - 2
console.log(items.reverse()); //[4, 3] 순서를 역순으로

// Array.sort() //정렬. 알파벳 순서대로, 숫자 순서대로
// Array.forEach(); //*** 
// Array.map(); //*** 
// Array.filter(); //*
// Array.join();
// Array.reduce();
// Array.some();
// Array.find();
// Array.findIndex();
// Array.flat();
// Array.flatmap();

items = [1,2,3,4,5];
let sum  = 0 ;
//loop
//forEach()- 배열의 반복
items.forEach(function(item){
    sum += item;
    // console.log(item);
});
console.log(sum);

sum = 0;
items.forEach((item) => {
    // console.log(item);
    sum += item;
});
console.log(sum);

let newItems = items.map((item, idx) =>{ //item = items[n]의 값. idx = n(순서)
    console.log(item);
    // return item;
    // return item * 2;
    return {
        order : idx +1,
        value : item * 10,
        name : '',
        color : ''
    };
});
console.log(newItems);
// newItems = [ ...newItems, {order: 10, value: 100, name: '', color:''}];
//newItems = [ ...newItems, ...newItems];
// newItems = [ {order: 10, value: 100, name: '', color:''} ];
//console.log(newItems);

newItems = [...Array(10).keys()];
console.log(newItems); //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
newItems = [...Array(5).fill(1)];
console.log(newItems); // [1, 1, 1, 1, 1]

//--------------------------------------------------------------
var selectors = {
    number : 2,
    putString : ''
};
selectors.dom = ['header','main','footer'];
delete selectors.dom;
console.log(selectors);
//--------------------------------------------------------------






















