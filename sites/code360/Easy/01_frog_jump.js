// https://www.naukri.com/code360/problems/frog-jump_3621012

function minEnergyDP(n, heights) {
  // init DP arr
  let dp = new Array(n).fill(0);

  // energy 0 in 1st step
  dp[0] = 0;

  // energy in 2nd step
  if (n > 1) {
    dp[1] = Math.abs(heights[1] - heights[0]);
  }

  for (let i = 2; i < n; i++) {
    let jumpOne = dp[i - 1] + Math.abs(heights[i] - heights[i - 1]);
    let jumpTwo = dp[i - 2] + Math.abs(heights[i] - heights[i - 2]);
    dp[i] = Math.min(jumpOne, jumpTwo);
  }

  // return energy in last step
  return dp[n - 1];
}

// Time limit exceeded
function jump(n, heights, i) {
  // approached the last step
  if (i === n - 1) return 0;

  // approached the last 2 step
  if (i === n - 2) return Math.abs(heights[n - 1] - heights[n - 2]);

  let oneStep = Math.abs(heights[i + 1] - heights[i]) + jump(n, heights, i + 1);
  let twoStep = Math.abs(heights[i + 2] - heights[i]) + jump(n, heights, i + 2);

  return Math.min(oneStep, twoStep);
}

function frogJump(n, heights) {
//   const result = jump(n, heights, 0);
  const result = minEnergyDP(n, heights);
  console.log(result);
  return result;
}

frogJump(4, [10, 20, 30, 10]);

// Sample Input 1:
// 4
// 10 20 30 10
// Sample Output 1:
// 20
