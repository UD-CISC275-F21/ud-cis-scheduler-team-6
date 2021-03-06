import React from "react";
import {
    fireEvent,
    render,
    screen,
    waitFor,
    getByText,
    getByTestId,
    findByTestId,
} from "@testing-library/react";
import Semester, { SemesterProps } from "../components/Semester";
import CourseProps from "../interfaces/Course";
import { v4 as uuid } from "uuid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function WrappedSemester(props: SemesterProps): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <Semester {...props} />
        </DndProvider>
    );
}
const mockRequirements: Array<string> = ["CISC220", "CISC275", "MATH243"];
describe("Semester", () => {
    const doNothing = jest.fn<void, [void]>();
    const doNothingWithString = jest.fn<void, [string]>();
    const doNothingWithCourseProps = jest.fn<void, [CourseProps]>();
    const semesterUuid = uuid();

    it("Displays its name", async () => {
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                name="fall"
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
                requirements={mockRequirements}
            />
        );
        expect(screen.getByText("fall")).toBeInTheDocument();
    });
    it("Displays the total number of credits between all courses in the semester", async () => {
        const { rerender } = render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                name="fall"
                requirements={mockRequirements}
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );
        let creditsCounter = screen.getByTestId("credits-count");
        expect(getByText(creditsCounter, "Credits: 0")).toBeInTheDocument();

        const courses = new Array<CourseProps>();
        courses.push({
            uuid: uuid(),
            id: "CISC123",
            name: "test",
            prereqs: [],
            coreqs: [],
            description: "testing",
            semester: semesterUuid,
            credits: 1,
        });
        courses.push({
            uuid: uuid(),
            id: "CISC124",
            name: "test2",
            prereqs: [],
            coreqs: [],
            description: "testing",
            semester: semesterUuid,
            credits: 4,
        });
        courses.push({
            uuid: uuid(),
            id: "CISC125",
            name: "test3",
            prereqs: [],
            coreqs: [],
            description: "testing",
            semester: semesterUuid,
            credits: 0,
        });

        rerender(
            <WrappedSemester
                uuid={semesterUuid}
                courses={courses}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                name="fall"
                requirements={mockRequirements}
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );

        creditsCounter = screen.getByTestId("credits-count");
        // console.log(creditsCounter);
        expect(getByText(creditsCounter, "Credits: 5")).toBeInTheDocument();
    });
    it("it opens a course modal when you click add course button", async () => {
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                requirements={mockRequirements}
                name="fall"
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );
        screen.getByTestId("add-course-button").click();

        await screen.findByTestId("modal-add-course");
    });
    it("Closes the course modal when the close button is clicked", async () => {
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                name="fall"
                start={new Date("08-31-2021")}
                requirements={mockRequirements}
                end={new Date("12-15-2021")}
            />
        );
        screen.getByTestId("add-course-button").click();

        await screen.findByTestId("modal-add-course");

        screen.getByText("Cancel").click();

        await waitFor(() => {
            expect(
                screen.queryByTestId("modal-add-course")
            ).not.toBeInTheDocument();
        });
    });
    it("Opens an AddCourse modal when the edit course button is clicked", async () => {
        const testCourses = [
            {
                uuid: uuid(),
                semester: semesterUuid,
                id: "CISC111",
                name: "Intro to testing",
                description: "We really need this",
                credits: 3,
                coreqs: [],
                prereqs: [],
            },
        ];
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={testCourses}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                name="fall"
                requirements={mockRequirements}
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );
        screen.getByTestId("course-dropdown-toggle").click(); // open dropdown
        screen.getByTestId("edit-course-button").click();
        await screen.findByTestId("modal-add-course");
    });
    it("Calls updateCourses when you submit a form", async () => {
        const pushSpy = jest.fn<void, [CourseProps]>();
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={pushSpy}
                clearCourses={doNothing}
                name="fall"
                requirements={mockRequirements}
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );
        screen.getByTestId("add-course-button").click();
        await screen.findByTestId("modal-add-course");

        fireEvent.change(screen.getByLabelText("Course ID"), {
            target: { value: "CISC112" },
        });
        fireEvent.change(screen.getByLabelText("Course Name"), {
            target: { value: "Intro to testing" },
        });

        expect(pushSpy).not.toHaveBeenCalled();
        screen.getByTestId("submit-course-button").click();
        expect(pushSpy).toHaveBeenCalled();
    });
    it("Calls the function to clear all courses when the clear button is clicked.", async () => {
        const clearSpy = jest.fn<void, [void]>();
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={[]}
                removeSemester={doNothing}
                removeCourse={doNothingWithString}
                push={doNothingWithCourseProps}
                clearCourses={clearSpy}
                name="fall"
                start={new Date("08-31-2021")}
                requirements={mockRequirements}
                end={new Date("12-15-2021")}
            />
        );

        screen.getByTestId("clear-courses-toggle").click();
        await screen.findByTestId("clear-courses-button");

        expect(clearSpy).not.toHaveBeenCalled();
        screen.getByTestId("clear-courses-button").click();
        expect(clearSpy).toHaveBeenCalled();
    });
    it("Calls the function to remove a course when the user clicks on the label", async () => {
        const removeCourseSpy = jest.fn<void, [string]>();
        const courseUuid1 = uuid();
        const courseUuid2 = uuid();
        const testCourses = [
            {
                uuid: courseUuid1,
                semester: semesterUuid,
                id: "CISC111",
                name: "Intro to testing",
                description: "We really need this",
                credits: 3,
                coreqs: [],
                prereqs: [],
            },
            {
                uuid: courseUuid2,
                semester: semesterUuid,
                id: "CISC121",
                name: "Intro to testing2",
                description: "We really need this",
                credits: 3,
                coreqs: [],
                prereqs: [],
            },
        ];
        render(
            <WrappedSemester
                uuid={semesterUuid}
                courses={testCourses}
                removeSemester={doNothing}
                removeCourse={removeCourseSpy}
                push={doNothingWithCourseProps}
                clearCourses={doNothing}
                requirements={mockRequirements}
                name="fall"
                start={new Date("08-31-2021")}
                end={new Date("12-15-2021")}
            />
        );
        expect(removeCourseSpy).not.toHaveBeenCalled();

        screen;
        let course = screen.getByTestId("Course CISC111: Intro to testing");
        getByTestId(course, "course-dropdown-toggle").click(); // open dropdown
        await findByTestId(course, "remove-course-CISC111");
        screen.getByTestId("remove-course-CISC111").click();
        expect(removeCourseSpy).toHaveBeenCalledTimes(1);
        expect(removeCourseSpy).toHaveBeenLastCalledWith(courseUuid1);
        course = screen.getByTestId("Course CISC121: Intro to testing2");
        getByTestId(course, "course-dropdown-toggle").click(); // open dropdown
        await findByTestId(course, "remove-course-CISC121");
        screen.getByTestId("remove-course-CISC121").click();
        expect(removeCourseSpy).toHaveBeenCalledTimes(2);
        expect(removeCourseSpy).toHaveBeenLastCalledWith(courseUuid2);
    });
});
