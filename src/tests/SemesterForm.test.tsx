import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import SemesterForm from "../components/Year/SemesterForm";
import { ChangeEvent, FormEvent } from "react";


describe(SemesterForm,() => {
    const noFormEvent = jest.fn<void, [FormEvent<HTMLFormElement>]>((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    });
    const noChangeEvent = jest.fn<void, [ChangeEvent<HTMLInputElement>]>((e: ChangeEvent) => {
        e.preventDefault();
    });
    it("Should render a form with the starts, ends, and season input boxes.", async () => {
        render(
            <SemesterForm
                canSubmit={false}
                handleInput={noChangeEvent}
                handleSubmit={noFormEvent}
            />);
        const seasonBox = screen.getByTestId("season-input");
        const startBox = screen.getByTestId("starts-input");
        const endBox = screen.getByTestId("ends-input");

        expect(seasonBox).toBeInTheDocument();
        expect(startBox).toBeInTheDocument();
        expect(endBox).toBeInTheDocument();
    });

    it("Should call handleInput when any input box is changed.", async () => {
        const handleInputSpy = jest.fn((e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
        });

        render(<SemesterForm
            handleInput={handleInputSpy}
            handleSubmit={noFormEvent}
            canSubmit={false}
        />);

        const seasonBox = screen.getByTestId("season-input");
        const startBox = screen.getByTestId("starts-input");
        const endBox = screen.getByTestId("ends-input");

        expect(handleInputSpy).not.toHaveBeenCalled();

        fireEvent.change(seasonBox, { target: { value: "fall" } });
        expect(handleInputSpy).toHaveBeenCalledTimes(1);
        expect(handleInputSpy).toHaveBeenLastCalledWith(expect.objectContaining({target: expect.objectContaining({value: "fall"})}));
        fireEvent.change(startBox, { target: { value: "2021-09-01" } });
        expect(handleInputSpy).toHaveBeenCalledTimes(2);
        expect(handleInputSpy).toHaveBeenLastCalledWith(expect.objectContaining({target: expect.objectContaining({value: "2021-09-01"})}));
        fireEvent.change(endBox, { target: { value: "2021-12-15" } });
        expect(handleInputSpy).toHaveBeenCalledTimes(3);
        expect(handleInputSpy).toHaveBeenLastCalledWith(expect.objectContaining({target: expect.objectContaining({value: "2021-12-15"})}));
    });

    it("Should allow the user to submit the form iff the canSubmit prop is true.", async () => {
        const handleSubmitSpy = jest.fn((e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        });

        const {rerender} = render(<SemesterForm
            canSubmit={false}
            handleInput={noChangeEvent}
            handleSubmit={handleSubmitSpy}
        />);
        screen.getByTestId("submit-button").click();
        expect(handleSubmitSpy).not.toHaveBeenCalled();

        rerender(<SemesterForm
            canSubmit={true}
            handleInput={noChangeEvent}
            handleSubmit={handleSubmitSpy}
        />);
        
        expect(handleSubmitSpy).not.toHaveBeenCalled();
        screen.getByTestId("submit-button").click();
        expect(handleSubmitSpy).toHaveBeenCalled();
    });
});