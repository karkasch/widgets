module Widgets {
    export class DocumentViewerViewModel extends kendo.data.ObservableObject {
        name: string;

        constructor() {
            super();
            
        }
    }
}

(function ($) {
    function createTemplate() {
        var tmpl = kendo.template('<h3>frrr #: name #</h3>');
        tmpl.h
    }

    var ui = kendo.ui,
        Widget = ui.Widget;

    var DocumentViewerWidget = Widget.extend({
        init: function (element, options) {
            var that = this;
            Widget.fn.init.call(this, element, options);
            that.create();
        },
        options: {
            name: 'DocumentViewerWidget'
        },
        create: function () {
            var that: any = this;

            var viewModel = new Widgets.DocumentViewerViewModel();
            var view: kendo.View = new kendo.View(createTemplate(), { model: viewModel });
            view.render($(that.element));
            //kendo.bind($(this.element), viewModel, "");
        }
    });

    kendo.ui.plugin(DocumentViewerWidget);
})(jQuery);

