import {capitalize} from '@core/utils/common.util';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('$root is not provided for DomListener');
        }
        this.$root = $root;
        this.listeners = listeners;
        console.log(this, this.listeners);
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const methodName = getMethodName(listener);
            if (this[methodName]) {
                // addEventListener
                this.$root.on(listener, this[methodName].bind(this));
            }
        });
    }

    removeDomListeners() {
        this.listeners.forEach(listener => {
            const methodName = getMethodName(listener);
            // removeEventListener
            this.$root.off(listener, this[methodName]);
        });
    }
}

// input => onInput
function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
