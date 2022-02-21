importScripts('prim.js');

self.addEventListener('message', function(e) {
    const generator = generatorPrim();
    let numbers = [];
    while(true){
        const num = generator.next().value;
        if(numbers.length == 1000) {
            self.postMessage(numbers);
            numbers = [];
        } else {
            numbers.push(num);
        }
    }
});