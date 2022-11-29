import { Timeline } from './../assets/Data/DummyData';
import { GET_TIMELINE, GET_TIMELINE_SUCCESS, GET_TIMELINE_FAILURE  } from './../redux/actions/timeline.action';
import { GET_INSTRUCTORS, GET_INSTRUCTORS_FAILURE, GET_INSTRUCTORS_SUCCESS } from "../redux/actions/instructor.action";
import { InstructorService } from "../services/instructor.service";
import { RootState } from "../redux/reducers/root.reducer";
import { client } from "../api/client";
import { Instructor } from "../models/instructor.model";
import { HapticFeedbackService } from "../services/haptic.service";
import { DanceService } from "../services/dance.service";
import { TimelineService } from '../services/timeline.service';
import { GET_STYLES, GET_STYLES_FAILURE, GET_STYLES_SUCCESS } from "../redux/actions/dance.action";



let instructorService = new InstructorService(client);
let danceService = new DanceService(client);
let timelineService = new TimelineService(client);

const AppMiddleware = (storeAPI) => (next) => async (action) => {
    const state: RootState = storeAPI.getState();



    if (action.type === GET_INSTRUCTORS) {

             instructorService.getInstructors().then((response: Instructor[]) => {

             HapticFeedbackService.triggerMedium();

             storeAPI.dispatch({ type: GET_INSTRUCTORS_SUCCESS, payload: response });
             
         }).catch((e: Error) => {

             storeAPI.dispatch({ type: GET_INSTRUCTORS_FAILURE, payload: 1 });
            
            
         });
    }

    if (action.type === GET_STYLES) {
        console.log('eureka');
        danceService.getDanceStyle().then((response) => {
            storeAPI.dispatch({ type: GET_STYLES_SUCCESS, payload: response })
        }).catch((err) => {
            storeAPI.dispatch({ type: GET_STYLES_FAILURE, payload: 1 });
        })


        // const url = "https://uvdance.rs/lser/start.php?func=dancestyle";
        // const url = "https://jsonplaceholder.typicode.com/users";
        // console.log(encodeURI(url));

        // axios.get(url).then((response) => {
        //     console.log(response.data);
        // });
    }
     
    if (action.type === GET_TIMELINE) {
        console.log('eureka');
        timelineService.getTimelineStyle().then((response) => {
            storeAPI.dispatch({ type: GET_TIMELINE_SUCCESS, payload: response })
        }).catch((err) => {
            storeAPI.dispatch({ type: GET_TIMELINE_FAILURE, payload: 1 });
        })
    }
    return next(action);
};

export default AppMiddleware;
