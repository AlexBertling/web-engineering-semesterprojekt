import { LitElement, html, css } from 'lit';

/**
 * 
 */
class Einkaufsliste extends LitElement {
    static styles = css`
        h1 + div > * {
            margin-right: 10px;
        }
        .items li {
            line-height: 30px;
        }
        .items button {
            margin-left: 10px;
        }
    `;
    static properties = {
        list: {}
    }

    constructor(onAddItem) {
        super();
        this.list = [];
    }

    handleAddItem() {
        const input = this.shadowRoot.querySelector(".itemText");
        this.list.push(input.value);
        input.value = "";
        this.requestUpdate();
    }

    getTargetValue(e) {
        return e.target.closest("li").querySelector("span").innerText;
    }

    handleDeleteItem(e) {
        const value = this.getTargetValue(e);
        this.list = this.list.filter(item => item != value);
        this.requestUpdate();
    }

    handleUpItem(e) {
        const value = this.getTargetValue(e);
        const index = this.list.indexOf(value);
        if (index != 0) {
            this.list[index] = this.list[index-1];
            this.list[index-1] = value;
        }
        this.requestUpdate();
    }

    handleDownItem(e) {
        const value = this.getTargetValue(e);
        const index = this.list.indexOf(value);
        if (index != this.list.length-1) {
            this.list[index] = this.list[index+1];
            this.list[index+1] = value;
        }
        this.requestUpdate();
    }

    render() {
        return html`
            <h1>Einkaufsliste</h1>
            <div>
                <span>Enter a new item:</span>
                <input class="itemText" type="text" />
                <button class="addItem" @click="${this.handleAddItem}">Add item</button>
            </div>
            <ul class="items">${this.list.map(item => html`
                <li>
                    <span>${item}</span>
                    <button @click="${this.handleDeleteItem}">Delete</button>
                    <button @click="${this.handleUpItem}">Up</button>
                    <button @click="${this.handleDownItem}">Down</button>
                </li>
            `)}</ul>
        `;
    }  
};

export default Einkaufsliste;

customElements.define("wem-einkaufsliste", Einkaufsliste);
