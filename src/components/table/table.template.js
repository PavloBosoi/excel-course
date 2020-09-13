import {CODES, EMPTY_STRING} from '@core/constants/common.constants';

function createRow(content, number = EMPTY_STRING) {
    const resize = number ? `<div class="table__cell_resize" data-resize="row"></div>` : EMPTY_STRING;
    return `<div class="table__row" data-type="resizable">
                <div class="table__info" data-row="${number}">${number}${resize}</div>
                <div class="table__data">${content}</div>
            </div>`;
}

function toCol(char) {
    return `<div class="table__cell title" data-type="resizable" data-col="${char}">${char}<div class="table__cell_resize" data-resize="col"></div></div>`;
}

function toChar(el, index) {
    return String.fromCharCode(CODES.A + index);
}

function toCell(el, index) {
    return `<div class="table__cell" contenteditable data-col="${el}" data-row="${index}"></div>`;
}

export function createTable(rowsCount = 10) {
    const columnCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(columnCount).fill(EMPTY_STRING).map(toChar).map(toCol).join(EMPTY_STRING);

    // add first row with chars
    rows.push(createRow(cols));
    // add all rest rows
    for (let i = 1; i <= rowsCount; i++) {
        const cells = new Array(columnCount).fill(EMPTY_STRING).map(toChar).map(el => toCell(el, i)).join(EMPTY_STRING);
        rows.push(createRow(cells, i));
    }
    return rows.join(EMPTY_STRING);
}
