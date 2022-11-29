import { TimelineItem } from "./timeline-item.model";

export interface Timeline {
    day: number;
    timetable: TimelineItem[];
}