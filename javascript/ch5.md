<h2>5. 배열</h2>

1. 배열 요소 내에 타입이 정해져 있지 x

2. 요소 간에 타입이 다를 수 있음

3. index가 연속적이지 않아도 됨

4. 배열 : Array 객체

   ```javascript
   // 배열 생성
   var arr = [1,2,3];
   var arr2 = Array(1,2,3);
   var arr3 = new Array(1,2,3);
   
   document.write(arr[2]+"<br>"); //3
   arr[3] = "hi"
   document.write(arr+"<br>"); //[1,2,3,"hi"]
   document.write(arr.length+"<br>"); //4
   delete arr[1]
   document.write(arr+"<br>"); //[1,,3,"hi"]
   document.write(arr.length+"<br>"); //4
   
   // 배열 요소 추가
   arr2.push("string");
   arr2[arr2.length] = "sea";
   arr2[6] = "foo" // 빈 공간은 hole -> undefined (희소배열)
   ```

- associative array (연관 배열) : 인덱스를 숫자 대신 key를 사용한 배열

  1. 기존의 array property에 대해서는 정확하지 않은 값을 return
  2. ECMAScript6 부터는 Map을 따로 제공

- 문자열을 배열처럼 읽기 가능 (but, 읽기 전용이므로 쓰기는 불가능)

- array인지 확인하기

  - Array.isArray() 메소드

  ```javascript
  document.write(isArray(arr));
  ```

  - instanceof 연산자

  ```javascript
  document.write(arr instanceof Array);
  ```

  - constructor 프로퍼티

```javascript
document.write(arr.constructor.toString().indexOf("Array") > -1); //function Array() {[native code]}
```

