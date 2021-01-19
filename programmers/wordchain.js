function solution(n, words) {
    var answer = [];
    var tmp = new Map();
    var pos = words.length;

    words.map((w,i)=>tmp.get(w)==null?tmp.set(w,[i]):(pos>i?pos=i:pos=pos));
    for(var i=0; i<words.length; i++){
        if(i==words.length-1){
            if(pos == words.length) return [0,0];
        }
        else if (words[i][words[i].length-1] !=  words[i+1][0]){
            if(pos>(i+1)) pos = i+1;
            break;
        }  
    }
    pos +=1;
    answer.push(pos%n==0?n:pos%n,Math.ceil(pos/n));

    return answer;
}
