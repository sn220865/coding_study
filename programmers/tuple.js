function solution(s) {
    var answer = [];
    s=s.replace('{{','');
    s=s.replace('}}','');
    s= s.split('},{');
    s.sort(function(a,b){return a.length-b.length;});
    s.map(w=>w.split(',').map(e=>answer.push(parseInt(e))));
    answer = Array.from(new Set(answer));
    
    return answer;
}
