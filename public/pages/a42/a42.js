class Timer {
    constructor() {
        this.seconds = 0;
        this.callbacks = [];
    }
    start() {
        this.interval = setInterval(() => {
            this.seconds++;
            this.update();
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    getTimeString() {
        const date = new Date(0);
        date.setSeconds(this.seconds);
        return date.toISOString().substr(11, 8);
    }
    isRunning() {
        return !!this.interval
    }
    update() {
        this.callbacks.forEach(cb => {
            cb.fun.call(cb.context);
        })
    }
    addCallback(context, fun) {
        this.callbacks.push({
            context: context,
            fun: fun
        });
    }
}

class Redner {
    constructor(name, rednerList) {
        this.name = name;
        this.rednerList = rednerList;
        this.timer = new Timer();
        this.timer.addCallback(this, this.render);
        this.domNode = document.createElement("li");
        this.render();
    }
    startTimer() {
        this.rednerList?.stopAllTimers();
        this.timer.start();
        this.render();
    }
    stopTimer() {
        this.timer.stop();
        this.render();
    }
    render() {
        const button = document.createElement("button");
        button.textContent = this.timer.isRunning() ? "Stop!" : "Start!";
        button.addEventListener("click", () => {
            this.timer.isRunning() ? this.stopTimer() : this.startTimer();
        });
        this.domNode.innerHTML = `${this.name} ${this.timer.getTimeString()}`;
        this.domNode.appendChild(button);
    }
}

class RednerList {
    constructor() {
        this.list = [];
    }
    add(redner) {
        this.list.push(redner);
    }
    stopAllTimers() {
        this.list.forEach(r => r.stopTimer());
    }
}

function addItem() {
            
    const text = input.value;
    
    if(text.length > 0) {
        input.value = "";
        
        rednerList.stopAllTimers()
        const redner = new Redner(text, rednerList);
        rednerList.add(redner);

        list.appendChild(redner.domNode);
        redner.startTimer();
    }
    
}

const input = document.querySelector(".itemText");
const button = document.querySelector(".addItem");
const list = document.querySelector(".items");
const rednerList = new RednerList();

button.addEventListener("click", addItem);
input.addEventListener("keyup", e => {
    if(e.key === "Enter") {
        addItem();
    }
})