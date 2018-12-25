var result = [],flag = 0;
for(var i = 0; i < nums.length; i++){
    for(var j= i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] == target) {
            result.push(i);
            result.push(j);
            flag = 1;
            break;
        }
        if(flag === 1){break};
    }
}
return result;
};