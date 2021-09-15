//### script.js ###
//Answer 1.
let selectors = {
    number : 2,
    makeString : ''
}
selectors.dom = ['header','main','footer'];
delete selectors.makeString;
console.log(selectors);
//Answer 2.
var cars = ['Hyundai', 'Kia', 'Samsung', 'GM'];
for(var i = 0; i < 5; i++){
    var reverse = cars.reverse();
    console.log(reverse);
}
//Answer 3.
var orders = { name: ['임태현'], coffee: ['아메리카노', '에스프레소', '카페라떼'] };
for(i = 0; i <3; i++){
    var coffee = orders.coffee;
    var name = orders.name;
    console.log(` ${name}님, 주문하신 ${coffee[i]} 1잔 나왔습니다.`);
}
//Answer 4.
let info = {
    name2 : '임태현',
    age : '23',
    gender : 'male',
    address : function(){
        var address = '서울시 서초구';
        return address;
    }
}
let info2 = ['해외진출이 목표', '워킹홀리데이 먼저'];
let info3 = ['안드로이드 앱 개발자가 목표', '현재 착실히 주말에 공부중'];

info2.push = '우선 돈부터 좀 모으자';

let name2 = info.name2;
let age = info.age;
let gender = info.gender;
let address = info.address();


console.log(`안녕하세요 저는${name2}입니다. 저는 ${age}살이고 ${gender}입니다. 사는 곳은 ${address}입니다.`);
for(var i = 0 ; i < 2; i++){
    console.log(info2);
    console.log(info3);
}
