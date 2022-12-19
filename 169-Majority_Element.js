var majorityElement = function(nums) {
    let number = nums.length / 2

    let charMap = {}

    for(let num of nums){
        if(charMap[num]){
            charMap[num]++
        } else {
            charMap[num] = 1
        }
    }
    console.log(charMap)
    for(let num in charMap){
        if(charMap[num] > number){
            return num
        }
    }
};