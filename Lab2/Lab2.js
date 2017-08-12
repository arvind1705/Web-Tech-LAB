var series = [],
    i = 0
var fibonacci = function(signature = [1, 1], n = prompt('Please enter the no. of fibonacci numbers you want to see')) {
    series.push(signature[0], signature[1])
    for (; i <= n; i++) {
        series.push(series[i] + series[i + 1])
    }
    return series.slice(0, n)
        .join("<br>")
}


document.write(fibonacci())