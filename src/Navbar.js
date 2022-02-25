import { LitElement, html, css } from "lit";
import WEMMenu from "./Menu.js";
import { router } from "./Router.js"

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

    _dispatchClick(e) {
        this.mobileMenuActive = false;
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            
            <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
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
                            ${this.items.map((i) => {
                                const url = router.urlForPath(encodeURIComponent(i));
                                return html`
                                <a class="navbar-item is-tab ${router.location.params.subject == i ? "is-active" : ""}" href="${url}" @click="${this._dispatchClick}">${i}</a>
                            `})}
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

export default WEMNavbar;

customElements.define("wem-navbar", WEMNavbar);
