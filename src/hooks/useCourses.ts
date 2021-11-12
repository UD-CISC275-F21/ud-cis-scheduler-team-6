import { useReducer } from "react";
import CourseProps from "../interfaces/Course";

export interface CourseAction {
    type: "ADD COURSE" | "REMOVE COURSE";
    payload: CourseProps;
}

// easy access to the courses

const courseReducer = (
    state: Map<string, CourseProps>,
    action: CourseAction
): Map<string, CourseProps> => {
    switch (action.type) {
    case "ADD COURSE": {
        const newState = new Map<string, CourseProps>(state);
        newState.set(action.payload.id, action.payload);
        return newState;
    }
    case "REMOVE COURSE": {
        const newState = new Map<string, CourseProps>(state);
        newState.delete(action.payload.id);
        return newState;
    }
    }
};

const courseInit = (
    courses?: Map<string, CourseProps>
): Map<string, CourseProps> => {
    if (courses) return courses;
    else return new Map<string, CourseProps>();
};
export interface Courses {
    courseList: Map<string, CourseProps>;
    removeCourse: (courseID: string) => void;

    updateCourses: (action: CourseAction) => void;
}
function useCourses(initialCourses?: Map<string, CourseProps>): Courses {
    {
        const [courses, updateCourses] = useReducer(
            courseReducer,
            initialCourses,
            courseInit
        );

        const onRemoveCourse = (courseID: string) => {
            //get the course to remove

            const courseToRemove = courses.get(courseID);
            if (courseToRemove) {
                const action: CourseAction = {
                    type: "REMOVE COURSE",
                    payload: courseToRemove,
                };
                updateCourses(action);
            } else {
                throw new Error("Course not found");
            }
        };

        return {
            courseList: courses,
            removeCourse: onRemoveCourse,

            updateCourses: updateCourses,
        };
    }
}
export default useCourses;
