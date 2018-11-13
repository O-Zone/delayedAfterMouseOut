class AppViewModel {
    constructor() {
        this.showMenu = ko.observable(false);
    }
    closeMenu() {
        this.showMenu(false);
    }
    openMenu() {
        this.showMenu(true);
    }
}

AppViewModel.prototype = {
}

$(document).ready(()=>{
    ko.applyBindings(new AppViewModel());
});