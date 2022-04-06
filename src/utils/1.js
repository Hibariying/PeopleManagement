/* eslint-disable no-const-assign */
var maxProfit = function(prices) {
  let s1 = -prices[0]; let s3 = -prices[0]; let s2 = 0; let s4 = 0
  for (let i = 1; i < prices.length; i++) {
    // eslint-disable-next-line no-const-assign
    s1 = Math.max(s1, -prices[i])// 第一次没有买入，所持现金为0 || 第一次买入，所持现金为-prices[i]
    s2 = Math.max(s2, s1 + prices[i])// 第一次没有卖出，所持现金为0 || 第一次卖出，所持现金为昨天买入的（负数）与今天的相加的现金
    s3 = Math.max(s3, s2 - prices[i])// 第二次同理
    s4 = Math.max(s4, s3 + prices[i])
  }
  console.log(s4)
  return s4
}
maxProfit(3, 3, 5, 0, 0, 3, 1, 4)
