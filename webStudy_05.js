/*
브라우저의 새로고침 없이 데이터를 얻어오는 방법
더 좋은 UX(User Experience)를 제공하는 방법

핵심개념
XMLHTTPRequest
Ajax
 - UX와 관련이 많은 기술
 */

// AJAX와 비동기
function ajax(){
    var oReq = new XMLHttpRequest();

    oReq.addEventListener("load", function(){
        console.log(this.responseText);
    });

    oReq.open("GET", "http://www.example.org/example.txt");
    oReq.send();
    
}
/* 15번째 익명함수는 19,20번째 보다 늦게 실행되는 함수
이 익명 함수는 비동기로 실행되며, 이벤트큐에 보관되다가 load이벤트가 발생하면
그때 call stack에 실행되고 있는 함수가 없어서 비어있다면 stack에 올라와서 실행
*/

// Ajax응답처리
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){
    console.log(this.responseText);
});
oReq.open("GET", "./json.txt");
oReq.send();

/*
서버로부터 받아온 JSON데이터는 문자열 형태이므로 브라우저에서 바로 실행할수 없다.
따라서 문자열을 자바스크립트객체로 변환해야 데이터에 접근할 수가 있다.
 */
var json객체로변환된값 = JSON.parse("서버에서 받은 JSON 문자열");
// 브라우저에서는 JSON객체를 제공하며, 이를 활용해서 JS객체로 변환할 수가 있다.

/*
cross domain 문제
XHR통신은 다른 도메인 간에는 보안을 이유로 요청이 안된다.
A도메인에서 B도메인으로 XHR통신, Ajax 통신을 할 수 없다.
이를 회피하기 위해서 JSONP라는 방식이 널리 사용되고 있다.
CORS라는 표준적인 방법이 제공되고 있어, 이를 활용하는 경우도 있다.

CORS를 사용하기 위해서는 프로그램 코드에서 별도로 해야 할 것이 없고, 
백엔드코드에서 헤더설정을 해야 하는 번거로움이 있다.
JSONP는 아직도 많은 곳에서 사용하는 비표준이지만, 사실상 표준으로 사용하고 있다.
 */