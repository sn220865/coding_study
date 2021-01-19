function solution(skill, skill_trees) {
    var answer = 0;
    var words = skill.split('');
    //regexpresion
    const regexp = new RegExp(`[^${skill}]`,'g');
    
    return skill_trees.map((x)=>x.replace(regexp,'')).filter(x=>{return skill.indexOf(x)===0||x===""}).length;
    /*
    for (var skill_tree of skill_trees){
        var index = [];
        
        for (var elem of words){
            index.push(skill_tree.indexOf(elem)); 
        }
        
        if(index.length == 1) answer+=1
        else{
            for(var j=0; j<index.length-1;j++){
                if (index[j]==-1 && index[j+1]!=-1) break;
                else if(index[j+1]!= -1 && index[j]>index[j+1]) break;
                else if(j==index.length-2) answer +=1;
            }
        }
    }
    return answer;
    */
}
