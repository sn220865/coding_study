function solution(progresses, speeds) {
    var answer = [];
    var deadline = [];
    var max, count=1;
    
    for (var i=0; i<progresses.length; i++){
        var end = Math.ceil((100 - progresses[i])/speeds[i]);
        deadline.push(end);
    }
    
    max = deadline[0];
    for (var i=1; i<deadline.length; i++){
        if (deadline[i] <= max){
            count += 1;
        }
        else{
            max = deadline[i];
            answer.push(count);
            count = 1;
        }
        
        if (i==(deadline.length-1)){
                answer.push(count);
            }
    }
    
    return answer;
}
