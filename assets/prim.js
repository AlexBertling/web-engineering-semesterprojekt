function isPrime(num, prev) {
    for(var i = prev; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}

function* generatorPrim() {
    let i=1n, prev=2n;
    while(true) {
        while(!isPrime(i, prev)) i += 2n;
        prev = i;
        yield i;
        i += 2n;
    }
}