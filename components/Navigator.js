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
        
        header nav {
            padding-top: 5px;
            padding-bottom: 15px;
        }
        
        header nav a {
            padding: 5px 20px;
            margin: 0 10px;
            background-color: #6a709f;
            color: black;
            text-decoration: none;
            font-weight: bold;
            border-radius: 13px;
            border: 3px solid #ece9e9;
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
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <header>
                <h1>Header</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">News</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                </nav>
            </header>
            <main class="${this.styleMode}">
                <aside class="left">
                    left menu with many items
                </aside>
                <section>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </section>
                <aside class="right">
                    right
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
