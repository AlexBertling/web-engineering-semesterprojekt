import { LitElement, html, css } from 'lit';
import Redner from './Redner.js';

/**
 * 
 */
class Rednerliste extends LitElement {
    static styles = css`
        h1 + div > * {
            margin-right: 10px;
        }
        .items li {
            line-height: 30px;
        }
    `;
    static properties = {
        list: {}
    }

    constructor() {
        super();
        this.list = [];
    }

    handleAddItem() {
        const input = this.shadowRoot.querySelector(".itemText");
        this.list.push(input.value);
        input.value = "";
        this.requestUpdate();
    }

    handleTimerStart(e) {
        const redner = this.shadowRoot.querySelectorAll("wem-redner");
        Array.from(redner).filter(r => r != e.detail.element).forEach(r => r.stopTimer());
    }

    render() {
        return html`
            <h1>Rednerliste</h1>
            <div>
                <span>Neuer Redner:</span>
                <input class="itemText" type="text" />
                <button class="addItem" @click="${this.handleAddItem}">Hinzufügen</button>
            </div>
            <ul class="items">${this.list.map(item => html`
                <li><wem-redner name="${item}" @timerStarted="${this.handleTimerStart}"></wem-redner></li>
            `)}</ul>
        `;
    }  
};

export default Rednerliste;

customElements.define("wem-rednerliste", Rednerliste);
