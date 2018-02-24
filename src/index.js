/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i=0;
  var count=0;
  while (i<preferences.length) {
    if (i+1 == preferences[i]) {
      i=i+1;
      }
    else if(i+1==preferences[preferences[preferences[i]-1]-1]){
        count=count+1;
      }
      i=i+1;  
    }
    return count / 3;
  }

  
