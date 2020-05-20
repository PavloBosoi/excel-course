import './scss/index.scss';
import {Excel} from '@app/components/excel/Excel';
import {Header} from '@app/components/header/Header';
import {Toolbar} from '@app/components/toolbar/Toolbar';
import {Formula} from '@app/components/formula/Formula';
import {Table} from '@app/components/table/Table';

const excelApp = new Excel('#app', {
    components: [
        Header,
        Toolbar,
        Formula,
        Table
    ]
});
excelApp.render();
