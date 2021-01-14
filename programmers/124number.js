//Not complete
function solution(n) {
    var answer = '';
    var tmp, x;
    var sample = ['1','2','4'];
    var q,r;
    tmp = Math.log(2*(n-1)+3)/Math.log(3);
    x = parseInt(tmp);


    for(var i=x;i>0;i--){
        if(x==1){
            q = (n-1)%3;
        }
        else if(i == x){
            q = parseInt((n-1) / 3)%3-1;
            r = n %3;
        }
        else{
            q = r %3-1;
            r = q %3;
        }
        //index = parseInt(base);
        answer += sample[q];
    }
    return answer;
}
