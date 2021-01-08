<h2>6. 함수 (function)</h2>

1. 함수 기초

   a. 함수도 하나의 data type

   b. 함수를 변수에 대입하거나 함수에 property를 지정하는 것이 가능

```javascript
function toDoList(text, type){
	var arr = [];
    arr.push(text,type);
    return arr;
}
var list = toDoList;
showList = toDoList("국내 여행 가기", "travel");
showList2 = list("국내 여행 가기", "travel");
document.write(showList+"<br>");
```

​		c. function name -> identifier

​		d. parameter -> argument를 함수 내부에서 사용할 수 있도록 해주는 변수

​		e. argument : 함수가 호출 될 때 함수로 값을 전달해주는 변수나 상수

​		f. return : 함수 호출자가 실행 결과를 받을 수 있음. 배열이나 객체를 포함한 모든 타입의 값을 반환 가능

​		e. 함수는 호출되어야 실행이 됨.

2. 변수의 유효 범위 (variable scope)

   a.  local / global

   b.  함수 내부에서 local 변수를 선언할 때 var을 사용하지 않으면 global 변수로 선언됨

   c. global 변수 이름과 local 변수 이름이 동일하게 선언될 경우 해당 함수 내에서는 local 변수만 사용

   d. 중복된 변수이름이 global과 local에서 정의된 경우 -> global 변수를 호출하려면 window.변수이름 사용하기

3. 함수의 유효범위 (function scope) : 함수 안에서 선언된 모든 변수는 함수 전체에 걸쳐 유효하다.

   1. 블록단위의 유효범위

   2. 자바스크립트에서는 함수를 블록 대신 사용

   3. 정의된 범위한에서 정의된 모든 변수 및 함수에 접근 가능

   4.  **함수 호이스팅(hoisting) : 유효범위의 적용이 변수가 선언되기전에도 똑같이 적용된다. 자바스크립트 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동된 것처럼 동작한다.**

      1. ```javascript
         var globalNum = 10;		// globalNum을 전역 변수로 선언함.
         
         function printNum() {
             document.write("지역 변수 globalNum 선언 전의 globalNum의 값은 " + globalNum + "입니다.<br>");
             var globalNum = 20;	// globalNum을 지역 변수로 선언함.
             document.write("지역 변수 globalNum 선언 후의 globalNum의 값은 " + globalNum + "입니다.<br>");
         }
         printNum();
         ```

4. 매개변수(parameter), 인수 (argument) 

   - parameter에 타입을 명시 x, argumetn의 타입을 검사 x
   - 정의보다 적은 argument가 전달돼도 오류 발생 x
   - 