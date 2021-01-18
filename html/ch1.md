1. html : 웹 페이지를 만드는 언어 (hyper text markup language)
2. w3c = world wide web consortium
   - www을 위한 표준을 제정하고 관리하는 중립적인 기관
   - 웹 표준 : html, css, DOM, SVG, XHTML, XML
3. "<!DOCTYPE html>" : 현재 문서가 HTML5문서임을 명시
4. "<head>" : metadata를 정의
   - title, style, meta, link, script, base
5. "<title>" : 웹 브라우저의 toolbar에 표시
   - 웹 브라우저의 즐겨찾기에 추가할때 즐겨찾기의 제목이 된다.
   - 검색 엔진의 결과 페이지에 제목으로 표시
6. <tag attribute="value">content</tag>
7. "<p>" : 단락
   - 줄 나누기 : "<br>(empty tag)"
   - "<p>" 대신 "<pre>"를 사용하면 작성한 text 형태 그대로 출력한다.
8. 수평 가로 구분선 : "<hr>"
9. 글씨 굵게 -> "<b>"(화면에 굵게만 표시), "<strong>" (굵게 표시 + 내용이 중요함을 표시)
10. 이태릭체 : "<i>", "<em>"(내용이 중요함을 표시)
11. 하이라이팅 효과 : "<mark>"
12. 삭제 효과 : "<del>"
13. 밑줄 : "<ins>"
14. 위첨자 : "<sup>" / 아래첨자 : "<sub>"
15. " " : "<q>"
16. "<blockquote>" : 인용 부분을 별도의 단락으로 구분
17. 축약형을 표현하기 위해서는 <abbr>태그(abbreviation)를 사용합니다. "<abbr>"태그 위에 마우스를 위치시키면 title 속성에 명시한 용어의 원형이 나타남.
18. "<address>" : 주소 표현
19. <!-- --> : comment
20. entity (reserved characters) : &엔티티이름; / &#엔티티숫자;
21. character set 
    - 사용된 문자셋에 대한 정보를 <head>태그 내의 <meta>태그에 명시합니다.
    - ASCII : 가장 처음 만들어진 문자셋으로, 인터넷에서 사용할 수 있는 127개의 영문자와 숫자로 이루어져 있습니다.
    - ANSI : 윈도우즈에서 만든 문자셋으로, 총 256개의 문자 코드를 지원합니다.
    - ISO-8859-1 : 256개의 문자 코드를 지원하는 HTML4의 기본 문자셋입니다.
    - UTF-8 : 세상에 있는 거의 모든 문자를 표현할 수 있는 유니코드 문자를 지원하는 HTML5의 기본 문자셋입니다.