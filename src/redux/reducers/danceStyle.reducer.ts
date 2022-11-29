import { GET_STYLES, GET_STYLES_SUCCESS, GET_STYLES_FAILURE, } from "../actions/dance.action";
import { DanceStyleState } from "../states/danceStyle.state";
import { DanceActionTypes } from "../actions/dance.action";

const initialState: DanceStyleState = {
    list: [],
    pending: true,
    error: 0,
};

const DanceStyleReducer = (
    state = initialState,
    action: DanceActionTypes
): DanceStyleState => {

    switch (action.type) {
        case GET_STYLES:
            return { ...state, pending: true, error: 0, list: [] };

        case GET_STYLES_SUCCESS:
            return { ...state, pending: true, list: action.payload };

        case GET_STYLES_FAILURE:
            return { ...state, pending: false, error: action.payload };

        default:
            return { ...state }
    }
}

export default DanceStyleReducer;