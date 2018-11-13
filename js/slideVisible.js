ko.bindingHandlers['slideVisible'] = {
    init(element, valueAccessor) {
        let value = ko.utils.unwrapObservable(valueAccessor());
        $(element).toggle(value);
    },
    update(element, valueAccessor) {
        let value = ko.utils.unwrapObservable(valueAccessor());
        value ? $(element).slideDown(200) : $(element).slideUp(200);
    }
}