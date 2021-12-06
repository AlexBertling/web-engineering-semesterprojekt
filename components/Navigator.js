import { LitElement, html, css } from 'lit';
import PropTypes from "prop-types";

/**
 * 
 */
 class WEMNavigator extends LitElement {
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
        
        aside {
            background-color: #c28281;
            color: white;
            font-size: 24px;
            text-align: center;
        }
        
        section {
            background-color: #6a9ebd;
            color: white;
            text-align: center;
        }
        
        footer {
            position: sticky;
            background-color: black;
            bottom: 0;
            width: 100%;
            padding-bottom: 10px;
            color: white;
            text-align: center;
            font-size: 24px;
        }
        
        footer a {
            color: white;
            font-size: 14px;
            margin: 0 5px;
        }
        
        /* FLEX */
        main.flex {
            display: flex;
        }
        main.flex aside {
            min-width: 20%;
        }
        
        /* GRID */
        main.grid {
            display: grid;
            grid-template: 1fr / 1fr 3fr 1fr;
        }
        main.grid .left {
            grid-column-start: 1;
        }
        main.grid section {
            grid-column-start: 2;
        }
        main.grid .right {
            grid-column-start: 3;
        }
    `;
    static properties = {
        styleMode: {type: String},
        data: {},
        nav1: {type: Array},
        nav2: {type: Array},
        nav1Selected: {type: String},
        nav2Selected: {type: String},
        content: {type: String},
        references: {type: Array}
    }

    constructor() {
        super();
        this.nav1 = [];//["Home, News, Contact, About"];
        this.nav2 = [];//["Item1", "Item2", "Item3"];
        this.content = "";
        this.references = [];
        fetch("/navigator.json")
            .then((data) => data.json())
            .then((json) => {
                this.nav1 = Object.keys(json);
                this.data = json;
            });
        
    }

    _handleMenu1Click(e){
        console.log(e.detail);
        this.nav1Selected = e.detail;
        this.nav2 = Object.keys(this.data[e.detail]);
    }

    _handleMenu2Click(e){
        console.log(e.detail);
        this.nav2Selected = e.detail;
        this.content = this.data[this.nav1Selected][this.nav2Selected].content;
        this.references = this.data[this.nav1Selected][this.nav2Selected].references;
    }

    render() {
        return html`
            <header>
                <h1>Header</h1>
                <wem-menu orientation="horizontal" items="${this.nav1}" @menuClick="${this._handleMenu1Click}"></wem-menu>
            </header>
            <main class="${this.styleMode}">
                <aside class="left">
                    <wem-menu orientation="vertical" items="${this.nav2}" @menuClick="${this._handleMenu2Click}"></wem-menu>
                </aside>
                <section>
                    ${this.content}
                </section>
                <aside class="right">
                    <ul>
                        ${this.references.map(r => html`<li>${r}</li>`)}
                    </ul>
                </aside>
            </main>
            <footer>
                Footer: 
                <a href="#">Sitemap</a>
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </footer>
        `;
    }  
};

export default WEMNavigator;

customElements.define("wem-navigator", WEMNavigator);
