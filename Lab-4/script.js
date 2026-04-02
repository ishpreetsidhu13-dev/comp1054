document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');

    if (table) {
        new Tablesort(table);
    }
});