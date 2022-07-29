var convert = function(s, numRows) {
    if(s==null || numRows <=0){
        return "";
    }
    if(numRows==1){
        return numRows;
    }

    let result = "";

    const step = 2*numRows-2;

    for(let i=0;i<numRows;i++){
        for(let j=i;j<s.length;j+=step){
            result +=  s[j];
            if (i != 0 && i != numRows - 1 && (j + step - 2 * i) < s.length) {
                result += s[j + step - 2 * i];
            }
        }
        
    }
    return result;
};


let s= convert("PAYPALISHIRING",3);
console.log (s);