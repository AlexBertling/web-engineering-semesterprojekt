import { LitElement, html, css } from 'lit';

import Main from "./Main.js"
import Footer from "./Footer.js"
import Menu from "./Menu.js"
import Navbar from "./Navbar.js"
import Section from "./Section.js"

import Start from "./Start.js"
import { router } from "./Router.js"

import { appConfig } from './appConfig.js';

class WEMApp extends LitElement {
  static styles = css`
      * {
          box-sizing: border-box;
      } 
      .app-container {
          height: calc(100vh - 52px);
          display: flex;
          flex-direction: column;
      }
      wem-main {
          flex-grow: 1;
      }
      div[slot=center],
      #routerOutlet {
          height: 100%;
      }
      iframe {
          width: 100%;
          height: 100%;
          min-height: 50vh;
      }
      @media(min-width: 1024px) {
          iframe {
              min-height: 90vh;
          }
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
      references: {type: Array},
      //dataUrl: {type: String}
  }

  constructor() {
      super();
      this.nav1 = [];//["Home, News, Contact, About"];
      this.nav2 = [];//["Item1", "Item2", "Item3"];
      this.content = "";
      this.references = [];
      this.footerItems = ["Sitemap", "Home", "News", "Contact", "About"];
      this.applyAppConfig();
  }

  firstUpdated(){
    //const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setOutlet(this.shadowRoot?.querySelector('#routerOutlet'));
  }

  applyAppConfig() {
    this.headerText = appConfig.header;
    this.nav1 = Object.keys(appConfig.menu);
    this.nav2 = [];
    this.data = appConfig;
    router.setAppConfig(appConfig);
    }

  _handleMenu1Click(e){
      console.log(e.detail);
      this.nav1Selected = e.detail;
      this.nav2 = this.data.menu[e.detail].map(el => el.title);
      this.nav2Selected = null;
      this.content = "";
      this.references = [];
  }

  _handleMenu2Click(e){
      console.log(e.detail);
      this.nav2Selected = e.detail;
      //this.content = this.data[this.nav1Selected][this.nav2Selected].content;
      //this.references = this.data[this.nav1Selected][this.nav2Selected].references;
  }

  render() {
      console.log(document.baseURI+this.nav1Selected);
      return html`
        <div class="app-container">
          <wem-navbar baseUrl="${document.baseURI}" orientation="horizontal" items="${this.nav1}" @menuClick="${this._handleMenu1Click}"></wem-navbar>
          <wem-main styleMode="${this.styleMode}">
              <wem-menu slot="left" baseUrl="${document.baseURI+this.nav1Selected+"/"}" orientation="vertical" items="${this.nav2}" @menuClick="${this._handleMenu2Click}" active="${this.nav2Selected}"></wem-menu>
              <div slot="center"><div id="routerOutlet"></div></div>
              <ul slot="right">${this.references.map(r => html`<li>${r}</li>`)}</ul>
          </wem-main>
          <wem-footer></wem-footer>
        </div>
      `;
  }  
};

export default WEMApp;

customElements.define("wem-app", WEMApp);
