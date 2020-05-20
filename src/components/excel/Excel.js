import {$} from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.currentHref = window.location.href;
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);

            // DEBUG
            // console.log(component);
            // if (component.name) {
            //     window['c' + component.name] = component;
            //     console.log(window);
            // }
            $el.html(component.toHTML());
            $root.appendDom($el);
            return component;
        });
        return $root;
    }

    render() {
        this.$el.appendDom(this.getRoot());
        this.components.forEach(component => component.init());
    }
}
