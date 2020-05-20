import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static className = 'toolbar';
    toHTML() {
        return '<h1>TOOLBAR</h1>';
    }
}
