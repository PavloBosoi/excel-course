import {CODES, EMPTY_STRING} from '@core/constants';

function createRow(content, number = EMPTY_STRING) {
    return `<div class="table__row">
                <div class="table__info">${number}</div>
                <div class="table__data">${content}</div>
            </div>`;
}

function toCol(char) {
    return `<div class="table__cell title">${char}</div>`;
}

function toChar(el, index) {
    return String.fromCharCode(CODES.A + index);
}

function toCell() {
    return `<div class="table__cell" contenteditable></div>`;
}

export function createTable(rowsCount = 15) {
    const columnCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(columnCount).fill(EMPTY_STRING).map(toChar).map(toCol).join(EMPTY_STRING);

    // add first row with chars
    rows.push(createRow(cols));
    // add all rest rows
    for (let i = 1; i <= rowsCount; i++) {
        const cells = new Array(columnCount).fill(EMPTY_STRING).map(toCell).join(EMPTY_STRING);
        rows.push(createRow(cells, i));
    }
    return rows.join(EMPTY_STRING);
}
