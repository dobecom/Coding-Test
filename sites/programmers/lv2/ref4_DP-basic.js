// 피보나치 수열 (동적 계획법)
function fibonacci(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }
  
  console.log(fibonacci(10)); // 55
  
  // 최소 동전 교환 (동적 계획법)
  function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  console.log(coinChange([1, 2, 5], 11)); // 3
  