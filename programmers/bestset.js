function solution(n, s) {
    var answer = [];
    var ones = '1'.repeat(s);
    var max =Math.floor(s/n);
    var important = 0,v=0;
    
    if ((s-n)<0) return [-1];
    
    for(var j=1;j<=s-max;j++){
        important = j*(s-j);
        if(important > v) {
            answer= [j,s-j];
            v=important;
        }
    }
    
    return answer;
}
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"bestset.js" [New File]
