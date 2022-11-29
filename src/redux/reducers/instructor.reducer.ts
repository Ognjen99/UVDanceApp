import { InstructorState } from "../states/instructor.state";
import { GET_INSTRUCTORS, GET_INSTRUCTORS_FAILURE, GET_INSTRUCTORS_SUCCESS, InstructorActionTypes } from "../actions/instructor.action";

const initialState: InstructorState = {
    list: [],
    pending: false,
    error: 0,
};

const InstructorReducer = (
    state = initialState,
    action: InstructorActionTypes
): InstructorState => {

    switch (action.type) {
        case GET_INSTRUCTORS:
            return { ...state, pending: true, error: 0, list: [] };

        case GET_INSTRUCTORS_SUCCESS:
            return { ...state, pending: false, list: action.payload };

        case GET_INSTRUCTORS_FAILURE:
            return { ...state, pending: false, error: action.payload };

        default:
            return { ...state }
    }
}

export default InstructorReducer;