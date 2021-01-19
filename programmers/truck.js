function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var done = truck_weights.map((w,index)=>([index,bridge_length]));
    var left = weight;
        
    for (var i=0; i<truck_weights.length; i++){
        left -= truck_weights[i];
        console.log(done,answer);
        if(i == truck_weights.length-1)
            answer += bridge_length;
        else if(left< truck_weights[i+1]){
            left = weight;
            answer += bridge_length;
            done=done.slice(done.length-bridge_length+i-1);
        }
        else{
            answer += 1;
        }
    }
    
    return answer;
}
