import { useReducer } from "react";
import CourseData from "../interfaces/Course";
import PlanData from "../interfaces/Plan";
import YearData from "../interfaces/Year";
import { getByUUID } from "./useYears";
import SemesterData from "../interfaces/Semester";
import { v4 as uuid } from "uuid";

type PlanActionType = 
"ADD PLAN" |
"DELETE PLAN" |
"COPY PLAN" |
  "SET YEARS"
| "SET SEMESTERS"
| "SET COURSES";

interface AbstractAction {
    type: PlanActionType;
    uuid: string;
}

export interface AddPlanAction extends AbstractAction {
    type: "ADD PLAN";
    planList: Array<PlanData>;
}

export interface DeletePlanAction extends AbstractAction {
    type: "DELETE PLAN";
}

export interface CopyPlanAction extends AbstractAction {
    type: "COPY PLAN";
    planItem: PlanData;
}

export interface SetYearAction extends AbstractAction {
    type: "SET YEARS";
    yearList: Array<YearData>;
}

export interface SetSemesterAction extends AbstractAction {
    type: "SET SEMESTERS";
    semesterList: Array<SemesterData>;
}

export interface SetCourseAction extends AbstractAction {
    type: "SET COURSES";
    courseList: Array<CourseData>;
}


type PlanAction<T extends PlanActionType> = 
T extends "ADD PLAN" ? AddPlanAction :
T extends "DELETE PLAN" ? DeletePlanAction :
T extends "COPY PLAN" ? CopyPlanAction :
T extends "SET YEARS" ? SetYearAction :
T extends "SET SEMESTERS" ? SetSemesterAction : 
SetCourseAction

function PlanReducer<T extends PlanActionType>(
    prev: Array<PlanData>,
    action: PlanAction<T>
): Array<PlanData> {
    const next = prev.map((x: PlanData) => {
        return {...x};
    });
    switch (action.type) {
    case "ADD PLAN": {
        const addPlan = action as AddPlanAction;
        const NewPlan: PlanData = {
            id: next.length+1,
            uuid: addPlan.uuid,
            years: new Array<YearData>(),
            semesters: new Array<SemesterData>(),
            courses: new Array<CourseData>(),
        }; 
        next.push(NewPlan);
        return next;
    }
    case "DELETE PLAN": {
        const deletePlan = action as DeletePlanAction;
        const output = next.filter((value: PlanData) => {
            return value.uuid !== deletePlan.uuid;
        });
        return output;
    }
    case "COPY PLAN": {
        const copyPlan = action as CopyPlanAction;
        const target = getByUUID(next, copyPlan.uuid);
        const NewCopiedPlan: PlanData = {
            id: next[target].id,
            uuid: uuid(),
            years: next[target].years,
            semesters: next[target].semesters,
            courses: next[target].courses,
        }; 
        next.push(NewCopiedPlan);
        return next;
    }
    case "SET YEARS": {
        const setYears = action as SetYearAction;
        const target = getByUUID(next, setYears.uuid);
        const years = setYears.yearList;
        next[target].years = years;
        return next;
    }
    case "SET SEMESTERS": {
        const setSemesters = action as SetSemesterAction;
        const target = getByUUID(next, setSemesters.uuid);
        const semesters = setSemesters.semesterList;
        next[target].semesters = semesters;
        return next;
    }
    case "SET COURSES": {
        const setCourses = action as SetCourseAction;
        const target = getByUUID(next, setCourses.uuid);
        const courses = setCourses.courseList;
        next[target].courses = courses;
        return next;
    }
    default:
        throw new Error("Unknown action type");
    }
}

export interface Plans {
    planList: Array<PlanData>;
    setYears: (uuid: string, yearList: Array<YearData>) => void;
    setCourses: (uuid: string, courseList: Array<CourseData>) => void;
    addPlan: (uuid: string) => void;
    deletePlan: (uuid: string) => void;
    copyPlan: (uuid: string, planItem: PlanData) => void;
}

function usePlans(initialPlans?: () => Array<PlanData>): Plans {
    const [plans, setPlans] = useReducer(
        PlanReducer,
        undefined,
        initialPlans === undefined
            ? () => {
                return new Array<PlanData>();
            } : initialPlans
    );

    const setYears = (uuid: string, yearList: Array<YearData>) => {
        if ( yearList !== undefined) {
            setPlans({
                type: "SET YEARS",
                uuid: uuid,
                yearList: yearList,
            });
        }
    };

    const setCourses = (uuid: string, courseList: Array<CourseData>) => {
        setPlans({
            type: "SET COURSES",
            uuid: uuid,
            courseList: courseList,
        });
    };

    const addPlan = (uuid: string) => {
        setPlans({
            type: "ADD PLAN",
            uuid: uuid,
            planList: Array<PlanData>(),
        });
    };

    const deletePlan = (uuid: string) => {
        setPlans({
            type: "DELETE PLAN",
            uuid: uuid,
        });
    };

    const copyPlan = (uuid: string, planItem: PlanData) => {
        setPlans({
            type: "COPY PLAN",
            uuid: uuid,
            planItem: planItem,
        });
    };

    return {
        planList: plans,
        setYears,
        setCourses,
        addPlan,
        deletePlan,
        copyPlan,
    };
}
export default usePlans;