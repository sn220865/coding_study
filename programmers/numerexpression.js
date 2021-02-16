function solution(n) {
    var answer = 0;
    var max = Math.ceil(Math.sqrt(n));
    var divisor =[1];
    for (var i=2; i<max+1; i++){
        if(n%i==0) divisor.push(i,n/i);
    }
    console.log(divisor);
    
    return answer;
}
