import "../../models/instructor.model";
import { Instructor } from "../../models/instructor.model";

export interface InstructorState {
    list: Instructor[];
    pending: boolean;
    error: number;
}