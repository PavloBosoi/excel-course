class DomUtil {
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
        if (node instanceof DomUtil) {
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

    closestDom(selector) {
        return $(this.nativeElement.closest(selector));
    }

    getCoords() {
        return this.nativeElement.getBoundingClientRect();
    }

    setWidth(count) {
        return this.nativeElement.style.width = count + 'px';
    }

    setHeight(count) {
        return this.nativeElement.style.height = count + 'px';
    }

    findAll(selector) {
        return this.nativeElement.querySelectorAll(selector);
    }

    get data() {
        return this.nativeElement.dataset;
    }
}

export function $(selector) {
    return new DomUtil(selector);
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el);
};
