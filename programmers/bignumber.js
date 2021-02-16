function deleteSmall(str,k){
    var answer =str.split('');
    var pos=0;
    while(k!=0){
        if (pos == answer.length-1){
            answer.splice(pos,1);
            k-=1;
            pos -= 1;
            
        }
        else if (answer[pos]<answer[pos+1]){
            answer.splice(pos,1);
            k-=1;
            pos -= 1;
        }
        else{
            pos += 1;
        }
    }
    return answer.join('');
}

function solution(number, k) {
    var char = number.split('').sort();
    var max_pos = number.indexOf(char[number.length-1]);
    var pre = number.substr(0,max_pos);
    var post = number.substr(max_pos);
    
    if(k>pre.length) {
        k -= pre.length;
        return deleteSmall(post,k);
    }
    else if(k==pre.length) return post;
    else return solution(pre,k)+post;
}
