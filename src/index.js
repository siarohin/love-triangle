/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {

 var count = 0, i = 0, triangles__1, triangles__2, triangles__3;

  	for (; i < preferences.length; i++) {
  		
  	  triangles__1 = preferences[i];
  	  triangles__2 = preferences[triangles__1 - 1];
  	  triangles__3 = preferences[triangles__2 - 1];
  		
  		if (triangles__3 - 1 == i && triangles__2 !== triangles__3) {
  		 count++;
  		}

	}

return Math.floor(count / 3);

}
