$(document).ready(() => {
    var model = kendo.data.ObservableObject.extend({
        name: 'dedwew'
    });

    kendo.bind('#binders', model, '');
}); 