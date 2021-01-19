function solution(p) {
    var answer = '';
    var balance = 0;
    var u='';
    var v,flag=true;
    
    if(p=='') return '';

    for(var i=0; i<p.length;i++){
        if (p[i]=='('){
            balance += 1;
            u += p[i];
        }
        else if(p[i]==')'){
            balance -= 1;
            u += p[i];
            if(balance <0)
                flag =false;
        }
        
        if (balance == 0){
            v = p.slice(p.indexOf(u)+u.length);
            break;
        }
    }
    
    if(flag){
        answer += u;
        return answer + solution(v);
    }
    else{
        var new_str = '('
        u = u.slice(1,u.length-1);
        u=u.split('(').join('0');
        u=u.split(')').join('(');
        u=u.split('0').join(')');
        u = ')'+u;
        return new_str+solution(v)+u; 
    }
}
