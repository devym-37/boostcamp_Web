/*
DOM APIs 실습
React, Angular 과 같은 프레임워크는 DOM조작을 편리하게 해준다.
하지만 가장 빠른 DOM조작방법은 DOM APIs를 직접 사용하는 것이다.

*/

var mango = document.createElement("li");
var mangoText = document.createTextNode("mango");
mango.appendChild(mangoText);

var parent = document.querySelector("ul");
parent.appendChild(mango);


//
var ul = document.querySelector("ul");
var mango = document.createElement("li");
var mangoText = document.createTextNode("mango");
mango.appendChild(mangoText);

var banana = document.querySelector("li:nth-child(3)");

ul.insertBefore(mango, banana);

// 
var orange = document.querySelector("li:nth-child(2)");
orange.insertAdjacentHTML("afterend", "<li>mango</li>");

//
var parent = document.querySelector("ul");
var apple = document.querySelector("li:nth-child(1)");
var strawberry = document.querySelector("li:nth-child(5)");

parent.insertBefore(apple, strawberry); // apple을 strawberry 앞으로 이동

//
var reds = document.querySelectorAll("li.red");
var parent = document.querySelector("ul");
for(var i = 0; i < reds.length; i++){
    parent.removeChild(reds[i]);
}

//
var bluenode = document.querySelectorAll("section.blue");

Array.from(bluenode).forEach((function(v){
    var section = bluenode[i].closest("section");
    var h2 = section.querySelector("h2");
    section.removeChild(h2);
}))

]