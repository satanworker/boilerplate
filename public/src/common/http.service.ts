import {Injectable} from "@angular/core";
import {GlobalService} from "../common/gloval.service";
import * as _ from "underscore";
@Injectable()

export class HttpService{
    constructor(private globalService: GlobalService){

    }
}