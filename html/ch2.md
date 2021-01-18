1. style attribute : css 스타일을 html에 직접 설정
   - 단 하나의 html에만 적용가능
   - <tag style="속성이름:속성값">
2. background에 다른 이미지를 삽입 : <태그이름 background="이미지주소">
3. image : jpg, gif, png
   - "<img>" (empty tag)
   - src로 이미지 가져오고, alt tag는 이미지가 없을때 대체 텍스트로 보여진다.
   - img map : 이미지의 일부를 클릭해서 버튼처럼 사용
4. block  type 요소 : p, div, h, ul, ol, form
5. inline type 요소 : span (text의 특정 부분에 스타일 적용), a, img
6. iframe (= inline frame)
7. frameset : 하나의 브라우저 창에 둘 이상의 페이지를 표시 할 수 있다.
8. form : 사용자로부터 입력을 받거나 사용자가 입력한 데이터를 서버로 보낼때 사용
   - "<form action="처리할페이지주소" method="get|post"></form>"
   - action : 입력받은 데이터를 처리할 서버 상의 스크립트 파일의 주소
   - form-handler : 전달받은 데이터를 처리하는 script 파일
   - method : 데이터를 서버에 전달할 방식 (get / post)
     - get : 주소에 data를 추가하여 전달 / 데이터가 입력 창에 그대로 나타남 / 전송할 수 있는 데이터의 크기가 제한적 / 크기가 작고 중요도가 낮은 정보를 보낼때 주로 사용
     - post : data를 별도로 첨부하여 전달 / 데이터가 외부에 드러나지 않음 / 데이터 크기 제한 x / 보안성 및 활용성이 좋음
   - input type : 텍스트 입력(text), 비밀번호 입력(password), 라디오 버튼(radio), 체크박스(checkbox),  파일 선택(file), 선택 입력(select), 문장 입력(textarea), 버튼 입력(button), 전송 버튼(submit), 필드셋(fieldset)