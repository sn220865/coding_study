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
   - 정의보다 적은 argument가 전달돼도 오류 발생 x, (자동으로 undefined가 설정)
   - (important) 즉, 인수에 값이 전달되지 않는 undefined 경우를 고려해주는 라인이 있어야 한다.
   - arguments 객체 : 함수가 호출될 때 전달된 인수를 배열의 형태로 저장.
     - 전체 arguments 갯수 확인 & 각각 argument에 접근 가능
     - 배열의 형태일 뿐 Array 객체는 아니다.
   - default parameter : 명시된 argument가 전달되지 않은 경우 (기본은 undefined)
   - rest parameter : ... 를 "접두사"로 사용해서 특정 위치부터 마지막 인수를 한 번에 지정하는 것이 가능
   
5. 미리 정의된 전역함수(predefined functions)

   - 이런 함수들은 어떤 타입의 객체에서도 바로 사용이 가능
     - **eval()** : 문자열로 표현된 js code를 실행하는 함수
     - isFinite() : 전달된 값이 유한한 수인지 확인, 전달된 값이 수가 아닐 경우 숫자로 변환하여 검사
     - isNaN() - tyepeof 연산자를 대신해서 숫자인지 아닌지 판별시 사용 가능
     - parseFloat() : 문자열을 파싱하여 부동소수점 수(floating point number)로 반환
     - parseInt() : 문자열을 파싱하여 정수로 반환 (두번째 인자로 인수 전달 가능, 0x로 전달시 16진수로 인식)
     - decodeURI() 
     - decodeURIComponent()
     - encodeURI() : 주소를 표시하는 특수 문자를 제외하고, 모든 문자를 escape sequences 처리하여 부호화
     - encodeURIComponent() : encodeURI()에서 부호화하지 않은 모든 문자까지 포함하여 부호화
     - escape("변환할 문자열") : 전달받은 문자열에서 특정 문자들을 16진법 escape 시퀀스 문자로 변환
     - unescape()
     - Number() : 전달받은 객체를 숫자로 반환
     - String() : 전달받은 객체를 문자로 반환

* escape sequence : 프로그래밍 언어 특성상 표현 할 수 없는 기능, 문자를 표현
  * 컴퓨터를 제어하는 목적으로 사용되는 특수 문자
  * = control sequence, escape 문자, 확장 비트열
    * \a : alert (경고)
    * \n : new line (줄바꿈)
    * \t : horizontal tab (수평 탭)
    * \v : vertical tab (수직 탭)
    * \b : back space (백스페이스)
    * \f : form feed (폼 피드)  - 다음 페이지의 시작 위치로 현재 활성 위치를 옮김
    * \r : carriage return (캐리지 리턴) - 현재 활성위치를 현재 라인의 시작 위치로 옮김
    * \\\: backslash (백슬래시)
    * \\' : single quotes (작은 따옴표)
    * \\" : double quotes (큰 따옴표)
    * \ooo : 8진수 숫자를 ASCII 코드의 문자 표현
    * \xhh : 16진수 숫자를 사용하여 ASCII 코드의 문자 표현