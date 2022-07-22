function longSubCount(string){
    let sStr = string.length;
    let count = 0;
    

    for(var i=0; i<sStr; i++){
        var numberOfCharacters = new Array(256);
        //console.log(i);
        for(var j=i; j<sStr; j++){
            //console.log(i)
            let s =numberOfCharacters[string.charCodeAt(j)];
            console.log(s);
            if(numberOfCharacters[string.charCodeAt(j)] = true){
                break;
            }else{
                count = Math.max(count, j-i+1);
                numberOfCharacters[string.charCodeAt(j)] = true;
                
            }
        }
    }
    return count;
}

var str = "geeksforgeeks";

let output = longSubCount(str);
console.log(output)
