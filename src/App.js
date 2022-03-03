import { LitElement, html, css } from "lit";

import Main from "./Main.js";
import Footer from "./Footer.js";
import Menu from "./Menu.js";
import Navbar from "./Navbar.js";
import Section from "./Section.js";

import Start from "./Start.js";
import NotFound from "./NotFound.js";
import { router } from "./Router.js";

import { appConfig } from "./appConfig.js";

class WEMApp extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }
    .app-container {
      min-height: calc(100vh - 52px);
      display: flex;
      flex-direction: column;
    }
    wem-main {
      flex-grow: 1;
    }
    div[slot="center"],
    #routerOutlet {
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
      min-height: 50vh;
    }
  `;
  static properties = {
    styleMode: { type: String },
    data: {},
    nav1: { type: Array },
    nav2: { type: Array },
    nav1Selected: { type: String },
    nav2Selected: { type: String },
    content: { type: String },
    references: { type: Array },
  };

  constructor() {
    super();
    this.nav1 = []; //["Home, News, Contact, About"];
    this.nav2 = []; //["Item1", "Item2", "Item3"];
    this.content = "";
    this.references = [];
    this.footerItems = ["Sitemap", "Home", "News", "Contact", "About"];
    this.applyAppConfig();
    window.addEventListener("vaadin-router-location-changed", (event) => {
      // nicht schön, aber Rerender sonst nicht möglich
      this.nav1Selected = event.detail.location.params.subject;
      if (this.nav1Selected) {
        this.nav2 = this.data.menu[this.nav1Selected].map((el) => el.title);
      } else {
        this.nav2Selected = null;
        this.nav2 = [];
      }
      this.nav2Selected = event.detail.location.params[1];
      this.requestUpdate();
    });
  }

  firstUpdated() {
    router.setOutlet(this.shadowRoot?.querySelector("#routerOutlet"));
  }

  applyAppConfig() {
    this.headerText = appConfig.header;
    this.nav1 = Object.keys(appConfig.menu);
    this.nav2 = [];
    this.data = appConfig;
    router.setAppConfig(appConfig);
  }

  render() {
    console.log(document.baseURI + this.nav1Selected);
    return html`
      <div class="app-container">
        <wem-navbar
          baseUrl="${document.baseURI}"
          orientation="horizontal"
          items="${this.nav1}"
          @menuClick="${this._handleMenu1Click}"
        ></wem-navbar>
        <wem-main
          styleMode="${this.styleMode}"
          hideLeft="${this.nav1Selected ? false : true}"
        >
          <wem-menu
            slot="left"
            baseUrl="${"/" + this.nav1Selected}"
            orientation="vertical"
            items="${this.nav2}"
            @menuClick="${this._handleMenu2Click}"
          ></wem-menu>
          <div slot="center"><div id="routerOutlet"></div></div>
          <ul slot="right">
            ${this.references.map((r) => html`<li>${r}</li>`)}
          </ul>
        </wem-main>
        <wem-footer></wem-footer>
      </div>
    `;
  }
}

export default WEMApp;

customElements.define("wem-app", WEMApp);
