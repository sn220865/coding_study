<h2>9. 문서 객체 모델</h2>

1. DOM (문서 객체 모델, Document Object Model)
   - xml 이나 html 문서에 접근하기 위한 일종의 interface
   - 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공
2. DOM의 종류
   1. Core DOM : 모든 문서 타입을 위한 DOM 모델
   2. HTML DOM : HTML 문서를 위한 DOM 모델
   3. XML DOM : XML 문서를 위한 DOM 모델
3. Document 객체 : 웹 페이지 그 자체를 의미
   - HTML 요소와 관련된 작업을 도와주는 다양한 method를 제공
   - HTML 요소 선택
     - document.getElementsByTagName(태그이름)
     - document.getElementsById(id 이름) - 해당 아이디를 가지고 있는 요소 중에서 첫 번째 요소 단 하나만을 선택
     - document.getElementsByClassName(클래스 이름)
     - document.getElementsByName(name 속성값)
     - document.querySelectAll(선택자)
   - HTML 요소 생성
     - document.createElement(HTML 요소)
     - document.write(텍스트)
   - HTML 이벤트 핸들러 추가
     - document.getElementById(아이디).onclick = function(){ 실행할 코드 }
   - HTML 객체의 선택
     - document.anchors : <a> 선택
     - document.body
     - document.cookie
     - document.domain :  HTML 문서가 위치한 서버의 도메인 네임(domain name)을 반환함.
     - document.images, ...
   - DOM 요소의 내용 변경
     - innerHTML 
4. Node
   - HTML 문서의 정보는 node tree라고 불리는 계층적 구조에 저장
   - root node -> text node
   - node의 종류
     - document node : HTML 문서 전체를 나타내는 노드
     - element node : attribute node를 갖는 유일한 노드
     - attribute node : 요소 노드에 관한 정보를 가지고 있음.
     - text node
     - comment node
   - 노드 접근 (노드 관계 이용) : parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling
   - 노드 정보 : nodeName ( 해당 요소의 태그 이름을 대문자로 저장), nodeValue, nodeType