<h2>2. 타입</h2>
<h3>1. 기본 타입 (data type) </h3>
  <ul>
  	<li>primitive type </li>
    <ol type="A">
        <li>숫자(number) 
          <ul>
            <li> ex > var num = 10; </li>
            <li> 정수, 실수 따로 구분 x </li>
            <li>큰 수 표현 예시 -> 10e6</li>
          </ul>
          </li>
        <li>문자열(string)
          <ul>
            <li> var name = "현주"; </li>
            <li>숫자와 문자열을 더하는 게 가능!</li>
          </ul>
          </li>
        <li>불리언(boolean)
          <ul>
            <li> var bool =  true; </li>
          </ul>
        </li>
        <li>심볼(symbol)
          <ul>
            <li> ECMAScript 6부터 제공 </li>
            <li> 익스플로어에서는 지원하지 x </li>
            <li> 유일하고 변경할 수 없는 타입 </li>
            <li> var sym = Symbol("javascript"); </li>
          </ul>
          </li>
        <li>undefined
          <ul>
            <li> var num; </li>
            <li> cf > null은 object 타입 - 아직 '값'이 정해지지 않은 것</li>
            <li> undefined는 아직 '타입'이 정해지지 않은 것</li>
            <li> 초기화 되지 않은 변수나 존재하지 않는 값에 접근 할 때</li>
          </ul>
          </li>
  	</ol>

<ul>
<li>객체 타입(object type)</li>
</ul>
<ol>
<li>객체(object)
  <ul>
    <li> 여러 property나 method를 같은 이름으로 묶어놓은 일종의 집합체 </li>
  </ul>
 </li>
</ol>



 <h3>2. 타입 변환(type conversion) </h3>
  <ul>
    <li> 자바스크립트는 타입 검사가 매우 유연 </li>
      <li> 자바스크립트의 변수는 정해져있지 않음 -> 같은 변수에 다른 타입 할당 가능</li>
      <li> 재할당은 가능, 재선언은 불가능</li>
      <li>limplicit type conversion : 기대하는 타입 값이 있을 경우 자동 변환</li>
      <li>Date object : string과 number로 모두 변환할 수 있는 유일한 타입 </li>
</ul>



<h3> 3. 변수 </h3>

<ul type=circle>
    <li>변수 : 데이터를 저장할 수 있는 메모리 공간</li>
    <li> var 로 변수 선언 </li>
    <li> 선언되지 않은 변수 사용 또는 접근할 경우 오류 발생</li>
    <li> but, 선언되지 않은 변수를 초기화할 경우에는 자동으로 선언됨</li>
    <li> 동시 선언 - var month, year; </li>
    <li> 변수 이름 = identifier </li>
    <li> 변수 이름에 가능한 것 : 숫자, 영문자, _, $</li>
</ul>

