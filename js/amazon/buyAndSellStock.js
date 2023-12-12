var maxProfit = function(prices) {
    let profit = Number.MIN_VALUE
    let n = prices.length
    for(let i=0; i<prices.length; i++) {
        let j = i+1
        while(j < n && (prices[j] - prices[i]) > 0) {
            let diff = prices[j] - prices[i]
            profit = Math.max(profit, diff)
            j++
        }
    }
    return profit
};