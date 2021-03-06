import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import hljs from 'highlight.js';

const minIndent = string => {
	const match = string.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return 0;
	}

	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
};

const stripIndent = string => {
    const indent = minIndent(string);

	if (indent === 0) {
		return string;
	}

	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return string.replace(regex, '').trim();
}


/**
 *
 */
class WEMSection extends LitElement {

    static styles = css`
        iframe {
            width: 100%;
            height: 100%;
            min-height: 50vh;
        }
    `

    static properties = {
        title: {type: String},
        subtitle: {type: String},
        paragraphs: {type: Array},
        element: {type: Object}
    }

    constructor() {
        super();
        this.paragraphs = [];
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css">
            <section class="section">
                <h1 class="title">${this.title}</h1>
                ${this.subtitle ? html`<h2 class="subtitle">
                    ${this.subtitle}&nbsp;
                </h2>`:""}
                
                <div class="content">
                    ${this.paragraphs.map(p => {
                        let paragraph, code;
                        if (p.content) paragraph = unsafeHTML(p.content);
                        if (p.code) code = html`<pre>${unsafeHTML(hljs.highlight(stripIndent(p.code), {language: p.codeType || 'js'}).value)}</pre>`;     
                        return html`
                            ${p.title ? html`<h3>${unsafeHTML(p.title)}</h3>` : ""}
                            <p>${paragraph}</p>
                            ${code}
                    `})}
                    ${this.element}
                    
                </div>
            </section>
        `;
    }
}

export default WEMSection;

customElements.define("wem-section", WEMSection);
