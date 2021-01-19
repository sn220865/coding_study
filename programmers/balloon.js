function solution(a) {
    var answer = 0;
    var comp = a.map((num,i)=>num<a[i+1]?-1:1);
    console.log(comp);
        
    return answer;
}
