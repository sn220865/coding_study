function solution(s) {
    var answer = '';
    var words = s.split(' ');
    var max=Math.max(...words),min=Math.min(...words);
    
    /*
    for(var i=1; i<words.length;i++){
        if(parseInt(words[i],10)>parseInt(max,10)) max=words[i];
        if(parseInt(words[i],10)<parseInt(min,10)) min=words[i];
    }*/
    answer += min+' '+max;
    
    return answer;
}
