/* 
key, value 구조의 자료구조
Object형태는 {}로 그 자료를 표현하며, 서버와 클라이언트 간에
데이터를 교환할 때, Object포맷과 비슷한 방법으로 데이터를 보냅니다.
 */

 var obj = {
     name : 'crong',
     age : 20,
 }
 console.log(obj['name']);
 console.log(obj.age);

 const myFriend = {key : 'value', key2 : 'value'};
 console.log(myFriend);

 // 객체 속성 추가
 myFriend['name'] = 'crong';
 console.log(myFriend['name']);

 myFriend.age = 34;
 console.log(myFriend.age);

 // 객체 속성 삭제 전
 console.log(myFriend);

 // 객체 속성 삭제
 delete myFriend.key;
 delete myFriend['key2'];
 console.log(myFriend);


 // 객체 탐색 for-in 구문 대표적
var obj = {
    name : 'code',
    age : 22,
    data : [1,2,3,4],
};
for(var value in obj){
    if(typeof obj[value] === 'number'){
        console.log(value);
    }
}

// Object.key()를 이요한 후 forEach로 탐색하는 방법 사용
var obj = {
    name : 'code',
    age : 22,
    data : [1,2,3,4],
};
Object.keys(obj).forEach(function(key){
    console.log(obj[key]);
});


// 실습
const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
};


// 실행결과
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]

var result = [];
Object.keys(data).forEach(function(key){
    if(typeof data[key] === 'object'){
        Object.keys(data[key]).forEach(function(val){
            if(typeof data[key][val] === 'number'){
                result.push(val);
            }
        })
    }
    
})
console.log(result);