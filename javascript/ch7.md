<h2>7. 객체(object)</h2>

1. object 
   - name과 value로 구성된 property의 정렬되지 않은 집합
   - property의 값으로 함수가 올 수 있음 -> method
2. js에서 객체의 기본 특징
   - js의 기본 타입 (data type) = object
   - primitive type(number, boolean, ...)은 값이 정해진 객체로 취급되어  객체로서의 특징도 함께 가진다.
3. object 생성 -> instance (생성되어 메모리에 대입된 객체)
   - literal notation - var 객체 이름 = {프로퍼티 이름(identifier or 문자열) : 프로퍼티 값, ...}
   - constructor function : new 연산자를 이용하여 객체를 생성하고 초기화 할 수 있음. 이때 사용되는 method를 constructor라고 명칭 -> 새롭게 생성되는 객체를 초기화하는 역할.
     - ex > new Date()
     - 사용자가 직접 object constructor function을 작성하여 사용할 수도 있음
   - Object.create() : 지정된 prototype 객체와 프로퍼티를 가지고 새로운 객체를 만든다.
     - example > var obj = Object.create(null,{x : {value : 100, enumerable: true}, y:{value:200, enumerable: true}})
   - prototype
     - inheritance (상속) : 새로운 class에서 기존 class의 모든 property와 method를 사용할 수 있는 것
       - 기존 클래스를 수정하여 재사용 가능하게 해줌
       - 종속관계 형성을 통해 객체 의 관계를 조직화 가능
       - 객체 지향 프로그래밍의 주요 특징 : inheritance, 캡슐화, 추상화
       - C# / C++ : class-based 객체 지향 언어 vs js : prototype-based 객체 지향 언어 (상송 개념이 다름)
       - 자바스크립트에서는 현재 존재하고 잇는 객체를 프로토타입으로 사용하여, 해당 객체를 복제하여 재사용하는 것을 상속이라 한다.
     - 모든 자바스크립트의 객체는 prototype이라는 객체를 가지고 있다.
     - 모든 객체는 그들의 prototype으로부터 property와 method를 상속 받음.
     - 모든 객체는 최소 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 객체를 prototype이라 한다.
   - prtotype chain 
     - 자바스크립트에서는 객체 initializer를 사용해 생성된 같은 타입의 객체들은 모두 같은 prototype을 갖는다.
     - Object.prototype 객체는 이러한 프로토타입 체인에서도 가장 상위에 존재하는 프로토타입
     -  모든 객체는 Object.prototype 객체를 프로토타입으로 상속 받음
   - prototype 생성 : object constructor function 작성
     - 첫 문자는 대문자
4. 객체 다루기
   - this : this 키워드가 사용된 js code 영역을 포함하고 있는 객체를 가리킨다.
     - 키워드이므로 가리키는 값을 임의로 변경 불가능
     - 객체 내부에 존재할 때는 객체 자신을 가리킨다.
     - method 내부에 존재하면 method를 포함하는 객체를 가리킨다.
   - 객체 property 삭제 : delete 객체이름.프로퍼티 이름
   - 객체 property 순회 : for / in 문 사용, Object.keys() - 열거할 수 있는 프로퍼티만, Object.getOwnPropertyNames() - 모든 프로퍼티
   - 객체 간의 비교 : 별개의 두 객체는 property의 값이 모두 같아도, 절대로 같다고 말할 수 없음
     - ==, === 값 모두 false를 return
5. 객체 method
   - hasOwnProperty("존재 확인하려는 property 이름") -직접 선언된 property만 검사 (상속된건 제외)
   - propertyIsEnumerable()
   - "상속하는 객체".prototype.isPrototypeOf("상속받은 객체")
   - isExtensible() : 객체에 새로운 프로퍼티를 추가할 수 있는지 여부 반환. 기본은 true.
     - Object.preventExtensions(새로운 객체); 설정 할 경우에는 false
   - "호출 객체".toString() : "호출 객체"의 값을 문자열로 반환 
   - valueOf() : 특정 객체의 promotove type을 return
   - 접근자 property : getter / setter