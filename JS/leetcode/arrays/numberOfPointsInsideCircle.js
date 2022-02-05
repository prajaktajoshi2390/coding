/*
You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

Return an array answer, where answer[j] is the answer to the jth query.
*/
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
 var countPoints = function(points, queries) {
  let res = [];
  for (let [x,y,r] of queries) {
      let cnt = 0;
      for (let [a,b] of points) {
          // You should check whether the distance from the center of the circle to the point is smaller than the radius 
          // if (x-center_x)**2 + (y-center_y)**2 <= radius**2:
          cnt += (x- a) * (x- a) + (y-b) * (y-b) <= r*r ? 1 : 0;
      }
      res.push(cnt)
  }
  return res;
}

console.log(countPoints([[1,3],[3,3],[5,3],[2,2]],[[2,3,1],[4,3,1],[1,1,2]]));