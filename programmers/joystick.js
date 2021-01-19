function solution(name) {
    var answer = 0;
    var alpha = 'ABCDEFGHIJKLM'
    var beta = 'NOPQRSTUVWXYZ';
    var double_name;
    
    if (name.includes('A')){
        double_name = name.repeat(2);
        var index = double_name.indexOf('A');
        var lastindex = double_name.indexOf('A',index+name.length);
        name = double_name.slice(index+1,lastindex);
        
        while(name[0] == 'A' || name[name.length-1] == 'A'){
            if (name[0] == 'A') name = name.slice(1);
            if (name[name.length-1] == 'A') name = name.slice(0,-1);
        }
    }
    
    for(var i=0; i<name.length; i++){
        if (alpha.includes(name[i])){
            answer += alpha.indexOf(name[i]);
        }
        else{
            answer += 13 - beta.indexOf(name[i]);
        }
        if(i != name.length-1) answer += 1;
    }
    return answer;
}
