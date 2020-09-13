import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@app/components/table/table.template';
import {$} from '@core/utils/dom.util';

export class Table extends ExcelComponent {
    static className = 'table';
    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown']
        });
    }
    toHTML() {
        return createTable();
    }
    onMousedown(event) {
        const resizeType = event.target.dataset.resize;
        if (resizeType) {
            const $resizer = $(event.target);
            const $parent = $resizer.closestDom('[data-type="resizable"]');
            const coords = $parent.getCoords();
            // cells for selected column
            const selectedCells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

            document.onmousemove = moveEvent => {
                let delta;
                let value;
                switch (resizeType) {
                case 'col':
                    delta = moveEvent.pageX - coords.right;
                    value = coords.width + delta;
                    selectedCells.forEach(col => $(col).setWidth(value));
                    break;
                case 'row':
                    delta = moveEvent.pageY - coords.bottom;
                    value = coords.height + delta;
                    $parent.setHeight(value);
                    break;
                }
            };

            document.onmouseup = upEvent => {
                document.onmousemove = null;
            };
        }
    }
}
