import type {htmlTags as TagNames} from 'html-tags'
import type {htmlTagsVoid as TagNamesVoid} from "html-tags/void.js";
import type { Attributes } from "./attributes"

import {element, Element} from "./element";

export { element };


export const html: {
    [x in TagNames]: x extends TagNamesVoid
        ? (attributes?: Attributes<x>) => Element<x>
        : (
            children?: string | HTMLElement | HTMLElement[],
            attributes?: Attributes<x>
        ) => Element<x>
};
