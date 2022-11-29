import { Timeline } from "../../models/timeline.model";

export const GET_TIMELINE = 'GET_TIMELINE';
export const GET_TIMELINE_SUCCESS = 'GET_TIMELINE_SUCCESS';
export const GET_TIMELINE_FAILURE = 'GET_TIMELINE_FAILURE';

export interface GetTIMELINEAction {
    type: typeof GET_TIMELINE,
    payload: number
}

export interface GetTIMELINESuccessAction {
    type: typeof GET_TIMELINE_SUCCESS,
    payload: Timeline[];
}

export interface GetTIMELINEFailureAction {
    type: typeof GET_TIMELINE_FAILURE,
    payload: number
}

export type TimelineActionTypes =
    GetTIMELINEAction |
    GetTIMELINESuccessAction |
    GetTIMELINEFailureAction;
    