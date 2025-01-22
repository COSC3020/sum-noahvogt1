function sum(a) {
    if (a.length == 0) return 0;
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
