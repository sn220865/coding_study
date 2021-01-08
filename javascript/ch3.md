<h3>3. 연산자 (operator)</h3>

<ol type='A'>
    <li>산술 연산자 (arithmetic operator)
        <ul type=square>
            <li>모두 이항 연산자</li>
            <li> / : 나누기, % : 나머지</li>
        </ul>
    </li>
    <li>대입 연산자 (assignment operator)</li>
    <li>증감 연산자 (increment and decrement operator)
    <ul type=square>
        <li>++x : 먼저 x의 값을 1 증가 시킨 후 연산 진행</li>
        <li>x++ : 먼저 연산을 진행 후 x의 값을 1 증가</li>
    </ul>
        </li>
    <li>비교 연산자 (comparison operator)
    	<ul type=square>
            <li>== : 두 피연산자의 값이 같으면 true. 두 피연산자의 타입이 
                서로 다르면, 비교를 위해 강제로 타입을 같게 변환</li>
            <li>=== : 두 피연산자의 값이 같고, 타입이 같을 경우 true (타입의 변환 없이)</li>
            <li>!= / !==</li>
            <li>타입이 서로 달라 비교할 수 없는 경우에는 참의 조건을 만족하게 하지 못하므로, 
                언제나 거짓(false)만을 반환</li>
    </li>
    <li>logical operator
        <ul type=square>
            <li>&&, ||, !</li>
    </li>
    <li>bitwise operator
        <ul type=square>
            <li>&, |, ^(XOR), ~, <<, >>(shift + 부호유지), >>>(shift + 새 비트는 0)</li>
            <li><< : *2</li>
            <li>>> : %2</li>
    </li>
    <li> ternary operator : eq(1) ? eq(2): eq(3) -> if else 대신 사용가능
    </li>
    <li>쉼표 연산자를 for 문에서 사용하면, 루프마다 여러 변수를 동시에 갱신할 수 있습니다.</li>
    <li>delete 연산자는 피연산자인 객체, 객체의 프로퍼티(property) 또는 배열의 요소(element) 등을 삭제</li>
    <li>instanceof 연산자는 피연산자인 객체가 특정 객체의 인스턴스인지 아닌지를 확인</li>
    <li>void 연산자 : 피연산자로 어떤 타입의 값이 오던지 상관없이 언제나 undefined 값만을 반환</li>
</ol>

