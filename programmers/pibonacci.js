function solution(n) {
    var answer = 1;
    var pre = 0;
    var tmp;
    
    n-=1;
    while (n!=0){
        tmp = answer;
        answer += pre;
        pre = tmp;
        n-=1;
    }
    return answer%1234567;
}
