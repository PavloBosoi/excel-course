import {ExcelComponent} from '@core/ExcelComponent';
import * as headerHtml from '@app/assets/excel.html';

export class Header extends ExcelComponent {
    static className = 'header';
    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['input']
        });
    }
    toHTML() {
        return `<div class="header">
            <div class="header__input">
                <input type="text" placeholder="Name">
            </div>
            <div class="header__buttons buttons">
                <button class="buttons__item">
                    <span class="material-icons">delete</span>
                </button>
                <button class="buttons__item">
                    <span class="material-icons">clear</span>
                </button>
            </div>
        </div>`;
    }

    onInput(event) {
        console.log('Header: onInput', event);
    }
}
