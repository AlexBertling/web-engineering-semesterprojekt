import { LitElement, html, css } from "lit";
import WEMMenu from "./Menu.js";

/**
 *
 */
class WEMNavbar extends WEMMenu {

    static properties = {
        ...super.properties,
        mobileMenuActive: {type: Boolean}
    }

    _toggle(e) {
        this.mobileMenuActive = !this.mobileMenuActive;
        console.log("toggle")
    }

    render() {
        return html`
            <!--<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src="https://git.inf.h-brs.de/uploads/-/system/appearance/logo/1/hbrs.svg" width="112" height="28">
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="${this._toggle}">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu ${this.mobileMenuActive ? 'is-active' : ''}">
                    <div class="navbar-start">
                        ${this.items.map((i) => html`
                            <a class="navbar-item" href="${this.baseUrl+i}" @click="${this._dispatchClick}">${i}</a>
                        `)}
                    </div>
                </div>
            </nav>

        `;
    }
}

export default WEMNavbar;

customElements.define("wem-navbar", WEMNavbar);
