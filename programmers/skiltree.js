function solution(skill, skill_trees) {
    var answer = 0;
    var words = skill.split('');
    var flag = true;

    for (var skill_tree of skill_trees){
        var index = [];
        for (var elem of words){
            if(flag)
                index.push(skill_tree.indexOf(elem));
            else{
                break
            }
            if(skill_tree.indexOf(elem) == -1 && elem != words[words.length-1])
                flag = false;
        }
        /*if(index.includes(-1)){
            if(index.indexOf(-1) != index.length -1)
                continue;
            else
                index.splice(index.indexOf(-1) ,1);
        }*/
        if (flag){
            var index_sort = index.slice();
            if (index.toString() == index_sort.sort().toString()){
                console.log(index,flag);
                answer += 1;
            }
        }
    }

    return answer;
}
