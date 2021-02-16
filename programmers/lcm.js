function solution(arr) {
    var answer = 1;
    var divisor = new Set();

    for(var i=0; i<arr.length; i++){
        for(var j=1; j <= Math.floor(Math.sqrt(arr[i])); j++){
            if(arr[i]%j==0){
                divisor.add(j);
                divisor.add(arr[i]/j);
            }
        }
    }
    console.log(divisor.size);
    for(var elem of divisor){
        answer *= elem;
    }
    return answer;
}
