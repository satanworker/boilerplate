import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from "@angular/router";
import {GlobalService} from "../common/gloval.service";
// Routes may be useful in future
// @Routes([
//     { path: '/',                   component: SectorComponent        },
// ])
//

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private globalService:GlobalService
    ) {

    }
    ngOnInit () {

    }
}