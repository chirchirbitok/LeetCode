function sumTwo(nums, target) {
    //return nums, target;
    for(let i=0;i<(nums.length)-1; i++){
        for(let j=1; j<(nums.length)-1; j++){
            let result = nums[i]+nums[j];
            //console.log(result) 
            if(result==target){
                console.log(nums[i] +' '+ nums[j]);
            }
        }
    }
};

let nums = [2,7,11,15];
let target = 18;

let twoadd = sumTwo(nums, target);
console.log(twoadd);