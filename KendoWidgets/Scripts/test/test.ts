$(document).ready(() => {
    var model = kendo.observable({
        name: 'dedwew'
    });

    kendo.bind($('#binders'), model, "");
}); 