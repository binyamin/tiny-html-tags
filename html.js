import htmlTags from "html-tags/html-tags.json";
import htmlTagsVoid from "html-tags/html-tags-void.json";
import {element} from "./element.js"

const html = {};

for(const t of htmlTags) {
    if (htmlTagsVoid.includes(t)) {
        html[t] = function(attributes={}) {
            return element(t, attributes, []);
        }
    } else {
        html[t] = function(children=[], attributes={}) {
            return element(t, attributes, children);
        }
    }
}

export {element};
export {html};