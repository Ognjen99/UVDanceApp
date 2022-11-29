import { GET_TIMELINE, GET_TIMELINE_SUCCESS, GET_TIMELINE_FAILURE  } from '../../redux/actions/timeline.action';
import { TimelineActionTypes } from '../../redux/actions/timeline.action';
import { TimelineStyleState } from '../states/timeline.state';

const initialState: TimelineStyleState = {
    list: [],
    pending: true,
    error: 0,
};

const TimelineStyleReducer = (
    state = initialState,
    action: TimelineActionTypes
): TimelineStyleState => {

    switch (action.type) {
        case GET_TIMELINE:
            return { ...state, pending: true, error: 0, list: [] };

        case GET_TIMELINE_SUCCESS:
            return { ...state, pending: false, list: action.payload };

        case GET_TIMELINE_FAILURE:
            return { ...state, pending: false, error: action.payload };

        default:
            return { ...state }
    }
}

export default TimelineStyleReducer;