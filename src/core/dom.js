class Dom {
    constructor(selector) {
        this.nativeElement = typeof selector === 'string' ? document.querySelector(selector) : selector;
    }
    html(html) {
        if (html) {
            this.nativeElement.innerHTML = html;
            return this;
        }
        return this.nativeElement.innerHTML.trim();
    }

    clear() {
        this.html('');
        return this;
    }

    appendDom(node) {
        if (node instanceof Dom) {
            node = node.nativeElement;
        }
        this.nativeElement.append(node);
        return this;
    }

    on(eventType, callback) {
        this.nativeElement.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.nativeElement.removeEventListener(eventType, callback);
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el);
};
