/*
DOM APIs
다양한  DOM(Document Object Model) APIs를 이해
element와 text node를 생성해서 화면에 추가

DOM APIs
다양한 DOM 속성과 메서드들
createElement, CreateTextNode, appendChild
insertBefore, innerText, innerHTML, insertAdjacentHTML

document. 으로 사용할 수 있는 APIs

몇가지 유용한 속성
 - tagName : element 태그명 반환
 - textContent : 노드의 텍스트 내용을 설정하거나 반환
 - nodeType : 노드의 노드 유형을 숫자로 반환

이동
 - childNodes : element의 자식 노드의 노드 리스트 반환
 - firstChild : element의 첫 번째 자식 노드를 반환
 - firstElementChild : 첫 번째 자식 element를 반환
 - parentElement : element의 부모 element 반환
 - nextSibling : 동일한 노드 트리 레벨에서 다음 노드를 반환
 - nextElementSibling : 동일한 노드 트리 레벨에서 다음 element 반환

DOM 조작 API
삭제, 추가, 이동, 교체
 - removeChild() : element의 자식 노드 제거
 - appendChild() : 마지막 자식 노드로 자식 노드를 element에 추가
 - insertBefore() : 특정영역에 내용 추가
 - cloneNode() : 노드를 복제
 - replaceChild() : element의 자식 노드 바꿈
 - closest()   // 상위로 올라가면서 근접 엘리먼트 찾기

HTML을 문자열로 처리해주는 DOM API
 - innerText // getter, setter
    : 지정된 노드와 모든 자손의 텍스트 내용을 설정하거나 반환
 - innerHTML // getter, setter
    : 지정된 element의 내부 html을 설정하거나 반환
 - insertAdjacentHIML
    : HTML로 텍스트를 지정된 위치에 삽입
*/


// childNodes 예제
var ul = document.querySelector("ul");
var ulChildNodes = ul.childNodes;

for(var i = 0; i < ulChildNodes.length; i++){
   // 개행이 포함되어 textNode 포함
   console.log(ulChildNodes[i].nodeName);
}

// firstChild 예제
var body = document.querySelector("body");
var bodyFirstNode = body.firstChild;

console.log(bodyFirstNode.nodeName);

// firstElementChild 예제
var body = document.querySelector("body");
var bodyFirstElementChild = body.firstElementChild;

console.log(bodyFirstElementChild);

// parentElement 예제
var div = document.querySelector("div");
var divParentElement = div.parentElement;

console.log(divParentElement);

// nextSibling 예제
var list1 = document.getElementById("list1");
var nextSiblingNode = list1.nextSibling;

console.log(nextSiblingNode.nodeName);

// nextElementSibling 예제
var list1 = document.getElementById("list1");
var nextSiblingElement = list1.nextElementSibling;

console.log(nextSiblingElement.textContent);

// removeChild() 예제
var removeChildButton = document.getElementById("removeChildButton");

removeChildButton.addEventListener("click", function(){
   var ul = document.querySelector("ul");
   ul.removeChild(ul.firstElementChild);
})

// appendChild() 예제
var appendChildButtion = document.getElementById("appendChildButton");

appendChildButtion.addEventListener("click", function(){
   var ul = document.querySelector("ul");
   var liNode = document.createElement("LI");
   var textNode = document.createTextNode("4. 웹 애플리케이션 개발 4/1");

   liNode.appendChild(textNode);
   ul.appendChild(liNode);
})

// insertBefore() 예제
var inserBeforeButton = document.getElementById("insertBeforeButton");

inserBeforeButton.addEventListener("click", function(){
   var ul = document.querySelector("ul");
   var liNode = document.createElement("LI");
   var textNode = document.createTextNode("4. 개발 4/1");

   liNode.appendChild(textNode);
   ul.insertBefore(liNode, ul.firstElementChild);
})

// cloneNode() 예제
var insertBeforeButton = document.getElementById("inserBeforeButton");

inserBeforeButton.addEventListener("click", function(){
   var ul = document.querySelector("ul");

   ul.appendChild(ul.firstElementChild.cloneNode(true));
})

// replaceChild() 예제
var replaceTextNodeButton = document.getElementById("replaceTextNodeButton");

replaceTextNodeButton.addEventListener("click", function(){
   var ul = document.querySelector("ul");
   var firstLi = ul.firstElementChild;

   var textNode = document.createTextNode("텍스트 노드 변경");
   firstLi.replaceChild(textNode, firstLi.firstChild);
})

// closest() 예제
var firstLi = document.getElementById("List1");

console.log(firstLi.closest("div").nodeName);

// innerText 예제
var copyTextButton = document.getElementById("copyTextButton");

copyTextButton.addEventListener("click", function(){
   var list1Text = document.getElementById("list1").innerText;

   document.getElementById("list2").innerText = list1Text;  // 두번째 리스트 내용을 첫번째 리스트 내용으로 변경
})

// innerHTML 예제
var copyListButton = document.getElementById("copyListButton");

copyListButton.addEventListener("click", function() {
  var ul = document.querySelector("ul");
  var list1Html = document.getElementById("list1").innerHTML;
  
  ul.innerHTML = list1Html;      // 첫번째 리스트만 남기고 제거
});

// insertAdjacentHTML() 예제
var addListButton = document.getElementById("addListButton");

addListButton.addEventListener("click", function(){
   var list3 = document.getElementById("list3");
   list3.insertAdjacentHTML("afterend", "<li>4. 웹애플리케이션 개발 2/4</li>");
})