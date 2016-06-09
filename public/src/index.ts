import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "@angular/router";
import {AppComponent} from "./app.component/app.component";
import {GlobalService} from "./common/gloval.service";
import {HTTP_PROVIDERS} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
//common styles
require('assets/main.scss');
require('node_modules/primeui/themes/omega/theme.css');
require('assets/font-awesome/css/font-awesome.min.css');
require('node_modules/primeui/primeui-ng-all.min.css');

bootstrap( <any> AppComponent, [
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    GlobalService
]);
