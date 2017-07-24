function permStr(str){
    if(str.length<2)
        return str;
    
    var perms=[];

    for(var i=0;i<str.length;i++){
        var char=str[i];

        if(str.indexOf(char)!=i)
        continue

        var remainingStr = str.slice(0,i)+str.slice(i+1, str.length);

        for(var subPerm of permStr(remainingStr))
        perms.push(char+subPerm)
    }
    return perms
}

console.log(permStr("XYZ"))