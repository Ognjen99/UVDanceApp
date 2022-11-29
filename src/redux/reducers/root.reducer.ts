import { Action, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import InstructorReducer from "./instructor.reducer";
import DanceStyleReducer from "./danceStyle.reducer";
import TimelineStyleReducer from "./timeline.reducer";

export const rootReducer = combineReducers({
    instructor: InstructorReducer,
    danceStyle: DanceStyleReducer,
    timelineStyle: TimelineStyleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ReduxDispatch = ThunkDispatch<RootState, any, Action>;
