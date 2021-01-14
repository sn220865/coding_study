/*
문제
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
*/
//method 1. basic
function solution(priorities, location) {
    var answer = 0;
    var file_j, print_bool = true;
    var count = location+1;

    while (count != 0){
        file_j = priorities.shift();
        for (var elem of priorities){
            if(file_j < elem){
                priorities.push(file_j);
                print_bool = false;
                if (count == 1)
                    count += priorities.length;
                break;
            }
        }
        if (print_bool)
            answer += 1;
        print_bool = true;
        count -= 1;
    }

    return answer;
}

//method 2. map 함수 사용
function solution(priorities, location) {
    var answer = 0;
    var file_j, print_bool = true;
    var tmp = priorities.map((p,i)=>({p,i}));

    while (true){
        file_j = tmp.shift();
        for (var elem of tmp){
            if(file_j.p < elem.p){
                tmp.push(file_j);
                print_bool = false;
                break;
            }
        }
        if (print_bool){
            answer += 1;
            if (file_j.i == location)
                return answer
        }
        print_bool = true;
    }
}
