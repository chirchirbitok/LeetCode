 function addTwoNumbers(l1, l2) {
    //console.log(l1,l2);
    let a = {};
    let arr1 = l1.reverse();
    //console.log(arr1);
    for(let i=0;i<arr1.length;i++){
        a = arr1[i];
        console.log(a);
    }
};

let l1 = [2,4,3];
let l2 = [5,6,4];

console.log(addTwoNumbers(l1,l2));