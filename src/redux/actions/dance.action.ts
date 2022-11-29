import { DanceStyle } from "../../models/dancestyle.model";

export const GET_STYLES = 'GET_STYLES';
export const GET_STYLES_SUCCESS = 'GET_STYLES_SUCCESS';
export const GET_STYLES_FAILURE = 'GET_STYLES_FAILURE';

export interface GetSTYLESAction {
    type: typeof GET_STYLES,
    payload: number
}

export interface GetSTYLESSuccessAction {
    type: typeof GET_STYLES_SUCCESS,
    payload: DanceStyle[];
}

export interface GetSTYLESFailureAction {
    type: typeof GET_STYLES_FAILURE,
    payload: number
}

export type DanceActionTypes =
    GetSTYLESAction |
    GetSTYLESSuccessAction |
    GetSTYLESFailureAction;
    