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
        return '<h3>frrr</h3>';
    }

    var ui = kendo.ui,
        Widget = ui.Widget;

    var DocumentViewerWidget = Widget.extend({
        init: function () {
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

