//Given a roman numeral (string), convert it to an integer
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//return integer


// 2 => II (1 + 1)
// 12 => XII (10 +1 + 1)
// 27 => XXVII (10 + 10 + 5 + 1 + 1)
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000
// IV = 4; IX = 9; XL = 40; XC = 90; CD = 400; CM = 900

// 

var romanToInt = function(s) {
    let map = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
    
    let result = 0;
    
    s.split('').forEach((num, i) => {
        if(map[num] < map[s[i + 1]]){
            result -= map[num]
        } else {
            result += map[num]
        }
    })
    
    return result
};

console.log(romanToInt("III"), '3')
console.log(romanToInt("LVIII"), '58')
console.log(romanToInt("MCMXCIV"), '1994')