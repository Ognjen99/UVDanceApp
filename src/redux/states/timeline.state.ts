import { Timeline } from "../../models/timeline.model";

export interface TimelineStyleState{
    list: Timeline[];
    pending:boolean;
    error:number;
}