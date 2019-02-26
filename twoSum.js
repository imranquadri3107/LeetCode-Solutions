// Solution 2

function twoSum(nums, target){

  for(var i=0; i<nums.length; i++){
    for(var j = i+1; j<nums.length; j++){
        if(nums[i]+ nums[j]===target){
          return [i,j];
        }
    }
  } return false;
}
twoSum([2,7,11,15], 22);

// Output: 1,3




// Solution 2
var twoSum = function(nums, target) {
    var ret = [];
    var exist = {};
    for(var i = 0; i < nums.length; i++){
        if(typeof(exist[target - nums[i]]) !== 'undefined'){
            ret.push(exist[target - nums[i]]);
            ret.push(i + 1);
        }
        
        exist[nums[i]] = i + 1;
    }
    
    return ret
};
twoSum( [2, 7, 11, 15], 9)
