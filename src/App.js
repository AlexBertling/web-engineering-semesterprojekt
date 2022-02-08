import { LitElement, html, css } from 'lit';

import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import Menu from "./Menu.js"

import Start from "./Start.js"
import Navigator from "./Navigator.js"
import { router } from "./Router.js"

class WEMApp extends LitElement {
  static styles = css`
      * {
          box-sizing: border-box;
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
      dataUrl: {type: String}
  }

  constructor() {
      super();
      this.nav1 = [];//["Home, News, Contact, About"];
      this.nav2 = [];//["Item1", "Item2", "Item3"];
      this.content = "";
      this.references = [];
      this.footerItems = ["Sitemap", "Home", "News", "Contact", "About"];
  }

  firstUpdated(){
    //const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setOutlet(this.shadowRoot?.querySelector('#routerOutlet'));
  }

  attributeChangedCallback(name, oldVal, newVal) {
      super.attributeChangedCallback(name, oldVal, newVal);
      if(name == "dataurl") {
          fetch(this.dataUrl)
              .then((data) => data.json())
              .then((json) => {
                  this.headerText = json.header;
                  this.nav1 = Object.keys(json.menu);
                  this.nav2 = [];
                  this.data = json;
          });
      }
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
      return html`
          <wem-header text="${this.headerText}">
              <wem-menu orientation="horizontal" items="${this.nav1}" @menuClick="${this._handleMenu1Click}"></wem-menu>
          </wem-header>
          <wem-main styleMode="${this.styleMode}">
              <wem-menu slot="left" baseUrl="${this.nav1Selected}" orientation="vertical" items="${this.nav2}" @menuClick="${this._handleMenu2Click}"></wem-menu>
              <div slot="center"><div id="routerOutlet"></div></div>
              <ul slot="right">${this.references.map(r => html`<li>${r}</li>`)}</ul>
          </wem-main>
          <wem-footer items="${this.footerItems}"></wem-footer>
      `;
  }  
};

export default WEMApp;

customElements.define("wem-app", WEMApp);
