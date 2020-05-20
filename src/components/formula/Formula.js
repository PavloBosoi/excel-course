import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'formula';
    toHTML() {
        return '<h1>FORMULA</h1>';
    }
}
