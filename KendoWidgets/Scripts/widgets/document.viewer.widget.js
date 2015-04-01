var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Widgets;
(function (Widgets) {
    var DocumentViewerViewModel = (function (_super) {
        __extends(DocumentViewerViewModel, _super);
        function DocumentViewerViewModel() {
            _super.call(this);
        }
        return DocumentViewerViewModel;
    })(kendo.data.ObservableObject);
    Widgets.DocumentViewerViewModel = DocumentViewerViewModel;
})(Widgets || (Widgets = {}));
(function ($) {
    function createTemplate() {
        return '<h3>frrr #: name #</h3>';
    }
    var ui = kendo.ui, Widget = ui.Widget;
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
            var that = this;
            var viewModel = new Widgets.DocumentViewerViewModel();
            var view = new kendo.View(createTemplate(), { model: viewModel });
            view.render($(that.element));
            //kendo.bind($(this.element), viewModel, "");
        }
    });
    kendo.ui.plugin(DocumentViewerWidget);
})(jQuery);
//# sourceMappingURL=document.viewer.widget.js.map