import {DanceStyle} from "../../models/dancestyle.model";

export interface DanceStyleState{
    list: DanceStyle[];
    pending:boolean;
    error:number;
}