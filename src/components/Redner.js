import { LitElement, html, css } from 'lit';


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

/**
 * 
 */
 class Redner extends LitElement {
    static styles = css`
        button {
            margin-left: 10px;
        }
    `;
    static properties = {
        name: {type: String},
        timer: {},
        onTimerStart: {}
    }

    constructor(onTimerStart) {
        super();
        this.timer = new Timer();
        this.timer.addCallback(this, this.requestUpdate);
        this.onTimerStart = onTimerStart;
    }

    connectedCallback() {
        super.connectedCallback();
        this.startTimer();
    }

    startTimer() {
        //this.rednerList?.stopAllTimers();
        this.timer.start();
        this.requestUpdate();
        const detail = { element: this }
        const event = new CustomEvent("timerStarted", {detail: detail});
        this.dispatchEvent(event);
    }
    stopTimer() {
        this.timer.stop();
        this.requestUpdate();
    }

    handleButtonClick(e) {
        if (this.timer.isRunning()) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    render() {
        return html`
            <span>${this.name} ${this.timer.getTimeString()}</span>
            <button @click="${this.handleButtonClick}">${this.timer.isRunning() ? "Stop!" : "Start!"}</button>
        `;
    }  
};

export default Redner;

customElements.define("wem-redner", Redner);
