export function element(tagName, attributes={}, children=[]) {
    const node = document.createElement(tagName);

    if (Array.isArray(children)) {
        node.append(...children);
    } else {
        node.append(children);
    }

    for(const [key, value] of Object.entries(attributes)) {
        node.setAttribute(key, value);
    }

    return node;
}
