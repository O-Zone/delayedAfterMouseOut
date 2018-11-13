ko.bindingHandlers['delayedAfterMouseOut'] = {
    init(element, valueAccessor, customBindings, vm) {
        let cb = ko.utils.unwrapObservable(valueAccessor());
        let delay = 2000;
        let timer = null;
        if (typeof cb === 'object'){
            delay = cb.delay || 2000;
            cb = cb.cb || function(){};
        }
        if (typeof cb === 'function') {
            $(element).on('mouseleave', () => {
                timer = setTimeout(()=>{
                    cb.call(vm);
                }, delay);
            });
            $(element).on('mouseenter', () => {
                if (timer != null)
                clearTimeout(timer);
            });
        } else {
            if (!!console && !!console.warn)
                console.warn('delayedAfterMouseOut need to be called with a callback. It was called with: ', ko.utils.unwrapObservable(valueAccessor()));
        }
    }
}