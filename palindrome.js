
function palidrome(int){
    int = int + "";
    let result = int.split("").reverse().join("");
    let res = parseInt(result);
    if (res==int){
        console.log("this is a palidrome");
    }else{
        console.log("this is not a palidrome");
    }
    //console.log(res)
}

let x = 1211;
let val = palidrome(x);