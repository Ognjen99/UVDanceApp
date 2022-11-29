import { Instructor } from "../../models/instructor.model";

export const GET_INSTRUCTORS = 'GET_INSTRUCTORS';
export const GET_INSTRUCTORS_SUCCESS = 'GET_INSTRUCTORS_SUCCESS';
export const GET_INSTRUCTORS_FAILURE = 'GET_INSTRUCTORS_FAILURE';

export interface GetInstructorsAction {
    type: typeof GET_INSTRUCTORS,
    payload: number
}

export interface GetInstructorsSuccessAction {
    type: typeof GET_INSTRUCTORS_SUCCESS,
    payload: Instructor[];
}

export interface GetInstructorsFailureAction {
    type: typeof GET_INSTRUCTORS_FAILURE,
    payload: number
}

export type InstructorActionTypes =
    GetInstructorsAction |
    GetInstructorsSuccessAction |
    GetInstructorsFailureAction;
    