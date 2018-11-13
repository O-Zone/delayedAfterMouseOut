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

$(document).ready(()=>{
    ko.applyBindings(new AppViewModel());
});