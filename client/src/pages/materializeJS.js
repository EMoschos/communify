document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
    var elems1 = document.querySelectorAll('.modal');
    M.Modal.init(elems1);
    var elems2 = document.querySelectorAll('.tabs');
    M.Tabs.init(elems2);
});