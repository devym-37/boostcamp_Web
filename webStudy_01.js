// 배열의 선언
var a = [];
// 배열 안에는 모든 타입이 다 들어갈 수 있다. 함수도 배열안에 배열도, 배열 안에 객체도 들어갈 수 있음.
var a = [1,2,3,'hello',null,true,[]];

var a = [4];
a[1000] = 3;
console.log(a.length);
console.log(a[500]);

// push method를 통해서 뒤에 순차적으로 추가 가능
var a = [4];
a.push(5);
console.log(a.length);

// 배열의 원소에 특정 값이 들어 있는지 확인 가능
[1,2,3,4].indexOf(3) // return 값 2

// 배열의 문자열로 합칠 수 있다.
[1,2,3,4].join();   // "1,2,3,4"

// 배열을 합칠 수 있다.
[1,2,3,4].concat(2,3);  //[1,2,3,4,2,3]

// origin 과 changed는 같은 배열원소를 가지고 있지만,
// 두개가 가리키는 메모리 주소는 다르다. 즉, reference가 다르다.
var origin = [1,2,3,4];
var changed = origin.concat(); // [1,2,3,4]
console.log(origin === changed); // false

// 배열 탐색 (forEach, map, filter)
['apple', 'tomato'].forEach(function(value){
    console.log(value)
});

var newArr = ['apple', 'tomato'].map(function(value, index){
    return index + '번째 과일은 ' + value + '입니다.';
});
console.log(newArr);
