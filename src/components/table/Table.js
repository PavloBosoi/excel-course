import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@app/components/table/table.template';

export class Table extends ExcelComponent {
    static className = 'table';
    toHTML() {
        return createTable();
    }
}
