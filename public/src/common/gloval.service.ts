import {Injectable} from "@angular/core";
export interface Filter{
    type: string;
    dimension: string;
    value: string;
}

export interface FilterInfo{
    name: string;
}

@Injectable()
export class GlobalService {

}