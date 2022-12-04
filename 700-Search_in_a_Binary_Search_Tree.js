/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {

    const map = {}
    let count = 0
  
    for(const jewel of jewels){
      map[jewel] = true
    }
  
    for(const stone of stones){
      if( map[stone] ){
        count++
      }
    }
    return count
  };