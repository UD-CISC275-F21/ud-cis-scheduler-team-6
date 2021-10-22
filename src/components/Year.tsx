import React, {ChangeEvent, FormEvent, useRef, useMemo, useState} from "react";
import {YearProps} from "../interfaces/Year";
import Collapsible from "react-collapsible";
import {Container, Row, Col, Popover, Overlay} from "react-bootstrap";
import SemesterProps from "../interfaces/Semester";

interface FullYearProps extends YearProps{
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleInput: (event: ChangeEvent<HTMLInputElement>) => void,
    formUuid: string | null,
    setFormUuid: (newId: string | null) => void
}

const Year = React.forwardRef((props: FullYearProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const overlayButton = useRef(null);
    const [visible, setVisible] = useState(false);
    const sortedSemesters = useMemo(() => {
        return props.semesters.sort((a: SemesterProps, b: SemesterProps) => {
            return b.start.getTime() - a.start.getTime();
        });
    },[props.semesters]);
    return (
        <Container className="container-sm" ref={ref}>
            <Col>
                <Collapsible onOpening={() => {
                    setVisible(true);
                }} onClose={() =>{
                    setVisible(false);  
                }}trigger={<button data-testid={`Year ${props.index} label`} className="trigger">{`Year ${props.index} >`}</button>} transitionTime={200}>
                    <Row hidden={!visible}>
                        {sortedSemesters.map((semester: SemesterProps) => {
                            return (
                                <Col key={semester.uuid}>{semester.name}</Col>
                            );
                        })}
                        <Col>
                            <button data-testid="trigger" className="trigger" ref={overlayButton} onClick={() => {
                                props.setFormUuid(props.formUuid === props.uuid ? null : props.uuid);
                            }}>+</button>
                            <Overlay target={overlayButton} placement="right-end" show={props.formUuid === props.uuid} onHide={() => {
                                props.setFormUuid(null);
                            }}rootClose={true} transition={false}>
                                <Popover id="popover-basic">
                        
                                </Popover>
                            </Overlay>
                        </Col>
                    </Row>
                </Collapsible>
            </Col>
        </Container>    
    );
});
Year.displayName="Year";

export default Year;