import { LitElement, html, css } from "lit";

/**
 *
 */
class WEMHeader extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        header {
            position: sticky;
            top: 0px;
            width: 100%;
            background-color: #c04f4f;
        }
        
        header h1 {
            text-align: center;
            color: white;
            margin: 0;
            padding: 5px;
        }
    `;
    static properties = {
        text: {type: String}
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <header>
                <h1>${this.text}</h1>
                <slot></slot>
            </header>
        `;
    }
}

export default WEMHeader;

customElements.define("wem-navigator-header", WEMHeader);
