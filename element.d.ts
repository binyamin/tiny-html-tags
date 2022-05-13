import type {htmlTags as TagNames} from 'html-tags'
import type { Attributes } from "./attributes.js"

export type Element<T extends TagNames> = (
    T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement
);

export function element<K extends TagNames> (
    tagName: K,
    attributes?: Attributes<K>,
    children?: string | HTMLElement | HTMLElement[],
): Element<K>;
