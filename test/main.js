import {html} from "../out/index.js";

const root = document.getElementById('root');
root.append(html.h2('Level-2 Heading'));
root.append(html.ul([
    html.li("It's"),
    html.li("a"),
    html.li("thing")
], {
    role: "list"
}))